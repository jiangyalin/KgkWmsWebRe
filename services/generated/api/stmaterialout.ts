import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetStmaterialoutNewinitReqType = {}
export type GetStmaterialoutNewinitResType = definitions['LJsonResult[STRdRecord11SaveReqDto]']
/**
 * @description 新增初始化
 * @param {GetStmaterialoutNewinitReqType} data 请求参数
 * @returns {Promise<GetStmaterialoutNewinitResType>} ajax
 */
const getStmaterialoutNewinit = (data: GetStmaterialoutNewinitReqType = {}): Promise<GetStmaterialoutNewinitResType> => {
  return ajax({
    url: '/stmaterialout/newinit',
    method: Method.GET
  }, data)
}

export type GetStmaterialoutCodesReqType = operations['STMaterialOut_QueryCodes']['parameters']['query']
export type GetStmaterialoutCodesResType = definitions['LLJsonResult[BaseSelectDto]']
/**
 * @description 查询单号下拉列表
 * @param {GetStmaterialoutCodesReqType} data 请求参数
 * @returns {Promise<GetStmaterialoutCodesResType>} ajax
 */
const getStmaterialoutCodes = (data: GetStmaterialoutCodesReqType): Promise<GetStmaterialoutCodesResType> => {
  return ajax({
    url: '/stmaterialout/codes',
    method: Method.GET
  }, data)
}

export type PostStmaterialoutSaveReqType = operations['STMaterialOut_SaveOrder']['parameters']['body']['dto']
export type PostStmaterialoutSaveResType = definitions['LJsonResult']
/**
 * @description 单据保存
 * @param {PostStmaterialoutSaveReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutSaveResType>} ajax
 */
const postStmaterialoutSave = (data: PostStmaterialoutSaveReqType): Promise<PostStmaterialoutSaveResType> => {
  return ajax({
    url: '/stmaterialout/save',
    method: Method.POST
  }, data)
}

export type PostStmaterialoutAuditactionReqType = operations['STMaterialOut_AuditOrder']['parameters']['body']['dto']
export type PostStmaterialoutAuditactionResType = definitions['LJsonResult']
/**
 * @description 审核/弃审
 * @param {PostStmaterialoutAuditactionReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutAuditactionResType>} ajax
 */
const postStmaterialoutAuditaction = (data: PostStmaterialoutAuditactionReqType): Promise<PostStmaterialoutAuditactionResType> => {
  return ajax({
    url: '/stmaterialout/auditaction',
    method: Method.POST
  }, data)
}

export type PostStmaterialoutBulkauditReqType = operations['STMaterialOut_BulkAudit']['parameters']['body']['dto']
export type PostStmaterialoutBulkauditResType = definitions['LJsonResult']
/**
 * @description 审核/弃审
 * @param {PostStmaterialoutBulkauditReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutBulkauditResType>} ajax
 */
