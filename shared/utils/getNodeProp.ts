interface WithChildren<T> {
  children: T[];
}

/** 获取祖先节点 */
const getNodeProp = <T>(tree: WithChildren<T>, value: string): T[] => {
  const path: any = []

  const walk = (tree: any, value: any) => {
    for (const item of tree) {
      path.push(item)
      if (item.name === value) {
        return true
      } else if (item.children) {
        const result = walk(item.children, value)
        if (!result) {
          path.pop()
        } else {
          return true
        }
      } else {
        path.pop()
      }
    }
    return false
  }

  walk(tree, value)
  return path
}

export default getNodeProp
