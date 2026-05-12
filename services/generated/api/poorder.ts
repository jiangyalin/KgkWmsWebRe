import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetPoorderNewinitReqType = {}
export type GetPoorderNewinitResType = definitions['LJsonResult[PoOrderHeadDto]']
/**
 * @description 新增初始化
 * @param {GetPoorderNewinitReqType} data 请求参数
 * @returns {Promise<GetPoorderNewinitResType>} ajax
 */
const getPoorderNewinit = (data: GetPoorderNewinitReqType = {}): Promise<GetPoorderNewinitResType> => {
  return ajax({
    url: '/poorder/newinit',
    method: Method.GET
  }, data)
}

export type PostPoorderSaveReqType = operations['PoOrder_SaveOrder']['parameters']['body']['dto']
export type PostPoorderSaveResType = definitions['LJsonResult']
/**
 * @description 采购订单保存
 * @param {PostPoorderSaveReqType} data 请求参数
 * @returns {Promise<PostPoorderSaveResType>} ajax
 */
const postPoorderSave = (data: PostPoorderSaveReqType): Promise<PostPoorderSaveResType> => {
  return ajax({
    url: '/poorder/save',
    method: Method.POST
  }, data)
}

export type PostPoorderDelReqType = operations['PoOrder_DeleteOrder']['parameters']['body']['dto']
export type PostPoorderDelResType = definitions['LJsonResult']
/**
 * @description 采购订单删除
 * @param {PostPoorderDelReqType} data 请求参数
 * @returns {Promise<PostPoorderDelResType>} ajax
 */
const postPoorderDel = (data: PostPoorderDelReqType): Promise<PostPoorderDelResType> => {
  return ajax({
    url: '/poorder/del',
    method: Method.POST
  }, data)
}

export type PostPoorderAuditactionReqType = operations['PoOrder_AuditOrder']['parameters']['body']['dto']
export type PostPoorderAuditactionResType = definitions['LJsonResult']
/**
 * @description 审核/弃审
 * @param {PostPoorderAuditactionReqType} data 请求参数
 * @returns {Promise<PostPoorderAuditactionResType>} ajax
 */
const postPoorderAuditaction = (data: PostPoorderAuditactionReqType): Promise<PostPoorderAuditactionResType> => {
  return ajax({
    url: '/poorder/auditaction',
    method: Method.POST
  }, data)
}

export type GetPoorderCodesReqType = operations['PoOrder_QueryCodeSelect']['parameters']['query']
export type GetPoorderCodesResType = definitions['LJsonResult[List[String]]']
/**
 * @description 查询采购订单号下拉列表
 * @param {GetPoorderCodesReqType} data 请求参数
 * @returns {Promise<GetPoorderCodesResType>} ajax
 */
const getPoorderCodes = (data: GetPoorderCodesReqType): Promise<GetPoorderCodesResType> => {
  return ajax({
    url: '/poorder/codes',
    method: Method.GET
  }, data)
}

export type PostPoorderInfoReqType = operations['PoOrder_QueryInfo']['parameters']['body']['dto']
export type PostPoorderInfoResType = definitions['LJsonResult[PoOrderInfoDto]']
/**
 * @description 查询采购订单明细
 * @param {PostPoorderInfoReqType} data 请求参数
 * @returns {Promise<PostPoorderInfoResType>} ajax
 */
const postPoorderInfo = (data: PostPoorderInfoReqType): Promise<PostPoorderInfoResType> => {
  return ajax({
    url: '/poorder/info',
    method: Method.POST
  }, data)
}

export type PostPoorderPageReqType = operations['PoOrder_QueryPage']['parameters']['body']['dto']
export type PostPoorderPageResType = definitions['LPJsonResult[List[PoOrderListDto]]']
/**
 * @description 查询采购订单列表
 * @param {PostPoorderPageReqType} data 请求参数
 * @returns {Promise<PostPoorderPageResType>} ajax
 */
const postPoorderPage = (data: PostPoorderPageReqType): Promise<PostPoorderPageResType> => {
  return ajax({
    url: '/poorder/page',
    method: Method.POST
  }, data)
}

export default {
  getPoorderNewinit,
  postPoorderSave,
  postPoorderDel,
  postPoorderAuditaction,
  getPoorderCodes,
  postPoorderInfo,
  postPoorderPage
}
