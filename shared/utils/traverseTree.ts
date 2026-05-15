/**
 * @description 遍历树
 * @param {<T>[]} tree 树
 * @param {Function} callback 回调函数
 * */
const traverseTree = <T extends { children?: T[] }>(tree: T[], callback: (item: T) => void): void => {
  tree.forEach(item => {
    callback(item)
    if (item.children) traverseTree(item.children ?? [], callback)
  })
}

export default traverseTree
