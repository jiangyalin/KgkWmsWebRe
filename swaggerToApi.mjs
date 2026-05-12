import fs from 'node:fs'
import openapiTS from 'openapi-typescript'
import axios from 'axios'

/** 根据swagger生产api封装 */

/** 配置项 */
// 文件夹
const folder = './src/api/'
// swagger列表
const swaggerList = [
  'http://183.195.216.114:13311/swagger/docs/v1'
]
// 屏蔽组
const maskGroups = ['test']
// 别名映射
const aliasMap = {
  public: 'publicApi'
}
// 是否拆散/api (如果一集节点为/api是否跨过这一节点以后续节点为分类)
const isBreakApi = false

/** 首字母大写 */
const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

/** 中横线转小驼峰 */
const toCamelCase = string => string.replace(/-./g, (match) => match[1].toUpperCase())

/** 生成operationId后缀 */
const operationIdSuffix = ({ path, method }) => {
  return capitalizeFirstLetter(method.toLowerCase()) + path
    .split('/')
    .filter(Boolean)
    .map(item => pathParameterToName(item))
    .map(item => capitalizeFirstLetter(item))
    .join('')
}

/** 转换path参数为名称 */
const pathParameterToName = (path) => {
  const ppr = extractBracesContent(path)
  let _path = path
  ppr.forEach(item => {
    _path = _path.replace(`{${item}}`, 'path' + capitalizeFirstLetter(item))
  })

  return _path
}

/** 转换path参数为变量 */
const pathParameterToVariable = (path) => {
  const ppr = extractBracesContent(path)
  let _path = path
  ppr.forEach(item => {
    _path = _path.replace(`{${item}}`, '${data.' + item + '}')
  })

  return _path
}

const extractBracesContent = (str) => {
  const regex = /{([^{}]+)}/g
  const matches = []
  let match

  while ((match = regex.exec(str)) !== null) {
    matches.push(match[1])
  }

  return matches
}

/** 处理重复operationId，避免openapi-typescript按operationId聚合后类型串联 */
const normalizeOperationIds = (swaggerData) => {
  const operationList = []

  for (const path in swaggerData.paths) {
    for (const method in swaggerData.paths[path]) {
      const node = swaggerData.paths[path][method]
      if (!node.operationId) continue

      operationList.push({
        path,
        method,
        node
      })
    }
  }

  const operationIdMap = {}
  operationList.forEach(item => {
    if (!operationIdMap[item.node.operationId]) operationIdMap[item.node.operationId] = []
    operationIdMap[item.node.operationId].push(item)
  })

  const duplicateOperationIdList = Object.entries(operationIdMap)
    .filter(([, list]) => list.length > 1)

  if (!duplicateOperationIdList.length) return

  const usedOperationIdSet = new Set(
    operationList
      .map(item => item.node.operationId)
      .filter(operationId => operationIdMap[operationId].length === 1)
  )

  duplicateOperationIdList.forEach(([operationId, list]) => {
    list.forEach(item => {
      const baseOperationId = `${operationId}_${operationIdSuffix(item)}`
      let nextOperationId = baseOperationId
      let index = 2

      while (usedOperationIdSet.has(nextOperationId)) {
        nextOperationId = `${baseOperationId}_${index}`
        index++
      }

      item.node.operationId = nextOperationId
      usedOperationIdSet.add(nextOperationId)
      console.warn(`[swaggerToApi] duplicate operationId detected: ${operationId} -> ${nextOperationId}`)
    })
  })
}

