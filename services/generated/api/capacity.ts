import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostCapacitySaveReqType = operations['CapacityCompare_Save']['parameters']['body']['dto']
export type PostCapacitySaveResType = definitions['LJsonResult']
/**
 * @description 产品工序设备产能对照表保存
 * @param {PostCapacitySaveReqType} data 请求参数
 * @returns {Promise<PostCapacitySaveResType>} ajax
 */
const postCapacitySave = (data: PostCapacitySaveReqType): Promise<PostCapacitySaveResType> => {
  return ajax({
    url: '/capacity/save',
    method: Method.POST
  }, data)
}

export type PostCapacityDeleteReqType = operations['CapacityCompare_BlukDelete']['parameters']['body']['dto']
export type PostCapacityDeleteResType = definitions['LJsonResult']
/**
 * @description 产品工序设备产能对照表删除
 * @param {PostCapacityDeleteReqType} data 请求参数
 * @returns {Promise<PostCapacityDeleteResType>} ajax
 */
const postCapacityDelete = (data: PostCapacityDeleteReqType): Promise<PostCapacityDeleteResType> => {
  return ajax({
    url: '/capacity/delete',
    method: Method.POST
  }, data)
}

export type PostCapacityInfoReqType = operations['CapacityCompare_QueryInfo']['parameters']['body']['dto']
export type PostCapacityInfoResType = definitions['LJsonResult[CapacityCompareInfoDto]']
/**
 * @description 明细
 * @param {PostCapacityInfoReqType} data 请求参数
 * @returns {Promise<PostCapacityInfoResType>} ajax
 */
const postCapacityInfo = (data: PostCapacityInfoReqType): Promise<PostCapacityInfoResType> => {
  return ajax({
    url: '/capacity/info',
    method: Method.POST
  }, data)
}

export type PostCapacityDetailReqType = operations['CapacityCompare_QueryDetail']['parameters']['body']['dto']
export type PostCapacityDetailResType = definitions['LJsonResult[CapacityCompareInfoDto]']
/**
 * @description 明细
 * @param {PostCapacityDetailReqType} data 请求参数
 * @returns {Promise<PostCapacityDetailResType>} ajax
 */
const postCapacityDetail = (data: PostCapacityDetailReqType): Promise<PostCapacityDetailResType> => {
  return ajax({
    url: '/capacity/detail',
    method: Method.POST
  }, data)
}

export type GetCapacityCodesReqType = operations['CapacityCompare_QueryCodes']['parameters']['query']
export type GetCapacityCodesResType = definitions['LJsonResult[List[String]]']
/**
 * @description 查询单号下拉列表
 * @param {GetCapacityCodesReqType} data 请求参数
 * @returns {Promise<GetCapacityCodesResType>} ajax
 */
const getCapacityCodes = (data: GetCapacityCodesReqType): Promise<GetCapacityCodesResType> => {
  return ajax({
    url: '/capacity/codes',
    method: Method.GET
  }, data)
}

export type PostCapacityPageReqType = operations['CapacityCompare_QueryPage']['parameters']['body']['dto']
export type PostCapacityPageResType = definitions['LPJsonResult[List[CapacityCompareListDto]]']
/**
 * @description 查询产品工序设备产能对照表分页数据
 * @param {PostCapacityPageReqType} data 请求参数
 * @returns {Promise<PostCapacityPageResType>} ajax
 */
const postCapacityPage = (data: PostCapacityPageReqType): Promise<PostCapacityPageResType> => {
  return ajax({
    url: '/capacity/page',
    method: Method.POST
  }, data)
}

export type PostCapacityExportReqType = operations['CapacityCompare_ExportData']['parameters']['body']['dto']
export type PostCapacityExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostCapacityExportReqType} data 请求参数
 * @returns {Promise<PostCapacityExportResType>} ajax
 */
const postCapacityExport = (data: PostCapacityExportReqType): Promise<PostCapacityExportResType> => {
  return ajax({
    url: '/capacity/export',
    method: Method.POST
  }, data)
}

export default {
  postCapacitySave,
  postCapacityDelete,
  postCapacityInfo,
  postCapacityDetail,
  getCapacityCodes,
  postCapacityPage,
  postCapacityExport
}
