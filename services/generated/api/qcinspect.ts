import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostQcinspectDeployPageReqType = operations['QcInspect_QueryDeployPage']['parameters']['body']['dto']
export type PostQcinspectDeployPageResType = definitions['LLPJsonResult[QcInspectDeployListDto]']
/**
 * @description 查询调度方案分页数据
 * @param {PostQcinspectDeployPageReqType} data 请求参数
 * @returns {Promise<PostQcinspectDeployPageResType>} ajax
 */
const postQcinspectDeployPage = (data: PostQcinspectDeployPageReqType): Promise<PostQcinspectDeployPageResType> => {
  return ajax({
    url: '/qcinspect/deploy/page',
    method: Method.POST
  }, data)
}

export type PostQcinspectDeploySaveReqType = operations['QcInspect_SaveQcInspectDeploy']['parameters']['body']['dto']
export type PostQcinspectDeploySaveResType = definitions['LJsonResult']
/**
 * @description 调度方案保存
 * @param {PostQcinspectDeploySaveReqType} data 请求参数
 * @returns {Promise<PostQcinspectDeploySaveResType>} ajax
 */
const postQcinspectDeploySave = (data: PostQcinspectDeploySaveReqType): Promise<PostQcinspectDeploySaveResType> => {
  return ajax({
    url: '/qcinspect/deploy/save',
    method: Method.POST
  }, data)
}

export type PostQcinspectDeployDelReqType = operations['QcInspect_DeployDel']['parameters']['body']['dto']
export type PostQcinspectDeployDelResType = definitions['LJsonResult']
/**
 * @description 调度方案删除
 * @param {PostQcinspectDeployDelReqType} data 请求参数
 * @returns {Promise<PostQcinspectDeployDelResType>} ajax
 */
const postQcinspectDeployDel = (data: PostQcinspectDeployDelReqType): Promise<PostQcinspectDeployDelResType> => {
  return ajax({
    url: '/qcinspect/deploy/del',
    method: Method.POST
  }, data)
}

export type PostQcinspectTaskPageReqType = operations['QcInspect_QueryTaskPage']['parameters']['body']['dto']
export type PostQcinspectTaskPageResType = definitions['LLPJsonResult[QcInspectTaskListDto]']
/**
 * @description 查询巡检任务分页数据
 * @param {PostQcinspectTaskPageReqType} data 请求参数
 * @returns {Promise<PostQcinspectTaskPageResType>} ajax
 */
const postQcinspectTaskPage = (data: PostQcinspectTaskPageReqType): Promise<PostQcinspectTaskPageResType> => {
  return ajax({
    url: '/qcinspect/task/page',
    method: Method.POST
  }, data)
}

export type PostQcinspectTaskSaveReqType = operations['QcInspect_SaveQcInspectTask']['parameters']['body']['dto']
export type PostQcinspectTaskSaveResType = definitions['LJsonResult']
/**
 * @description 巡检任务保存
 * @param {PostQcinspectTaskSaveReqType} data 请求参数
 * @returns {Promise<PostQcinspectTaskSaveResType>} ajax
 */
const postQcinspectTaskSave = (data: PostQcinspectTaskSaveReqType): Promise<PostQcinspectTaskSaveResType> => {
  return ajax({
    url: '/qcinspect/task/save',
    method: Method.POST
  }, data)
}

export type PostQcinspectTaskDelReqType = operations['QcInspect_TaskDel']['parameters']['body']['dto']
export type PostQcinspectTaskDelResType = definitions['LJsonResult']
/**
 * @description 巡检任务删除
 * @param {PostQcinspectTaskDelReqType} data 请求参数
 * @returns {Promise<PostQcinspectTaskDelResType>} ajax
 */
const postQcinspectTaskDel = (data: PostQcinspectTaskDelReqType): Promise<PostQcinspectTaskDelResType> => {
  return ajax({
    url: '/qcinspect/task/del',
    method: Method.POST
  }, data)
}

export type PostQcinspectTaskCloseReqType = operations['QcInspect_TaskClose']['parameters']['body']['dto']
export type PostQcinspectTaskCloseResType = definitions['LJsonResult']
/**
 * @description 巡检任务关闭
 * @param {PostQcinspectTaskCloseReqType} data 请求参数
 * @returns {Promise<PostQcinspectTaskCloseResType>} ajax
 */
const postQcinspectTaskClose = (data: PostQcinspectTaskCloseReqType): Promise<PostQcinspectTaskCloseResType> => {
  return ajax({
    url: '/qcinspect/task/close',
    method: Method.POST
  }, data)
}

export type PostQcinspectTaskInspectReqType = operations['QcInspect_TaskInspectFinlish']['parameters']['body']['dto']
export type PostQcinspectTaskInspectResType = definitions['LJsonResult']
/**
 * @description 巡检任务检验操作
 * @param {PostQcinspectTaskInspectReqType} data 请求参数
 * @returns {Promise<PostQcinspectTaskInspectResType>} ajax
 */
const postQcinspectTaskInspect = (data: PostQcinspectTaskInspectReqType): Promise<PostQcinspectTaskInspectResType> => {
  return ajax({
    url: '/qcinspect/task/inspect',
    method: Method.POST
  }, data)
}

export type GetQcinspectTaskQueryPlanFlowCardInfoReqType = operations['QcInspect_QueryPlanFlowCardInfo']['parameters']['query']
export type GetQcinspectTaskQueryPlanFlowCardInfoResType = definitions['LJsonResult[MomPlanFlowCardInfoDto]']
/**
 * @description 查询计划流转卡信息
 * @param {GetQcinspectTaskQueryPlanFlowCardInfoReqType} data 请求参数
 * @returns {Promise<GetQcinspectTaskQueryPlanFlowCardInfoResType>} ajax
 */
const getQcinspectTaskQueryPlanFlowCardInfo = (data: GetQcinspectTaskQueryPlanFlowCardInfoReqType): Promise<GetQcinspectTaskQueryPlanFlowCardInfoResType> => {
  return ajax({
    url: '/qcinspect/task/queryPlanFlowCardInfo',
    method: Method.GET
  }, data)
}

export type PostQcinspectTaskCodepageReqType = operations['QcInspect_QueryQcInspectTaskBarCodes']['parameters']['body']['dto']
export type PostQcinspectTaskCodepageResType = definitions['LLPJsonResult[QcInspectBarCodeInfoDto]']
/**
 * @description 查询巡检任务对应的巡检流转卡列表
 * @param {PostQcinspectTaskCodepageReqType} data 请求参数
 * @returns {Promise<PostQcinspectTaskCodepageResType>} ajax
 */
const postQcinspectTaskCodepage = (data: PostQcinspectTaskCodepageReqType): Promise<PostQcinspectTaskCodepageResType> => {
  return ajax({
    url: '/qcinspect/task/codepage',
    method: Method.POST
  }, data)
}

export default {
  postQcinspectDeployPage,
  postQcinspectDeploySave,
  postQcinspectDeployDel,
  postQcinspectTaskPage,
  postQcinspectTaskSave,
  postQcinspectTaskDel,
  postQcinspectTaskClose,
  postQcinspectTaskInspect,
  getQcinspectTaskQueryPlanFlowCardInfo,
  postQcinspectTaskCodepage
}
