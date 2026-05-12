import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostQcitemSaveReqType = operations['QcItem_Save']['parameters']['body']['dto']
export type PostQcitemSaveResType = definitions['LJsonResult']
/**
 * @description 检验项目保存
 * @param {PostQcitemSaveReqType} data 请求参数
 * @returns {Promise<PostQcitemSaveResType>} ajax
 */
const postQcitemSave = (data: PostQcitemSaveReqType): Promise<PostQcitemSaveResType> => {
  return ajax({
    url: '/qcitem/save',
    method: Method.POST
  }, data)
}

export type PostQcitemDeleteReqType = operations['QcItem_DicDataDel']['parameters']['body']['dto']
export type PostQcitemDeleteResType = definitions['LJsonResult']
/**
 * @description 检验项目删除
 * @param {PostQcitemDeleteReqType} data 请求参数
 * @returns {Promise<PostQcitemDeleteResType>} ajax
 */
const postQcitemDelete = (data: PostQcitemDeleteReqType): Promise<PostQcitemDeleteResType> => {
  return ajax({
    url: '/qcitem/delete',
    method: Method.POST
  }, data)
}

export type PostQcitemPageReqType = operations['QcItem_QueryPage']['parameters']['body']['dto']
export type PostQcitemPageResType = definitions['LLPJsonResult[QcItemInfoDto]']
/**
 * @description 查询检验项目分页数据
 * @param {PostQcitemPageReqType} data 请求参数
 * @returns {Promise<PostQcitemPageResType>} ajax
 */
const postQcitemPage = (data: PostQcitemPageReqType): Promise<PostQcitemPageResType> => {
  return ajax({
    url: '/qcitem/page',
    method: Method.POST
  }, data)
}

export type PostQcitemExportReqType = operations['QcItem_ExportData']['parameters']['body']['dto']
export type PostQcitemExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostQcitemExportReqType} data 请求参数
 * @returns {Promise<PostQcitemExportResType>} ajax
 */
const postQcitemExport = (data: PostQcitemExportReqType): Promise<PostQcitemExportResType> => {
  return ajax({
    url: '/qcitem/export',
    method: Method.POST
  }, data)
}

export default {
  postQcitemSave,
  postQcitemDelete,
  postQcitemPage,
  postQcitemExport
}
