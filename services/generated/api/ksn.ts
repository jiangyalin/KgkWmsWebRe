import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostKsnCanimportlistReqType = operations['KSN_QueryCanImportKsnVouchLists']['parameters']['body']['dto']
export type PostKsnCanimportlistResType = definitions['LLPJsonResult[CanImportKSNVouchListDto]']
/**
 * @description 查询可导入序列号记录列表
 * @param {PostKsnCanimportlistReqType} data 请求参数
 * @returns {Promise<PostKsnCanimportlistResType>} ajax
 */
const postKsnCanimportlist = (data: PostKsnCanimportlistReqType): Promise<PostKsnCanimportlistResType> => {
  return ajax({
    url: '/ksn/canimportlist',
    method: Method.POST
  }, data)
}

export type PostKsnPageReqType = operations['KSN_QueryKSNVouchList']['parameters']['body']['dto']
export type PostKsnPageResType = definitions['LLPJsonResult[KSNRecordListDto]']
/**
 * @description 查询单据手工序列号列表
 * @param {PostKsnPageReqType} data 请求参数
 * @returns {Promise<PostKsnPageResType>} ajax
 */
const postKsnPage = (data: PostKsnPageReqType): Promise<PostKsnPageResType> => {
  return ajax({
    url: '/ksn/page',
    method: Method.POST
  }, data)
}

export type PostKsnExportReqType = operations['KSN_ExportList']['parameters']['body']['dto']
export type PostKsnExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostKsnExportReqType} data 请求参数
 * @returns {Promise<PostKsnExportResType>} ajax
 */
const postKsnExport = (data: PostKsnExportReqType): Promise<PostKsnExportResType> => {
  return ajax({
    url: '/ksn/export',
    method: Method.POST
  }, data)
}

export type PostKsnExportCanImportListReqType = operations['KSN_ExportCanImportList']['parameters']['body']['dto']
export type PostKsnExportCanImportListResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostKsnExportCanImportListReqType} data 请求参数
 * @returns {Promise<PostKsnExportCanImportListResType>} ajax
 */
const postKsnExportCanImportList = (data: PostKsnExportCanImportListReqType): Promise<PostKsnExportCanImportListResType> => {
  return ajax({
    url: '/ksn/exportCanImportList',
    method: Method.POST
  }, data)
}

export type GetKsnOutstockcheckReqType = operations['KSN_KSNOutStockCheck']['parameters']['query']
export type GetKsnOutstockcheckResType = definitions['LJsonResult']
/**
 * @description 出库校验序列号是否已导入系统或已出库
 * @param {GetKsnOutstockcheckReqType} data 请求参数
 * @returns {Promise<GetKsnOutstockcheckResType>} ajax
 */
const getKsnOutstockcheck = (data: GetKsnOutstockcheckReqType): Promise<GetKsnOutstockcheckResType> => {
  return ajax({
    url: '/ksn/outstockcheck',
    method: Method.GET
  }, data)
}

export type PostKsnImportReqType = {}
export type PostKsnImportResType = definitions['LJsonResult']
/**
 * @description 数据导入
 * @param {PostKsnImportReqType} data 请求参数
 * @returns {Promise<PostKsnImportResType>} ajax
 */
const postKsnImport = (data: PostKsnImportReqType = {}): Promise<PostKsnImportResType> => {
  return ajax({
    url: '/ksn/import',
    method: Method.POST
  }, data)
}

export default {
  postKsnCanimportlist,
  postKsnPage,
  postKsnExport,
  postKsnExportCanImportList,
  getKsnOutstockcheck,
  postKsnImport
}
