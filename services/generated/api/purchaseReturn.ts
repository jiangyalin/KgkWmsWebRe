import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetPurchaseReturnGenDocCodeReqType = {}
export type GetPurchaseReturnGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetPurchaseReturnGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetPurchaseReturnGenDocCodeResType>} ajax
 */
const getPurchaseReturnGenDocCode = (data: GetPurchaseReturnGenDocCodeReqType = {}): Promise<GetPurchaseReturnGenDocCodeResType> => {
  return ajax({
    url: '/purchaseReturn/genDocCode',
    method: Method.GET
  }, data)
}

export type GetPurchaseReturnCodesReqType = operations['PuReturn_QueryCodes']['parameters']['query']
export type GetPurchaseReturnCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetPurchaseReturnCodesReqType} data 请求参数
 * @returns {Promise<GetPurchaseReturnCodesResType>} ajax
 */
const getPurchaseReturnCodes = (data: GetPurchaseReturnCodesReqType): Promise<GetPurchaseReturnCodesResType> => {
  return ajax({
    url: '/purchaseReturn/codes',
    method: Method.GET
  }, data)
}

export type PostPurchaseReturnQueryPuArrivalPageReqType = operations['PuReturn_QueryPuArrivalPage']['parameters']['body']['dto']
export type PostPurchaseReturnQueryPuArrivalPageResType = definitions['LLPJsonResult[U8PuArrivalInfoDto]']
/**
 * @description 分页查询U8采购到货单<br />
用于参照生成采购退货单
 * @param {PostPurchaseReturnQueryPuArrivalPageReqType} data 请求参数
 * @returns {Promise<PostPurchaseReturnQueryPuArrivalPageResType>} ajax
 */
const postPurchaseReturnQueryPuArrivalPage = (data: PostPurchaseReturnQueryPuArrivalPageReqType): Promise<PostPurchaseReturnQueryPuArrivalPageResType> => {
  return ajax({
    url: '/purchaseReturn/queryPuArrivalPage',
    method: Method.POST
  }, data)
}

export type PostPurchaseReturnInfoReqType = operations['PuReturn_Info']['parameters']['body']['dto']
export type PostPurchaseReturnInfoResType = definitions['LJsonResult[PuReturnInfoDto]']
/**
 * @description 退货单详情查询
 * @param {PostPurchaseReturnInfoReqType} data 请求参数
 * @returns {Promise<PostPurchaseReturnInfoResType>} ajax
 */
const postPurchaseReturnInfo = (data: PostPurchaseReturnInfoReqType): Promise<PostPurchaseReturnInfoResType> => {
  return ajax({
    url: '/purchaseReturn/info',
    method: Method.POST
  }, data)
}

export type PostPurchaseReturnQueryPageWithDetailReqType = operations['PuReturn_QueryPageWithDetail']['parameters']['body']['dto']
export type PostPurchaseReturnQueryPageWithDetailResType = definitions['LPJsonResult[List[PuReturnFullInfoDto]]']
/**
 * @description 退货单带明细分页查询
 * @param {PostPurchaseReturnQueryPageWithDetailReqType} data 请求参数
 * @returns {Promise<PostPurchaseReturnQueryPageWithDetailResType>} ajax
 */
const postPurchaseReturnQueryPageWithDetail = (data: PostPurchaseReturnQueryPageWithDetailReqType): Promise<PostPurchaseReturnQueryPageWithDetailResType> => {
  return ajax({
    url: '/purchaseReturn/queryPageWithDetail',
    method: Method.POST
  }, data)
}

export type PostPurchaseReturnExportReqType = operations['PuReturn_ExportData']['parameters']['body']['dto']
export type PostPurchaseReturnExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 退货单导出
 * @param {PostPurchaseReturnExportReqType} data 请求参数
 * @returns {Promise<PostPurchaseReturnExportResType>} ajax
 */
const postPurchaseReturnExport = (data: PostPurchaseReturnExportReqType): Promise<PostPurchaseReturnExportResType> => {
  return ajax({
    url: '/purchaseReturn/export',
    method: Method.POST
  }, data)
}

export type PostPurchaseReturnSaveReqType = operations['PuReturn_Save']['parameters']['body']['dto']
export type PostPurchaseReturnSaveResType = definitions['LJsonResult']
/**
 * @description 退货单编辑保存
 * @param {PostPurchaseReturnSaveReqType} data 请求参数
 * @returns {Promise<PostPurchaseReturnSaveResType>} ajax
 */
const postPurchaseReturnSave = (data: PostPurchaseReturnSaveReqType): Promise<PostPurchaseReturnSaveResType> => {
  return ajax({
    url: '/purchaseReturn/save',
    method: Method.POST
  }, data)
}

export type PostPurchaseReturnDeleteReqType = operations['PuReturn_Delete']['parameters']['body']['dto']
export type PostPurchaseReturnDeleteResType = definitions['LJsonResult']
/**
 * @description 退货单删除
 * @param {PostPurchaseReturnDeleteReqType} data 请求参数
 * @returns {Promise<PostPurchaseReturnDeleteResType>} ajax
 */
const postPurchaseReturnDelete = (data: PostPurchaseReturnDeleteReqType): Promise<PostPurchaseReturnDeleteResType> => {
  return ajax({
    url: '/purchaseReturn/delete',
    method: Method.POST
  }, data)
}

export type PostPurchaseReturnAuditReqType = operations['PuReturn_Audit']['parameters']['body']['dto']
export type PostPurchaseReturnAuditResType = definitions['LJsonResult']
/**
 * @description 退货单审核/弃审
 * @param {PostPurchaseReturnAuditReqType} data 请求参数
 * @returns {Promise<PostPurchaseReturnAuditResType>} ajax
 */
const postPurchaseReturnAudit = (data: PostPurchaseReturnAuditReqType): Promise<PostPurchaseReturnAuditResType> => {
  return ajax({
    url: '/purchaseReturn/audit',
    method: Method.POST
  }, data)
}

export type PostPurchaseReturnBulkauditReqType = operations['PuReturn_BulkAudit']['parameters']['body']['dto']
export type PostPurchaseReturnBulkauditResType = definitions['LJsonResult']
/**
 * @description 退货单批量审核/弃审
 * @param {PostPurchaseReturnBulkauditReqType} data 请求参数
 * @returns {Promise<PostPurchaseReturnBulkauditResType>} ajax
 */
const postPurchaseReturnBulkaudit = (data: PostPurchaseReturnBulkauditReqType): Promise<PostPurchaseReturnBulkauditResType> => {
  return ajax({
    url: '/purchaseReturn/bulkaudit',
    method: Method.POST
  }, data)
}

export default {
  getPurchaseReturnGenDocCode,
  getPurchaseReturnCodes,
  postPurchaseReturnQueryPuArrivalPage,
  postPurchaseReturnInfo,
  postPurchaseReturnQueryPageWithDetail,
  postPurchaseReturnExport,
  postPurchaseReturnSave,
  postPurchaseReturnDelete,
  postPurchaseReturnAudit,
  postPurchaseReturnBulkaudit
}
