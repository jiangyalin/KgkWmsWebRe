import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetBorrowoutCodesReqType = operations['BorrowOut_QueryCodes']['parameters']['query']
export type GetBorrowoutCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表\
 * @param {GetBorrowoutCodesReqType} data 请求参数
 * @returns {Promise<GetBorrowoutCodesResType>} ajax
 */
const getBorrowoutCodes = (data: GetBorrowoutCodesReqType): Promise<GetBorrowoutCodesResType> => {
  return ajax({
    url: '/borrowout/codes',
    method: Method.GET
  }, data)
}

export type GetBorrowoutGenDocCodeReqType = {}
export type GetBorrowoutGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetBorrowoutGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetBorrowoutGenDocCodeResType>} ajax
 */
const getBorrowoutGenDocCode = (data: GetBorrowoutGenDocCodeReqType = {}): Promise<GetBorrowoutGenDocCodeResType> => {
  return ajax({
    url: '/borrowout/genDocCode',
    method: Method.GET
  }, data)
}

export type PostBorrowoutInfoReqType = operations['BorrowOut_Info']['parameters']['body']['dto']
export type PostBorrowoutInfoResType = definitions['LJsonResult[BorrowOutInfoDto]']
/**
 * @description 借出借用单详情查询
 * @param {PostBorrowoutInfoReqType} data 请求参数
 * @returns {Promise<PostBorrowoutInfoResType>} ajax
 */
const postBorrowoutInfo = (data: PostBorrowoutInfoReqType): Promise<PostBorrowoutInfoResType> => {
  return ajax({
    url: '/borrowout/info',
    method: Method.POST
  }, data)
}

export type PostBorrowoutPageWithDetailReqType = operations['BorrowOut_QueryPageWithDetail']['parameters']['body']['dto']
export type PostBorrowoutPageWithDetailResType = definitions['LLPJsonResult[BorrowOutFullPageInfoDto]']
/**
 * @description 借出借用单带明细分页查询
 * @param {PostBorrowoutPageWithDetailReqType} data 请求参数
 * @returns {Promise<PostBorrowoutPageWithDetailResType>} ajax
 */
const postBorrowoutPageWithDetail = (data: PostBorrowoutPageWithDetailReqType): Promise<PostBorrowoutPageWithDetailResType> => {
  return ajax({
    url: '/borrowout/pageWithDetail',
    method: Method.POST
  }, data)
}

export type PostBorrowoutExportReqType = operations['BorrowOut_ExportData']['parameters']['body']['dto']
export type PostBorrowoutExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 借出借用单导出
 * @param {PostBorrowoutExportReqType} data 请求参数
 * @returns {Promise<PostBorrowoutExportResType>} ajax
 */
const postBorrowoutExport = (data: PostBorrowoutExportReqType): Promise<PostBorrowoutExportResType> => {
  return ajax({
    url: '/borrowout/export',
    method: Method.POST
  }, data)
}

export type PostBorrowoutSaveReqType = operations['BorrowOut_SaveData']['parameters']['body']['dto']
export type PostBorrowoutSaveResType = definitions['LJsonResult[String]']
/**
 * @description 借出借用单数据保存
 * @param {PostBorrowoutSaveReqType} data 请求参数
 * @returns {Promise<PostBorrowoutSaveResType>} ajax
 */
const postBorrowoutSave = (data: PostBorrowoutSaveReqType): Promise<PostBorrowoutSaveResType> => {
  return ajax({
    url: '/borrowout/save',
    method: Method.POST
  }, data)
}

export type PostBorrowoutBulkauditReqType = operations['BorrowOut_BulkAudit']['parameters']['body']['dto']
export type PostBorrowoutBulkauditResType = definitions['LJsonResult']
/**
 * @description 借出归还单批量审核/弃审
 * @param {PostBorrowoutBulkauditReqType} data 请求参数
 * @returns {Promise<PostBorrowoutBulkauditResType>} ajax
 */
const postBorrowoutBulkaudit = (data: PostBorrowoutBulkauditReqType): Promise<PostBorrowoutBulkauditResType> => {
  return ajax({
    url: '/borrowout/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostBorrowoutRecalcReqType = {}
export type PostBorrowoutRecalcResType = definitions['LJsonResult']
/**
 * @description 重算借出借用单累计出入库数量
 * @param {PostBorrowoutRecalcReqType} data 请求参数
 * @returns {Promise<PostBorrowoutRecalcResType>} ajax
 */
const postBorrowoutRecalc = (data: PostBorrowoutRecalcReqType = {}): Promise<PostBorrowoutRecalcResType> => {
  return ajax({
    url: '/borrowout/recalc',
    method: Method.POST
  }, data)
}

export type PostBorrowoutDeleteReqType = operations['BorrowOut_BulkDelete']['parameters']['body']['dto']
export type PostBorrowoutDeleteResType = definitions['LJsonResult']
/**
 * @description 批量删除借出借用单
 * @param {PostBorrowoutDeleteReqType} data 请求参数
 * @returns {Promise<PostBorrowoutDeleteResType>} ajax
 */
const postBorrowoutDelete = (data: PostBorrowoutDeleteReqType): Promise<PostBorrowoutDeleteResType> => {
  return ajax({
    url: '/borrowout/delete',
    method: Method.POST
  }, data)
}

export default {
  getBorrowoutCodes,
  getBorrowoutGenDocCode,
  postBorrowoutInfo,
  postBorrowoutPageWithDetail,
  postBorrowoutExport,
  postBorrowoutSave,
  postBorrowoutBulkaudit,
  postBorrowoutRecalc,
  postBorrowoutDelete
}
