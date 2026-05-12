import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetBorrowinCodesReqType = operations['BorrowIn_QueryCodes']['parameters']['query']
export type GetBorrowinCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetBorrowinCodesReqType} data 请求参数
 * @returns {Promise<GetBorrowinCodesResType>} ajax
 */
const getBorrowinCodes = (data: GetBorrowinCodesReqType): Promise<GetBorrowinCodesResType> => {
  return ajax({
    url: '/borrowin/codes',
    method: Method.GET
  }, data)
}

export type GetBorrowinGenDocCodeReqType = {}
export type GetBorrowinGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetBorrowinGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetBorrowinGenDocCodeResType>} ajax
 */
const getBorrowinGenDocCode = (data: GetBorrowinGenDocCodeReqType = {}): Promise<GetBorrowinGenDocCodeResType> => {
  return ajax({
    url: '/borrowin/genDocCode',
    method: Method.GET
  }, data)
}

export type PostBorrowinInfoReqType = operations['BorrowIn_Info']['parameters']['body']['dto']
export type PostBorrowinInfoResType = definitions['LJsonResult[BorrowInInfoDto]']
/**
 * @description 借出借用单详情查询
 * @param {PostBorrowinInfoReqType} data 请求参数
 * @returns {Promise<PostBorrowinInfoResType>} ajax
 */
const postBorrowinInfo = (data: PostBorrowinInfoReqType): Promise<PostBorrowinInfoResType> => {
  return ajax({
    url: '/borrowin/info',
    method: Method.POST
  }, data)
}

export type PostBorrowinPageWithDetailReqType = operations['BorrowIn_QueryPageWithDetail']['parameters']['body']['dto']
export type PostBorrowinPageWithDetailResType = definitions['LLPJsonResult[BorrowInFullPageInfoDto]']
/**
 * @description 借出归还单带明细分页查询
 * @param {PostBorrowinPageWithDetailReqType} data 请求参数
 * @returns {Promise<PostBorrowinPageWithDetailResType>} ajax
 */
const postBorrowinPageWithDetail = (data: PostBorrowinPageWithDetailReqType): Promise<PostBorrowinPageWithDetailResType> => {
  return ajax({
    url: '/borrowin/pageWithDetail',
    method: Method.POST
  }, data)
}

export type PostBorrowinExportReqType = operations['BorrowIn_ExportData']['parameters']['body']['dto']
export type PostBorrowinExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 借出归还单带明细分页查询
 * @param {PostBorrowinExportReqType} data 请求参数
 * @returns {Promise<PostBorrowinExportResType>} ajax
 */
const postBorrowinExport = (data: PostBorrowinExportReqType): Promise<PostBorrowinExportResType> => {
  return ajax({
    url: '/borrowin/export',
    method: Method.POST
  }, data)
}

export type PostBorrowinSaveReqType = operations['BorrowIn_SaveData']['parameters']['body']['dto']
export type PostBorrowinSaveResType = definitions['LJsonResult[String]']
/**
 * @description 借出借用单数据保存
 * @param {PostBorrowinSaveReqType} data 请求参数
 * @returns {Promise<PostBorrowinSaveResType>} ajax
 */
const postBorrowinSave = (data: PostBorrowinSaveReqType): Promise<PostBorrowinSaveResType> => {
  return ajax({
    url: '/borrowin/save',
    method: Method.POST
  }, data)
}

export type PostBorrowinBulkauditReqType = operations['BorrowIn_BulkAudit']['parameters']['body']['dto']
export type PostBorrowinBulkauditResType = definitions['LJsonResult']
/**
 * @description 借出归还单批量审核/弃审
 * @param {PostBorrowinBulkauditReqType} data 请求参数
 * @returns {Promise<PostBorrowinBulkauditResType>} ajax
 */
const postBorrowinBulkaudit = (data: PostBorrowinBulkauditReqType): Promise<PostBorrowinBulkauditResType> => {
  return ajax({
    url: '/borrowin/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostBorrowinDeleteReqType = operations['BorrowIn_Delete']['parameters']['body']['dto']
export type PostBorrowinDeleteResType = definitions['LJsonResult']
/**
 * @description 借出归还单删除
 * @param {PostBorrowinDeleteReqType} data 请求参数
 * @returns {Promise<PostBorrowinDeleteResType>} ajax
 */
const postBorrowinDelete = (data: PostBorrowinDeleteReqType): Promise<PostBorrowinDeleteResType> => {
  return ajax({
    url: '/borrowin/delete',
    method: Method.POST
  }, data)
}

export type PostBorrowinBusoptionReqType = operations['BorrowIn_BusOption']['parameters']['body']['dto']
export type PostBorrowinBusoptionResType = definitions['LJsonResult[BorrowInBusOptionOutDto]']
/**
 * @description 归还单业务操作
 * @param {PostBorrowinBusoptionReqType} data 请求参数
 * @returns {Promise<PostBorrowinBusoptionResType>} ajax
 */
const postBorrowinBusoption = (data: PostBorrowinBusoptionReqType): Promise<PostBorrowinBusoptionResType> => {
  return ajax({
    url: '/borrowin/busoption',
    method: Method.POST
  }, data)
}

export default {
  getBorrowinCodes,
  getBorrowinGenDocCode,
  postBorrowinInfo,
  postBorrowinPageWithDetail,
  postBorrowinExport,
  postBorrowinSave,
  postBorrowinBulkaudit,
  postBorrowinDelete,
  postBorrowinBusoption
}
