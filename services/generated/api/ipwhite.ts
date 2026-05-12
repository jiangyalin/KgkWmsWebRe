import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostIpwhiteSaveReqType = operations['SysIpWhite_SaveData']['parameters']['body']['dto']
export type PostIpwhiteSaveResType = definitions['LJsonResult']
/**
 * @description 保存
 * @param {PostIpwhiteSaveReqType} data 请求参数
 * @returns {Promise<PostIpwhiteSaveResType>} ajax
 */
const postIpwhiteSave = (data: PostIpwhiteSaveReqType): Promise<PostIpwhiteSaveResType> => {
  return ajax({
    url: '/ipwhite/save',
    method: Method.POST
  }, data)
}

export type PostIpwhiteDelReqType = operations['SysIpWhite_DeleteData']['parameters']['body']['dto']
export type PostIpwhiteDelResType = definitions['LJsonResult']
/**
 * @description 应用删除
 * @param {PostIpwhiteDelReqType} data 请求参数
 * @returns {Promise<PostIpwhiteDelResType>} ajax
 */
const postIpwhiteDel = (data: PostIpwhiteDelReqType): Promise<PostIpwhiteDelResType> => {
  return ajax({
    url: '/ipwhite/del',
    method: Method.POST
  }, data)
}

export type GetIpwhiteListReqType = operations['SysIpWhite_QueryList']['parameters']['query']
export type GetIpwhiteListResType = definitions['LJsonResult[List[SysIpWhiteListDto]]']
/**
 * @description 列表
 * @param {GetIpwhiteListReqType} data 请求参数
 * @returns {Promise<GetIpwhiteListResType>} ajax
 */
const getIpwhiteList = (data: GetIpwhiteListReqType): Promise<GetIpwhiteListResType> => {
  return ajax({
    url: '/ipwhite/list',
    method: Method.GET
  }, data)
}

export default {
  postIpwhiteSave,
  postIpwhiteDel,
  getIpwhiteList
}
