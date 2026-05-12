import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostOperationSaveReqType = operations['Operation_Save']['parameters']['body']['dto']
export type PostOperationSaveResType = definitions['LJsonResult']
/**
 * @description 工序保存
 * @param {PostOperationSaveReqType} data 请求参数
 * @returns {Promise<PostOperationSaveResType>} ajax
 */
const postOperationSave = (data: PostOperationSaveReqType): Promise<PostOperationSaveResType> => {
  return ajax({
    url: '/operation/save',
    method: Method.POST
  }, data)
}

export type PostOperationDeleteReqType = operations['Operation_DicDataDel']['parameters']['body']['dto']
export type PostOperationDeleteResType = definitions['LJsonResult']
/**
 * @description 工序删除
 * @param {PostOperationDeleteReqType} data 请求参数
 * @returns {Promise<PostOperationDeleteResType>} ajax
 */
const postOperationDelete = (data: PostOperationDeleteReqType): Promise<PostOperationDeleteResType> => {
  return ajax({
    url: '/operation/delete',
    method: Method.POST
  }, data)
}

export type GetOperationInfoReqType = operations['Operation_QueryInfo']['parameters']['query']
export type GetOperationInfoResType = definitions['LJsonResult[OperationInfoDto]']
/**
 * @description 工序明细
 * @param {GetOperationInfoReqType} data 请求参数
 * @returns {Promise<GetOperationInfoResType>} ajax
 */
const getOperationInfo = (data: GetOperationInfoReqType): Promise<GetOperationInfoResType> => {
  return ajax({
    url: '/operation/info',
    method: Method.GET
  }, data)
}

export type PostOperationPageReqType = operations['Operation_QueryPage']['parameters']['body']['dto']
export type PostOperationPageResType = definitions['LPJsonResult[List[OperationInfoDto]]']
/**
 * @description 查询工序分页数据
 * @param {PostOperationPageReqType} data 请求参数
 * @returns {Promise<PostOperationPageResType>} ajax
 */
const postOperationPage = (data: PostOperationPageReqType): Promise<PostOperationPageResType> => {
  return ajax({
    url: '/operation/page',
    method: Method.POST
  }, data)
}

export default {
  postOperationSave,
  postOperationDelete,
  getOperationInfo,
  postOperationPage
}
