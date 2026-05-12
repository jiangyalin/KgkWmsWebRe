import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetWxbyplanGetcodeReqType = operations['WxByPlan_GetNewCode']['parameters']['query']
export type GetWxbyplanGetcodeResType = definitions['LJsonResult']
/**
 * @description 获取计划号
 * @param {GetWxbyplanGetcodeReqType} data 请求参数
 * @returns {Promise<GetWxbyplanGetcodeResType>} ajax
 */
const getWxbyplanGetcode = (data: GetWxbyplanGetcodeReqType): Promise<GetWxbyplanGetcodeResType> => {
  return ajax({
    url: '/wxbyplan/getcode',
    method: Method.GET
  }, data)
}

export type GetWxbyplanCodesReqType = operations['WxByPlan_QueryCodes']['parameters']['query']
export type GetWxbyplanCodesResType = definitions['LLJsonResult[BaseSelectDto]']
/**
 * @description 查询单号下拉列表
 * @param {GetWxbyplanCodesReqType} data 请求参数
 * @returns {Promise<GetWxbyplanCodesResType>} ajax
 */
const getWxbyplanCodes = (data: GetWxbyplanCodesReqType): Promise<GetWxbyplanCodesResType> => {
  return ajax({
    url: '/wxbyplan/codes',
    method: Method.GET
  }, data)
}

export type PostWxbyplanSaveReqType = operations['WxByPlan_Save']['parameters']['body']['dto']
export type PostWxbyplanSaveResType = definitions['LJsonResult']
/**
 * @description 计划保存
 * @param {PostWxbyplanSaveReqType} data 请求参数
 * @returns {Promise<PostWxbyplanSaveResType>} ajax
 */
const postWxbyplanSave = (data: PostWxbyplanSaveReqType): Promise<PostWxbyplanSaveResType> => {
  return ajax({
    url: '/wxbyplan/save',
    method: Method.POST
  }, data)
}

export type PostWxbyplanDeleteReqType = operations['WxByPlan_ShiftDel']['parameters']['body']['dto']
export type PostWxbyplanDeleteResType = definitions['LJsonResult']
/**
 * @description 计划删除
 * @param {PostWxbyplanDeleteReqType} data 请求参数
 * @returns {Promise<PostWxbyplanDeleteResType>} ajax
 */
const postWxbyplanDelete = (data: PostWxbyplanDeleteReqType): Promise<PostWxbyplanDeleteResType> => {
  return ajax({
    url: '/wxbyplan/delete',
    method: Method.POST
  }, data)
}

export type PostWxbyplanAuditReqType = operations['WxByPlan_DoAudit']['parameters']['body']['dto']
export type PostWxbyplanAuditResType = definitions['LJsonResult']
/**
 * @description 计划审核
 * @param {PostWxbyplanAuditReqType} data 请求参数
 * @returns {Promise<PostWxbyplanAuditResType>} ajax
 */
const postWxbyplanAudit = (data: PostWxbyplanAuditReqType): Promise<PostWxbyplanAuditResType> => {
  return ajax({
    url: '/wxbyplan/audit',
    method: Method.POST
  }, data)
}

export type PostWxbyplanInfoReqType = operations['WxByPlan_QueryInfo']['parameters']['body']['dto']
export type PostWxbyplanInfoResType = definitions['LJsonResult[WxByPlanInfoDto]']
/**
 * @description 计划明细
 * @param {PostWxbyplanInfoReqType} data 请求参数
 * @returns {Promise<PostWxbyplanInfoResType>} ajax
 */
const postWxbyplanInfo = (data: PostWxbyplanInfoReqType): Promise<PostWxbyplanInfoResType> => {
  return ajax({
    url: '/wxbyplan/info',
    method: Method.POST
  }, data)
}

export type PostWxbyplanPageReqType = operations['WxByPlan_QueryPage']['parameters']['body']['dto']
export type PostWxbyplanPageResType = definitions['LPJsonResult[List[WxByPlanListDto]]']
/**
 * @description 查询计划分页数据
 * @param {PostWxbyplanPageReqType} data 请求参数
 * @returns {Promise<PostWxbyplanPageResType>} ajax
 */
const postWxbyplanPage = (data: PostWxbyplanPageReqType): Promise<PostWxbyplanPageResType> => {
  return ajax({
    url: '/wxbyplan/page',
    method: Method.POST
  }, data)
}

export type PostWxbyplanExportReqType = operations['WxByPlan_ExportData']['parameters']['body']['dto']
export type PostWxbyplanExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostWxbyplanExportReqType} data 请求参数
 * @returns {Promise<PostWxbyplanExportResType>} ajax
 */
const postWxbyplanExport = (data: PostWxbyplanExportReqType): Promise<PostWxbyplanExportResType> => {
  return ajax({
    url: '/wxbyplan/export',
    method: Method.POST
  }, data)
}

export default {
  getWxbyplanGetcode,
  getWxbyplanCodes,
  postWxbyplanSave,
  postWxbyplanDelete,
  postWxbyplanAudit,
  postWxbyplanInfo,
  postWxbyplanPage,
  postWxbyplanExport
}
