import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetTransferGenDocCodeReqType = {}
export type GetTransferGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetTransferGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetTransferGenDocCodeResType>} ajax
 */
const getTransferGenDocCode = (data: GetTransferGenDocCodeReqType = {}): Promise<GetTransferGenDocCodeResType> => {
  return ajax({
    url: '/transfer/genDocCode',
    method: Method.GET
  }, data)
}

export type GetTransferCodesReqType = operations['InvTransfer_QueryCodes']['parameters']['query']
export type GetTransferCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetTransferCodesReqType} data 请求参数
 * @returns {Promise<GetTransferCodesResType>} ajax
 */
const getTransferCodes = (data: GetTransferCodesReqType): Promise<GetTransferCodesResType> => {
  return ajax({
    url: '/transfer/codes',
    method: Method.GET
  }, data)
}

export type PostTransferInfoReqType = operations['InvTransfer_Info']['parameters']['body']['dto']
export type PostTransferInfoResType = definitions['LJsonResult[InvTransferInfoDto]']
/**
 * @description 流转单详情查询
 * @param {PostTransferInfoReqType} data 请求参数
 * @returns {Promise<PostTransferInfoResType>} ajax
 */
const postTransferInfo = (data: PostTransferInfoReqType): Promise<PostTransferInfoResType> => {
  return ajax({
    url: '/transfer/info',
    method: Method.POST
  }, data)
}

export type PostTransferPageReqType = operations['InvTransfer_QueryPage']['parameters']['body']['dto']
export type PostTransferPageResType = definitions['LPJsonResult[List[InvTransferInfoDto]]']
/**
 * @description 流转单分页查询
 * @param {PostTransferPageReqType} data 请求参数
 * @returns {Promise<PostTransferPageResType>} ajax
 */
const postTransferPage = (data: PostTransferPageReqType): Promise<PostTransferPageResType> => {
  return ajax({
    url: '/transfer/page',
    method: Method.POST
  }, data)
}

export type PostTransferPageWithDetailReqType = operations['InvTransfer_QueryPageWithDetail']['parameters']['body']['dto']
export type PostTransferPageWithDetailResType = definitions['LPJsonResult[List[InvTransferFullInfoDto]]']
/**
 * @description 带明细的流转单分页查询
 * @param {PostTransferPageWithDetailReqType} data 请求参数
 * @returns {Promise<PostTransferPageWithDetailResType>} ajax
 */
const postTransferPageWithDetail = (data: PostTransferPageWithDetailReqType): Promise<PostTransferPageWithDetailResType> => {
  return ajax({
    url: '/transfer/pageWithDetail',
    method: Method.POST
  }, data)
}

export type PostTransferExportReqType = operations['InvTransfer_ExportData']['parameters']['body']['dto']
export type PostTransferExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 导出流转单数据
 * @param {PostTransferExportReqType} data 请求参数
 * @returns {Promise<PostTransferExportResType>} ajax
 */
const postTransferExport = (data: PostTransferExportReqType): Promise<PostTransferExportResType> => {
  return ajax({
    url: '/transfer/export',
    method: Method.POST
  }, data)
}

export type PostTransferSaveReqType = operations['InvTransfer_Save']['parameters']['body']['dto']
export type PostTransferSaveResType = definitions['LJsonResult']
/**
 * @description 流转单保存/更新
 * @param {PostTransferSaveReqType} data 请求参数
 * @returns {Promise<PostTransferSaveResType>} ajax
 */
const postTransferSave = (data: PostTransferSaveReqType): Promise<PostTransferSaveResType> => {
  return ajax({
    url: '/transfer/save',
    method: Method.POST
  }, data)
}

export type PostTransferAuditReqType = operations['InvTransfer_Audit']['parameters']['body']['dto']
export type PostTransferAuditResType = definitions['LJsonResult']
/**
 * @description 流转单审核通过
 * @param {PostTransferAuditReqType} data 请求参数
 * @returns {Promise<PostTransferAuditResType>} ajax
 */
const postTransferAudit = (data: PostTransferAuditReqType): Promise<PostTransferAuditResType> => {
  return ajax({
    url: '/transfer/audit',
    method: Method.POST
  }, data)
}

export type PostTransferDeleteReqType = operations['InvTransfer_Delete']['parameters']['body']['dto']
export type PostTransferDeleteResType = definitions['LJsonResult']
/**
 * @description 流转单删除
 * @param {PostTransferDeleteReqType} data 请求参数
 * @returns {Promise<PostTransferDeleteResType>} ajax
 */
const postTransferDelete = (data: PostTransferDeleteReqType): Promise<PostTransferDeleteResType> => {
  return ajax({
    url: '/transfer/delete',
    method: Method.POST
  }, data)
}

export type PostTransferFlowActionReqType = operations['InvTransfer_FlowAction']['parameters']['body']['dto']
export type PostTransferFlowActionResType = definitions['LJsonResult[FlowUserActionOutput]']
/**
 * @description 获取流程操作按钮
 * @param {PostTransferFlowActionReqType} data 请求参数
 * @returns {Promise<PostTransferFlowActionResType>} ajax
 */
const postTransferFlowAction = (data: PostTransferFlowActionReqType): Promise<PostTransferFlowActionResType> => {
  return ajax({
    url: '/transfer/flowAction',
    method: Method.POST
  }, data)
}

export default {
  getTransferGenDocCode,
  getTransferCodes,
  postTransferInfo,
  postTransferPage,
  postTransferPageWithDetail,
  postTransferExport,
  postTransferSave,
  postTransferAudit,
  postTransferDelete,
  postTransferFlowAction
}
