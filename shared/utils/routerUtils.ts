import privateCookies from '@shared/utils/privateCookies'

// 重载标识
const HEAVY_LOAD = 'HEAVY_LOAD'

// 路由找不到
const routerUtils = () => {
  const ver: {
    version: string;
    build: string;
  } = (window as any).ver as any || {}
  const heavyLoad = privateCookies.get(HEAVY_LOAD)
  if (heavyLoad === ver.version) return
  privateCookies.set(HEAVY_LOAD, ver.version)
  window.location.reload()
}
export default routerUtils
