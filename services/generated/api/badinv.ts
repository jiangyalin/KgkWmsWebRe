import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetBadinvCodesReqType = operations['BadInvDeal_QueryCodes']['parameters']['query']
export type GetBadinvCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetBadinvCodesReqType} data 请求参数
 * @returns {Promise<GetBadinvCodesResType>} ajax
 */
const getBadinvCodes = (data: GetBadinvCodesReqType): Promise<GetBadinvCodesResType> => {
  return ajax({
    url: '/badinv/codes',
    method: Method.GET
  }, data)
}

export type GetBadinvGenDocCodeReqType = {}
export type GetBadinvGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetBadinvGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetBadinvGenDocCodeResType>} ajax
 */
const getBadinvGenDocCode = (data: GetBadinvGenDocCodeReqType = {}): Promise<GetBadinvGenDocCodeResType> => {
  return ajax({
    url: '/badinv/genDocCode',
    method: Method.GET
  }, data)
}

export type PostBadinvInfoReqType = operations['BadInvDeal_Info']['parameters']['body']['dto']
export type PostBadinvInfoResType = definitions['LJsonResult[BadInventoryDealInfo]']
/**
 * @description 查询不良品处理单详情
 * @param {PostBadinvInfoReqType} data 请求参数
 * @returns {Promise<PostBadinvInfoResType>} ajax
 */
const postBadinvInfo = (data: PostBadinvInfoReqType): Promise<PostBadinvInfoResType> => {
  return ajax({
    url: '/badinv/info',
    method: Method.POST
  }, data)
}

export type PostBadinvSaveReqType = operations['BadInvDeal_SaveData']['parameters']['body']['dto']
export type PostBadinvSaveResType = definitions['LJsonResult[String]']
/**
 * @description 不良品处理单数据保存
 * @param {PostBadinvSaveReqType} data 请求参数
 * @returns {Promise<PostBadinvSaveResType>} ajax
 */
const postBadinvSave = (data: PostBadinvSaveReqType): Promise<PostBadinvSaveResType> => {
  return ajax({
    url: '/badinv/save',
    method: Method.POST
  }, data)
}

export type PostBadinvQccheckReqType = operations['BadInvDeal_QcCheck']['parameters']['body']['dto']
export type PostBadinvQccheckResType = definitions['LJsonResult']
/**
 * @description 不良处理品质判定
 * @param {PostBadinvQccheckReqType} data 请求参数
 * @returns {Promise<PostBadinvQccheckResType>} ajax
 */
const postBadinvQccheck = (data: PostBadinvQccheckReqType): Promise<PostBadinvQccheckResType> => {
  return ajax({
    url: '/badinv/qccheck',
    method: Method.POST
  }, data)
}

export type PostBadinvPrintReqType = operations['BadInvDeal_DocPrint']['parameters']['body']['dto']
export type PostBadinvPrintResType = definitions['LJsonResult[BaseFileListResDto]']
/**
 * @description 打印
 * @param {PostBadinvPrintReqType} data 请求参数
 * @returns {Promise<PostBadinvPrintResType>} ajax
 */
const postBadinvPrint = (data: PostBadinvPrintReqType): Promise<PostBadinvPrintResType> => {
  return ajax({
    url: '/badinv/print',
    method: Method.POST
  }, data)
}

export type PostBadinvPageReqType = operations['BadInvDeal_QueryPage']['parameters']['body']['dto']
export type PostBadinvPageResType = definitions['LLPJsonResult[BadInventoryDealPage]']
/**
 * @description 查询不良品处理单列表
 * @param {PostBadinvPageReqType} data 请求参数
 * @returns {Promise<PostBadinvPageResType>} ajax
 */
const postBadinvPage = (data: PostBadinvPageReqType): Promise<PostBadinvPageResType> => {
  return ajax({
    url: '/badinv/page',
    method: Method.POST
  }, data)
}

export type PostBadinvPageWithDetailReqType = operations['BadInvDeal_QueryPageWithDetail']['parameters']['body']['dto']
export type PostBadinvPageWithDetailResType = definitions['LLPJsonResult[BadInventoryDealFullPage]']
/**
 * @description 查询不良品处理单列表(带明细)
 * @param {PostBadinvPageWithDetailReqType} data 请求参数
 * @returns {Promise<PostBadinvPageWithDetailResType>} ajax
 */