/** 创建api层文件 */
const createApiFile = ({ swaggerData, paths, fileName, swaggerFileName }) => {
  // 是否存在Operations
  let isExistOperations = false
  // 是否存在components
  let isExistComponents = false
  // 是否存在paths
  let isExistPaths = false
  // 是否为v1版本
  const isV1 = swaggerData?.info?.version === 'v1'
  // 是否为v3版本
  const isV3 = (swaggerData?.info?.version ?? '').indexOf('3.') === 0
  // 包名
  const componentsName = isV1 ? 'definitions' : 'components'
  const list = []
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i].trim()
    for (const method in swaggerData.paths[path]) {
      const node = swaggerData.paths[path][method]

      const name = toCamelCase(path.split('/').map(item => pathParameterToName(item)).map(item => capitalizeFirstLetter(item)).join(''))

      let reqType = '{}'
      const operationId = node.operationId
      if (!operationId) isExistPaths = true

      // 是否存在导出参数
      let isExistParameter = false
      if (node.parameters) {
        const isQuery = node.parameters.some(item => item.in === 'query')
        const isPath = node.parameters.some(item => item.in === 'path')
        const isBody = node.parameters.some(item => item.in === 'body')
        const isSchema = node.parameters.some(item => Boolean(item?.schema?.$ref) && item.in === 'body')

        if (isQuery || isBody || isPath) isExistParameter = true
        if (operationId && isExistParameter) isExistOperations = true

        if (operationId) {
          const bodyName = node.parameters.find(item => item.in === 'body')?.name ?? ''
          if (isQuery) reqType = `operations['${operationId}']['parameters']['query']`
          if (isBody && isSchema) reqType = `operations['${operationId}']['parameters']['body']['${bodyName}']`
          if (isBody && !isSchema) reqType = `operations['${operationId}']['parameters']['body']`
        }

        if (!operationId) {
          if (isQuery) reqType = `paths['${path}']['${method}']['parameters']['query']`
          if (isBody) reqType = `paths['${path}']['${method}']['parameters']['body']`
          if (isPath) reqType = `paths['${path}']['${method}']['parameters']['path']`
        }
      } else if (node.requestBody) {
        isExistParameter = true

        const contentType = Object.keys(node.requestBody.content)
        if (operationId && contentType.length) reqType = `operations['${operationId}']['requestBody']['content']['${contentType[0]}']`

        if (!operationId && contentType.length) reqType = `paths['${path}']['${method}']['requestBody']['content']['${contentType[0]}']`
      }

      const res200 = node.responses[200]
      let resType = 'any'
      // 是否存在类
      const isClass = Boolean(res200?.content || res200?.schema?.$ref)
      if (isClass) {
        isExistComponents = true
        let ref = ''
        if (res200?.content) ref = res200.content['application/json'].schema.$ref
        if (res200?.schema?.$ref) ref = res200.schema.$ref
        resType = ref.substring(2).split('/')
          .map((item, index) => index === 0 ? item : `['${item}']`).join('')
      }

      const typeName = capitalizeFirstLetter(method) + name
      const urlCode = path.includes('{') ? `\`${pathParameterToVariable(path)}\`` : `'${path}'`

      const apiCode =
        `export type ${typeName}ReqType = ${reqType}
export type ${typeName}ResType = ${resType}
/**
 * @description${node.summary ? ` ${node.summary}` : ''}
 * @param {${typeName}ReqType} data 请求参数
 * @returns {Promise<${typeName}ResType>} ajax
 */
const ${method + name} = (data: ${typeName}ReqType${isExistParameter ? '' : ' = {}'}): Promise<${typeName}ResType> => {
  return ajax({
    url: ${urlCode},
    method: Method.${method === 'get' ? 'GET' : 'POST'}
  }, data)
}`

      list.push({
        name,
        code: apiCode,
        apiName: method + name
      })
    }
  }

  const importName = []
  if (isExistOperations) importName.push('operations')
  if (isExistPaths) importName.push('paths')
  if (isExistComponents) importName.push(componentsName)

  const iptCode = importName.length ? `\nimport type { ${importName.join(', ')} } from './interface/${swaggerFileName}'` : ''

  const codeHead =
    `import ajax from './ajax'
import { Method } from './interface/enum'${iptCode}`

  const codeBody = list.map(item => item.code).join('\n\n')

  const codeFoot =
    `export default {
  ${list.map(item => item.apiName).join(',\n  ')}
}\n`
  const apiFileCode = codeHead + '\n\n' + codeBody + '\n\n' + codeFoot

  fs.writeFileSync(folder + fileName + '.ts', apiFileCode)
}

const globalGroupName = []
const getSwagger = async (url) => {
  const swaggerFileName = url.substring(url.indexOf('/swagger/') + 9, url.lastIndexOf('/'))

  const res = await axios({
    url,
    method: 'get',
    timeout: 1000 * 50
  })

  normalizeOperationIds(res.data)

  const ast = await openapiTS(res.data, {
    formatter (node) {
      if (node.type === 'integer') {
        return node.format === 'int32' || node.format === 'byte' ? ('number' + (node.required ? '' : ' | null')) : 'string'
      }
      if (node.type === 'number') {
        return 'number' + (node.required ? '' : ' | null')
      }
      if (node.type === 'string' && node.format === 'binary') {
        return 'any'
      }
    }
  })

  const data = ast.replace(/"/g, '\'').replace(/{integer}/g, '{number}').replace(/data\?: /g, 'data: ')
  fs.writeFileSync(folder + 'interface/' + swaggerFileName + '.ts', data)

  /** 拆分接口，以路径分组 */
  const apiGroupMap = {}
  for (const path in res.data.paths) {
    // 根据isBreakApi决定如何拆分路径
    let key
    if (isBreakApi && path.split('/')[1] === 'api') key = toCamelCase(path.split('/')[2] || 'api')
    else key = toCamelCase(path.split('/')[1])

    if (maskGroups.includes(key)) continue
    if (!apiGroupMap[key]) apiGroupMap[key] = []
    apiGroupMap[key].push(path)
  }

  for (const groupName in apiGroupMap) {
    globalGroupName.push({
      original: groupName, // 原名
      alias: aliasMap[groupName] || groupName // 别名
    })
    createApiFile({
      swaggerData: res.data,
      paths: apiGroupMap[groupName],
      fileName: groupName,
      swaggerFileName
    })
  }

  // 创建集成文件index.ts
  const indexCodeHead = globalGroupName.map(({ original, alias }) => `import ${alias} from './${original}'\n`).join('')
  const indexCodeTail =
    `export default {
  ${globalGroupName.map(item => item.alias).join(',\n  ')}
}\n`
  fs.writeFileSync(folder + 'index.ts', indexCodeHead + '\n' + indexCodeTail)
}

const main = async () => {
  if (!fs.existsSync(folder + 'interface')) {
    await fs.mkdir(folder + 'interface', { recursive: true }, () => {})
  }
  swaggerList.forEach(swaggerUrl => {
    getSwagger(swaggerUrl)
  })
}

main()
