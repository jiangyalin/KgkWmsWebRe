import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostLeavedocPageReqType = operations['LeaveDoc_QueryPage']['parameters']['body']['dto']
export type PostLeavedocPageResType = definitions['LPJsonResult[List[LeaveDocInfoDto]]']
/**
 * @description 查询请假单分页数据
 * @param {PostLeavedocPageReqType} data 请求参数
 * @returns {Promise<PostLeavedocPageResType>} ajax
 */
const postLeavedocPage = (data: PostLeavedocPageReqType): Promise<PostLeavedocPageResType> => {
  return ajax({
    url: '/leavedoc/page',
    method: Method.POST
  }, data)
}

export type PostLeavedocSaveReqType = operations['LeaveDoc_LeaveDocSave']['parameters']['body']['dto']
export type PostLeavedocSaveResType = definitions['LJsonResult']
/**
 * @description 请假单保存
 * @param {PostLeavedocSaveReqType} data 请求参数
 * @returns {Promise<PostLeavedocSaveResType>} ajax
 */
const postLeavedocSave = (data: PostLeavedocSaveReqType): Promise<PostLeavedocSaveResType> => {
  return ajax({
    url: '/leavedoc/save',
    method: Method.POST
  }, data)
}

export type PostLeavedocDelReqType = operations['LeaveDoc_LeaveDocDel']['parameters']['body']['dto']
export type PostLeavedocDelResType = definitions['LJsonResult']
/**
 * @description 请假单删除
 * @param {PostLeavedocDelReqType} data 请求参数
 * @returns {Promise<PostLeavedocDelResType>} ajax
 */
const postLeavedocDel = (data: PostLeavedocDelReqType): Promise<PostLeavedocDelResType> => {
  return ajax({
    url: '/leavedoc/del',
    method: Method.POST
  }, data)
}

export type GetLeavedocInitReqType = {}
export type GetLeavedocInitResType = definitions['LJsonResult']
/**
 * @description 初始化
 * @param {GetLeavedocInitReqType} data 请求参数
 * @returns {Promise<GetLeavedocInitResType>} ajax
 */
const getLeavedocInit = (data: GetLeavedocInitReqType = {}): Promise<GetLeavedocInitResType> => {
  return ajax({
    url: '/leavedoc/init',
    method: Method.GET
  }, data)
}

export type PostLeavedocExportReqType = operations['LeaveDoc_ExportData']['parameters']['body']['dto']
export type PostLeavedocExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostLeavedocExportReqType} data 请求参数
 * @returns {Promise<PostLeavedocExportResType>} ajax
 */
const postLeavedocExport = (data: PostLeavedocExportReqType): Promise<PostLeavedocExportResType> => {
  return ajax({
    url: '/leavedoc/export',
    method: Method.POST
  }, data)
}

export default {
  postLeavedocPage,
  postLeavedocSave,
  postLeavedocDel,
  getLeavedocInit,
  postLeavedocExport
}
