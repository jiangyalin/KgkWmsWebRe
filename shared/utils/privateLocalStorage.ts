const NAMESPACE = 'kgk-wms'

const getItem = (name: string) => localStorage.getItem(NAMESPACE + name)
const setItem = (name: string, data: any) => localStorage.setItem(NAMESPACE + name, data)
const removeItem = (name: string) => localStorage.removeItem(NAMESPACE + name)
const clear = () => localStorage.clear()
const removeFun = (fun: (name: string) => boolean) => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i) ?? ''
    const keyName = key.includes(NAMESPACE) ? key.substring(key.indexOf(NAMESPACE) + NAMESPACE.length) : key
    const isRemove = fun(keyName)
    if (isRemove) {
      removeItem(keyName)
    }
  }
}

/** 带命名空间的localStorage */
const privateLocalStorage = {
  getItem,
  setItem,
  removeItem,
  clear,
  /** 根据传出的函数来决定是否删除，返回true时表示删除 */
  removeFun
}

export default privateLocalStorage
