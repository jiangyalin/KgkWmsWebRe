interface WithChildren<T> {
  children?: T[];
}

/** 查找特定节点的祖先节点 */
const findTreePath = <T extends WithChildren<T>>(
  tree: T[] = [],
  value: string | number = '',
  keyName: keyof T = 'value' as keyof T
): T[] => {
  const search = (node: T, id: string | number, path: T[]): T[] => {
    const currentPath = [...path, node]

    if (node[keyName] === id) return currentPath

    if (node.children?.length) {
      for (const child of node.children) {
        const result = search(child, id, currentPath)
        if (result.length) return result
      }
    }

    return []
  }

  for (const root of tree) {
    const result = search(root, value, [])
    if (result.length > 0) return result
  }

  return []
}

export default findTreePath
