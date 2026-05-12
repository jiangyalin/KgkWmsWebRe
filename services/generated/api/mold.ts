import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostMoldSaveReqType = operations['Mold_Save']['parameters']['body']['dto']
export type PostMoldSaveResType = definitions['LJsonResult']
/**
 * @description 模具保存
 * @param {PostMoldSaveReqType} data 请求参数
 * @returns {Promise<PostMoldSaveResType>} ajax
 */
const postMoldSave = (data: PostMoldSaveReqType): Promise<PostMoldSaveResType> => {
  return ajax({
    url: '/mold/save',
    method: Method.POST
  }, data)
}

export type PostMoldDeleteReqType = operations['Mold_DicDataDel']['parameters']['body']['dto']
export type PostMoldDeleteResType = definitions['LJsonResult']
/**
 * @description 模具删除
 * @param {PostMoldDeleteReqType} data 请求参数
 * @returns {Promise<PostMoldDeleteResType>} ajax
 */
const postMoldDelete = (data: PostMoldDeleteReqType): Promise<PostMoldDeleteResType> => {
  return ajax({
    url: '/mold/delete',
    method: Method.POST
  }, data)
}

export type GetMoldInfoReqType = operations['Mold_QueryInfo']['parameters']['query']
export type GetMoldInfoResType = definitions['LJsonResult[MoldInfoDto]']
/**
 * @description 模具明细
 * @param {GetMoldInfoReqType} data 请求参数
 * @returns {Promise<GetMoldInfoResType>} ajax
 */
const getMoldInfo = (data: GetMoldInfoReqType): Promise<GetMoldInfoResType> => {
  return ajax({
    url: '/mold/info',
    method: Method.GET
  }, data)
}

export type PostMoldPageReqType = operations['Mold_QueryPage']['parameters']['body']['dto']
export type PostMoldPageResType = definitions['LPJsonResult[List[MoldInfoDto]]']
/**
 * @description 查询模具分页数据
 * @param {PostMoldPageReqType} data 请求参数
 * @returns {Promise<PostMoldPageResType>} ajax
 */
const postMoldPage = (data: PostMoldPageReqType): Promise<PostMoldPageResType> => {
  return ajax({
    url: '/mold/page',
    method: Method.POST
  }, data)
}

export type PostMoldExportReqType = operations['Mold_ExportData']['parameters']['body']['dto']
export type PostMoldExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostMoldExportReqType} data 请求参数
 * @returns {Promise<PostMoldExportResType>} ajax
 */
const postMoldExport = (data: PostMoldExportReqType): Promise<PostMoldExportResType> => {
  return ajax({
    url: '/mold/export',
    method: Method.POST
  }, data)
}

export type PostMoldCodeviewReqType = operations['Mold_RawCode']['parameters']['body']['dto']
export type PostMoldCodeviewResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description 模具档案条码预览
 * @param {PostMoldCodeviewReqType} data 请求参数
 * @returns {Promise<PostMoldCodeviewResType>} ajax
 */
const postMoldCodeview = (data: PostMoldCodeviewReqType): Promise<PostMoldCodeviewResType> => {
  return ajax({
    url: '/mold/codeview',
    method: Method.POST
  }, data)
}

export type GetMoldTypetreeReqType = {}
export type GetMoldTypetreeResType = definitions['LJsonResult[List[TreeSelectDto]]']
/**
 * @description 查询车间以及类型树
 * @param {GetMoldTypetreeReqType} data 请求参数
 * @returns {Promise<GetMoldTypetreeResType>} ajax
 */
const getMoldTypetree = (data: GetMoldTypetreeReqType = {}): Promise<GetMoldTypetreeResType> => {
  return ajax({
    url: '/mold/typetree',
    method: Method.GET
  }, data)
}

export default {
  postMoldSave,
  postMoldDelete,
  getMoldInfo,
  postMoldPage,
  postMoldExport,
  postMoldCodeview,
  getMoldTypetree
}
