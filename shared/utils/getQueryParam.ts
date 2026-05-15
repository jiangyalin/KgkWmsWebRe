type Param = string | null

/**
 * 获取查询参数
 * @param param 查询参数
 * @returns 查询参数的字符串和数字表示
 */
const getQueryParam = (param: Param | Param[]): {
  toString: () => string;
  toNumber: () => number;
} => {
  const toString = () => {
    if (param === null || param === undefined) return ''
    if (Array.isArray(param)) return param[0] || ''
    return param
  }
  const toNumber = () => {
    return Number(toString())
  }
  return {
    toString,
    toNumber
  }
}

export default getQueryParam
