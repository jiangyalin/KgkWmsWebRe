import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostStmompreprdReflistReqType = operations['STMomPrepRd_QueryUFMomPrepRdList']['parameters']['body']['dto']
export type PostStmompreprdReflistResType = definitions['LLPJsonResult[UFMomRdListDto]']
/**
 * @description 查询待扫码绑定的预入库列表
 * @param {PostStmompreprdReflistReqType} data 请求参数
 * @returns {Promise<PostStmompreprdReflistResType>} ajax
 */
const postStmompreprdReflist = (data: PostStmompreprdReflistReqType): Promise<PostStmompreprdReflistResType> => {
  return ajax({
    url: '/stmompreprd/reflist',
    method: Method.POST
  }, data)
}

export type PostStmompreprdBindReqType = operations['STMomPrepRd_MomPrepRdBind']['parameters']['body']['dto']
export type PostStmompreprdBindResType = definitions['LJsonResult']
/**
 * @description 预入库绑定
 * @param {PostStmompreprdBindReqType} data 请求参数
 * @returns {Promise<PostStmompreprdBindResType>} ajax
 */
const postStmompreprdBind = (data: PostStmompreprdBindReqType): Promise<PostStmompreprdBindResType> => {
  return ajax({
    url: '/stmompreprd/bind',
    method: Method.POST
  }, data)
}

export type PostStmompreprdPageReqType = operations['STMomPrepRd_QuerySTMomPrepRdRecordList']['parameters']['body']['dto']
export type PostStmompreprdPageResType = definitions['LLPJsonResult[STMomPrepRdRecordListDto]']
/**
 * @description 查询预入库绑定记录列表
 * @param {PostStmompreprdPageReqType} data 请求参数
 * @returns {Promise<PostStmompreprdPageResType>} ajax
 */
const postStmompreprdPage = (data: PostStmompreprdPageReqType): Promise<PostStmompreprdPageResType> => {
  return ajax({
    url: '/stmompreprd/page',
    method: Method.POST
  }, data)
}

export type PostStmompreprdExportReqType = operations['STMomPrepRd_ExportSTMomPrepRdRecordList']['parameters']['body']['dto']
export type PostStmompreprdExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 导出预入库绑定记录列表
 * @param {PostStmompreprdExportReqType} data 请求参数
 * @returns {Promise<PostStmompreprdExportResType>} ajax
 */
const postStmompreprdExport = (data: PostStmompreprdExportReqType): Promise<PostStmompreprdExportResType> => {
  return ajax({
    url: '/stmompreprd/export',
    method: Method.POST
  }, data)
}

export default {
  postStmompreprdReflist,
  postStmompreprdBind,
  postStmompreprdPage,
  postStmompreprdExport
}
