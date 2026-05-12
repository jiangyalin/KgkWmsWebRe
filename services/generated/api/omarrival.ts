import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostOmarrivalU8OmOrderQueryReqType = operations['OmArrival_U8OmOrderQuery']['parameters']['body']['dto']
export type PostOmarrivalU8OmOrderQueryResType = definitions['LLPJsonResult[OmOrderInfoWithQtyDto]']
/**
 * @description 查询U8委外订单
 * @param {PostOmarrivalU8OmOrderQueryReqType} data 请求参数
 * @returns {Promise<PostOmarrivalU8OmOrderQueryResType>} ajax
 */
const postOmarrivalU8OmOrderQuery = (data: PostOmarrivalU8OmOrderQueryReqType): Promise<PostOmarrivalU8OmOrderQueryResType> => {
  return ajax({
    url: '/omarrival/u8OmOrderQuery',
    method: Method.POST
  }, data)
}

export type GetOmarrivalGenDocCodeReqType = {}
export type GetOmarrivalGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetOmarrivalGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetOmarrivalGenDocCodeResType>} ajax
 */
const getOmarrivalGenDocCode = (data: GetOmarrivalGenDocCodeReqType = {}): Promise<GetOmarrivalGenDocCodeResType> => {
  return ajax({
    url: '/omarrival/genDocCode',
    method: Method.GET
  }, data)
}

export type GetOmarrivalCodesReqType = operations['OmArrival_QueryCodes']['parameters']['query']
export type GetOmarrivalCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetOmarrivalCodesReqType} data 请求参数
 * @returns {Promise<GetOmarrivalCodesResType>} ajax
 */
const getOmarrivalCodes = (data: GetOmarrivalCodesReqType): Promise<GetOmarrivalCodesResType> => {
  return ajax({
    url: '/omarrival/codes',
    method: Method.GET
  }, data)
}

export type PostOmarrivalInfoReqType = operations['OmArrival_Info']['parameters']['body']['dto']
export type PostOmarrivalInfoResType = definitions['LJsonResult[PuArrivalInfoDto]']
/**
 * @description 到货单详情查询
 * @param {PostOmarrivalInfoReqType} data 请求参数
 * @returns {Promise<PostOmarrivalInfoResType>} ajax
 */
const postOmarrivalInfo = (data: PostOmarrivalInfoReqType): Promise<PostOmarrivalInfoResType> => {
  return ajax({
    url: '/omarrival/info',
    method: Method.POST
  }, data)
}

export type PostOmarrivalPageWithDetailReqType = operations['OmArrival_QueryPageWithDetail']['parameters']['body']['dto']
export type PostOmarrivalPageWithDetailResType = definitions['LPJsonResult[List[PuArrivalFullInfoDto]]']
/**
 * @description 带明细的委外到货单分页查询
 * @param {PostOmarrivalPageWithDetailReqType} data 请求参数
 * @returns {Promise<PostOmarrivalPageWithDetailResType>} ajax
 */
const postOmarrivalPageWithDetail = (data: PostOmarrivalPageWithDetailReqType): Promise<PostOmarrivalPageWithDetailResType> => {
  return ajax({
    url: '/omarrival/pageWithDetail',
    method: Method.POST
  }, data)
}

export type PostOmarrivalExportReqType = operations['OmArrival_ExportData']['parameters']['body']['dto']
export type PostOmarrivalExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 委外到货单导出
 * @param {PostOmarrivalExportReqType} data 请求参数
 * @returns {Promise<PostOmarrivalExportResType>} ajax
 */
const postOmarrivalExport = (data: PostOmarrivalExportReqType): Promise<PostOmarrivalExportResType> => {
  return ajax({
    url: '/omarrival/export',
    method: Method.POST
  }, data)
}

export type PostOmarrivalSaveReqType = operations['OmArrival_Save']['parameters']['body']['dto']
export type PostOmarrivalSaveResType = definitions['LJsonResult']
/**
 * @description 到货单编辑保存
 * @param {PostOmarrivalSaveReqType} data 请求参数
 * @returns {Promise<PostOmarrivalSaveResType>} ajax
 */
const postOmarrivalSave = (data: PostOmarrivalSaveReqType): Promise<PostOmarrivalSaveResType> => {
  return ajax({
    url: '/omarrival/save',
    method: Method.POST
  }, data)
}

export type PostOmarrivalBatchauditReqType = operations['OmArrival_BatchAudit']['parameters']['body']['dto']
export type PostOmarrivalBatchauditResType = definitions['LJsonResult']
/**
 * @description 批量审核/弃审到货单
 * @param {PostOmarrivalBatchauditReqType} data 请求参数
 * @returns {Promise<PostOmarrivalBatchauditResType>} ajax
 */
const postOmarrivalBatchaudit = (data: PostOmarrivalBatchauditReqType): Promise<PostOmarrivalBatchauditResType> => {
  return ajax({
    url: '/omarrival/batchaudit',
    method: Method.POST
  }, data)
}

export default {
  postOmarrivalU8OmOrderQuery,
  getOmarrivalGenDocCode,
  getOmarrivalCodes,
  postOmarrivalInfo,
  postOmarrivalPageWithDetail,
  postOmarrivalExport,
  postOmarrivalSave,
  postOmarrivalBatchaudit
}
