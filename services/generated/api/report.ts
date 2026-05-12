import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostReportMoldsReqType = operations['Report_QueryMoldReport']['parameters']['body']['dto']
export type PostReportMoldsResType = definitions['LPJsonResult[List[MoldReportDto]]']
/**
 * @description 查询模具报表数据
 * @param {PostReportMoldsReqType} data 请求参数
 * @returns {Promise<PostReportMoldsResType>} ajax
 */
const postReportMolds = (data: PostReportMoldsReqType): Promise<PostReportMoldsResType> => {
  return ajax({
    url: '/report/molds',
    method: Method.POST
  }, data)
}

export type PostReportDevicesReqType = operations['Report_QueryDeviceReport']['parameters']['body']['dto']
export type PostReportDevicesResType = definitions['LPJsonResult[List[DeviceReportDto]]']
/**
 * @description 查询设备报表数据
 * @param {PostReportDevicesReqType} data 请求参数
 * @returns {Promise<PostReportDevicesResType>} ajax
 */
const postReportDevices = (data: PostReportDevicesReqType): Promise<PostReportDevicesResType> => {
  return ajax({
    url: '/report/devices',
    method: Method.POST
  }, data)
}

export type PostReportMoopreportReqType = operations['Report_QueryMoOpReport']['parameters']['body']['dto']
export type PostReportMoopreportResType = definitions['LJsonResult[List[MoOpReportDto]]']
/**
 * @description 查询生产工序在制报表
 * @param {PostReportMoopreportReqType} data 请求参数
 * @returns {Promise<PostReportMoopreportResType>} ajax
 */
const postReportMoopreport = (data: PostReportMoopreportReqType): Promise<PostReportMoopreportResType> => {
  return ajax({
    url: '/report/moopreport',
    method: Method.POST
  }, data)
}

export type PostReportMoallcatesReqType = operations['Report_QueryMoAllcateLit']['parameters']['body']['dto']
export type PostReportMoallcatesResType = definitions['LJsonResult[List[MoAllcateCollectDto]]']
/**
 * @description 查询在制的生产订单自建领用列表
 * @param {PostReportMoallcatesReqType} data 请求参数
 * @returns {Promise<PostReportMoallcatesResType>} ajax
 */
const postReportMoallcates = (data: PostReportMoallcatesReqType): Promise<PostReportMoallcatesResType> => {
  return ajax({
    url: '/report/moallcates',
    method: Method.POST
  }, data)
}

export type PostReportPlanreportReqType = operations['Report_QueryPlanReport']['parameters']['body']['dto']
export type PostReportPlanreportResType = definitions['LJsonResult[List[MomPlanReportDto]]']
/**
 * @description 查询生产计划一览表
 * @param {PostReportPlanreportReqType} data 请求参数
 * @returns {Promise<PostReportPlanreportResType>} ajax
 */
const postReportPlanreport = (data: PostReportPlanreportReqType): Promise<PostReportPlanreportResType> => {
  return ajax({
    url: '/report/planreport',
    method: Method.POST
  }, data)
}

export default {
  postReportMolds,
  postReportDevices,
  postReportMoopreport,
  postReportMoallcates,
  postReportPlanreport
}
