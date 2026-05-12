import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostWorkjobSaveReqType = operations['WorkJob_Save']['parameters']['body']['dto']
export type PostWorkjobSaveResType = definitions['LJsonResult']
/**
 * @description 作业单保存
 * @param {PostWorkjobSaveReqType} data 请求参数
 * @returns {Promise<PostWorkjobSaveResType>} ajax
 */
const postWorkjobSave = (data: PostWorkjobSaveReqType): Promise<PostWorkjobSaveResType> => {
  return ajax({
    url: '/workjob/save',
    method: Method.POST
  }, data)
}

export type PostWorkjobDeleteReqType = operations['WorkJob_ShiftDel']['parameters']['body']['dto']
export type PostWorkjobDeleteResType = definitions['LJsonResult']
/**
 * @description 作业单删除
 * @param {PostWorkjobDeleteReqType} data 请求参数
 * @returns {Promise<PostWorkjobDeleteResType>} ajax
 */
const postWorkjobDelete = (data: PostWorkjobDeleteReqType): Promise<PostWorkjobDeleteResType> => {
  return ajax({
    url: '/workjob/delete',
    method: Method.POST
  }, data)
}

export type GetWorkjobInfoReqType = operations['WorkJob_QueryInfo']['parameters']['query']
export type GetWorkjobInfoResType = definitions['LJsonResult[WorkJobInfoDto]']
/**
 * @description 作业单明细
 * @param {GetWorkjobInfoReqType} data 请求参数
 * @returns {Promise<GetWorkjobInfoResType>} ajax
 */
const getWorkjobInfo = (data: GetWorkjobInfoReqType): Promise<GetWorkjobInfoResType> => {
  return ajax({
    url: '/workjob/info',
    method: Method.GET
  }, data)
}

export type PostWorkjobPageReqType = operations['WorkJob_QueryPage']['parameters']['body']['dto']
export type PostWorkjobPageResType = definitions['LPJsonResult[List[WorkJobInfoDto]]']
/**
 * @description 查询作业单分页数据
 * @param {PostWorkjobPageReqType} data 请求参数
 * @returns {Promise<PostWorkjobPageResType>} ajax
 */
const postWorkjobPage = (data: PostWorkjobPageReqType): Promise<PostWorkjobPageResType> => {
  return ajax({
    url: '/workjob/page',
    method: Method.POST
  }, data)
}

export type GetWorkjobGetcodeReqType = {}
export type GetWorkjobGetcodeResType = definitions['LJsonResult']
/**
 * @description 获取作业单号
 * @param {GetWorkjobGetcodeReqType} data 请求参数
 * @returns {Promise<GetWorkjobGetcodeResType>} ajax
 */
const getWorkjobGetcode = (data: GetWorkjobGetcodeReqType = {}): Promise<GetWorkjobGetcodeResType> => {
  return ajax({
    url: '/workjob/getcode',
    method: Method.GET
  }, data)
}

export type PostWorkjobActionReqType = operations['WorkJob_TaskAction']['parameters']['body']['dto']
export type PostWorkjobActionResType = definitions['LJsonResult']
/**
 * @description 操作
 * @param {PostWorkjobActionReqType} data 请求参数
 * @returns {Promise<PostWorkjobActionResType>} ajax
 */
const postWorkjobAction = (data: PostWorkjobActionReqType): Promise<PostWorkjobActionResType> => {
  return ajax({
    url: '/workjob/action',
    method: Method.POST
  }, data)
}

export type PostWorkjobExportReqType = operations['WorkJob_ExportData']['parameters']['body']['dto']
export type PostWorkjobExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostWorkjobExportReqType} data 请求参数
 * @returns {Promise<PostWorkjobExportResType>} ajax
 */
const postWorkjobExport = (data: PostWorkjobExportReqType): Promise<PostWorkjobExportResType> => {
  return ajax({
    url: '/workjob/export',
    method: Method.POST
  }, data)
}

export default {
  postWorkjobSave,
  postWorkjobDelete,
  getWorkjobInfo,
  postWorkjobPage,
  getWorkjobGetcode,
  postWorkjobAction,
  postWorkjobExport
}
