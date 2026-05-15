import Cookies from 'js-cookie'

const NAMESPACE = 'kgk-wms'

/** 带命名空间的cookies */
const privateCookies = {
  get: (name: string) => Cookies.get(NAMESPACE + name),
  set: (name: string, data: any) => Cookies.set(NAMESPACE + name, data),
  remove: (name: string) => Cookies.remove(NAMESPACE + name)
}

export default privateCookies
