import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostChecktaskSaveReqType = operations['CheckTask_Save']['parameters']['body']['dto']
export type PostChecktaskSaveResType = definitions['LJsonResult']
/**
 * @description 新建
 * @param {PostChecktaskSaveReqType} data 请求参数
 * @returns {Promise<PostChecktaskSaveResType>} ajax
 */
const postChecktaskSave = (data: PostChecktaskSaveReqType): Promise<PostChecktaskSaveResType> => {
  return ajax({
    url: '/checktask/save',
    method: Method.POST
  }, data)
}

export type PostChecktaskUpdtaskstateReqType = operations['CheckTask_UpdTaskState']['parameters']['body']['dto']
export type PostChecktaskUpdtaskstateResType = definitions['LJsonResult']
/**
 * @description 盘点任务状态修改
 * @param {PostChecktaskUpdtaskstateReqType} data 请求参数
 * @returns {Promise<PostChecktaskUpdtaskstateResType>} ajax
 */
const postChecktaskUpdtaskstate = (data: PostChecktaskUpdtaskstateReqType): Promise<PostChecktaskUpdtaskstateResType> => {
  return ajax({
    url: '/checktask/updtaskstate',
    method: Method.POST
  }, data)
}

export type PostChecktaskDeleteReqType = operations['CheckTask_Delete']['parameters']['body']['dto']
export type PostChecktaskDeleteResType = definitions['LJsonResult']
/**
 * @description 删除
 * @param {PostChecktaskDeleteReqType} data 请求参数
 * @returns {Promise<PostChecktaskDeleteResType>} ajax
 */
const postChecktaskDelete = (data: PostChecktaskDeleteReqType): Promise<PostChecktaskDeleteResType> => {
  return ajax({
    url: '/checktask/delete',
    method: Method.POST
  }, data)
}

export type GetChecktaskGettasknumReqType = {}
export type GetChecktaskGettasknumResType = definitions['LJsonResult']
/**
 * @description 获取任务号
 * @param {GetChecktaskGettasknumReqType} data 请求参数
 * @returns {Promise<GetChecktaskGettasknumResType>} ajax
 */
const getChecktaskGettasknum = (data: GetChecktaskGettasknumReqType = {}): Promise<GetChecktaskGettasknumResType> => {
  return ajax({
    url: '/checktask/gettasknum',
    method: Method.GET
  }, data)
}

export type PostChecktaskPageReqType = operations['CheckTask_QueryPage']['parameters']['body']['dto']
export type PostChecktaskPageResType = definitions['LPJsonResult[List[CheckTaskListDto]]']
/**
 * @description 查询盘点任务分页数据
 * @param {PostChecktaskPageReqType} data 请求参数
 * @returns {Promise<PostChecktaskPageResType>} ajax
 */
const postChecktaskPage = (data: PostChecktaskPageReqType): Promise<PostChecktaskPageResType> => {
  return ajax({
    url: '/checktask/page',
    method: Method.POST
  }, data)
}

export type GetChecktaskTasknumsReqType = operations['CheckTask_QueryTaskNumsSelect']['parameters']['query']
export type GetChecktaskTasknumsResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 盘点任务号下拉列表
 * @param {GetChecktaskTasknumsReqType} data 请求参数
 * @returns {Promise<GetChecktaskTasknumsResType>} ajax
 */
const getChecktaskTasknums = (data: GetChecktaskTasknumsReqType): Promise<GetChecktaskTasknumsResType> => {
  return ajax({
    url: '/checktask/tasknums',
    method: Method.GET
  }, data)
}

export default {
  postChecktaskSave,
  postChecktaskUpdtaskstate,
  postChecktaskDelete,
  getChecktaskGettasknum,
  postChecktaskPage,
  getChecktaskTasknums
}
