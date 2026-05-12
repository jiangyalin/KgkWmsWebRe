import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostShiftcalendarSaveReqType = operations['ShiftCalendar_Save']['parameters']['body']['dto']
export type PostShiftcalendarSaveResType = definitions['LJsonResult']
/**
 * @description 班次保存
 * @param {PostShiftcalendarSaveReqType} data 请求参数
 * @returns {Promise<PostShiftcalendarSaveResType>} ajax
 */
const postShiftcalendarSave = (data: PostShiftcalendarSaveReqType): Promise<PostShiftcalendarSaveResType> => {
  return ajax({
    url: '/shiftcalendar/save',
    method: Method.POST
  }, data)
}

export type PostShiftcalendarDeleteReqType = operations['ShiftCalendar_BlukDelete']['parameters']['body']['dto']
export type PostShiftcalendarDeleteResType = definitions['LJsonResult']
/**
 * @description 班次删除
 * @param {PostShiftcalendarDeleteReqType} data 请求参数
 * @returns {Promise<PostShiftcalendarDeleteResType>} ajax
 */
const postShiftcalendarDelete = (data: PostShiftcalendarDeleteReqType): Promise<PostShiftcalendarDeleteResType> => {
  return ajax({
    url: '/shiftcalendar/delete',
    method: Method.POST
  }, data)
}

export type PostShiftcalendarInfoReqType = operations['ShiftCalendar_QueryInfo']['parameters']['body']['dto']
export type PostShiftcalendarInfoResType = definitions['LJsonResult[ShiftCalendarInfoDto]']
/**
 * @description 明细
 * @param {PostShiftcalendarInfoReqType} data 请求参数
 * @returns {Promise<PostShiftcalendarInfoResType>} ajax
 */
const postShiftcalendarInfo = (data: PostShiftcalendarInfoReqType): Promise<PostShiftcalendarInfoResType> => {
  return ajax({
    url: '/shiftcalendar/info',
    method: Method.POST
  }, data)
}

export type PostShiftcalendarListReqType = operations['ShiftCalendar_QueryPage']['parameters']['body']['dto']
export type PostShiftcalendarListResType = definitions['LPJsonResult[List[ShiftCalendarListDto]]']
/**
 * @description 查询班次分页数据
 * @param {PostShiftcalendarListReqType} data 请求参数
 * @returns {Promise<PostShiftcalendarListResType>} ajax
 */
const postShiftcalendarList = (data: PostShiftcalendarListReqType): Promise<PostShiftcalendarListResType> => {
  return ajax({
    url: '/shiftcalendar/list',
    method: Method.POST
  }, data)
}

export type PostShiftcalendarExportReqType = operations['ShiftCalendar_ExportData']['parameters']['body']['dto']
export type PostShiftcalendarExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostShiftcalendarExportReqType} data 请求参数
 * @returns {Promise<PostShiftcalendarExportResType>} ajax
 */
const postShiftcalendarExport = (data: PostShiftcalendarExportReqType): Promise<PostShiftcalendarExportResType> => {
  return ajax({
    url: '/shiftcalendar/export',
    method: Method.POST
  }, data)
}

export default {
  postShiftcalendarSave,
  postShiftcalendarDelete,
  postShiftcalendarInfo,
  postShiftcalendarList,
  postShiftcalendarExport
}
