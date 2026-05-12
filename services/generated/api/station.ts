import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostStationSaveReqType = operations['Station_Save']['parameters']['body']['dto']
export type PostStationSaveResType = definitions['LJsonResult']
/**
 * @description 工位保存
 * @param {PostStationSaveReqType} data 请求参数
 * @returns {Promise<PostStationSaveResType>} ajax
 */
const postStationSave = (data: PostStationSaveReqType): Promise<PostStationSaveResType> => {
  return ajax({
    url: '/station/save',
    method: Method.POST
  }, data)
}

export type PostStationDeleteReqType = operations['Station_DicDataDel']['parameters']['body']['dto']
export type PostStationDeleteResType = definitions['LJsonResult']
/**
 * @description 工位删除
 * @param {PostStationDeleteReqType} data 请求参数
 * @returns {Promise<PostStationDeleteResType>} ajax
 */
const postStationDelete = (data: PostStationDeleteReqType): Promise<PostStationDeleteResType> => {
  return ajax({
    url: '/station/delete',
    method: Method.POST
  }, data)
}

export type PostStationPageReqType = operations['Station_QueryPage']['parameters']['body']['dto']
export type PostStationPageResType = definitions['LPJsonResult[List[StationInfoDto]]']
/**
 * @description 查询工位分页数据
 * @param {PostStationPageReqType} data 请求参数
 * @returns {Promise<PostStationPageResType>} ajax
 */
const postStationPage = (data: PostStationPageReqType): Promise<PostStationPageResType> => {
  return ajax({
    url: '/station/page',
    method: Method.POST
  }, data)
}

export default {
  postStationSave,
  postStationDelete,
  postStationPage
}
