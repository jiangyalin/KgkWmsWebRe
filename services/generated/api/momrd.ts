import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostMomrdRdinfoReqType = operations['MomRd_QueryMomRdInfo']['parameters']['query']
export type PostMomrdRdinfoResType = definitions['LLJsonResult[MomRdInfoDto]']
/**
 * @description 查询入库单明细列表
 * @param {PostMomrdRdinfoReqType} data 请求参数
 * @returns {Promise<PostMomrdRdinfoResType>} ajax
 */
const postMomrdRdinfo = (data: PostMomrdRdinfoReqType): Promise<PostMomrdRdinfoResType> => {
  return ajax({
    url: '/momrd/rdinfo',
    method: Method.POST
  }, data)
}

export type GetMomrdWaitauditlistReqType = operations['MomRd_QueryMomRdWaitAuditList']['parameters']['query']
export type GetMomrdWaitauditlistResType = definitions['LLJsonResult[MomRdWaitAuditListDto]']
/**
 * @description 查询未审核的产成品入库列表
 * @param {GetMomrdWaitauditlistReqType} data 请求参数
 * @returns {Promise<GetMomrdWaitauditlistResType>} ajax
 */
const getMomrdWaitauditlist = (data: GetMomrdWaitauditlistReqType): Promise<GetMomrdWaitauditlistResType> => {
  return ajax({
    url: '/momrd/waitauditlist',
    method: Method.GET
  }, data)
}

export type PostMomrdAuditReqType = operations['MomRd_MomRdAudit']['parameters']['body']['dto']
export type PostMomrdAuditResType = definitions['LJsonResult']
/**
 * @description 审核入库单
 * @param {PostMomrdAuditReqType} data 请求参数
 * @returns {Promise<PostMomrdAuditResType>} ajax
 */
const postMomrdAudit = (data: PostMomrdAuditReqType): Promise<PostMomrdAuditResType> => {
  return ajax({
    url: '/momrd/audit',
    method: Method.POST
  }, data)
}

export default {
  postMomrdRdinfo,
  getMomrdWaitauditlist,
  postMomrdAudit
}
