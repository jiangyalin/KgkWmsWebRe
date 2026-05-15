interface WithChildren<T> {
  children: T[];
}

/** 列表转树 */
const listToTree = <T extends Record<string, any>>(
  arr: T[],
  parentId: keyof T = '0'
): WithChildren<T> => {
  const loop = (parentId: string) => {
    const res: any = []
    for (let i = 0; i < arr.length; i++) {
      const item: any = arr[i]

      if (item.pid !== parentId) {
        continue
      }

      const children = loop(item.id)
      if (children.length) item.children = children
      res.push(item)
    }
    return res
  }
  return loop(parentId as string)
}

export default listToTree
