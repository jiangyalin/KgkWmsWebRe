import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostQcschemeSaveReqType = operations['QcScheme_Save']['parameters']['body']['dto']
export type PostQcschemeSaveResType = definitions['LJsonResult']
/**
 * @description 检验方案保存
 * @param {PostQcschemeSaveReqType} data 请求参数
 * @returns {Promise<PostQcschemeSaveResType>} ajax
 */
const postQcschemeSave = (data: PostQcschemeSaveReqType): Promise<PostQcschemeSaveResType> => {
  return ajax({
    url: '/qcscheme/save',
    method: Method.POST
  }, data)
}

export type PostQcschemeDeleteReqType = operations['QcScheme_DicDataDel']['parameters']['body']['dto']
export type PostQcschemeDeleteResType = definitions['LJsonResult']
/**
 * @description 检验方案删除
 * @param {PostQcschemeDeleteReqType} data 请求参数
 * @returns {Promise<PostQcschemeDeleteResType>} ajax
 */
const postQcschemeDelete = (data: PostQcschemeDeleteReqType): Promise<PostQcschemeDeleteResType> => {
  return ajax({
    url: '/qcscheme/delete',
    method: Method.POST
  }, data)
}

export type PostQcschemeInfoReqType = operations['QcScheme_QueryInfo']['parameters']['body']['dto']
export type PostQcschemeInfoResType = definitions['LJsonResult[QcSchemeInfoDto]']
/**
 * @description 检验方案明细
 * @param {PostQcschemeInfoReqType} data 请求参数
 * @returns {Promise<PostQcschemeInfoResType>} ajax
 */
const postQcschemeInfo = (data: PostQcschemeInfoReqType): Promise<PostQcschemeInfoResType> => {
  return ajax({
    url: '/qcscheme/info',
    method: Method.POST
  }, data)
}

export type PostQcschemePageReqType = operations['QcScheme_QueryPage']['parameters']['body']['dto']
export type PostQcschemePageResType = definitions['LLPJsonResult[QcSchemeListDto]']
/**
 * @description 查询检验方案分页数据
 * @param {PostQcschemePageReqType} data 请求参数
 * @returns {Promise<PostQcschemePageResType>} ajax
 */
const postQcschemePage = (data: PostQcschemePageReqType): Promise<PostQcschemePageResType> => {
  return ajax({
    url: '/qcscheme/page',
    method: Method.POST
  }, data)
}

export type PostQcschemeExportReqType = operations['QcScheme_ExportData']['parameters']['body']['dto']
export type PostQcschemeExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostQcschemeExportReqType} data 请求参数
 * @returns {Promise<PostQcschemeExportResType>} ajax
 */
const postQcschemeExport = (data: PostQcschemeExportReqType): Promise<PostQcschemeExportResType> => {
  return ajax({
    url: '/qcscheme/export',
    method: Method.POST
  }, data)
}

export type PostQcschemeSchemeandinvsaveReqType = operations['QcScheme_QcSchemeAndInvSave']['parameters']['body']['dto']
export type PostQcschemeSchemeandinvsaveResType = definitions['LJsonResult']
/**
 * @description 检验方案存货对照保存
 * @param {PostQcschemeSchemeandinvsaveReqType} data 请求参数
 * @returns {Promise<PostQcschemeSchemeandinvsaveResType>} ajax
 */
const postQcschemeSchemeandinvsave = (data: PostQcschemeSchemeandinvsaveReqType): Promise<PostQcschemeSchemeandinvsaveResType> => {
  return ajax({
    url: '/qcscheme/schemeandinvsave',
    method: Method.POST
  }, data)
}

export type PostQcschemeSchemeandinvdeleteReqType = operations['QcScheme_QcSchemeAndInvDelete']['parameters']['body']['dto']
export type PostQcschemeSchemeandinvdeleteResType = definitions['LJsonResult']
/**
 * @description 删除检验方案存货对照
 * @param {PostQcschemeSchemeandinvdeleteReqType} data 请求参数
 * @returns {Promise<PostQcschemeSchemeandinvdeleteResType>} ajax
 */
const postQcschemeSchemeandinvdelete = (data: PostQcschemeSchemeandinvdeleteReqType): Promise<PostQcschemeSchemeandinvdeleteResType> => {
  return ajax({
    url: '/qcscheme/schemeandinvdelete',
    method: Method.POST
  }, data)
}

export type PostQcschemeSchemeandinvpageReqType = operations['QcScheme_QueryQcSchemeMainList']['parameters']['body']['dto']
export type PostQcschemeSchemeandinvpageResType = definitions['LLPJsonResult[QcSchemeMainDto]']
/**
 * @description 查询检验方案存货对照分页数据
 * @param {PostQcschemeSchemeandinvpageReqType} data 请求参数
 * @returns {Promise<PostQcschemeSchemeandinvpageResType>} ajax
 */
const postQcschemeSchemeandinvpage = (data: PostQcschemeSchemeandinvpageReqType): Promise<PostQcschemeSchemeandinvpageResType> => {
  return ajax({
    url: '/qcscheme/schemeandinvpage',
    method: Method.POST
  }, data)
}

export default {
  postQcschemeSave,
  postQcschemeDelete,
  postQcschemeInfo,
  postQcschemePage,
  postQcschemeExport,
  postQcschemeSchemeandinvsave,
  postQcschemeSchemeandinvdelete,
  postQcschemeSchemeandinvpage
}
