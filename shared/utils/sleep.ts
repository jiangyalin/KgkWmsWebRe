// 休眠指定毫秒
const sleep = (ms: number = 0) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, Math.max(0, ms))
  })
}

export default sleep
