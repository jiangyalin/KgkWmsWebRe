import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetOtheroutGenDocCodeReqType = {}
export type GetOtheroutGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetOtheroutGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetOtheroutGenDocCodeResType>} ajax
 */
const getOtheroutGenDocCode = (data: GetOtheroutGenDocCodeReqType = {}): Promise<GetOtheroutGenDocCodeResType> => {
  return ajax({
    url: '/otherout/genDocCode',
    method: Method.GET
  }, data)
}

export type GetOtheroutCodesReqType = operations['OtherOut_QueryCodes']['parameters']['query']
export type GetOtheroutCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetOtheroutCodesReqType} data 请求参数
 * @returns {Promise<GetOtheroutCodesResType>} ajax
 */
const getOtheroutCodes = (data: GetOtheroutCodesReqType): Promise<GetOtheroutCodesResType> => {
  return ajax({
    url: '/otherout/codes',
    method: Method.GET
  }, data)
}

export type PostOtheroutInfoReqType = operations['OtherOut_Info']['parameters']['body']['dto']
export type PostOtheroutInfoResType = definitions['LJsonResult[OtherOutInfoDto]']
/**
 * @description 查询单据信息
 * @param {PostOtheroutInfoReqType} data 请求参数
 * @returns {Promise<PostOtheroutInfoResType>} ajax
 */
const postOtheroutInfo = (data: PostOtheroutInfoReqType): Promise<PostOtheroutInfoResType> => {
  return ajax({
    url: '/otherout/info',
    method: Method.POST
  }, data)
}

export type PostOtheroutPagewithdetailReqType = operations['OtherOut_PageWithDetail']['parameters']['body']['dto']
export type PostOtheroutPagewithdetailResType = definitions['LLPJsonResult[OtherOutPageFullDto]']
/**
 * @description 带明细分页查询
 * @param {PostOtheroutPagewithdetailReqType} data 请求参数
 * @returns {Promise<PostOtheroutPagewithdetailResType>} ajax
 */
const postOtheroutPagewithdetail = (data: PostOtheroutPagewithdetailReqType): Promise<PostOtheroutPagewithdetailResType> => {
  return ajax({
    url: '/otherout/pagewithdetail',
    method: Method.POST
  }, data)
}

export type PostOtheroutExportReqType = operations['OtherOut_ExportData']['parameters']['body']['dto']
export type PostOtheroutExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 其他出库单导出
 * @param {PostOtheroutExportReqType} data 请求参数
 * @returns {Promise<PostOtheroutExportResType>} ajax
 */
const postOtheroutExport = (data: PostOtheroutExportReqType): Promise<PostOtheroutExportResType> => {
  return ajax({
    url: '/otherout/export',
    method: Method.POST
  }, data)
}

export type PostOtheroutSaveReqType = operations['OtherOut_Save']['parameters']['body']['dto']
export type PostOtheroutSaveResType = definitions['LJsonResult']
/**
 * @description 保存/更新
 * @param {PostOtheroutSaveReqType} data 请求参数
 * @returns {Promise<PostOtheroutSaveResType>} ajax
 */
const postOtheroutSave = (data: PostOtheroutSaveReqType): Promise<PostOtheroutSaveResType> => {
  return ajax({
    url: '/otherout/save',
    method: Method.POST
  }, data)
}

export type PostOtheroutDeleteReqType = operations['OtherOut_BulkDelete']['parameters']['body']['dto']
export type PostOtheroutDeleteResType = definitions['LJsonResult']
/**
 * @description 其他出库单删除
 * @param {PostOtheroutDeleteReqType} data 请求参数
 * @returns {Promise<PostOtheroutDeleteResType>} ajax
 */
const postOtheroutDelete = (data: PostOtheroutDeleteReqType): Promise<PostOtheroutDeleteResType> => {
  return ajax({
    url: '/otherout/delete',
    method: Method.POST
  }, data)
}

