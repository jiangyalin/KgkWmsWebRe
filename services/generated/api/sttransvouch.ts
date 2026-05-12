import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSttransvouchScrapreflistReqType = operations['STTransVouch_QueryScrapRefList']['parameters']['body']['dto']
export type PostSttransvouchScrapreflistResType = definitions['LLPJsonResult[STTransVouchScrapRefListDto]']
/**
 * @description 不良转移参照列表查询
 * @param {PostSttransvouchScrapreflistReqType} data 请求参数
 * @returns {Promise<PostSttransvouchScrapreflistResType>} ajax
 */
const postSttransvouchScrapreflist = (data: PostSttransvouchScrapreflistReqType): Promise<PostSttransvouchScrapreflistResType> => {
  return ajax({
    url: '/sttransvouch/scrapreflist',
    method: Method.POST
  }, data)
}

export type GetSttransvouchNewinitReqType = operations['STTransVouch_NewInit']['parameters']['query']
export type GetSttransvouchNewinitResType = definitions['LJsonResult[STTransVouchSaveReqDto]']
/**
 * @description 新增初始化
 * @param {GetSttransvouchNewinitReqType} data 请求参数
 * @returns {Promise<GetSttransvouchNewinitResType>} ajax
 */
const getSttransvouchNewinit = (data: GetSttransvouchNewinitReqType): Promise<GetSttransvouchNewinitResType> => {
  return ajax({
    url: '/sttransvouch/newinit',
    method: Method.GET
  }, data)
}

export type GetSttransvouchCodesReqType = operations['STTransVouch_QueryCodes']['parameters']['query']
export type GetSttransvouchCodesResType = definitions['LLJsonResult[BaseSelectDto]']
/**
 * @description 查询单号下拉列表
 * @param {GetSttransvouchCodesReqType} data 请求参数
 * @returns {Promise<GetSttransvouchCodesResType>} ajax
 */
const getSttransvouchCodes = (data: GetSttransvouchCodesReqType): Promise<GetSttransvouchCodesResType> => {
  return ajax({
    url: '/sttransvouch/codes',
    method: Method.GET
  }, data)
}

export type PostSttransvouchSaveReqType = operations['STTransVouch_SaveOrder']['parameters']['body']['dto']
export type PostSttransvouchSaveResType = definitions['LJsonResult']
/**
 * @description 单据保存
 * @param {PostSttransvouchSaveReqType} data 请求参数
 * @returns {Promise<PostSttransvouchSaveResType>} ajax
 */
const postSttransvouchSave = (data: PostSttransvouchSaveReqType): Promise<PostSttransvouchSaveResType> => {
  return ajax({
    url: '/sttransvouch/save',
    method: Method.POST
  }, data)
}

export type PostSttransvouchQccheckReqType = operations['STTransVouch_QcCheck']['parameters']['body']['dto']
export type PostSttransvouchQccheckResType = definitions['LJsonResult']
/**
 * @description 不良转移品质判定
 * @param {PostSttransvouchQccheckReqType} data 请求参数
 * @returns {Promise<PostSttransvouchQccheckResType>} ajax
 */
const postSttransvouchQccheck = (data: PostSttransvouchQccheckReqType): Promise<PostSttransvouchQccheckResType> => {
  return ajax({
    url: '/sttransvouch/qccheck',
    method: Method.POST
  }, data)
}

export type PostSttransvouchAuditactionReqType = operations['STTransVouch_AuditOrder']['parameters']['body']['dto']
export type PostSttransvouchAuditactionResType = definitions['LJsonResult']
/**
 * @description 审核/弃审
 * @param {PostSttransvouchAuditactionReqType} data 请求参数
 * @returns {Promise<PostSttransvouchAuditactionResType>} ajax
 */
const postSttransvouchAuditaction = (data: PostSttransvouchAuditactionReqType): Promise<PostSttransvouchAuditactionResType> => {
  return ajax({
    url: '/sttransvouch/auditaction',
    method: Method.POST
  }, data)
}

export type PostSttransvouchBulkauditReqType = operations['STTransVouch_BulkAudit']['parameters']['body']['dto']
export type PostSttransvouchBulkauditResType = definitions['LJsonResult']
/**
 * @description 批量审核/弃审
 * @param {PostSttransvouchBulkauditReqType} data 请求参数
 * @returns {Promise<PostSttransvouchBulkauditResType>} ajax
 */
