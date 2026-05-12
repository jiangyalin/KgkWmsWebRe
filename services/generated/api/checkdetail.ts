import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetCheckdetailCanchecktasknumsReqType = operations['CheckDetail_QueryCanCheckTaskNums']['parameters']['query']
export type GetCheckdetailCanchecktasknumsResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 获取可以进行盘点的任务号列表
 * @param {GetCheckdetailCanchecktasknumsReqType} data 请求参数
 * @returns {Promise<GetCheckdetailCanchecktasknumsResType>} ajax
 */
const getCheckdetailCanchecktasknums = (data: GetCheckdetailCanchecktasknumsReqType): Promise<GetCheckdetailCanchecktasknumsResType> => {
  return ajax({
    url: '/checkdetail/canchecktasknums',
    method: Method.GET
  }, data)
}

export type GetCheckdetailTasknumcheckReqType = operations['CheckDetail_TaskNumCheck']['parameters']['query']
export type GetCheckdetailTasknumcheckResType = definitions['LJsonResult']
/**
 * @description 盘点任务号校验
 * @param {GetCheckdetailTasknumcheckReqType} data 请求参数
 * @returns {Promise<GetCheckdetailTasknumcheckResType>} ajax
 */
const getCheckdetailTasknumcheck = (data: GetCheckdetailTasknumcheckReqType): Promise<GetCheckdetailTasknumcheckResType> => {
  return ajax({
    url: '/checkdetail/tasknumcheck',
    method: Method.GET
  }, data)
}

export type GetCheckdetailLabelnumcheckReqType = operations['CheckDetail_LabelNumCheck']['parameters']['query']
export type GetCheckdetailLabelnumcheckResType = definitions['LJsonResult']
/**
 * @description 标签号校验
 * @param {GetCheckdetailLabelnumcheckReqType} data 请求参数
 * @returns {Promise<GetCheckdetailLabelnumcheckResType>} ajax
 */
const getCheckdetailLabelnumcheck = (data: GetCheckdetailLabelnumcheckReqType): Promise<GetCheckdetailLabelnumcheckResType> => {
  return ajax({
    url: '/checkdetail/labelnumcheck',
    method: Method.GET
  }, data)
}

export type PostCheckdetailAddReqType = operations['CheckDetail_AddRecord']['parameters']['body']['dto']
export type PostCheckdetailAddResType = definitions['LJsonResult']
/**
 * @description 新建
 * @param {PostCheckdetailAddReqType} data 请求参数
 * @returns {Promise<PostCheckdetailAddResType>} ajax
 */
const postCheckdetailAdd = (data: PostCheckdetailAddReqType): Promise<PostCheckdetailAddResType> => {
  return ajax({
    url: '/checkdetail/add',
    method: Method.POST
  }, data)
}

export type PostCheckdetailUpdReqType = operations['CheckDetail_UpdRecord']['parameters']['body']['dto']
export type PostCheckdetailUpdResType = definitions['LJsonResult']
/**
 * @description 修改
 * @param {PostCheckdetailUpdReqType} data 请求参数
 * @returns {Promise<PostCheckdetailUpdResType>} ajax
 */
const postCheckdetailUpd = (data: PostCheckdetailUpdReqType): Promise<PostCheckdetailUpdResType> => {
  return ajax({
    url: '/checkdetail/upd',
    method: Method.POST
  }, data)
}

export type PostCheckdetailDeleteReqType = operations['CheckDetail_Delete']['parameters']['body']['dto']
export type PostCheckdetailDeleteResType = definitions['LJsonResult']
/**
 * @description 删除
 * @param {PostCheckdetailDeleteReqType} data 请求参数
 * @returns {Promise<PostCheckdetailDeleteResType>} ajax
 */
const postCheckdetailDelete = (data: PostCheckdetailDeleteReqType): Promise<PostCheckdetailDeleteResType> => {
  return ajax({
    url: '/checkdetail/delete',
    method: Method.POST
  }, data)
}

export type PostCheckdetailPdapageReqType = operations['CheckDetail_QueryPdaPage']['parameters']['body']['dto']
export type PostCheckdetailPdapageResType = definitions['LPJsonResult[List[CheckDetailBaseDto]]']
/**
 * @description 查询PDA盘点明细分页数据（只查自己的）
 * @param {PostCheckdetailPdapageReqType} data 请求参数
 * @returns {Promise<PostCheckdetailPdapageResType>} ajax
 */
const postCheckdetailPdapage = (data: PostCheckdetailPdapageReqType): Promise<PostCheckdetailPdapageResType> => {
  return ajax({
    url: '/checkdetail/pdapage',
    method: Method.POST
  }, data)
}

export type PostCheckdetailPageReqType = operations['CheckDetail_QueryPage']['parameters']['body']['dto']
export type PostCheckdetailPageResType = definitions['LPJsonResult[List[CheckDetailListDto]]']
/**
 * @description 查询盘点明细分页数据(PC端)
 * @param {PostCheckdetailPageReqType} data 请求参数
 * @returns {Promise<PostCheckdetailPageResType>} ajax
 */
const postCheckdetailPage = (data: PostCheckdetailPageReqType): Promise<PostCheckdetailPageResType> => {
  return ajax({
    url: '/checkdetail/page',
    method: Method.POST
  }, data)
}

export type GetCheckdetailExltmplReqType = {}
export type GetCheckdetailExltmplResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 获取盘点明细导入模板
 * @param {GetCheckdetailExltmplReqType} data 请求参数
 * @returns {Promise<GetCheckdetailExltmplResType>} ajax
 */
const getCheckdetailExltmpl = (data: GetCheckdetailExltmplReqType = {}): Promise<GetCheckdetailExltmplResType> => {
  return ajax({
    url: '/checkdetail/exltmpl',
    method: Method.GET
  }, data)
}

export type PostCheckdetailImportReqType = operations['CheckDetail_ImportData']['parameters']['query']
export type PostCheckdetailImportResType = definitions['LJsonResult']
/**
 * @description 盘点明细导入
 * @param {PostCheckdetailImportReqType} data 请求参数
 * @returns {Promise<PostCheckdetailImportResType>} ajax
 */
const postCheckdetailImport = (data: PostCheckdetailImportReqType): Promise<PostCheckdetailImportResType> => {
  return ajax({
    url: '/checkdetail/import',
    method: Method.POST
  }, data)
}

export type PostCheckdetailExportReqType = operations['CheckDetail_ExportData']['parameters']['body']['dto']
export type PostCheckdetailExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostCheckdetailExportReqType} data 请求参数
 * @returns {Promise<PostCheckdetailExportResType>} ajax
 */
const postCheckdetailExport = (data: PostCheckdetailExportReqType): Promise<PostCheckdetailExportResType> => {
  return ajax({
    url: '/checkdetail/export',
    method: Method.POST
  }, data)
}

export default {
  getCheckdetailCanchecktasknums,
  getCheckdetailTasknumcheck,
  getCheckdetailLabelnumcheck,
  postCheckdetailAdd,
  postCheckdetailUpd,
  postCheckdetailDelete,
  postCheckdetailPdapage,
  postCheckdetailPage,
  getCheckdetailExltmpl,
  postCheckdetailImport,
  postCheckdetailExport
}
