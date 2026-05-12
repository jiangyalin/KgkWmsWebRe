import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostWarehouseMapBindPosReqType = operations['WarehouseMap_BindPositionToWarehouse']['parameters']['body']['dto']
export type PostWarehouseMapBindPosResType = definitions['LJsonResult']
/**
 * @description 绑定货位到仓库
 * @param {PostWarehouseMapBindPosReqType} data 请求参数
 * @returns {Promise<PostWarehouseMapBindPosResType>} ajax
 */
const postWarehouseMapBindPos = (data: PostWarehouseMapBindPosReqType): Promise<PostWarehouseMapBindPosResType> => {
  return ajax({
    url: '/warehouseMap/bindPos',
    method: Method.POST
  }, data)
}

export type GetWarehouseMapFindByU8WhCodeReqType = operations['WarehouseMap_FindByU8WhCode']['parameters']['query']
export type GetWarehouseMapFindByU8WhCodeResType = definitions['LJsonResult[List[WarehouseSaveWithBindDto]]']
/**
 * @description 根据U8仓库编码查询仓库信息
 * @param {GetWarehouseMapFindByU8WhCodeReqType} data 请求参数
 * @returns {Promise<GetWarehouseMapFindByU8WhCodeResType>} ajax
 */
const getWarehouseMapFindByU8WhCode = (data: GetWarehouseMapFindByU8WhCodeReqType): Promise<GetWarehouseMapFindByU8WhCodeResType> => {
  return ajax({
    url: '/warehouseMap/findByU8WhCode',
    method: Method.GET
  }, data)
}

export default {
  postWarehouseMapBindPos,
  getWarehouseMapFindByU8WhCode
}
