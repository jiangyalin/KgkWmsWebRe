import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostWorkshopSaveReqType = operations['WorkShop_Save']['parameters']['body']['dto']
export type PostWorkshopSaveResType = definitions['LJsonResult']
/**
 * @description 车间保存
 * @param {PostWorkshopSaveReqType} data 请求参数
 * @returns {Promise<PostWorkshopSaveResType>} ajax
 */
const postWorkshopSave = (data: PostWorkshopSaveReqType): Promise<PostWorkshopSaveResType> => {
  return ajax({
    url: '/workshop/save',
    method: Method.POST
  }, data)
}

export type PostWorkshopDeleteReqType = operations['WorkShop_BlukDelete']['parameters']['body']['dto']
export type PostWorkshopDeleteResType = definitions['LJsonResult']
/**
 * @description 车间删除
 * @param {PostWorkshopDeleteReqType} data 请求参数
 * @returns {Promise<PostWorkshopDeleteResType>} ajax
 */
const postWorkshopDelete = (data: PostWorkshopDeleteReqType): Promise<PostWorkshopDeleteResType> => {
  return ajax({
    url: '/workshop/delete',
    method: Method.POST
  }, data)
}

export type PostWorkshopPageReqType = operations['WorkShop_QueryPage']['parameters']['body']['dto']
export type PostWorkshopPageResType = definitions['LPJsonResult[List[WorkShopInfoDto]]']
/**
 * @description 查询车间分页数据
 * @param {PostWorkshopPageReqType} data 请求参数
 * @returns {Promise<PostWorkshopPageResType>} ajax
 */
const postWorkshopPage = (data: PostWorkshopPageReqType): Promise<PostWorkshopPageResType> => {
  return ajax({
    url: '/workshop/page',
    method: Method.POST
  }, data)
}

export type PostWorkshopExportReqType = operations['WorkShop_ExportData']['parameters']['body']['dto']
export type PostWorkshopExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostWorkshopExportReqType} data 请求参数
 * @returns {Promise<PostWorkshopExportResType>} ajax
 */
const postWorkshopExport = (data: PostWorkshopExportReqType): Promise<PostWorkshopExportResType> => {
  return ajax({
    url: '/workshop/export',
    method: Method.POST
  }, data)
}

export type GetWorkshopSelectReqType = operations['WorkShop_QuerySelect']['parameters']['query']
export type GetWorkshopSelectResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询下拉列表数据
 * @param {GetWorkshopSelectReqType} data 请求参数
 * @returns {Promise<GetWorkshopSelectResType>} ajax
 */
const getWorkshopSelect = (data: GetWorkshopSelectReqType): Promise<GetWorkshopSelectResType> => {
  return ajax({
    url: '/workshop/select',
    method: Method.GET
  }, data)
}

export default {
  postWorkshopSave,
  postWorkshopDelete,
  postWorkshopPage,
  postWorkshopExport,
  getWorkshopSelect
}
