import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSaletypeandmachinetypeSaveReqType = operations['SaleTypeAndMachineType_Save']['parameters']['body']['dto']
export type PostSaletypeandmachinetypeSaveResType = definitions['LJsonResult']
/**
 * @description 保存
 * @param {PostSaletypeandmachinetypeSaveReqType} data 请求参数
 * @returns {Promise<PostSaletypeandmachinetypeSaveResType>} ajax
 */
const postSaletypeandmachinetypeSave = (data: PostSaletypeandmachinetypeSaveReqType): Promise<PostSaletypeandmachinetypeSaveResType> => {
  return ajax({
    url: '/saletypeandmachinetype/save',
    method: Method.POST
  }, data)
}

export type PostSaletypeandmachinetypeDeleteReqType = operations['SaleTypeAndMachineType_BlukDelete']['parameters']['body']['dto']
export type PostSaletypeandmachinetypeDeleteResType = definitions['LJsonResult']
/**
 * @description 删除
 * @param {PostSaletypeandmachinetypeDeleteReqType} data 请求参数
 * @returns {Promise<PostSaletypeandmachinetypeDeleteResType>} ajax
 */
const postSaletypeandmachinetypeDelete = (data: PostSaletypeandmachinetypeDeleteReqType): Promise<PostSaletypeandmachinetypeDeleteResType> => {
  return ajax({
    url: '/saletypeandmachinetype/delete',
    method: Method.POST
  }, data)
}

export type PostSaletypeandmachinetypePageReqType = operations['SaleTypeAndMachineType_QueryPage']['parameters']['body']['dto']
export type PostSaletypeandmachinetypePageResType = definitions['LLPJsonResult[SaleTypeAndMachineTypeListDto]']
/**
 * @description 查询分页数据
 * @param {PostSaletypeandmachinetypePageReqType} data 请求参数
 * @returns {Promise<PostSaletypeandmachinetypePageResType>} ajax
 */
const postSaletypeandmachinetypePage = (data: PostSaletypeandmachinetypePageReqType): Promise<PostSaletypeandmachinetypePageResType> => {
  return ajax({
    url: '/saletypeandmachinetype/page',
    method: Method.POST
  }, data)
}

export type PostSaletypeandmachinetypeExportReqType = operations['SaleTypeAndMachineType_ExportData']['parameters']['body']['dto']
export type PostSaletypeandmachinetypeExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostSaletypeandmachinetypeExportReqType} data 请求参数
 * @returns {Promise<PostSaletypeandmachinetypeExportResType>} ajax
 */
const postSaletypeandmachinetypeExport = (data: PostSaletypeandmachinetypeExportReqType): Promise<PostSaletypeandmachinetypeExportResType> => {
  return ajax({
    url: '/saletypeandmachinetype/export',
    method: Method.POST
  }, data)
}

export type GetSaletypeandmachinetypeExltmplReqType = {}
export type GetSaletypeandmachinetypeExltmplResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 获取导入模板
 * @param {GetSaletypeandmachinetypeExltmplReqType} data 请求参数
 * @returns {Promise<GetSaletypeandmachinetypeExltmplResType>} ajax
 */
const getSaletypeandmachinetypeExltmpl = (data: GetSaletypeandmachinetypeExltmplReqType = {}): Promise<GetSaletypeandmachinetypeExltmplResType> => {
  return ajax({
    url: '/saletypeandmachinetype/exltmpl',
    method: Method.GET
  }, data)
}

export type PostSaletypeandmachinetypeImportReqType = {}
export type PostSaletypeandmachinetypeImportResType = definitions['LJsonResult']
/**
 * @description 数据导入
 * @param {PostSaletypeandmachinetypeImportReqType} data 请求参数
 * @returns {Promise<PostSaletypeandmachinetypeImportResType>} ajax
 */
const postSaletypeandmachinetypeImport = (data: PostSaletypeandmachinetypeImportReqType = {}): Promise<PostSaletypeandmachinetypeImportResType> => {
  return ajax({
    url: '/saletypeandmachinetype/import',
    method: Method.POST
  }, data)
}

export default {
  postSaletypeandmachinetypeSave,
  postSaletypeandmachinetypeDelete,
  postSaletypeandmachinetypePage,
  postSaletypeandmachinetypeExport,
  getSaletypeandmachinetypeExltmpl,
  postSaletypeandmachinetypeImport
}
