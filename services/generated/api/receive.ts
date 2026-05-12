import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetReceiveGenDocCodeReqType = {}
export type GetReceiveGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetReceiveGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetReceiveGenDocCodeResType>} ajax
 */
const getReceiveGenDocCode = (data: GetReceiveGenDocCodeReqType = {}): Promise<GetReceiveGenDocCodeResType> => {
  return ajax({
    url: '/receive/genDocCode',
    method: Method.GET
  }, data)
}

export type GetReceiveCodesReqType = operations['Receive_QueryCodes']['parameters']['query']
export type GetReceiveCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetReceiveCodesReqType} data 请求参数
 * @returns {Promise<GetReceiveCodesResType>} ajax
 */
const getReceiveCodes = (data: GetReceiveCodesReqType): Promise<GetReceiveCodesResType> => {
  return ajax({
    url: '/receive/codes',
    method: Method.GET
  }, data)
}

export type PostReceiveSaveReqType = operations['Receive_Save']['parameters']['body']['dto']
export type PostReceiveSaveResType = definitions['LJsonResult']
/**
 * @description 入库单编辑保存
 * @param {PostReceiveSaveReqType} data 请求参数
 * @returns {Promise<PostReceiveSaveResType>} ajax
 */
const postReceiveSave = (data: PostReceiveSaveReqType): Promise<PostReceiveSaveResType> => {
  return ajax({
    url: '/receive/save',
    method: Method.POST
  }, data)
}

export type PostReceiveInfoReqType = operations['Receive_Info']['parameters']['body']['dto']
export type PostReceiveInfoResType = definitions['LJsonResult[ReceiveInfoDto]']
/**
 * @description 入库单详情查询
 * @param {PostReceiveInfoReqType} data 请求参数
 * @returns {Promise<PostReceiveInfoResType>} ajax
 */
const postReceiveInfo = (data: PostReceiveInfoReqType): Promise<PostReceiveInfoResType> => {
  return ajax({
    url: '/receive/info',
    method: Method.POST
  }, data)
}

export type PostReceivePageReqType = operations['Receive_Page']['parameters']['body']['dto']
export type PostReceivePageResType = definitions['LLPJsonResult[ReceivePageInfoDto]']
/**
 * @description 入库单分页查询
 * @param {PostReceivePageReqType} data 请求参数
 * @returns {Promise<PostReceivePageResType>} ajax
 */
const postReceivePage = (data: PostReceivePageReqType): Promise<PostReceivePageResType> => {
  return ajax({
    url: '/receive/page',
    method: Method.POST
  }, data)
}

export type PostReceivePageWithDetailReqType = operations['Receive_PageWithDetail']['parameters']['body']['dto']
export type PostReceivePageWithDetailResType = definitions['LLPJsonResult[ReceiveFullPageInfoDto]']
/**
 * @description 带明细入库单分页查询
 * @param {PostReceivePageWithDetailReqType} data 请求参数
 * @returns {Promise<PostReceivePageWithDetailResType>} ajax
 */
const postReceivePageWithDetail = (data: PostReceivePageWithDetailReqType): Promise<PostReceivePageWithDetailResType> => {
  return ajax({
    url: '/receive/pageWithDetail',
    method: Method.POST
  }, data)
}

export type PostReceiveExportReqType = operations['Receive_ExportData']['parameters']['body']['dto']
export type PostReceiveExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 入库单导出
 * @param {PostReceiveExportReqType} data 请求参数
 * @returns {Promise<PostReceiveExportResType>} ajax
 */
const postReceiveExport = (data: PostReceiveExportReqType): Promise<PostReceiveExportResType> => {
  return ajax({
    url: '/receive/export',
    method: Method.POST
  }, data)
}

export type PostReceiveQueryCheckByBarCodeReqType = operations['Receive_QueryCheckByBarCode']['parameters']['body']['dto']
export type PostReceiveQueryCheckByBarCodeResType = definitions['LJsonResult[ArrivalForRecWithInvDto]']
/**
 * @description 条码查询待良品入库的来料检验或者到货单
 * @param {PostReceiveQueryCheckByBarCodeReqType} data 请求参数
 * @returns {Promise<PostReceiveQueryCheckByBarCodeResType>} ajax
 */
const postReceiveQueryCheckByBarCode = (data: PostReceiveQueryCheckByBarCodeReqType): Promise<PostReceiveQueryCheckByBarCodeResType> => {
  return ajax({
    url: '/receive/queryCheckByBarCode',
    method: Method.POST
  }, data)
}

export type PostReceiveQueryBadDealByBarCodeReqType = operations['Receive_QueryBadDealByBarCode']['parameters']['body']['dto']
export type PostReceiveQueryBadDealByBarCodeResType = definitions['LJsonResult[BadDealForReceiveDto]']
/**
 * @description 条码查询待不良品入库的不良品处理单
 * @param {PostReceiveQueryBadDealByBarCodeReqType} data 请求参数
 * @returns {Promise<PostReceiveQueryBadDealByBarCodeResType>} ajax
 */
const postReceiveQueryBadDealByBarCode = (data: PostReceiveQueryBadDealByBarCodeReqType): Promise<PostReceiveQueryBadDealByBarCodeResType> => {
  return ajax({
    url: '/receive/queryBadDealByBarCode',
    method: Method.POST
  }, data)
}

export type PostReceiveQuerybarcodeforgoodReqType = operations['Receive_QueryBarCodeForGood']['parameters']['body']['dto']
export type PostReceiveQuerybarcodeforgoodResType = definitions['LJsonResult[RcvBarCodeInfoDto]']
/**
 * @description 良品入库条码查询
 * @param {PostReceiveQuerybarcodeforgoodReqType} data 请求参数
 * @returns {Promise<PostReceiveQuerybarcodeforgoodResType>} ajax
 */
