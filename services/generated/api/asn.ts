import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetAsnNewinitReqType = {}
export type GetAsnNewinitResType = definitions['LJsonResult[ASNHeadDto]']
/**
 * @description 新增初始化
 * @param {GetAsnNewinitReqType} data 请求参数
 * @returns {Promise<GetAsnNewinitResType>} ajax
 */
const getAsnNewinit = (data: GetAsnNewinitReqType = {}): Promise<GetAsnNewinitResType> => {
  return ajax({
    url: '/asn/newinit',
    method: Method.GET
  }, data)
}

export type PostAsnSaveReqType = operations['ASN_SaveOrder']['parameters']['body']['dto']
export type PostAsnSaveResType = definitions['LJsonResult']
/**
 * @description ASN到货单保存
 * @param {PostAsnSaveReqType} data 请求参数
 * @returns {Promise<PostAsnSaveResType>} ajax
 */
const postAsnSave = (data: PostAsnSaveReqType): Promise<PostAsnSaveResType> => {
  return ajax({
    url: '/asn/save',
    method: Method.POST
  }, data)
}

export type PostAsnDelReqType = operations['ASN_DeleteOrder']['parameters']['body']['dto']
export type PostAsnDelResType = definitions['LJsonResult']
/**
 * @description ASN送货单删除
 * @param {PostAsnDelReqType} data 请求参数
 * @returns {Promise<PostAsnDelResType>} ajax
 */
const postAsnDel = (data: PostAsnDelReqType): Promise<PostAsnDelResType> => {
  return ajax({
    url: '/asn/del',
    method: Method.POST
  }, data)
}

export type PostAsnAuditactionReqType = operations['ASN_AuditOrder']['parameters']['body']['dto']
export type PostAsnAuditactionResType = definitions['LJsonResult']
/**
 * @description 审核/弃审
 * @param {PostAsnAuditactionReqType} data 请求参数
 * @returns {Promise<PostAsnAuditactionResType>} ajax
 */
const postAsnAuditaction = (data: PostAsnAuditactionReqType): Promise<PostAsnAuditactionResType> => {
  return ajax({
    url: '/asn/auditaction',
    method: Method.POST
  }, data)
}

export type GetAsnCodesReqType = operations['ASN_QueryCodeSelect']['parameters']['query']
export type GetAsnCodesResType = definitions['LJsonResult[List[String]]']
/**
 * @description 查询ASN送货单号下拉列表
 * @param {GetAsnCodesReqType} data 请求参数
 * @returns {Promise<GetAsnCodesResType>} ajax
 */
const getAsnCodes = (data: GetAsnCodesReqType): Promise<GetAsnCodesResType> => {
  return ajax({
    url: '/asn/codes',
    method: Method.GET
  }, data)
}

export type PostAsnInfoReqType = operations['ASN_QueryInfo']['parameters']['body']['dto']
export type PostAsnInfoResType = definitions['LJsonResult[ASNInfoDto]']
/**
 * @description 查询ASN送货单明细
 * @param {PostAsnInfoReqType} data 请求参数
 * @returns {Promise<PostAsnInfoResType>} ajax
 */
const postAsnInfo = (data: PostAsnInfoReqType): Promise<PostAsnInfoResType> => {
  return ajax({
    url: '/asn/info',
    method: Method.POST
  }, data)
}

export type PostAsnPageReqType = operations['ASN_QueryPage']['parameters']['body']['dto']
export type PostAsnPageResType = definitions['LPJsonResult[List[ASNListDto]]']
/**
 * @description 查询ASN送货单列表
 * @param {PostAsnPageReqType} data 请求参数
 * @returns {Promise<PostAsnPageResType>} ajax
 */
const postAsnPage = (data: PostAsnPageReqType): Promise<PostAsnPageResType> => {
  return ajax({
    url: '/asn/page',
    method: Method.POST
  }, data)
}

export type PostAsnConfirmReqType = operations['ASN_Confirm']['parameters']['body']['dto']
export type PostAsnConfirmResType = definitions['LJsonResult']
/**
 * @description ASN单采购确认
 * @param {PostAsnConfirmReqType} data 请求参数
 * @returns {Promise<PostAsnConfirmResType>} ajax
 */
const postAsnConfirm = (data: PostAsnConfirmReqType): Promise<PostAsnConfirmResType> => {
  return ajax({
    url: '/asn/confirm',
    method: Method.POST
  }, data)
}

export type PostAsnDynamicsaveReqType = operations['ASN_DynamicSave']['parameters']['body']['dto']
export type PostAsnDynamicsaveResType = definitions['LJsonResult']
/**
 * @description ASN单动态发布
 * @param {PostAsnDynamicsaveReqType} data 请求参数
 * @returns {Promise<PostAsnDynamicsaveResType>} ajax
 */
const postAsnDynamicsave = (data: PostAsnDynamicsaveReqType): Promise<PostAsnDynamicsaveResType> => {
  return ajax({
    url: '/asn/dynamicsave',
    method: Method.POST
  }, data)
}

export type GetAsnDynamicListReqType = operations['ASN_QueryASNDynamicDtos']['parameters']['query']
export type GetAsnDynamicListResType = definitions['LJsonResult[List[ASNDynamicDto]]']
/**
 * @description 查询某一单的动态列表
 * @param {GetAsnDynamicListReqType} data 请求参数
 * @returns {Promise<GetAsnDynamicListResType>} ajax
 */
const getAsnDynamicList = (data: GetAsnDynamicListReqType): Promise<GetAsnDynamicListResType> => {
  return ajax({
    url: '/asn/dynamicList',
    method: Method.GET
  }, data)
}

export type PostAsnDeliveryReqType = operations['ASN_ASNDelivery']['parameters']['body']['dto']
export type PostAsnDeliveryResType = definitions['LJsonResult']
/**
 * @description ASN单发货生成U8到货单
 * @param {PostAsnDeliveryReqType} data 请求参数
 * @returns {Promise<PostAsnDeliveryResType>} ajax
 */
const postAsnDelivery = (data: PostAsnDeliveryReqType): Promise<PostAsnDeliveryResType> => {
  return ajax({
    url: '/asn/delivery',
    method: Method.POST
  }, data)
}

export type PostAsnPrintReqType = operations['ASN_ASNPrint']['parameters']['body']['dto']
export type PostAsnPrintResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description ASN单打印
 * @param {PostAsnPrintReqType} data 请求参数
 * @returns {Promise<PostAsnPrintResType>} ajax
 */
const postAsnPrint = (data: PostAsnPrintReqType): Promise<PostAsnPrintResType> => {
  return ajax({
    url: '/asn/print',
    method: Method.POST
  }, data)
}

export type PostAsnBoxprintReqType = operations['ASN_AsnBoxRawCode']['parameters']['body']['dto']
export type PostAsnBoxprintResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description ASN单产品标签生成
 * @param {PostAsnBoxprintReqType} data 请求参数
 * @returns {Promise<PostAsnBoxprintResType>} ajax
 */
const postAsnBoxprint = (data: PostAsnBoxprintReqType): Promise<PostAsnBoxprintResType> => {
  return ajax({
    url: '/asn/boxprint',
    method: Method.POST
  }, data)
}

export default {
  getAsnNewinit,
  postAsnSave,
  postAsnDel,
  postAsnAuditaction,
  getAsnCodes,
  postAsnInfo,
  postAsnPage,
  postAsnConfirm,
  postAsnDynamicsave,
  getAsnDynamicList,
  postAsnDelivery,
  postAsnPrint,
  postAsnBoxprint
}
