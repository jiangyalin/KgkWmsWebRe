/**
 * 支持格式：
 * 1. [编码]-名称 格式，如 "[WH001]-主仓库"
 * 2. 编码-名称 格式，如 "WH001-主仓库"
 * 3. 纯编码格式，如 "WH001"
 *
 * @param codeWithName 包含名称的编码字符串
 * @returns 提取的纯编码值，如果输入无效则返回空字符串
 */
export const extractCode = (codeWithName: string): string => {
  if (!codeWithName || typeof codeWithName !== 'string') return ''

  // 如果包含方括号，提取方括号内的编码
  const match = codeWithName.match(/\[([^\]]+)\]/)
  if (match && match[1]) {
    return match[1].trim()
  }

  // 如果没有方括号，检查是否包含连字符分隔符
  if (codeWithName.includes('-')) {
    const parts = codeWithName.split('-')
    if (parts.length >= 2) {
      // 提取第一部分作为编码（去除可能的方括号）
      const codePart = parts[0].replace(/[[\]]/g, '').trim()
      return codePart
    }
  }

  // 如果都不匹配，返回原值
  return codeWithName.trim()
}

/**
 * 批量提取编码值
 * @param codeWithNameMap 包含名称的编码对象
 * @returns 提取后的纯编码对象
 */
export const extractCodeBatch = <T extends Record<string, string>>(codeWithNameMap: T): Record<string, string> => {
  const result: Record<string, string> = {}

  for (const [key, value] of Object.entries(codeWithNameMap)) {
    result[key] = extractCode(value)
  }

  return result
}

/**
 * 从数组中提取编码值
 * @param codeWithNameArray 包含名称的编码数组
 * @returns 提取后的纯编码数组
 */
export const extractCodeArray = (codeWithNameArray: string[]): string[] => {
  return codeWithNameArray.map(item => extractCode(item))
}

export default extractCode
