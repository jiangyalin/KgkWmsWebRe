import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostQctaskPlistReqType = operations['QcTask_QueryQcTaskList']['parameters']['body']['dto']
export type PostQctaskPlistResType = definitions['LLPJsonResult[QcTaskListDto]']
/**
 * @description 查询检验任务列表
 * @param {PostQctaskPlistReqType} data 请求参数
 * @returns {Promise<PostQctaskPlistResType>} ajax
 */
const postQctaskPlist = (data: PostQctaskPlistReqType): Promise<PostQctaskPlistResType> => {
  return ajax({
    url: '/qctask/plist',
    method: Method.POST
  }, data)
}

export type GetQctaskGetqctaskitemsReqType = operations['QcTask_GetQcTaskItem']['parameters']['query']
export type GetQctaskGetqctaskitemsResType = definitions['LLJsonResult[QcTaskItemDto]']
/**
 * @description 根据检验任务获取对应检验方案下面的检验项目和指标
 * @param {GetQctaskGetqctaskitemsReqType} data 请求参数
 * @returns {Promise<GetQctaskGetqctaskitemsResType>} ajax
 */
const getQctaskGetqctaskitems = (data: GetQctaskGetqctaskitemsReqType): Promise<GetQctaskGetqctaskitemsResType> => {
  return ajax({
    url: '/qctask/getqctaskitems',
    method: Method.GET
  }, data)
}

export type PostQctaskInspectReqType = operations['QcTask_QcTaskInspect']['parameters']['body']['dto']
export type PostQctaskInspectResType = definitions['LJsonResult']
/**
 * @description 检验任务检验操作
 * @param {PostQctaskInspectReqType} data 请求参数
 * @returns {Promise<PostQctaskInspectResType>} ajax
 */
const postQctaskInspect = (data: PostQctaskInspectReqType): Promise<PostQctaskInspectResType> => {
  return ajax({
    url: '/qctask/inspect',
    method: Method.POST
  }, data)
}

export type PostQctaskRecordlistReqType = operations['QcTask_QueryQcRecordList']['parameters']['body']['dto']
export type PostQctaskRecordlistResType = definitions['LLPJsonResult[QcRecordListDto]']
/**
 * @description 查询检验记录列表
 * @param {PostQctaskRecordlistReqType} data 请求参数
 * @returns {Promise<PostQctaskRecordlistResType>} ajax
 */
const postQctaskRecordlist = (data: PostQctaskRecordlistReqType): Promise<PostQctaskRecordlistResType> => {
  return ajax({
    url: '/qctask/recordlist',
    method: Method.POST
  }, data)
}

export default {
  postQctaskPlist,
  getQctaskGetqctaskitems,
  postQctaskInspect,
  postQctaskRecordlist
}
