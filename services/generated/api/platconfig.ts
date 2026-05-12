import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostPlatconfigSaveReqType = operations['PlatConfig_Save']['parameters']['body']['dto']
export type PostPlatconfigSaveResType = definitions['LJsonResult']
/**
 * @description 保存
 * @param {PostPlatconfigSaveReqType} data 请求参数
 * @returns {Promise<PostPlatconfigSaveResType>} ajax
 */
const postPlatconfigSave = (data: PostPlatconfigSaveReqType): Promise<PostPlatconfigSaveResType> => {
  return ajax({
    url: '/platconfig/save',
    method: Method.POST
  }, data)
}

export type PostPlatconfigInfoReqType = operations['PlatConfig_QueryInfo']['parameters']['body']['dto']
export type PostPlatconfigInfoResType = definitions['LJsonResult[PlatConfigDto]']
/**
 * @description 明细
 * @param {PostPlatconfigInfoReqType} data 请求参数
 * @returns {Promise<PostPlatconfigInfoResType>} ajax
 */
const postPlatconfigInfo = (data: PostPlatconfigInfoReqType): Promise<PostPlatconfigInfoResType> => {
  return ajax({
    url: '/platconfig/info',
    method: Method.POST
  }, data)
}

export type PostPlatconfigListReqType = {}
export type PostPlatconfigListResType = definitions['LLJsonResult[PlatConfigDto]']
/**
 * @description 获取当前登录用户相关的所有配置列表
 * @param {PostPlatconfigListReqType} data 请求参数
 * @returns {Promise<PostPlatconfigListResType>} ajax
 */
const postPlatconfigList = (data: PostPlatconfigListReqType = {}): Promise<PostPlatconfigListResType> => {
  return ajax({
    url: '/platconfig/list',
    method: Method.POST
  }, data)
}

export default {
  postPlatconfigSave,
  postPlatconfigInfo,
  postPlatconfigList
}
