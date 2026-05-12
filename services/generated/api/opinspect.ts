import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostOpinspectQcactionReqType = operations['OpInspect_OpInspectQcAction']['parameters']['body']['dto']
export type PostOpinspectQcactionResType = definitions['LJsonResult']
/**
 * @description 工序检验操作
 * @param {PostOpinspectQcactionReqType} data 请求参数
 * @returns {Promise<PostOpinspectQcactionResType>} ajax
 */
const postOpinspectQcaction = (data: PostOpinspectQcactionReqType): Promise<PostOpinspectQcactionResType> => {
  return ajax({
    url: '/opinspect/qcaction',
    method: Method.POST
  }, data)
}

export type PostOpinspectTaskPageReqType = operations['OpInspect_QueryTaskPage']['parameters']['body']['dto']
export type PostOpinspectTaskPageResType = definitions['LLPJsonResult[OpInspectTaskListDto]']
/**
 * @description 查询检验任务分页数据
 * @param {PostOpinspectTaskPageReqType} data 请求参数
 * @returns {Promise<PostOpinspectTaskPageResType>} ajax
 */
const postOpinspectTaskPage = (data: PostOpinspectTaskPageReqType): Promise<PostOpinspectTaskPageResType> => {
  return ajax({
    url: '/opinspect/task/page',
    method: Method.POST
  }, data)
}

export type PostOpinspectTaskExportReqType = operations['OpInspect_ExportTaskData']['parameters']['body']['dto']
export type PostOpinspectTaskExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 检验任务数据导出
 * @param {PostOpinspectTaskExportReqType} data 请求参数
 * @returns {Promise<PostOpinspectTaskExportResType>} ajax
 */
const postOpinspectTaskExport = (data: PostOpinspectTaskExportReqType): Promise<PostOpinspectTaskExportResType> => {
  return ajax({
    url: '/opinspect/task/export',
    method: Method.POST
  }, data)
}

export default {
  postOpinspectQcaction,
  postOpinspectTaskPage,
  postOpinspectTaskExport
}
