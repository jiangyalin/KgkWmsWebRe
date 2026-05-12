import ajax from './ajax'
import { Method } from './interface/enum'

export type GetWebsocketConnectReqType = {}
export type GetWebsocketConnectResType = any
/**
 * @description 连接
 * @param {GetWebsocketConnectReqType} data 请求参数
 * @returns {Promise<GetWebsocketConnectResType>} ajax
 */
const getWebsocketConnect = (data: GetWebsocketConnectReqType = {}): Promise<GetWebsocketConnectResType> => {
  return ajax({
    url: '/websocket/connect',
    method: Method.GET
  }, data)
}

export default {
  getWebsocketConnect
}