const postSttransvouchBulkaudit = (data: PostSttransvouchBulkauditReqType): Promise<PostSttransvouchBulkauditResType> => {
  return ajax({
    url: '/sttransvouch/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostSttransvouchDelReqType = operations['STTransVouch_DeleteOrder']['parameters']['body']['dto']
export type PostSttransvouchDelResType = definitions['LJsonResult']
/**
 * @description 单据删除
 * @param {PostSttransvouchDelReqType} data 请求参数
 * @returns {Promise<PostSttransvouchDelResType>} ajax
 */
const postSttransvouchDel = (data: PostSttransvouchDelReqType): Promise<PostSttransvouchDelResType> => {
  return ajax({
    url: '/sttransvouch/del',
    method: Method.POST
  }, data)
}

export type PostSttransvouchInfoReqType = operations['STTransVouch_QueryInfo']['parameters']['body']['dto']
export type PostSttransvouchInfoResType = definitions['LJsonResult[STTransVouchInfoDto]']
/**
 * @description 单据明细查询
 * @param {PostSttransvouchInfoReqType} data 请求参数
 * @returns {Promise<PostSttransvouchInfoResType>} ajax
 */
const postSttransvouchInfo = (data: PostSttransvouchInfoReqType): Promise<PostSttransvouchInfoResType> => {
  return ajax({
    url: '/sttransvouch/info',
    method: Method.POST
  }, data)
}

export type PostSttransvouchPageReqType = operations['STTransVouch_QueryPage']['parameters']['body']['dto']
export type PostSttransvouchPageResType = definitions['LLPJsonResult[STTransVouchListDto]']
/**
 * @description 查询分页数据
 * @param {PostSttransvouchPageReqType} data 请求参数
 * @returns {Promise<PostSttransvouchPageResType>} ajax
 */
const postSttransvouchPage = (data: PostSttransvouchPageReqType): Promise<PostSttransvouchPageResType> => {
  return ajax({
    url: '/sttransvouch/page',
    method: Method.POST
  }, data)
}

export type PostSttransvouchPrintReqType = operations['STTransVouch_DocPrint']['parameters']['body']['dto']
export type PostSttransvouchPrintResType = definitions['LJsonResult[BaseFileListResDto]']
/**
 * @description 打印
 * @param {PostSttransvouchPrintReqType} data 请求参数
 * @returns {Promise<PostSttransvouchPrintResType>} ajax
 */
const postSttransvouchPrint = (data: PostSttransvouchPrintReqType): Promise<PostSttransvouchPrintResType> => {
  return ajax({
    url: '/sttransvouch/print',
    method: Method.POST
  }, data)
}

export type PostSttransvouchExportReqType = operations['STTransVouch_ExportData']['parameters']['body']['dto']
export type PostSttransvouchExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostSttransvouchExportReqType} data 请求参数
 * @returns {Promise<PostSttransvouchExportResType>} ajax
 */
const postSttransvouchExport = (data: PostSttransvouchExportReqType): Promise<PostSttransvouchExportResType> => {
  return ajax({
    url: '/sttransvouch/export',
    method: Method.POST
  }, data)
}

export type GetSttransvouchOmAllocatesReqType = operations['STTransVouch_QueryOmAllocateByOm']['parameters']['query']
export type GetSttransvouchOmAllocatesResType = definitions['LLJsonResult[OmAllocateInfoDto]']
/**
 * @description 根据委外订单号或者条码查询可调拨的子件信息列表
 * @param {GetSttransvouchOmAllocatesReqType} data 请求参数
 * @returns {Promise<GetSttransvouchOmAllocatesResType>} ajax
 */
const getSttransvouchOmAllocates = (data: GetSttransvouchOmAllocatesReqType): Promise<GetSttransvouchOmAllocatesResType> => {
  return ajax({
    url: '/sttransvouch/omAllocates',
    method: Method.GET
  }, data)
}

export type PostSttransvouchOmAllocatesPageReqType = operations['STTransVouch_QueryOmAllocateByOmPage']['parameters']['body']['filter']
export type PostSttransvouchOmAllocatesPageResType = definitions['LLPJsonResult[OmAllocateInfoDto]']
/**
 * @description 获取委外订单可调拨的子件信息分页数据
 * @param {PostSttransvouchOmAllocatesPageReqType} data 请求参数
 * @returns {Promise<PostSttransvouchOmAllocatesPageResType>} ajax
 */
const postSttransvouchOmAllocatesPage = (data: PostSttransvouchOmAllocatesPageReqType): Promise<PostSttransvouchOmAllocatesPageResType> => {
  return ajax({
    url: '/sttransvouch/omAllocatesPage',
    method: Method.POST
  }, data)
}

export type PostSttransvouchFlowActionReqType = operations['STTransVouch_FlowAction']['parameters']['body']['dto']
export type PostSttransvouchFlowActionResType = definitions['LJsonResult[FlowUserActionOutput]']
/**
 * @description 获取流程操作按钮
 * @param {PostSttransvouchFlowActionReqType} data 请求参数
 * @returns {Promise<PostSttransvouchFlowActionResType>} ajax
 */
const postSttransvouchFlowAction = (data: PostSttransvouchFlowActionReqType): Promise<PostSttransvouchFlowActionResType> => {
  return ajax({
    url: '/sttransvouch/flowAction',
    method: Method.POST
  }, data)
}

export type PostSttransvouchFlowApproveReqType = operations['STTransVouch_FlowApprove']['parameters']['body']['flowHandleModel']
export type PostSttransvouchFlowApproveResType = definitions['LJsonResult[HandleResDto]']
/**
 * @description 流程审核
 * @param {PostSttransvouchFlowApproveReqType} data 请求参数
 * @returns {Promise<PostSttransvouchFlowApproveResType>} ajax
 */
const postSttransvouchFlowApprove = (data: PostSttransvouchFlowApproveReqType): Promise<PostSttransvouchFlowApproveResType> => {
  return ajax({
    url: '/sttransvouch/flowApprove',
    method: Method.POST
  }, data)
}

export type PostSttransvouchQuerybarcodebycodeReqType = operations['STTransVouch_QueryBarCodeByCode']['parameters']['body']['dto']
export type PostSttransvouchQuerybarcodebycodeResType = definitions['LLJsonResult[BaseFullLineDto]']
/**
 * @description 调拨单号查关联条码,序列号,手工序列号
 * @param {PostSttransvouchQuerybarcodebycodeReqType} data 请求参数
 * @returns {Promise<PostSttransvouchQuerybarcodebycodeResType>} ajax
 */
const postSttransvouchQuerybarcodebycode = (data: PostSttransvouchQuerybarcodebycodeReqType): Promise<PostSttransvouchQuerybarcodebycodeResType> => {
  return ajax({
    url: '/sttransvouch/querybarcodebycode',
    method: Method.POST
  }, data)
}

export type PostSttransvouchUftransrequestpagequeryReqType = operations['STTransVouch_UfTransRequestPageQuery']['parameters']['body']['dto']
export type PostSttransvouchUftransrequestpagequeryResType = definitions['LPJsonResult[List[UfTransReqFullLineDto]]']
/**
 * @description 查询可参照生成调拨单的调拨申请单
 * @param {PostSttransvouchUftransrequestpagequeryReqType} data 请求参数
 * @returns {Promise<PostSttransvouchUftransrequestpagequeryResType>} ajax
 */
const postSttransvouchUftransrequestpagequery = (data: PostSttransvouchUftransrequestpagequeryReqType): Promise<PostSttransvouchUftransrequestpagequeryResType> => {
  return ajax({
    url: '/sttransvouch/uftransrequestpagequery',
    method: Method.POST
  }, data)
}

export default {
  postSttransvouchScrapreflist,
  getSttransvouchNewinit,
  getSttransvouchCodes,
  postSttransvouchSave,
  postSttransvouchQccheck,
  postSttransvouchAuditaction,
  postSttransvouchBulkaudit,
  postSttransvouchDel,
  postSttransvouchInfo,
  postSttransvouchPage,
  postSttransvouchPrint,
  postSttransvouchExport,
  getSttransvouchOmAllocates,
  postSttransvouchOmAllocatesPage,
  postSttransvouchFlowAction,
  postSttransvouchFlowApprove,
  postSttransvouchQuerybarcodebycode,
  postSttransvouchUftransrequestpagequery
}