export type PostOtheroutSavesnReqType = operations['OtherOut_SaveSn']['parameters']['body']['dto']
export type PostOtheroutSavesnResType = definitions['LJsonResult']
/**
 * @description 保存其他出库单序列号
 * @param {PostOtheroutSavesnReqType} data 请求参数
 * @returns {Promise<PostOtheroutSavesnResType>} ajax
 */
const postOtheroutSavesn = (data: PostOtheroutSavesnReqType): Promise<PostOtheroutSavesnResType> => {
  return ajax({
    url: '/otherout/savesn',
    method: Method.POST
  }, data)
}

export type PostOtheroutCheckpointReqType = operations['OtherOut_CheckAndPoint']['parameters']['body']['dto']
export type PostOtheroutCheckpointResType = definitions['LJsonResult']
/**
 * @description PDA绑码审核
 * @param {PostOtheroutCheckpointReqType} data 请求参数
 * @returns {Promise<PostOtheroutCheckpointResType>} ajax
 */
const postOtheroutCheckpoint = (data: PostOtheroutCheckpointReqType): Promise<PostOtheroutCheckpointResType> => {
  return ajax({
    url: '/otherout/checkpoint',
    method: Method.POST
  }, data)
}

export type PostOtheroutAuditReqType = operations['OtherOut_Audit']['parameters']['body']['dto']
export type PostOtheroutAuditResType = definitions['LJsonResult']
/**
 * @description 其他出库单审核/弃审
 * @param {PostOtheroutAuditReqType} data 请求参数
 * @returns {Promise<PostOtheroutAuditResType>} ajax
 */
const postOtheroutAudit = (data: PostOtheroutAuditReqType): Promise<PostOtheroutAuditResType> => {
  return ajax({
    url: '/otherout/audit',
    method: Method.POST
  }, data)
}

export type PostOtheroutBulkauditReqType = operations['OtherOut_BulkAudit']['parameters']['body']['dto']
export type PostOtheroutBulkauditResType = definitions['LJsonResult']
/**
 * @description 其他出库单批量审核/弃审
 * @param {PostOtheroutBulkauditReqType} data 请求参数
 * @returns {Promise<PostOtheroutBulkauditResType>} ajax
 */
const postOtheroutBulkaudit = (data: PostOtheroutBulkauditReqType): Promise<PostOtheroutBulkauditResType> => {
  return ajax({
    url: '/otherout/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostOtheroutReplenishcodelistReqType = operations['OtherOut_ReplenishCodeList']['parameters']['body']['dto']
export type PostOtheroutReplenishcodelistResType = definitions['LJsonResult']
/**
 * @description 补充瓶码信息
 * @param {PostOtheroutReplenishcodelistReqType} data 请求参数
 * @returns {Promise<PostOtheroutReplenishcodelistResType>} ajax
 */
const postOtheroutReplenishcodelist = (data: PostOtheroutReplenishcodelistReqType): Promise<PostOtheroutReplenishcodelistResType> => {
  return ajax({
    url: '/otherout/replenishcodelist',
    method: Method.POST
  }, data)
}

export type PostOtheroutModifydocnoReqType = operations['OtherOut_ModifyDocNo']['parameters']['body']['dto']
export type PostOtheroutModifydocnoResType = definitions['LJsonResult']
/**
 * @description
 * @param {PostOtheroutModifydocnoReqType} data 请求参数
 * @returns {Promise<PostOtheroutModifydocnoResType>} ajax
 */
const postOtheroutModifydocno = (data: PostOtheroutModifydocnoReqType): Promise<PostOtheroutModifydocnoResType> => {
  return ajax({
    url: '/otherout/modifydocno',
    method: Method.POST
  }, data)
}

export default {
  getOtheroutGenDocCode,
  getOtheroutCodes,
  postOtheroutInfo,
  postOtheroutPagewithdetail,
  postOtheroutExport,
  postOtheroutSave,
  postOtheroutDelete,
  postOtheroutSavesn,
  postOtheroutCheckpoint,
  postOtheroutAudit,
  postOtheroutBulkaudit,
  postOtheroutReplenishcodelist,
  postOtheroutModifydocno
}