const postReceiveQuerybarcodeforgood = (data: PostReceiveQuerybarcodeforgoodReqType): Promise<PostReceiveQuerybarcodeforgoodResType> => {
  return ajax({
    url: '/receive/querybarcodeforgood',
    method: Method.POST
  }, data)
}

export type PostReceiveQuerybybarcodechassisReqType = operations['Receive_QueryArrByBarCodeChassis']['parameters']['body']['dto']
export type PostReceiveQuerybybarcodechassisResType = definitions['LLJsonResult[ReceiveFullPageInfoDto]']
/**
 * @description 根据机箱条码查询
 * @param {PostReceiveQuerybybarcodechassisReqType} data 请求参数
 * @returns {Promise<PostReceiveQuerybybarcodechassisResType>} ajax
 */
const postReceiveQuerybybarcodechassis = (data: PostReceiveQuerybybarcodechassisReqType): Promise<PostReceiveQuerybybarcodechassisResType> => {
  return ajax({
    url: '/receive/querybybarcodechassis',
    method: Method.POST
  }, data)
}

export type PostReceiveAuditReqType = operations['Receive_Audit']['parameters']['body']['dto']
export type PostReceiveAuditResType = definitions['LJsonResult']
/**
 * @description 入库单审核/弃审
 * @param {PostReceiveAuditReqType} data 请求参数
 * @returns {Promise<PostReceiveAuditResType>} ajax
 */
const postReceiveAudit = (data: PostReceiveAuditReqType): Promise<PostReceiveAuditResType> => {
  return ajax({
    url: '/receive/audit',
    method: Method.POST
  }, data)
}

export type PostReceiveBulkauditReqType = operations['Receive_BulkAudit']['parameters']['body']['dto']
export type PostReceiveBulkauditResType = definitions['LJsonResult']
/**
 * @description 入库单批量审核/弃审
 * @param {PostReceiveBulkauditReqType} data 请求参数
 * @returns {Promise<PostReceiveBulkauditResType>} ajax
 */
const postReceiveBulkaudit = (data: PostReceiveBulkauditReqType): Promise<PostReceiveBulkauditResType> => {
  return ajax({
    url: '/receive/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostReceiveDeleteReqType = operations['Receive_Delete']['parameters']['body']['dto']
export type PostReceiveDeleteResType = definitions['LJsonResult']
/**
 * @description 入库单删除
 * @param {PostReceiveDeleteReqType} data 请求参数
 * @returns {Promise<PostReceiveDeleteResType>} ajax
 */
const postReceiveDelete = (data: PostReceiveDeleteReqType): Promise<PostReceiveDeleteResType> => {
  return ajax({
    url: '/receive/delete',
    method: Method.POST
  }, data)
}

export type PostReceiveQueryForPointSnReqType = operations['Receive_QueryForPointSn']['parameters']['body']['dto']
export type PostReceiveQueryForPointSnResType = definitions['LJsonResult[HeadForPointSnVo]']
/**
 * @description 查询入库单序列号
 * @param {PostReceiveQueryForPointSnReqType} data 请求参数
 * @returns {Promise<PostReceiveQueryForPointSnResType>} ajax
 */
const postReceiveQueryForPointSn = (data: PostReceiveQueryForPointSnReqType): Promise<PostReceiveQueryForPointSnResType> => {
  return ajax({
    url: '/receive/queryForPointSn',
    method: Method.POST
  }, data)
}

export type PostReceiveSaveSnForReceiveReqType = operations['Receive_SaveSnForReceive']['parameters']['body']['dto']
export type PostReceiveSaveSnForReceiveResType = definitions['LJsonResult']
/**
 * @description 保存入库单序列号
 * @param {PostReceiveSaveSnForReceiveReqType} data 请求参数
 * @returns {Promise<PostReceiveSaveSnForReceiveResType>} ajax
 */
const postReceiveSaveSnForReceive = (data: PostReceiveSaveSnForReceiveReqType): Promise<PostReceiveSaveSnForReceiveResType> => {
  return ajax({
    url: '/receive/saveSnForReceive',
    method: Method.POST
  }, data)
}

export type PostReceiveQuerySnForRcvLineReqType = operations['Receive_QuerySnForRcvLine']['parameters']['body']['dto']
export type PostReceiveQuerySnForRcvLineResType = definitions['LJsonResult[StSnForPointSnVo]']
/**
 * @description 查询入库单行序列号
 * @param {PostReceiveQuerySnForRcvLineReqType} data 请求参数
 * @returns {Promise<PostReceiveQuerySnForRcvLineResType>} ajax
 */
const postReceiveQuerySnForRcvLine = (data: PostReceiveQuerySnForRcvLineReqType): Promise<PostReceiveQuerySnForRcvLineResType> => {
  return ajax({
    url: '/receive/querySnForRcvLine',
    method: Method.POST
  }, data)
}

export default {
  getReceiveGenDocCode,
  getReceiveCodes,
  postReceiveSave,
  postReceiveInfo,
  postReceivePage,
  postReceivePageWithDetail,
  postReceiveExport,
  postReceiveQueryCheckByBarCode,
  postReceiveQueryBadDealByBarCode,
  postReceiveQuerybarcodeforgood,
  postReceiveQuerybybarcodechassis,
  postReceiveAudit,
  postReceiveBulkaudit,
  postReceiveDelete,
  postReceiveQueryForPointSn,
  postReceiveSaveSnForReceive,
  postReceiveQuerySnForRcvLine
}
