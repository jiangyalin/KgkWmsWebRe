import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostPordVenCodeInfoReqType = operations['PoRd_QueryVenBarCodeInfo']['parameters']['query']
export type PostPordVenCodeInfoResType = definitions['LJsonResult[VenBarCodeInfoDto]']
/**
 * @description 查询供应商条码信息
 * @param {PostPordVenCodeInfoReqType} data 请求参数
 * @returns {Promise<PostPordVenCodeInfoResType>} ajax
 */
const postPordVenCodeInfo = (data: PostPordVenCodeInfoReqType): Promise<PostPordVenCodeInfoResType> => {
  return ajax({
    url: '/pord/venCodeInfo',
    method: Method.POST
  }, data)
}

export type PostPordOrderArrRdSaveReqType = operations['PoRd_OrderArrRdSave']['parameters']['body']['dto']
export type PostPordOrderArrRdSaveResType = definitions['LJsonResult']
/**
 * @description 订单到货入库
 * @param {PostPordOrderArrRdSaveReqType} data 请求参数
 * @returns {Promise<PostPordOrderArrRdSaveResType>} ajax
 */
const postPordOrderArrRdSave = (data: PostPordOrderArrRdSaveReqType): Promise<PostPordOrderArrRdSaveResType> => {
  return ajax({
    url: '/pord/orderArrRdSave',
    method: Method.POST
  }, data)
}

export type PostPordArrinfoReqType = operations['PoRd_QueryArrInfo']['parameters']['body']['dto']
export type PostPordArrinfoResType = definitions['LJsonResult[ArrInfoDto]']
/**
 * @description 扫描到货单码查询单据信息
 * @param {PostPordArrinfoReqType} data 请求参数
 * @returns {Promise<PostPordArrinfoResType>} ajax
 */
const postPordArrinfo = (data: PostPordArrinfoReqType): Promise<PostPordArrinfoResType> => {
  return ajax({
    url: '/pord/arrinfo',
    method: Method.POST
  }, data)
}

export type PostPordSaveReqType = operations['PoRd_PoRd']['parameters']['body']['dto']
export type PostPordSaveResType = definitions['LJsonResult']
/**
 * @description 生成入库单
 * @param {PostPordSaveReqType} data 请求参数
 * @returns {Promise<PostPordSaveResType>} ajax
 */
const postPordSave = (data: PostPordSaveReqType): Promise<PostPordSaveResType> => {
  return ajax({
    url: '/pord/save',
    method: Method.POST
  }, data)
}

export default {
  postPordVenCodeInfo,
  postPordOrderArrRdSave,
  postPordArrinfo,
  postPordSave
}