const postStmaterialoutBulkaudit = (data: PostStmaterialoutBulkauditReqType): Promise<PostStmaterialoutBulkauditResType> => {
  return ajax({
    url: '/stmaterialout/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostStmaterialoutDelReqType = operations['STMaterialOut_DeleteOrder']['parameters']['body']['dto']
export type PostStmaterialoutDelResType = definitions['LJsonResult']
/**
 * @description 单据删除
 * @param {PostStmaterialoutDelReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutDelResType>} ajax
 */
const postStmaterialoutDel = (data: PostStmaterialoutDelReqType): Promise<PostStmaterialoutDelResType> => {
  return ajax({
    url: '/stmaterialout/del',
    method: Method.POST
  }, data)
}

export type PostStmaterialoutInfoReqType = operations['STMaterialOut_QueryInfo']['parameters']['body']['dto']
export type PostStmaterialoutInfoResType = definitions['LJsonResult[STRdRecord11InfoDto]']
/**
 * @description 单据明细查询
 * @param {PostStmaterialoutInfoReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutInfoResType>} ajax
 */
const postStmaterialoutInfo = (data: PostStmaterialoutInfoReqType): Promise<PostStmaterialoutInfoResType> => {
  return ajax({
    url: '/stmaterialout/info',
    method: Method.POST
  }, data)
}

export type PostStmaterialoutMainpageReqType = operations['STMaterialOut_QueryMainPage']['parameters']['body']['dto']
export type PostStmaterialoutMainpageResType = definitions['LLPJsonResult[STRdRecord11HeadDto]']
/**
 * @description 查询主表分页数据
 * @param {PostStmaterialoutMainpageReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutMainpageResType>} ajax
 */
const postStmaterialoutMainpage = (data: PostStmaterialoutMainpageReqType): Promise<PostStmaterialoutMainpageResType> => {
  return ajax({
    url: '/stmaterialout/mainpage',
    method: Method.POST
  }, data)
}

export type PostStmaterialoutPageReqType = operations['STMaterialOut_QueryPage']['parameters']['body']['dto']
export type PostStmaterialoutPageResType = definitions['LLPJsonResult[STRdRecord11ListDto]']
/**
 * @description 查询分页数据
 * @param {PostStmaterialoutPageReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutPageResType>} ajax
 */
const postStmaterialoutPage = (data: PostStmaterialoutPageReqType): Promise<PostStmaterialoutPageResType> => {
  return ajax({
    url: '/stmaterialout/page',
    method: Method.POST
  }, data)
}

export type PostStmaterialoutExportReqType = operations['STMaterialOut_ExportData']['parameters']['body']['dto']
export type PostStmaterialoutExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostStmaterialoutExportReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutExportResType>} ajax
 */
const postStmaterialoutExport = (data: PostStmaterialoutExportReqType): Promise<PostStmaterialoutExportResType> => {
  return ajax({
    url: '/stmaterialout/export',
    method: Method.POST
  }, data)
}

export type GetStmaterialoutOmAllocatesReqType = operations['STMaterialOut_QueryOmAllocateByOm']['parameters']['query']
export type GetStmaterialoutOmAllocatesResType = definitions['LLJsonResult[OmAllocateInfoDto]']
/**
 * @description 根据委外订单号或者条码查询可材料出库的子件信息列表
 * @param {GetStmaterialoutOmAllocatesReqType} data 请求参数
 * @returns {Promise<GetStmaterialoutOmAllocatesResType>} ajax
 */
const getStmaterialoutOmAllocates = (data: GetStmaterialoutOmAllocatesReqType): Promise<GetStmaterialoutOmAllocatesResType> => {
  return ajax({
    url: '/stmaterialout/omAllocates',
    method: Method.GET
  }, data)
}

export type PostStmaterialoutOmAllocatesPageReqType = operations['STMaterialOut_QueryOmAllocateByOmPage']['parameters']['body']['filter']
export type PostStmaterialoutOmAllocatesPageResType = definitions['LLPJsonResult[OmAllocateInfoDto]']
/**
 * @description 根据委外订单号或者条码查询可材料出库的子件信息分页
 * @param {PostStmaterialoutOmAllocatesPageReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutOmAllocatesPageResType>} ajax
 */
const postStmaterialoutOmAllocatesPage = (data: PostStmaterialoutOmAllocatesPageReqType): Promise<PostStmaterialoutOmAllocatesPageResType> => {
  return ajax({
    url: '/stmaterialout/omAllocatesPage',
    method: Method.POST
  }, data)
}

export type PostStmaterialoutFlowActionReqType = operations['STMaterialOut_FlowAction']['parameters']['body']['dto']
export type PostStmaterialoutFlowActionResType = definitions['LJsonResult[FlowUserActionOutput]']
/**
 * @description 获取流程操作按钮
 * @param {PostStmaterialoutFlowActionReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutFlowActionResType>} ajax
 */
const postStmaterialoutFlowAction = (data: PostStmaterialoutFlowActionReqType): Promise<PostStmaterialoutFlowActionResType> => {
  return ajax({
    url: '/stmaterialout/flowAction',
    method: Method.POST
  }, data)
}

export type PostStmaterialoutFlowApproveReqType = operations['STMaterialOut_FlowApprove']['parameters']['body']['flowHandleModel']
export type PostStmaterialoutFlowApproveResType = definitions['LJsonResult[HandleResDto]']
/**
 * @description 流程审核
 * @param {PostStmaterialoutFlowApproveReqType} data 请求参数
 * @returns {Promise<PostStmaterialoutFlowApproveResType>} ajax
 */
const postStmaterialoutFlowApprove = (data: PostStmaterialoutFlowApproveReqType): Promise<PostStmaterialoutFlowApproveResType> => {
  return ajax({
    url: '/stmaterialout/flowApprove',
    method: Method.POST
  }, data)
}

export default {
  getStmaterialoutNewinit,
  getStmaterialoutCodes,
  postStmaterialoutSave,
  postStmaterialoutAuditaction,
  postStmaterialoutBulkaudit,
  postStmaterialoutDel,
  postStmaterialoutInfo,
  postStmaterialoutMainpage,
  postStmaterialoutPage,
  postStmaterialoutExport,
  getStmaterialoutOmAllocates,
  postStmaterialoutOmAllocatesPage,
  postStmaterialoutFlowAction,
  postStmaterialoutFlowApprove
}
