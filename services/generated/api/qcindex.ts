import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostQcindexSaveReqType = operations['QcIndex_Save']['parameters']['body']['dto']
export type PostQcindexSaveResType = definitions['LJsonResult']
/**
 * @description 检验指标保存
 * @param {PostQcindexSaveReqType} data 请求参数
 * @returns {Promise<PostQcindexSaveResType>} ajax
 */
const postQcindexSave = (data: PostQcindexSaveReqType): Promise<PostQcindexSaveResType> => {
  return ajax({
    url: '/qcindex/save',
    method: Method.POST
  }, data)
}

export type PostQcindexDeleteReqType = operations['QcIndex_DicDataDel']['parameters']['body']['dto']
export type PostQcindexDeleteResType = definitions['LJsonResult']
/**
 * @description 检验指标删除
 * @param {PostQcindexDeleteReqType} data 请求参数
 * @returns {Promise<PostQcindexDeleteResType>} ajax
 */
const postQcindexDelete = (data: PostQcindexDeleteReqType): Promise<PostQcindexDeleteResType> => {
  return ajax({
    url: '/qcindex/delete',
    method: Method.POST
  }, data)
}

export type PostQcindexPageReqType = operations['QcIndex_QueryPage']['parameters']['body']['dto']
export type PostQcindexPageResType = definitions['LLPJsonResult[QcIndexInfoDto]']
/**
 * @description 查询检验指标分页数据
 * @param {PostQcindexPageReqType} data 请求参数
 * @returns {Promise<PostQcindexPageResType>} ajax
 */
const postQcindexPage = (data: PostQcindexPageReqType): Promise<PostQcindexPageResType> => {
  return ajax({
    url: '/qcindex/page',
    method: Method.POST
  }, data)
}

export type PostQcindexExportReqType = operations['QcIndex_ExportData']['parameters']['body']['dto']
export type PostQcindexExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostQcindexExportReqType} data 请求参数
 * @returns {Promise<PostQcindexExportResType>} ajax
 */
const postQcindexExport = (data: PostQcindexExportReqType): Promise<PostQcindexExportResType> => {
  return ajax({
    url: '/qcindex/export',
    method: Method.POST
  }, data)
}

export default {
  postQcindexSave,
  postQcindexDelete,
  postQcindexPage,
  postQcindexExport
}
