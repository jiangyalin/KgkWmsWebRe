import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostTaskListReqType = operations['Task_QueryTaskList']['parameters']['body']['dto']
export type PostTaskListResType = definitions['LJsonResult[List[TaskBaseDto]]']
/**
 * @description 查询任务列表
 * @param {PostTaskListReqType} data 请求参数
 * @returns {Promise<PostTaskListResType>} ajax
 */
const postTaskList = (data: PostTaskListReqType): Promise<PostTaskListResType> => {
  return ajax({
    url: '/task/list',
    method: Method.POST
  }, data)
}

export type PostTaskOpgroupselectReqType = operations['Task_QueryOpGroupSelect']['parameters']['body']['dto']
export type PostTaskOpgroupselectResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 获取任务对应的工序组下拉列表
 * @param {PostTaskOpgroupselectReqType} data 请求参数
 * @returns {Promise<PostTaskOpgroupselectResType>} ajax
 */
const postTaskOpgroupselect = (data: PostTaskOpgroupselectReqType): Promise<PostTaskOpgroupselectResType> => {
  return ajax({
    url: '/task/opgroupselect',
    method: Method.POST
  }, data)
}

export type PostTaskActionReqType = operations['Task_TaskAction']['parameters']['body']['dto']
export type PostTaskActionResType = definitions['LJsonResult']
/**
 * @description 任务操作
 * @param {PostTaskActionReqType} data 请求参数
 * @returns {Promise<PostTaskActionResType>} ajax
 */
const postTaskAction = (data: PostTaskActionReqType): Promise<PostTaskActionResType> => {
  return ajax({
    url: '/task/action',
    method: Method.POST
  }, data)
}

export default {
  postTaskList,
  postTaskOpgroupselect,
  postTaskAction
}
