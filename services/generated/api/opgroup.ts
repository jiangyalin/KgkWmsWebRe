import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostOpgroupSaveReqType = operations['OpGroup_Save']['parameters']['body']['dto']
export type PostOpgroupSaveResType = definitions['LJsonResult']
/**
 * @description 工序组保存
 * @param {PostOpgroupSaveReqType} data 请求参数
 * @returns {Promise<PostOpgroupSaveResType>} ajax
 */
const postOpgroupSave = (data: PostOpgroupSaveReqType): Promise<PostOpgroupSaveResType> => {
  return ajax({
    url: '/opgroup/save',
    method: Method.POST
  }, data)
}

export type PostOpgroupDeleteReqType = operations['OpGroup_DicDataDel']['parameters']['body']['dto']
export type PostOpgroupDeleteResType = definitions['LJsonResult']
/**
 * @description 工序组删除
 * @param {PostOpgroupDeleteReqType} data 请求参数
 * @returns {Promise<PostOpgroupDeleteResType>} ajax
 */
const postOpgroupDelete = (data: PostOpgroupDeleteReqType): Promise<PostOpgroupDeleteResType> => {
  return ajax({
    url: '/opgroup/delete',
    method: Method.POST
  }, data)
}

export type PostOpgroupInfoReqType = operations['OpGroup_QueryInfo']['parameters']['body']['dto']
export type PostOpgroupInfoResType = definitions['LJsonResult[OpGroupInfoDto]']
/**
 * @description 工序组明细
 * @param {PostOpgroupInfoReqType} data 请求参数
 * @returns {Promise<PostOpgroupInfoResType>} ajax
 */
const postOpgroupInfo = (data: PostOpgroupInfoReqType): Promise<PostOpgroupInfoResType> => {
  return ajax({
    url: '/opgroup/info',
    method: Method.POST
  }, data)
}

export type PostOpgroupPageReqType = operations['OpGroup_QueryPage']['parameters']['body']['dto']
export type PostOpgroupPageResType = definitions['LPJsonResult[List[OpGroupListDto]]']
/**
 * @description 查询工序组分页数据
 * @param {PostOpgroupPageReqType} data 请求参数
 * @returns {Promise<PostOpgroupPageResType>} ajax
 */
const postOpgroupPage = (data: PostOpgroupPageReqType): Promise<PostOpgroupPageResType> => {
  return ajax({
    url: '/opgroup/page',
    method: Method.POST
  }, data)
}

export type GetOpgroupOplistReqType = operations['OpGroup_QueryDetailList']['parameters']['query']
export type GetOpgroupOplistResType = definitions['LJsonResult[List[OpGroupDetailDto]]']
/**
 * @description 根据工序组ID查询工序列表
 * @param {GetOpgroupOplistReqType} data 请求参数
 * @returns {Promise<GetOpgroupOplistResType>} ajax
 */
const getOpgroupOplist = (data: GetOpgroupOplistReqType): Promise<GetOpgroupOplistResType> => {
  return ajax({
    url: '/opgroup/oplist',
    method: Method.GET
  }, data)
}

export default {
  postOpgroupSave,
  postOpgroupDelete,
  postOpgroupInfo,
  postOpgroupPage,
  getOpgroupOplist
}
