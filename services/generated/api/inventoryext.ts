import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostInventoryextSaveReqType = operations['InventoryExt_Save']['parameters']['body']['dto']
export type PostInventoryextSaveResType = definitions['LJsonResult']
/**
 * @description 保存(更新)存货扩展信息
 * @param {PostInventoryextSaveReqType} data 请求参数
 * @returns {Promise<PostInventoryextSaveResType>} ajax
 */
const postInventoryextSave = (data: PostInventoryextSaveReqType): Promise<PostInventoryextSaveResType> => {
  return ajax({
    url: '/inventoryext/save',
    method: Method.POST
  }, data)
}

export type PostInventoryextCancelmanageReqType = operations['InventoryExt_CancelManage']['parameters']['body']['dto']
export type PostInventoryextCancelmanageResType = definitions['LJsonResult']
/**
 * @description 去批次/保质期管理
 * @param {PostInventoryextCancelmanageReqType} data 请求参数
 * @returns {Promise<PostInventoryextCancelmanageResType>} ajax
 */
const postInventoryextCancelmanage = (data: PostInventoryextCancelmanageReqType): Promise<PostInventoryextCancelmanageResType> => {
  return ajax({
    url: '/inventoryext/cancelmanage',
    method: Method.POST
  }, data)
}

export default {
  postInventoryextSave,
  postInventoryextCancelmanage
}
