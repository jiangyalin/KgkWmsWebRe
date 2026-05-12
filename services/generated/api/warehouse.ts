import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostWarehouseInfoReqType = operations['Warehouse_Info']['parameters']['body']['dto']
export type PostWarehouseInfoResType = definitions['LJsonResult[WarehouseInfoDto]']
/**
 * @description 仓库档案信息
 * @param {PostWarehouseInfoReqType} data 请求参数
 * @returns {Promise<PostWarehouseInfoResType>} ajax
 */
const postWarehouseInfo = (data: PostWarehouseInfoReqType): Promise<PostWarehouseInfoResType> => {
  return ajax({
    url: '/warehouse/info',
    method: Method.POST
  }, data)
}

export type PostWarehouseEditReqType = operations['Warehouse_Edit']['parameters']['body']['dto']
export type PostWarehouseEditResType = definitions['LJsonResult']
/**
 * @description 仓库档案保存/更新
 * @param {PostWarehouseEditReqType} data 请求参数
 * @returns {Promise<PostWarehouseEditResType>} ajax
 */
const postWarehouseEdit = (data: PostWarehouseEditReqType): Promise<PostWarehouseEditResType> => {
  return ajax({
    url: '/warehouse/edit',
    method: Method.POST
  }, data)
}

export type PostWarehouseDeleteReqType = operations['Warehouse_BulkDelete']['parameters']['body']['dto']
export type PostWarehouseDeleteResType = definitions['LJsonResult']
/**
 * @description 仓库档案删除
 * @param {PostWarehouseDeleteReqType} data 请求参数
 * @returns {Promise<PostWarehouseDeleteResType>} ajax
 */
const postWarehouseDelete = (data: PostWarehouseDeleteReqType): Promise<PostWarehouseDeleteResType> => {
  return ajax({
    url: '/warehouse/delete',
    method: Method.POST
  }, data)
}

export type PostWarehousePageReqType = operations['Warehouse_QueryPage']['parameters']['body']['dto']
export type PostWarehousePageResType = definitions['LPJsonResult[List[WarehouseSaveWithBindDto]]']
/**
 * @description 查询仓库分页数据
 * @param {PostWarehousePageReqType} data 请求参数
 * @returns {Promise<PostWarehousePageResType>} ajax
 */
const postWarehousePage = (data: PostWarehousePageReqType): Promise<PostWarehousePageResType> => {
  return ajax({
    url: '/warehouse/page',
    method: Method.POST
  }, data)
}

export type PostWarehouseBindPageReqType = operations['Warehouse_QueryBindPage']['parameters']['body']['dto']
export type PostWarehouseBindPageResType = definitions['LPJsonResult[List[WarehouseMapInfoDto]]']
/**
 * @description 查询仓库绑定关系分页数据
 * @param {PostWarehouseBindPageReqType} data 请求参数
 * @returns {Promise<PostWarehouseBindPageResType>} ajax
 */
const postWarehouseBindPage = (data: PostWarehouseBindPageReqType): Promise<PostWarehouseBindPageResType> => {
  return ajax({
    url: '/warehouse/bind/page',
    method: Method.POST
  }, data)
}

export type PostWarehouseBindSaveReqType = operations['Warehouse_BindWarehouse']['parameters']['body']['dto']
export type PostWarehouseBindSaveResType = definitions['LJsonResult']
/**
 * @description 仓库绑定关系保存
 * @param {PostWarehouseBindSaveReqType} data 请求参数
 * @returns {Promise<PostWarehouseBindSaveResType>} ajax
 */
const postWarehouseBindSave = (data: PostWarehouseBindSaveReqType): Promise<PostWarehouseBindSaveResType> => {
  return ajax({
    url: '/warehouse/bind/save',
    method: Method.POST
  }, data)
}

export type PostWarehouseBindDeleteReqType = operations['Warehouse_UnbindWarehouse']['parameters']['body']['dto']
export type PostWarehouseBindDeleteResType = definitions['LJsonResult']
/**
 * @description 仓库档案绑定关系删除
 * @param {PostWarehouseBindDeleteReqType} data 请求参数
 * @returns {Promise<PostWarehouseBindDeleteResType>} ajax
 */
const postWarehouseBindDelete = (data: PostWarehouseBindDeleteReqType): Promise<PostWarehouseBindDeleteResType> => {
  return ajax({
    url: '/warehouse/bind/delete',
    method: Method.POST
  }, data)
}

export default {
  postWarehouseInfo,
  postWarehouseEdit,
  postWarehouseDelete,
  postWarehousePage,
  postWarehouseBindPage,
  postWarehouseBindSave,
  postWarehouseBindDelete
}
