import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetChecksummaryGetcodeReqType = {}
export type GetChecksummaryGetcodeResType = definitions['LJsonResult']
/**
 * @description 获取盘点汇总单号
 * @param {GetChecksummaryGetcodeReqType} data 请求参数
 * @returns {Promise<GetChecksummaryGetcodeResType>} ajax
 */
const getChecksummaryGetcode = (data: GetChecksummaryGetcodeReqType = {}): Promise<GetChecksummaryGetcodeResType> => {
  return ajax({
    url: '/checksummary/getcode',
    method: Method.GET
  }, data)
}

export type PostChecksummaryDeleteReqType = operations['CheckSummary_DeleteData']['parameters']['body']['dto']
export type PostChecksummaryDeleteResType = definitions['LJsonResult']
/**
 * @description 删除汇总单
 * @param {PostChecksummaryDeleteReqType} data 请求参数
 * @returns {Promise<PostChecksummaryDeleteResType>} ajax
 */
const postChecksummaryDelete = (data: PostChecksummaryDeleteReqType): Promise<PostChecksummaryDeleteResType> => {
  return ajax({
    url: '/checksummary/delete',
    method: Method.POST
  }, data)
}

export type GetChecksummaryTasknumselectReqType = operations['CheckSummary_QueryTaskNumSelect']['parameters']['query']
export type GetChecksummaryTasknumselectResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询未汇总的任务号下拉列表
 * @param {GetChecksummaryTasknumselectReqType} data 请求参数
 * @returns {Promise<GetChecksummaryTasknumselectResType>} ajax
 */
const getChecksummaryTasknumselect = (data: GetChecksummaryTasknumselectReqType): Promise<GetChecksummaryTasknumselectResType> => {
  return ajax({
    url: '/checksummary/tasknumselect',
    method: Method.GET
  }, data)
}

export type GetChecksummaryWhselectReqType = operations['CheckSummary_QueryWhSelect']['parameters']['query']
export type GetChecksummaryWhselectResType = definitions['LJsonResult[List[WarehouseBaseDto]]']
/**
 * @description 查询待汇总的仓库下拉列表
 * @param {GetChecksummaryWhselectReqType} data 请求参数
 * @returns {Promise<GetChecksummaryWhselectResType>} ajax
 */
const getChecksummaryWhselect = (data: GetChecksummaryWhselectReqType): Promise<GetChecksummaryWhselectResType> => {
  return ajax({
    url: '/checksummary/whselect',
    method: Method.GET
  }, data)
}

export type PostChecksummaryQuerypendingrecordsReqType = operations['CheckSummary_QueryPendingRecords']['parameters']['body']['dto']
export type PostChecksummaryQuerypendingrecordsResType = definitions['LPJsonResult[List[PendingSummaryDetailDto]]']
/**
 * @description 查询未汇总的盘点明细数据
 * @param {PostChecksummaryQuerypendingrecordsReqType} data 请求参数
 * @returns {Promise<PostChecksummaryQuerypendingrecordsResType>} ajax
 */
const postChecksummaryQuerypendingrecords = (data: PostChecksummaryQuerypendingrecordsReqType): Promise<PostChecksummaryQuerypendingrecordsResType> => {
  return ajax({
    url: '/checksummary/querypendingrecords',
    method: Method.POST
  }, data)
}

export type PostChecksummaryCalcsummaryReqType = operations['CheckSummary_CalcSummaryList']['parameters']['body']
export type PostChecksummaryCalcsummaryResType = definitions['LJsonResult[List[CheckSummaryBodyDto]]']
/**
 * @description 根据盘点明细汇总表体数据
 * @param {PostChecksummaryCalcsummaryReqType} data 请求参数
 * @returns {Promise<PostChecksummaryCalcsummaryResType>} ajax
 */
const postChecksummaryCalcsummary = (data: PostChecksummaryCalcsummaryReqType): Promise<PostChecksummaryCalcsummaryResType> => {
  return ajax({
    url: '/checksummary/calcsummary',
    method: Method.POST
  }, data)
}

export type PostChecksummaryAddReqType = operations['CheckSummary_SaveData']['parameters']['body']['dto']
export type PostChecksummaryAddResType = definitions['LJsonResult']
/**
 * @description 生成汇总单
 * @param {PostChecksummaryAddReqType} data 请求参数
 * @returns {Promise<PostChecksummaryAddResType>} ajax
 */
const postChecksummaryAdd = (data: PostChecksummaryAddReqType): Promise<PostChecksummaryAddResType> => {
  return ajax({
    url: '/checksummary/add',
    method: Method.POST
  }, data)
}

