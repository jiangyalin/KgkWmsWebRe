import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetStassemvouchNewinitReqType = {}
export type GetStassemvouchNewinitResType = definitions['LJsonResult[STAssemVouchSaveReqDto]']
/**
 * @description 新增初始化
 * @param {GetStassemvouchNewinitReqType} data 请求参数
 * @returns {Promise<GetStassemvouchNewinitResType>} ajax
 */
const getStassemvouchNewinit = (data: GetStassemvouchNewinitReqType = {}): Promise<GetStassemvouchNewinitResType> => {
  return ajax({
    url: '/stassemvouch/newinit',
    method: Method.GET
  }, data)
}

export type GetStassemvouchCodesReqType = operations['STAssemVouch_QueryCodes']['parameters']['query']
export type GetStassemvouchCodesResType = definitions['LLJsonResult[BaseSelectDto]']
/**
 * @description 查询单号下拉列表
 * @param {GetStassemvouchCodesReqType} data 请求参数
 * @returns {Promise<GetStassemvouchCodesResType>} ajax
 */
const getStassemvouchCodes = (data: GetStassemvouchCodesReqType): Promise<GetStassemvouchCodesResType> => {
  return ajax({
    url: '/stassemvouch/codes',
    method: Method.GET
  }, data)
}

export type PostStassemvouchSaveReqType = operations['STAssemVouch_SaveOrder']['parameters']['body']['dto']
export type PostStassemvouchSaveResType = definitions['LJsonResult']
/**
 * @description 单据保存
 * @param {PostStassemvouchSaveReqType} data 请求参数
 * @returns {Promise<PostStassemvouchSaveResType>} ajax
 */
const postStassemvouchSave = (data: PostStassemvouchSaveReqType): Promise<PostStassemvouchSaveResType> => {
  return ajax({
    url: '/stassemvouch/save',
    method: Method.POST
  }, data)
}

export type PostStassemvouchAuditactionReqType = operations['STAssemVouch_AuditOrder']['parameters']['body']['dto']
export type PostStassemvouchAuditactionResType = definitions['LJsonResult']
/**
 * @description 审核/弃审
 * @param {PostStassemvouchAuditactionReqType} data 请求参数
 * @returns {Promise<PostStassemvouchAuditactionResType>} ajax
 */
const postStassemvouchAuditaction = (data: PostStassemvouchAuditactionReqType): Promise<PostStassemvouchAuditactionResType> => {
  return ajax({
    url: '/stassemvouch/auditaction',
    method: Method.POST
  }, data)
}

export type PostStassemvouchBulkauditReqType = operations['STAssemVouch_BulkAudit']['parameters']['body']['dto']
export type PostStassemvouchBulkauditResType = definitions['LJsonResult']
/**
 * @description 批量审核/批量弃审
 * @param {PostStassemvouchBulkauditReqType} data 请求参数
 * @returns {Promise<PostStassemvouchBulkauditResType>} ajax
 */
const postStassemvouchBulkaudit = (data: PostStassemvouchBulkauditReqType): Promise<PostStassemvouchBulkauditResType> => {
  return ajax({
    url: '/stassemvouch/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostStassemvouchDelReqType = operations['STAssemVouch_DeleteOrder']['parameters']['body']['dto']
export type PostStassemvouchDelResType = definitions['LJsonResult']
/**
 * @description 单据删除
 * @param {PostStassemvouchDelReqType} data 请求参数
 * @returns {Promise<PostStassemvouchDelResType>} ajax
 */
const postStassemvouchDel = (data: PostStassemvouchDelReqType): Promise<PostStassemvouchDelResType> => {
  return ajax({
    url: '/stassemvouch/del',
    method: Method.POST
  }, data)
}

export type PostStassemvouchInfoReqType = operations['STAssemVouch_QueryInfo']['parameters']['body']['dto']
export type PostStassemvouchInfoResType = definitions['LJsonResult[STAssemVouchInfoDto]']
/**
 * @description 单据明细查询
 * @param {PostStassemvouchInfoReqType} data 请求参数
 * @returns {Promise<PostStassemvouchInfoResType>} ajax
 */
const postStassemvouchInfo = (data: PostStassemvouchInfoReqType): Promise<PostStassemvouchInfoResType> => {
  return ajax({
    url: '/stassemvouch/info',
    method: Method.POST
  }, data)
}

export type PostStassemvouchPageReqType = operations['STAssemVouch_QueryPage']['parameters']['body']['dto']
export type PostStassemvouchPageResType = definitions['LLPJsonResult[STAssemVouchListDto]']
/**
 * @description 查询分页数据
 * @param {PostStassemvouchPageReqType} data 请求参数
 * @returns {Promise<PostStassemvouchPageResType>} ajax
 */
const postStassemvouchPage = (data: PostStassemvouchPageReqType): Promise<PostStassemvouchPageResType> => {
  return ajax({
    url: '/stassemvouch/page',
    method: Method.POST
  }, data)
}

export type PostStassemvouchExportReqType = operations['STAssemVouch_ExportData']['parameters']['body']['dto']
export type PostStassemvouchExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostStassemvouchExportReqType} data 请求参数
 * @returns {Promise<PostStassemvouchExportResType>} ajax
 */
const postStassemvouchExport = (data: PostStassemvouchExportReqType): Promise<PostStassemvouchExportResType> => {
  return ajax({
    url: '/stassemvouch/export',
    method: Method.POST
  }, data)
}

export default {
  getStassemvouchNewinit,
  getStassemvouchCodes,
  postStassemvouchSave,
  postStassemvouchAuditaction,
  postStassemvouchBulkaudit,
  postStassemvouchDel,
  postStassemvouchInfo,
  postStassemvouchPage,
  postStassemvouchExport
}
