import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostMeterequSaveReqType = operations['MeterEqu_Save']['parameters']['body']['dto']
export type PostMeterequSaveResType = definitions['LJsonResult']
/**
 * @description 称重设备保存
 * @param {PostMeterequSaveReqType} data 请求参数
 * @returns {Promise<PostMeterequSaveResType>} ajax
 */
const postMeterequSave = (data: PostMeterequSaveReqType): Promise<PostMeterequSaveResType> => {
  return ajax({
    url: '/meterequ/save',
    method: Method.POST
  }, data)
}

export type PostMeterequDeleteReqType = operations['MeterEqu_DicDataDel']['parameters']['body']['dto']
export type PostMeterequDeleteResType = definitions['LJsonResult']
/**
 * @description 称重设备删除
 * @param {PostMeterequDeleteReqType} data 请求参数
 * @returns {Promise<PostMeterequDeleteResType>} ajax
 */
const postMeterequDelete = (data: PostMeterequDeleteReqType): Promise<PostMeterequDeleteResType> => {
  return ajax({
    url: '/meterequ/delete',
    method: Method.POST
  }, data)
}

export type GetMeterequInfoReqType = operations['MeterEqu_QueryInfo']['parameters']['query']
export type GetMeterequInfoResType = definitions['LJsonResult[MeterEquInfoDto]']
/**
 * @description 称重设备明细
 * @param {GetMeterequInfoReqType} data 请求参数
 * @returns {Promise<GetMeterequInfoResType>} ajax
 */
const getMeterequInfo = (data: GetMeterequInfoReqType): Promise<GetMeterequInfoResType> => {
  return ajax({
    url: '/meterequ/info',
    method: Method.GET
  }, data)
}

export type PostMeterequPageReqType = operations['MeterEqu_QueryPage']['parameters']['body']['dto']
export type PostMeterequPageResType = definitions['LPJsonResult[List[MeterEquInfoDto]]']
/**
 * @description 查询称重设备分页数据
 * @param {PostMeterequPageReqType} data 请求参数
 * @returns {Promise<PostMeterequPageResType>} ajax
 */
const postMeterequPage = (data: PostMeterequPageReqType): Promise<PostMeterequPageResType> => {
  return ajax({
    url: '/meterequ/page',
    method: Method.POST
  }, data)
}

export type PostMeterequExportReqType = operations['MeterEqu_ExportData']['parameters']['body']['dto']
export type PostMeterequExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostMeterequExportReqType} data 请求参数
 * @returns {Promise<PostMeterequExportResType>} ajax
 */
const postMeterequExport = (data: PostMeterequExportReqType): Promise<PostMeterequExportResType> => {
  return ajax({
    url: '/meterequ/export',
    method: Method.POST
  }, data)
}

export type PostMeterequEqudataReqType = operations['MeterEqu_QueryEquData']['parameters']['body']['dto']
export type PostMeterequEqudataResType = definitions['LJsonResult[Decimal]']
/**
 * @description 查询称重设备数据
 * @param {PostMeterequEqudataReqType} data 请求参数
 * @returns {Promise<PostMeterequEqudataResType>} ajax
 */
const postMeterequEqudata = (data: PostMeterequEqudataReqType): Promise<PostMeterequEqudataResType> => {
  return ajax({
    url: '/meterequ/equdata',
    method: Method.POST
  }, data)
}

export default {
  postMeterequSave,
  postMeterequDelete,
  getMeterequInfo,
  postMeterequPage,
  postMeterequExport,
  postMeterequEqudata
}