export type PostChecksummaryUpdateReqType = operations['CheckSummary_UpdateData']['parameters']['body']['dto']
export type PostChecksummaryUpdateResType = definitions['LJsonResult']
/**
 * @description 编辑汇总单
 * @param {PostChecksummaryUpdateReqType} data 请求参数
 * @returns {Promise<PostChecksummaryUpdateResType>} ajax
 */
const postChecksummaryUpdate = (data: PostChecksummaryUpdateReqType): Promise<PostChecksummaryUpdateResType> => {
  return ajax({
    url: '/checksummary/update',
    method: Method.POST
  }, data)
}

export type PostChecksummaryInfoReqType = operations['CheckSummary_QueryInfo']['parameters']['body']['dto']
export type PostChecksummaryInfoResType = definitions['LJsonResult[CheckSummaryInfoDto]']
/**
 * @description 查询汇总单明细
 * @param {PostChecksummaryInfoReqType} data 请求参数
 * @returns {Promise<PostChecksummaryInfoResType>} ajax
 */
const postChecksummaryInfo = (data: PostChecksummaryInfoReqType): Promise<PostChecksummaryInfoResType> => {
  return ajax({
    url: '/checksummary/info',
    method: Method.POST
  }, data)
}

export type PostChecksummaryPageReqType = operations['CheckSummary_QueryPage']['parameters']['body']['dto']
export type PostChecksummaryPageResType = definitions['LPJsonResult[List[CheckSummaryListDto]]']
/**
 * @description 查询汇总单列表
 * @param {PostChecksummaryPageReqType} data 请求参数
 * @returns {Promise<PostChecksummaryPageResType>} ajax
 */
const postChecksummaryPage = (data: PostChecksummaryPageReqType): Promise<PostChecksummaryPageResType> => {
  return ajax({
    url: '/checksummary/page',
    method: Method.POST
  }, data)
}

export type PostChecksummaryExportReqType = operations['CheckSummary_ExportData']['parameters']['body']['dto']
export type PostChecksummaryExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostChecksummaryExportReqType} data 请求参数
 * @returns {Promise<PostChecksummaryExportResType>} ajax
 */
const postChecksummaryExport = (data: PostChecksummaryExportReqType): Promise<PostChecksummaryExportResType> => {
  return ajax({
    url: '/checksummary/export',
    method: Method.POST
  }, data)
}

export type GetChecksummaryWhcheckReqType = operations['CheckSummary_WhCheck']['parameters']['query']
export type GetChecksummaryWhcheckResType = definitions['LJsonResult']
/**
 * @description 盘库
 * @param {GetChecksummaryWhcheckReqType} data 请求参数
 * @returns {Promise<GetChecksummaryWhcheckResType>} ajax
 */
const getChecksummaryWhcheck = (data: GetChecksummaryWhcheckReqType): Promise<GetChecksummaryWhcheckResType> => {
  return ajax({
    url: '/checksummary/whcheck',
    method: Method.GET
  }, data)
}

export type PostChecksummaryDoauditReqType = operations['CheckSummary_DoAudit']['parameters']['body']['dto']
export type PostChecksummaryDoauditResType = definitions['LJsonResult']
/**
 * @description 汇总单审核操作(生成U8盘点单并提交)
 * @param {PostChecksummaryDoauditReqType} data 请求参数
 * @returns {Promise<PostChecksummaryDoauditResType>} ajax
 */
const postChecksummaryDoaudit = (data: PostChecksummaryDoauditReqType): Promise<PostChecksummaryDoauditResType> => {
  return ajax({
    url: '/checksummary/doaudit',
    method: Method.POST
  }, data)
}

export type GetChecksummaryCodesReqType = operations['CheckSummary_QueryCodes']['parameters']['query']
export type GetChecksummaryCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetChecksummaryCodesReqType} data 请求参数
 * @returns {Promise<GetChecksummaryCodesResType>} ajax
 */
const getChecksummaryCodes = (data: GetChecksummaryCodesReqType): Promise<GetChecksummaryCodesResType> => {
  return ajax({
    url: '/checksummary/codes',
    method: Method.GET
  }, data)
}

export default {
  getChecksummaryGetcode,
  postChecksummaryDelete,
  getChecksummaryTasknumselect,
  getChecksummaryWhselect,
  postChecksummaryQuerypendingrecords,
  postChecksummaryCalcsummary,
  postChecksummaryAdd,
  postChecksummaryUpdate,
  postChecksummaryInfo,
  postChecksummaryPage,
  postChecksummaryExport,
  getChecksummaryWhcheck,
  postChecksummaryDoaudit,
  getChecksummaryCodes
}
