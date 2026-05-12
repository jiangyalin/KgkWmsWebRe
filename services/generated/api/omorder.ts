import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetOmorderNewinitReqType = {}
export type GetOmorderNewinitResType = definitions['LJsonResult[OMOrderHeadDto]']
/**
 * @description 新增初始化
 * @param {GetOmorderNewinitReqType} data 请求参数
 * @returns {Promise<GetOmorderNewinitResType>} ajax
 */
const getOmorderNewinit = (data: GetOmorderNewinitReqType = {}): Promise<GetOmorderNewinitResType> => {
  return ajax({
    url: '/omorder/newinit',
    method: Method.GET
  }, data)
}

export type PostOmorderSaveReqType = operations['OMOrder_SaveOrder']['parameters']['body']['dto']
export type PostOmorderSaveResType = definitions['LJsonResult']
/**
 * @description 委外订单保存
 * @param {PostOmorderSaveReqType} data 请求参数
 * @returns {Promise<PostOmorderSaveResType>} ajax
 */
const postOmorderSave = (data: PostOmorderSaveReqType): Promise<PostOmorderSaveResType> => {
  return ajax({
    url: '/omorder/save',
    method: Method.POST
  }, data)
}

export type PostOmorderDelReqType = operations['OMOrder_DeleteOrder']['parameters']['body']['dto']
export type PostOmorderDelResType = definitions['LJsonResult']
/**
 * @description 委外订单删除
 * @param {PostOmorderDelReqType} data 请求参数
 * @returns {Promise<PostOmorderDelResType>} ajax
 */
const postOmorderDel = (data: PostOmorderDelReqType): Promise<PostOmorderDelResType> => {
  return ajax({
    url: '/omorder/del',
    method: Method.POST
  }, data)
}

export type PostOmorderAuditactionReqType = operations['OMOrder_AuditOrder']['parameters']['body']['dto']
export type PostOmorderAuditactionResType = definitions['LJsonResult']
/**
 * @description 审核/弃审
 * @param {PostOmorderAuditactionReqType} data 请求参数
 * @returns {Promise<PostOmorderAuditactionResType>} ajax
 */
const postOmorderAuditaction = (data: PostOmorderAuditactionReqType): Promise<PostOmorderAuditactionResType> => {
  return ajax({
    url: '/omorder/auditaction',
    method: Method.POST
  }, data)
}

export type GetOmorderCodesReqType = operations['OMOrder_QueryCodeSelect']['parameters']['query']
export type GetOmorderCodesResType = definitions['LJsonResult[List[String]]']
/**
 * @description 查询委外订单号下拉列表
 * @param {GetOmorderCodesReqType} data 请求参数
 * @returns {Promise<GetOmorderCodesResType>} ajax
 */
const getOmorderCodes = (data: GetOmorderCodesReqType): Promise<GetOmorderCodesResType> => {
  return ajax({
    url: '/omorder/codes',
    method: Method.GET
  }, data)
}

export type PostOmorderInfoReqType = operations['OMOrder_QueryInfo']['parameters']['body']['dto']
export type PostOmorderInfoResType = definitions['LJsonResult[OMOrderInfoDto]']
/**
 * @description 查询委外订单明细
 * @param {PostOmorderInfoReqType} data 请求参数
 * @returns {Promise<PostOmorderInfoResType>} ajax
 */
const postOmorderInfo = (data: PostOmorderInfoReqType): Promise<PostOmorderInfoResType> => {
  return ajax({
    url: '/omorder/info',
    method: Method.POST
  }, data)
}

export type PostOmorderPageReqType = operations['OMOrder_QueryPage']['parameters']['body']['dto']
export type PostOmorderPageResType = definitions['LPJsonResult[List[OMOrderListDto]]']
/**
 * @description 查询委外订单列表
 * @param {PostOmorderPageReqType} data 请求参数
 * @returns {Promise<PostOmorderPageResType>} ajax
 */
const postOmorderPage = (data: PostOmorderPageReqType): Promise<PostOmorderPageResType> => {
  return ajax({
    url: '/omorder/page',
    method: Method.POST
  }, data)
}

export default {
  getOmorderNewinit,
  postOmorderSave,
  postOmorderDel,
  postOmorderAuditaction,
  getOmorderCodes,
  postOmorderInfo,
  postOmorderPage
}
