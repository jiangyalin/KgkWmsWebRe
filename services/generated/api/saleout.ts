import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetSaleoutSaleDisInfoReqType = operations['UfSaleOut_QuerySaleOrderDisInfo']['parameters']['query']
export type GetSaleoutSaleDisInfoResType = definitions['LJsonResult[SaleOrderDisInfoDto]']
/**
 * @description 查询销售订单可发货明细信息
 * @param {GetSaleoutSaleDisInfoReqType} data 请求参数
 * @returns {Promise<GetSaleoutSaleDisInfoResType>} ajax
 */
const getSaleoutSaleDisInfo = (data: GetSaleoutSaleDisInfoReqType): Promise<GetSaleoutSaleDisInfoResType> => {
  return ajax({
    url: '/saleout/saleDisInfo',
    method: Method.GET
  }, data)
}

export type PostSaleoutSaleDisOutReqType = operations['UfSaleOut_SaleOrderDisOut']['parameters']['body']['dto']
export type PostSaleoutSaleDisOutResType = definitions['LJsonResult']
/**
 * @description 根据销售订单生成已审核的发货单和销售出库单
 * @param {PostSaleoutSaleDisOutReqType} data 请求参数
 * @returns {Promise<PostSaleoutSaleDisOutResType>} ajax
 */
const postSaleoutSaleDisOut = (data: PostSaleoutSaleDisOutReqType): Promise<PostSaleoutSaleDisOutResType> => {
  return ajax({
    url: '/saleout/saleDisOut',
    method: Method.POST
  }, data)
}

export type PostSaleoutDisinfoReqType = operations['UfSaleOut_QueryDisInfo']['parameters']['body']['dto']
export type PostSaleoutDisinfoResType = definitions['LJsonResult[DispatchHeadDto]']
/**
 * @description 扫码查询发货单明细信息
 * @param {PostSaleoutDisinfoReqType} data 请求参数
 * @returns {Promise<PostSaleoutDisinfoResType>} ajax
 */
const postSaleoutDisinfo = (data: PostSaleoutDisinfoReqType): Promise<PostSaleoutDisinfoResType> => {
  return ajax({
    url: '/saleout/disinfo',
    method: Method.POST
  }, data)
}

export type GetSaleoutCodeinfoReqType = operations['UfSaleOut_QueryBarCodeInfo']['parameters']['query']
export type GetSaleoutCodeinfoResType = definitions['LJsonResult[BarCodeInfoDto]']
/**
 * @description 查询条码信息
 * @param {GetSaleoutCodeinfoReqType} data 请求参数
 * @returns {Promise<GetSaleoutCodeinfoResType>} ajax
 */
const getSaleoutCodeinfo = (data: GetSaleoutCodeinfoReqType): Promise<GetSaleoutCodeinfoResType> => {
  return ajax({
    url: '/saleout/codeinfo',
    method: Method.GET
  }, data)
}

export type PostSaleoutSaveReqType = operations['UfSaleOut_SaleOut']['parameters']['body']['dto']
export type PostSaleoutSaveResType = definitions['LJsonResult']
/**
 * @description 销售出库生单
 * @param {PostSaleoutSaveReqType} data 请求参数
 * @returns {Promise<PostSaleoutSaveResType>} ajax
 */
const postSaleoutSave = (data: PostSaleoutSaveReqType): Promise<PostSaleoutSaveResType> => {
  return ajax({
    url: '/saleout/save',
    method: Method.POST
  }, data)
}

export type GetSaleoutNochecklistReqType = operations['UfSaleOut_QueryNoChecOutkList']['parameters']['query']
export type GetSaleoutNochecklistResType = definitions['LJsonResult[List[NoCheckSaleOutListDto]]']
/**
 * @description 查询待审核的销售出库单列表
 * @param {GetSaleoutNochecklistReqType} data 请求参数
 * @returns {Promise<GetSaleoutNochecklistResType>} ajax
 */
const getSaleoutNochecklist = (data: GetSaleoutNochecklistReqType): Promise<GetSaleoutNochecklistResType> => {
  return ajax({
    url: '/saleout/nochecklist',
    method: Method.GET
  }, data)
}

export type GetSaleoutInfoReqType = operations['UfSaleOut_QuerySaleOutInfo']['parameters']['query']
export type GetSaleoutInfoResType = definitions['LJsonResult[List[SaleOutInfoDto]]']
/**
 * @description 查询销售出库单明细列表
 * @param {GetSaleoutInfoReqType} data 请求参数
 * @returns {Promise<GetSaleoutInfoResType>} ajax
 */
const getSaleoutInfo = (data: GetSaleoutInfoReqType): Promise<GetSaleoutInfoResType> => {
  return ajax({
    url: '/saleout/info',
    method: Method.GET
  }, data)
}

export default {
  getSaleoutSaleDisInfo,
  postSaleoutSaleDisOut,
  postSaleoutDisinfo,
  getSaleoutCodeinfo,
  postSaleoutSave,
  getSaleoutNochecklist,
  getSaleoutInfo
}
