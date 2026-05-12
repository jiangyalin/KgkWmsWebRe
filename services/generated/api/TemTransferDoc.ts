import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostTemTransferDocPageReqType = operations['TemTransferDoc_QueryPage']['parameters']['body']['dto']
export type PostTemTransferDocPageResType = definitions['LPJsonResult[List[TemTransferDocInfoDto]]']
/**
 * @description 查询借调单分页数据
 * @param {PostTemTransferDocPageReqType} data 请求参数
 * @returns {Promise<PostTemTransferDocPageResType>} ajax
 */
const postTemTransferDocPage = (data: PostTemTransferDocPageReqType): Promise<PostTemTransferDocPageResType> => {
  return ajax({
    url: '/TemTransferDoc/page',
    method: Method.POST
  }, data)
}

export type PostTemTransferDocSaveReqType = operations['TemTransferDoc_TemTransferDocSave']['parameters']['body']['dto']
export type PostTemTransferDocSaveResType = definitions['LJsonResult']
/**
 * @description 借调单保存
 * @param {PostTemTransferDocSaveReqType} data 请求参数
 * @returns {Promise<PostTemTransferDocSaveResType>} ajax
 */
const postTemTransferDocSave = (data: PostTemTransferDocSaveReqType): Promise<PostTemTransferDocSaveResType> => {
  return ajax({
    url: '/TemTransferDoc/save',
    method: Method.POST
  }, data)
}

export type PostTemTransferDocDelReqType = operations['TemTransferDoc_TemTransferDocDel']['parameters']['body']['dto']
export type PostTemTransferDocDelResType = definitions['LJsonResult']
/**
 * @description 借调单删除
 * @param {PostTemTransferDocDelReqType} data 请求参数
 * @returns {Promise<PostTemTransferDocDelResType>} ajax
 */
const postTemTransferDocDel = (data: PostTemTransferDocDelReqType): Promise<PostTemTransferDocDelResType> => {
  return ajax({
    url: '/TemTransferDoc/del',
    method: Method.POST
  }, data)
}

export type GetTemTransferDocInitReqType = {}
export type GetTemTransferDocInitResType = definitions['LJsonResult']
/**
 * @description 初始化
 * @param {GetTemTransferDocInitReqType} data 请求参数
 * @returns {Promise<GetTemTransferDocInitResType>} ajax
 */
const getTemTransferDocInit = (data: GetTemTransferDocInitReqType = {}): Promise<GetTemTransferDocInitResType> => {
  return ajax({
    url: '/TemTransferDoc/init',
    method: Method.GET
  }, data)
}

export type PostTemTransferDocExportReqType = operations['TemTransferDoc_ExportData']['parameters']['body']['dto']
export type PostTemTransferDocExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostTemTransferDocExportReqType} data 请求参数
 * @returns {Promise<PostTemTransferDocExportResType>} ajax
 */
const postTemTransferDocExport = (data: PostTemTransferDocExportReqType): Promise<PostTemTransferDocExportResType> => {
  return ajax({
    url: '/TemTransferDoc/export',
    method: Method.POST
  }, data)
}

export default {
  postTemTransferDocPage,
  postTemTransferDocSave,
  postTemTransferDocDel,
  getTemTransferDocInit,
  postTemTransferDocExport
}
