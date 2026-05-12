import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostMobillPageReqType = operations['MoRoutingBill_QueryPage']['parameters']['body']['dto']
export type PostMobillPageResType = definitions['LPJsonResult[List[MoRoutingBillListDto]]']
/**
 * @description 查询报工单分页数据
 * @param {PostMobillPageReqType} data 请求参数
 * @returns {Promise<PostMobillPageResType>} ajax
 */
const postMobillPage = (data: PostMobillPageReqType): Promise<PostMobillPageResType> => {
  return ajax({
    url: '/mobill/page',
    method: Method.POST
  }, data)
}

export type PostMobillDeleteReqType = operations['MoRoutingBill_MoRoutingBillDel']['parameters']['body']['dto']
export type PostMobillDeleteResType = definitions['LJsonResult']
/**
 * @description 报工删除
 * @param {PostMobillDeleteReqType} data 请求参数
 * @returns {Promise<PostMobillDeleteResType>} ajax
 */
const postMobillDelete = (data: PostMobillDeleteReqType): Promise<PostMobillDeleteResType> => {
  return ajax({
    url: '/mobill/delete',
    method: Method.POST
  }, data)
}

export type PostMobillInfoReqType = operations['MoRoutingBill_QueryInfo']['parameters']['body']['dto']
export type PostMobillInfoResType = definitions['LJsonResult[MoRoutingInfoDto]']
/**
 * @description 报工明细
 * @param {PostMobillInfoReqType} data 请求参数
 * @returns {Promise<PostMobillInfoResType>} ajax
 */
const postMobillInfo = (data: PostMobillInfoReqType): Promise<PostMobillInfoResType> => {
  return ajax({
    url: '/mobill/info',
    method: Method.POST
  }, data)
}

export type GetMobillCodesReqType = operations['MoRoutingBill_QueryCodes']['parameters']['query']
export type GetMobillCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetMobillCodesReqType} data 请求参数
 * @returns {Promise<GetMobillCodesResType>} ajax
 */
const getMobillCodes = (data: GetMobillCodesReqType): Promise<GetMobillCodesResType> => {
  return ajax({
    url: '/mobill/codes',
    method: Method.GET
  }, data)
}

export type PostMobillExportReqType = operations['MoRoutingBill_ExportData']['parameters']['body']['dto']
export type PostMobillExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 报工记录导出
 * @param {PostMobillExportReqType} data 请求参数
 * @returns {Promise<PostMobillExportResType>} ajax
 */
const postMobillExport = (data: PostMobillExportReqType): Promise<PostMobillExportResType> => {
  return ajax({
    url: '/mobill/export',
    method: Method.POST
  }, data)
}

export default {
  postMobillPage,
  postMobillDelete,
  postMobillInfo,
  getMobillCodes,
  postMobillExport
}