const postBadinvPageWithDetail = (data: PostBadinvPageWithDetailReqType): Promise<PostBadinvPageWithDetailResType> => {
  return ajax({
    url: '/badinv/pageWithDetail',
    method: Method.POST
  }, data)
}

export type PostBadinvExportReqType = operations['BadInvDeal_ExportData']['parameters']['body']['dto']
export type PostBadinvExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 不良品处理单导出
 * @param {PostBadinvExportReqType} data 请求参数
 * @returns {Promise<PostBadinvExportResType>} ajax
 */
const postBadinvExport = (data: PostBadinvExportReqType): Promise<PostBadinvExportResType> => {
  return ajax({
    url: '/badinv/export',
    method: Method.POST
  }, data)
}

export type PostBadinvQueryCheckByBarCodeReqType = operations['BadInvDeal_QueryCheckByBarCode']['parameters']['body']['dto']
export type PostBadinvQueryCheckByBarCodeResType = definitions['LJsonResult[CheckWithInvDto]']
/**
 * @description 条码查询WMS待不良品的来料检验单
 * @param {PostBadinvQueryCheckByBarCodeReqType} data 请求参数
 * @returns {Promise<PostBadinvQueryCheckByBarCodeResType>} ajax
 */
const postBadinvQueryCheckByBarCode = (data: PostBadinvQueryCheckByBarCodeReqType): Promise<PostBadinvQueryCheckByBarCodeResType> => {
  return ajax({
    url: '/badinv/queryCheckByBarCode',
    method: Method.POST
  }, data)
}

export type PostBadinvBulkauditReqType = operations['BadInvDeal_BulkAudit']['parameters']['body']['dto']
export type PostBadinvBulkauditResType = definitions['LJsonResult']
/**
 * @description 不良品处理单批量审核/弃审--（非审批流程）
 * @param {PostBadinvBulkauditReqType} data 请求参数
 * @returns {Promise<PostBadinvBulkauditResType>} ajax
 */
const postBadinvBulkaudit = (data: PostBadinvBulkauditReqType): Promise<PostBadinvBulkauditResType> => {
  return ajax({
    url: '/badinv/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostBadinvDeleteReqType = operations['BadInvDeal_Delete']['parameters']['body']['dto']
export type PostBadinvDeleteResType = definitions['LJsonResult']
/**
 * @description 不良品处理单删除
 * @param {PostBadinvDeleteReqType} data 请求参数
 * @returns {Promise<PostBadinvDeleteResType>} ajax
 */
const postBadinvDelete = (data: PostBadinvDeleteReqType): Promise<PostBadinvDeleteResType> => {
  return ajax({
    url: '/badinv/delete',
    method: Method.POST
  }, data)
}

export type PostBadinvFlowActionReqType = operations['BadInvDeal_FlowAction']['parameters']['body']['dto']
export type PostBadinvFlowActionResType = definitions['LJsonResult[FlowUserActionOutput]']
/**
 * @description 获取流程操作按钮
 * @param {PostBadinvFlowActionReqType} data 请求参数
 * @returns {Promise<PostBadinvFlowActionResType>} ajax
 */
const postBadinvFlowAction = (data: PostBadinvFlowActionReqType): Promise<PostBadinvFlowActionResType> => {
  return ajax({
    url: '/badinv/flowAction',
    method: Method.POST
  }, data)
}

export type PostBadinvFlowApproveReqType = operations['BadInvDeal_FlowApprove']['parameters']['body']['flowHandleModel']
export type PostBadinvFlowApproveResType = definitions['LJsonResult[HandleResDto]']
/**
 * @description 流程审核
 * @param {PostBadinvFlowApproveReqType} data 请求参数
 * @returns {Promise<PostBadinvFlowApproveResType>} ajax
 */
const postBadinvFlowApprove = (data: PostBadinvFlowApproveReqType): Promise<PostBadinvFlowApproveResType> => {
  return ajax({
    url: '/badinv/flowApprove',
    method: Method.POST
  }, data)
}

export default {
  getBadinvCodes,
  getBadinvGenDocCode,
  postBadinvInfo,
  postBadinvSave,
  postBadinvQccheck,
  postBadinvPrint,
  postBadinvPage,
  postBadinvPageWithDetail,
  postBadinvExport,
  postBadinvQueryCheckByBarCode,
  postBadinvBulkaudit,
  postBadinvDelete,
  postBadinvFlowAction,
  postBadinvFlowApprove
}
