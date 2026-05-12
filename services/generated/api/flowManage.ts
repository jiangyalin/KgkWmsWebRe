import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetFlowManageFlowUsersReqType = operations['Flow_FlowUsers']['parameters']['query']
export type GetFlowManageFlowUsersResType = definitions['LJsonResult[List[UA_User]]']
/**
 * @description 转审和抄送的用户
 * @param {GetFlowManageFlowUsersReqType} data 请求参数
 * @returns {Promise<GetFlowManageFlowUsersResType>} ajax
 */
const getFlowManageFlowUsers = (data: GetFlowManageFlowUsersReqType): Promise<GetFlowManageFlowUsersResType> => {
  return ajax({
    url: '/flowManage/flowUsers',
    method: Method.GET
  }, data)
}

export type PostFlowManageFlowBatchAuditReqType = operations['Flow_BatchAudit']['parameters']['body']['input']
export type PostFlowManageFlowBatchAuditResType = definitions['LJsonResult']
/**
 * @description 流程批量审批
 * @param {PostFlowManageFlowBatchAuditReqType} data 请求参数
 * @returns {Promise<PostFlowManageFlowBatchAuditResType>} ajax
 */
const postFlowManageFlowBatchAudit = (data: PostFlowManageFlowBatchAuditReqType): Promise<PostFlowManageFlowBatchAuditResType> => {
  return ajax({
    url: '/flowManage/flowBatchAudit',
    method: Method.POST
  }, data)
}

export default {
  getFlowManageFlowUsers,
  postFlowManageFlowBatchAudit
}
