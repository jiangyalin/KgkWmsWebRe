import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostTeamshiftSaveReqType = operations['TeamShift_Save']['parameters']['body']['dto']
export type PostTeamshiftSaveResType = definitions['LJsonResult']
/**
 * @description 班次保存
 * @param {PostTeamshiftSaveReqType} data 请求参数
 * @returns {Promise<PostTeamshiftSaveResType>} ajax
 */
const postTeamshiftSave = (data: PostTeamshiftSaveReqType): Promise<PostTeamshiftSaveResType> => {
  return ajax({
    url: '/teamshift/save',
    method: Method.POST
  }, data)
}

export type PostTeamshiftDeleteReqType = operations['TeamShift_BlukDelete']['parameters']['body']['dto']
export type PostTeamshiftDeleteResType = definitions['LJsonResult']
/**
 * @description 班次删除
 * @param {PostTeamshiftDeleteReqType} data 请求参数
 * @returns {Promise<PostTeamshiftDeleteResType>} ajax
 */
const postTeamshiftDelete = (data: PostTeamshiftDeleteReqType): Promise<PostTeamshiftDeleteResType> => {
  return ajax({
    url: '/teamshift/delete',
    method: Method.POST
  }, data)
}

export type PostTeamshiftPageReqType = operations['TeamShift_QueryPage']['parameters']['body']['dto']
export type PostTeamshiftPageResType = definitions['LPJsonResult[List[TeamShiftInfoDto]]']
/**
 * @description 查询班次分页数据
 * @param {PostTeamshiftPageReqType} data 请求参数
 * @returns {Promise<PostTeamshiftPageResType>} ajax
 */
const postTeamshiftPage = (data: PostTeamshiftPageReqType): Promise<PostTeamshiftPageResType> => {
  return ajax({
    url: '/teamshift/page',
    method: Method.POST
  }, data)
}

export type PostTeamshiftExportReqType = operations['TeamShift_ExportData']['parameters']['body']['dto']
export type PostTeamshiftExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostTeamshiftExportReqType} data 请求参数
 * @returns {Promise<PostTeamshiftExportResType>} ajax
 */
const postTeamshiftExport = (data: PostTeamshiftExportReqType): Promise<PostTeamshiftExportResType> => {
  return ajax({
    url: '/teamshift/export',
    method: Method.POST
  }, data)
}

export type GetTeamshiftSelectReqType = operations['TeamShift_QuerySelect']['parameters']['query']
export type GetTeamshiftSelectResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询下拉列表数据
 * @param {GetTeamshiftSelectReqType} data 请求参数
 * @returns {Promise<GetTeamshiftSelectResType>} ajax
 */
const getTeamshiftSelect = (data: GetTeamshiftSelectReqType): Promise<GetTeamshiftSelectResType> => {
  return ajax({
    url: '/teamshift/select',
    method: Method.GET
  }, data)
}

export default {
  postTeamshiftSave,
  postTeamshiftDelete,
  postTeamshiftPage,
  postTeamshiftExport,
  getTeamshiftSelect
}
