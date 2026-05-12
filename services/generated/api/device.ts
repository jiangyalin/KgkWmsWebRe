import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostDeviceSaveReqType = operations['Device_Save']['parameters']['body']['dto']
export type PostDeviceSaveResType = definitions['LJsonResult']
/**
 * @description 设备保存
 * @param {PostDeviceSaveReqType} data 请求参数
 * @returns {Promise<PostDeviceSaveResType>} ajax
 */
const postDeviceSave = (data: PostDeviceSaveReqType): Promise<PostDeviceSaveResType> => {
  return ajax({
    url: '/device/save',
    method: Method.POST
  }, data)
}

export type PostDeviceDeleteReqType = operations['Device_DicDataDel']['parameters']['body']['dto']
export type PostDeviceDeleteResType = definitions['LJsonResult']
/**
 * @description 设备删除
 * @param {PostDeviceDeleteReqType} data 请求参数
 * @returns {Promise<PostDeviceDeleteResType>} ajax
 */
const postDeviceDelete = (data: PostDeviceDeleteReqType): Promise<PostDeviceDeleteResType> => {
  return ajax({
    url: '/device/delete',
    method: Method.POST
  }, data)
}

export type GetDeviceInfoReqType = operations['Device_QueryInfo']['parameters']['query']
export type GetDeviceInfoResType = definitions['LJsonResult[DeviceInfoDto]']
/**
 * @description 设备明细
 * @param {GetDeviceInfoReqType} data 请求参数
 * @returns {Promise<GetDeviceInfoResType>} ajax
 */
const getDeviceInfo = (data: GetDeviceInfoReqType): Promise<GetDeviceInfoResType> => {
  return ajax({
    url: '/device/info',
    method: Method.GET
  }, data)
}

export type PostDevicePageReqType = operations['Device_QueryPage']['parameters']['body']['dto']
export type PostDevicePageResType = definitions['LPJsonResult[List[DeviceInfoDto]]']
/**
 * @description 查询设备分页数据
 * @param {PostDevicePageReqType} data 请求参数
 * @returns {Promise<PostDevicePageResType>} ajax
 */
const postDevicePage = (data: PostDevicePageReqType): Promise<PostDevicePageResType> => {
  return ajax({
    url: '/device/page',
    method: Method.POST
  }, data)
}

export type PostDeviceExportReqType = operations['Device_ExportData']['parameters']['body']['dto']
export type PostDeviceExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostDeviceExportReqType} data 请求参数
 * @returns {Promise<PostDeviceExportResType>} ajax
 */
const postDeviceExport = (data: PostDeviceExportReqType): Promise<PostDeviceExportResType> => {
  return ajax({
    url: '/device/export',
    method: Method.POST
  }, data)
}

export type GetDeviceTypetreeReqType = {}
export type GetDeviceTypetreeResType = definitions['LJsonResult[List[TreeSelectDto]]']
/**
 * @description 查询车间以及类型树
 * @param {GetDeviceTypetreeReqType} data 请求参数
 * @returns {Promise<GetDeviceTypetreeResType>} ajax
 */
const getDeviceTypetree = (data: GetDeviceTypetreeReqType = {}): Promise<GetDeviceTypetreeResType> => {
  return ajax({
    url: '/device/typetree',
    method: Method.GET
  }, data)
}

export type PostDeviceQueryWorkShopOpDeviceReqType = operations['Device_QueryWorkShopOpDevice']['parameters']['body']['dto']
export type PostDeviceQueryWorkShopOpDeviceResType = definitions['LLJsonResult[WorkShopOpDeviceDto]']
/**
 * @description 根据车间和工序查询设备
 * @param {PostDeviceQueryWorkShopOpDeviceReqType} data 请求参数
 * @returns {Promise<PostDeviceQueryWorkShopOpDeviceResType>} ajax
 */
const postDeviceQueryWorkShopOpDevice = (data: PostDeviceQueryWorkShopOpDeviceReqType): Promise<PostDeviceQueryWorkShopOpDeviceResType> => {
  return ajax({
    url: '/device/queryWorkShopOpDevice',
    method: Method.POST
  }, data)
}

export default {
  postDeviceSave,
  postDeviceDelete,
  getDeviceInfo,
  postDevicePage,
  postDeviceExport,
  getDeviceTypetree,
  postDeviceQueryWorkShopOpDevice
}
