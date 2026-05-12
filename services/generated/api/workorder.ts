import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetWorkorderGetcodeReqType = operations['WorkOrder_GetNewCode']['parameters']['query']
export type GetWorkorderGetcodeResType = definitions['LJsonResult']
/**
 * @description 获取工单号
 * @param {GetWorkorderGetcodeReqType} data 请求参数
 * @returns {Promise<GetWorkorderGetcodeResType>} ajax
 */
const getWorkorderGetcode = (data: GetWorkorderGetcodeReqType): Promise<GetWorkorderGetcodeResType> => {
  return ajax({
    url: '/workorder/getcode',
    method: Method.GET
  }, data)
}

export type GetWorkorderCodesReqType = operations['WorkOrder_QueryCodes']['parameters']['query']
export type GetWorkorderCodesResType = definitions['LLJsonResult[BaseSelectDto]']
/**
 * @description 查询单号下拉列表
 * @param {GetWorkorderCodesReqType} data 请求参数
 * @returns {Promise<GetWorkorderCodesResType>} ajax
 */
const getWorkorderCodes = (data: GetWorkorderCodesReqType): Promise<GetWorkorderCodesResType> => {
  return ajax({
    url: '/workorder/codes',
    method: Method.GET
  }, data)
}

export type PostWorkorderSaveReqType = operations['WorkOrder_Save']['parameters']['body']['dto']
export type PostWorkorderSaveResType = definitions['LJsonResult']
/**
 * @description 工单保存
 * @param {PostWorkorderSaveReqType} data 请求参数
 * @returns {Promise<PostWorkorderSaveResType>} ajax
 */
const postWorkorderSave = (data: PostWorkorderSaveReqType): Promise<PostWorkorderSaveResType> => {
  return ajax({
    url: '/workorder/save',
    method: Method.POST
  }, data)
}

export type GetWorkorderWaitcountReqType = {}
export type GetWorkorderWaitcountResType = definitions['LJsonResult[Int32]']
/**
 * @description 查询待处理的工单数量
 * @param {GetWorkorderWaitcountReqType} data 请求参数
 * @returns {Promise<GetWorkorderWaitcountResType>} ajax
 */
const getWorkorderWaitcount = (data: GetWorkorderWaitcountReqType = {}): Promise<GetWorkorderWaitcountResType> => {
  return ajax({
    url: '/workorder/waitcount',
    method: Method.GET
  }, data)
}

export type PostWorkorderHandleReqType = operations['WorkOrder_HandleOrder']['parameters']['body']['dto']
export type PostWorkorderHandleResType = definitions['LJsonResult']
/**
 * @description 开始处理工单
 * @param {PostWorkorderHandleReqType} data 请求参数
 * @returns {Promise<PostWorkorderHandleResType>} ajax
 */
const postWorkorderHandle = (data: PostWorkorderHandleReqType): Promise<PostWorkorderHandleResType> => {
  return ajax({
    url: '/workorder/handle',
    method: Method.POST
  }, data)
}

export type PostWorkorderDoneReqType = operations['WorkOrder_WorkOrderDone']['parameters']['body']['dto']
export type PostWorkorderDoneResType = definitions['LJsonResult']
/**
 * @description 维修保养工单完工
 * @param {PostWorkorderDoneReqType} data 请求参数
 * @returns {Promise<PostWorkorderDoneResType>} ajax
 */
const postWorkorderDone = (data: PostWorkorderDoneReqType): Promise<PostWorkorderDoneResType> => {
  return ajax({
    url: '/workorder/done',
    method: Method.POST
  }, data)
}

export type PostWorkorderDeleteReqType = operations['WorkOrder_ShiftDel']['parameters']['body']['dto']
export type PostWorkorderDeleteResType = definitions['LJsonResult']
/**
 * @description 工单删除
 * @param {PostWorkorderDeleteReqType} data 请求参数
 * @returns {Promise<PostWorkorderDeleteResType>} ajax
 */
const postWorkorderDelete = (data: PostWorkorderDeleteReqType): Promise<PostWorkorderDeleteResType> => {
  return ajax({
    url: '/workorder/delete',
    method: Method.POST
  }, data)
}

export type PostWorkorderInfoReqType = operations['WorkOrder_QueryInfo']['parameters']['body']['dto']
export type PostWorkorderInfoResType = definitions['LJsonResult[WorkOrderInfoDto]']
/**
 * @description 工单明细
 * @param {PostWorkorderInfoReqType} data 请求参数
 * @returns {Promise<PostWorkorderInfoResType>} ajax
 */
const postWorkorderInfo = (data: PostWorkorderInfoReqType): Promise<PostWorkorderInfoResType> => {
  return ajax({
    url: '/workorder/info',
    method: Method.POST
  }, data)
}

export type PostWorkorderPageReqType = operations['WorkOrder_QueryPage']['parameters']['body']['dto']
export type PostWorkorderPageResType = definitions['LPJsonResult[List[WorkOrderListDto]]']
/**
 * @description 查询工单分页数据
 * @param {PostWorkorderPageReqType} data 请求参数
 * @returns {Promise<PostWorkorderPageResType>} ajax
 */
const postWorkorderPage = (data: PostWorkorderPageReqType): Promise<PostWorkorderPageResType> => {
  return ajax({
    url: '/workorder/page',
    method: Method.POST
  }, data)
}

export type PostWorkorderExportReqType = operations['WorkOrder_ExportData']['parameters']['body']['dto']
export type PostWorkorderExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostWorkorderExportReqType} data 请求参数
 * @returns {Promise<PostWorkorderExportResType>} ajax
 */
const postWorkorderExport = (data: PostWorkorderExportReqType): Promise<PostWorkorderExportResType> => {
  return ajax({
    url: '/workorder/export',
    method: Method.POST
  }, data)
}

export default {
  getWorkorderGetcode,
  getWorkorderCodes,
  postWorkorderSave,
  getWorkorderWaitcount,
  postWorkorderHandle,
  postWorkorderDone,
  postWorkorderDelete,
  postWorkorderInfo,
  postWorkorderPage,
  postWorkorderExport
}
