import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostTrayInfoReqType = operations['Tray_Info']['parameters']['body']['dto']
export type PostTrayInfoResType = definitions['LJsonResult[TrayInfoDto]']
/**
 * @description 托盘信息
 * @param {PostTrayInfoReqType} data 请求参数
 * @returns {Promise<PostTrayInfoResType>} ajax
 */
const postTrayInfo = (data: PostTrayInfoReqType): Promise<PostTrayInfoResType> => {
  return ajax({
    url: '/tray/info',
    method: Method.POST
  }, data)
}

export type PostTrayEditReqType = operations['Tray_EditData']['parameters']['body']['dto']
export type PostTrayEditResType = definitions['LJsonResult']
/**
 * @description 托盘信息保存(修改)
 * @param {PostTrayEditReqType} data 请求参数
 * @returns {Promise<PostTrayEditResType>} ajax
 */
const postTrayEdit = (data: PostTrayEditReqType): Promise<PostTrayEditResType> => {
  return ajax({
    url: '/tray/edit',
    method: Method.POST
  }, data)
}

export type PostTrayDeleteReqType = operations['Tray_BlukDelete']['parameters']['body']['dto']
export type PostTrayDeleteResType = definitions['LJsonResult']
/**
 * @description 删除
 * @param {PostTrayDeleteReqType} data 请求参数
 * @returns {Promise<PostTrayDeleteResType>} ajax
 */
const postTrayDelete = (data: PostTrayDeleteReqType): Promise<PostTrayDeleteResType> => {
  return ajax({
    url: '/tray/delete',
    method: Method.POST
  }, data)
}

export type PostTrayPageReqType = operations['Tray_QueryPage']['parameters']['body']['dto']
export type PostTrayPageResType = definitions['LPJsonResult[List[TraySaveDto]]']
/**
 * @description 获取托盘分页数据
 * @param {PostTrayPageReqType} data 请求参数
 * @returns {Promise<PostTrayPageResType>} ajax
 */
const postTrayPage = (data: PostTrayPageReqType): Promise<PostTrayPageResType> => {
  return ajax({
    url: '/tray/page',
    method: Method.POST
  }, data)
}

export default {
  postTrayInfo,
  postTrayEdit,
  postTrayDelete,
  postTrayPage
}
