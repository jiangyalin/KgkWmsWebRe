import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostWorkhourPageReqType = operations['WorkHour_QueryWorkHours']['parameters']['body']['dto']
export type PostWorkhourPageResType = definitions['LPJsonResult[List[WorkHourListDto]]']
/**
 * @description 查询工时记录分页数据
 * @param {PostWorkhourPageReqType} data 请求参数
 * @returns {Promise<PostWorkhourPageResType>} ajax
 */
const postWorkhourPage = (data: PostWorkhourPageReqType): Promise<PostWorkhourPageResType> => {
  return ajax({
    url: '/workhour/page',
    method: Method.POST
  }, data)
}

export type PostWorkhourUpdateReqType = operations['WorkHour_WorkHourUpdate']['parameters']['body']['dto']
export type PostWorkhourUpdateResType = definitions['LJsonResult']
/**
 * @description 修改工时记录
 * @param {PostWorkhourUpdateReqType} data 请求参数
 * @returns {Promise<PostWorkhourUpdateResType>} ajax
 */
const postWorkhourUpdate = (data: PostWorkhourUpdateReqType): Promise<PostWorkhourUpdateResType> => {
  return ajax({
    url: '/workhour/update',
    method: Method.POST
  }, data)
}

export type PostWorkhourDelReqType = operations['WorkHour_WorkHourDel']['parameters']['body']['dto']
export type PostWorkhourDelResType = definitions['LJsonResult']
/**
 * @description 工时记录删除
 * @param {PostWorkhourDelReqType} data 请求参数
 * @returns {Promise<PostWorkhourDelResType>} ajax
 */
const postWorkhourDel = (data: PostWorkhourDelReqType): Promise<PostWorkhourDelResType> => {
  return ajax({
    url: '/workhour/del',
    method: Method.POST
  }, data)
}

export type PostWorkhourAuditReqType = operations['WorkHour_WorkHourAudit']['parameters']['body']['dto']
export type PostWorkhourAuditResType = definitions['LJsonResult']
/**
 * @description 工时记录审核
 * @param {PostWorkhourAuditReqType} data 请求参数
 * @returns {Promise<PostWorkhourAuditResType>} ajax
 */
const postWorkhourAudit = (data: PostWorkhourAuditReqType): Promise<PostWorkhourAuditResType> => {
  return ajax({
    url: '/workhour/audit',
    method: Method.POST
  }, data)
}

export default {
  postWorkhourPage,
  postWorkhourUpdate,
  postWorkhourDel,
  postWorkhourAudit
}
