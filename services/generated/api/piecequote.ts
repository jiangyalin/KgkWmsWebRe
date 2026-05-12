import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetPiecequoteExltmplReqType = {}
export type GetPiecequoteExltmplResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 获取计件工资额定表导入模板
 * @param {GetPiecequoteExltmplReqType} data 请求参数
 * @returns {Promise<GetPiecequoteExltmplResType>} ajax
 */
const getPiecequoteExltmpl = (data: GetPiecequoteExltmplReqType = {}): Promise<GetPiecequoteExltmplResType> => {
  return ajax({
    url: '/piecequote/exltmpl',
    method: Method.GET
  }, data)
}

export type PostPiecequoteSaveReqType = operations['PieceQuote_SaveData']['parameters']['body']['dto']
export type PostPiecequoteSaveResType = definitions['LJsonResult']
/**
 * @description 保存额定单价数据
 * @param {PostPiecequoteSaveReqType} data 请求参数
 * @returns {Promise<PostPiecequoteSaveResType>} ajax
 */
const postPiecequoteSave = (data: PostPiecequoteSaveReqType): Promise<PostPiecequoteSaveResType> => {
  return ajax({
    url: '/piecequote/save',
    method: Method.POST
  }, data)
}

export type PostPiecequoteDelReqType = operations['PieceQuote_Delete']['parameters']['body']['dto']
export type PostPiecequoteDelResType = definitions['LJsonResult']
/**
 * @description 删除数据
 * @param {PostPiecequoteDelReqType} data 请求参数
 * @returns {Promise<PostPiecequoteDelResType>} ajax
 */
const postPiecequoteDel = (data: PostPiecequoteDelReqType): Promise<PostPiecequoteDelResType> => {
  return ajax({
    url: '/piecequote/del',
    method: Method.POST
  }, data)
}

export type GetPiecequoteInfoReqType = operations['PieceQuote_QueryInfo']['parameters']['query']
export type GetPiecequoteInfoResType = definitions['LJsonResult[PieceQuoteInfoDto]']
/**
 * @description 查询明细数据
 * @param {GetPiecequoteInfoReqType} data 请求参数
 * @returns {Promise<GetPiecequoteInfoResType>} ajax
 */
const getPiecequoteInfo = (data: GetPiecequoteInfoReqType): Promise<GetPiecequoteInfoResType> => {
  return ajax({
    url: '/piecequote/info',
    method: Method.GET
  }, data)
}

export type PostPiecequotePageReqType = operations['PieceQuote_QueryPage']['parameters']['body']['dto']
export type PostPiecequotePageResType = definitions['LPJsonResult[List[PieceQuoteInfoDto]]']
/**
 * @description 查询分页数据
 * @param {PostPiecequotePageReqType} data 请求参数
 * @returns {Promise<PostPiecequotePageResType>} ajax
 */
const postPiecequotePage = (data: PostPiecequotePageReqType): Promise<PostPiecequotePageResType> => {
  return ajax({
    url: '/piecequote/page',
    method: Method.POST
  }, data)
}

export type PostPiecequoteImportReqType = {}
export type PostPiecequoteImportResType = definitions['LJsonResult']
/**
 * @description 数据导入
 * @param {PostPiecequoteImportReqType} data 请求参数
 * @returns {Promise<PostPiecequoteImportResType>} ajax
 */
const postPiecequoteImport = (data: PostPiecequoteImportReqType = {}): Promise<PostPiecequoteImportResType> => {
  return ajax({
    url: '/piecequote/import',
    method: Method.POST
  }, data)
}

export type PostPiecequoteExportReqType = operations['PieceQuote_ExportData']['parameters']['body']['dto']
export type PostPiecequoteExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostPiecequoteExportReqType} data 请求参数
 * @returns {Promise<PostPiecequoteExportResType>} ajax
 */
const postPiecequoteExport = (data: PostPiecequoteExportReqType): Promise<PostPiecequoteExportResType> => {
  return ajax({
    url: '/piecequote/export',
    method: Method.POST
  }, data)
}

export default {
  getPiecequoteExltmpl,
  postPiecequoteSave,
  postPiecequoteDel,
  getPiecequoteInfo,
  postPiecequotePage,
  postPiecequoteImport,
  postPiecequoteExport
}
