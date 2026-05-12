import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSysappSaveReqType = operations['SysApp_SaveData']['parameters']['body']['dto']
export type PostSysappSaveResType = definitions['LJsonResult']
/**
 * @description 系统应用保存
 * @param {PostSysappSaveReqType} data 请求参数
 * @returns {Promise<PostSysappSaveResType>} ajax
 */
const postSysappSave = (data: PostSysappSaveReqType): Promise<PostSysappSaveResType> => {
  return ajax({
    url: '/sysapp/save',
    method: Method.POST
  }, data)
}

export type PostSysappDelReqType = operations['SysApp_DeleteData']['parameters']['body']['dto']
export type PostSysappDelResType = definitions['LJsonResult']
/**
 * @description 应用删除
 * @param {PostSysappDelReqType} data 请求参数
 * @returns {Promise<PostSysappDelResType>} ajax
 */
const postSysappDel = (data: PostSysappDelReqType): Promise<PostSysappDelResType> => {
  return ajax({
    url: '/sysapp/del',
    method: Method.POST
  }, data)
}

export type GetSysappListReqType = operations['SysApp_QueryList']['parameters']['query']
export type GetSysappListResType = definitions['LJsonResult[List[SysAppBaseDto]]']
/**
 * @description 应用列表
 * @param {GetSysappListReqType} data 请求参数
 * @returns {Promise<GetSysappListResType>} ajax
 */
const getSysappList = (data: GetSysappListReqType): Promise<GetSysappListResType> => {
  return ajax({
    url: '/sysapp/list',
    method: Method.GET
  }, data)
}

export default {
  postSysappSave,
  postSysappDel,
  getSysappList
}
