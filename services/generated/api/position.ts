import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostPositionInfoReqType = operations['Position_Info']['parameters']['body']['dto']
export type PostPositionInfoResType = definitions['LJsonResult[PositionInfoDto]']
/**
 * @description 货位档案信息
 * @param {PostPositionInfoReqType} data 请求参数
 * @returns {Promise<PostPositionInfoResType>} ajax
 */
const postPositionInfo = (data: PostPositionInfoReqType): Promise<PostPositionInfoResType> => {
  return ajax({
    url: '/position/info',
    method: Method.POST
  }, data)
}

export type PostPositionEditReqType = operations['Position_Edit']['parameters']['body']['dto']
export type PostPositionEditResType = definitions['LJsonResult']
/**
 * @description 货位档案保存/更新
 * @param {PostPositionEditReqType} data 请求参数
 * @returns {Promise<PostPositionEditResType>} ajax
 */
const postPositionEdit = (data: PostPositionEditReqType): Promise<PostPositionEditResType> => {
  return ajax({
    url: '/position/edit',
    method: Method.POST
  }, data)
}

export type PostPositionDeleteReqType = operations['Position_BlukDelete']['parameters']['body']['dto']
export type PostPositionDeleteResType = definitions['LJsonResult']
/**
 * @description 货位档案删除
 * @param {PostPositionDeleteReqType} data 请求参数
 * @returns {Promise<PostPositionDeleteResType>} ajax
 */
const postPositionDelete = (data: PostPositionDeleteReqType): Promise<PostPositionDeleteResType> => {
  return ajax({
    url: '/position/delete',
    method: Method.POST
  }, data)
}

export type PostPositionPageReqType = operations['Position_QueryPage']['parameters']['body']['dto']
export type PostPositionPageResType = definitions['LPJsonResult[List[PositionSaveDto]]']
/**
 * @description 查询货位分页数据
 * @param {PostPositionPageReqType} data 请求参数
 * @returns {Promise<PostPositionPageResType>} ajax
 */
const postPositionPage = (data: PostPositionPageReqType): Promise<PostPositionPageResType> => {
  return ajax({
    url: '/position/page',
    method: Method.POST
  }, data)
}

export type GetPositionQueryByWhCodeReqType = operations['Position_QueryByWhCode']['parameters']['query']
export type GetPositionQueryByWhCodeResType = definitions['LJsonResult[List[PositionSaveDto]]']
/**
 * @description 根据仓库编码查询绑定的货位信息
 * @param {GetPositionQueryByWhCodeReqType} data 请求参数
 * @returns {Promise<GetPositionQueryByWhCodeResType>} ajax
 */
const getPositionQueryByWhCode = (data: GetPositionQueryByWhCodeReqType): Promise<GetPositionQueryByWhCodeResType> => {
  return ajax({
    url: '/position/queryByWhCode',
    method: Method.GET
  }, data)
}

export type PostPositionDeleteRelaReqType = operations['Position_BlukDeleteRela']['parameters']['body']['dto']
export type PostPositionDeleteRelaResType = definitions['LJsonResult']
/**
 * @description 删除货位与仓库的绑定关系
 * @param {PostPositionDeleteRelaReqType} data 请求参数
 * @returns {Promise<PostPositionDeleteRelaResType>} ajax
 */
const postPositionDeleteRela = (data: PostPositionDeleteRelaReqType): Promise<PostPositionDeleteRelaResType> => {
  return ajax({
    url: '/position/deleteRela',
    method: Method.POST
  }, data)
}

export default {
  postPositionInfo,
  postPositionEdit,
  postPositionDelete,
  postPositionPage,
  getPositionQueryByWhCode,
  postPositionDeleteRela
}
