import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostProutingSaveReqType = operations['PRouting_Save']['parameters']['body']['dto']
export type PostProutingSaveResType = definitions['LJsonResult']
/**
 * @description 工艺路线保存
 * @param {PostProutingSaveReqType} data 请求参数
 * @returns {Promise<PostProutingSaveResType>} ajax
 */
const postProutingSave = (data: PostProutingSaveReqType): Promise<PostProutingSaveResType> => {
  return ajax({
    url: '/prouting/save',
    method: Method.POST
  }, data)
}

export type PostProutingDeleteReqType = operations['PRouting_DicDataDel']['parameters']['body']['dto']
export type PostProutingDeleteResType = definitions['LJsonResult']
/**
 * @description 工艺路线删除
 * @param {PostProutingDeleteReqType} data 请求参数
 * @returns {Promise<PostProutingDeleteResType>} ajax
 */
const postProutingDelete = (data: PostProutingDeleteReqType): Promise<PostProutingDeleteResType> => {
  return ajax({
    url: '/prouting/delete',
    method: Method.POST
  }, data)
}

export type PostProutingInfoReqType = operations['PRouting_QueryInfo']['parameters']['body']['dto']
export type PostProutingInfoResType = definitions['LJsonResult[PRoutingInfoDto]']
/**
 * @description 工艺路线明细
 * @param {PostProutingInfoReqType} data 请求参数
 * @returns {Promise<PostProutingInfoResType>} ajax
 */
const postProutingInfo = (data: PostProutingInfoReqType): Promise<PostProutingInfoResType> => {
  return ajax({
    url: '/prouting/info',
    method: Method.POST
  }, data)
}

export type PostProutingPageReqType = operations['PRouting_QueryPage']['parameters']['body']['dto']
export type PostProutingPageResType = definitions['LPJsonResult[List[PRoutingMainDto]]']
/**
 * @description 查询工艺路线分页数据
 * @param {PostProutingPageReqType} data 请求参数
 * @returns {Promise<PostProutingPageResType>} ajax
 */
const postProutingPage = (data: PostProutingPageReqType): Promise<PostProutingPageResType> => {
  return ajax({
    url: '/prouting/page',
    method: Method.POST
  }, data)
}

export type PostProutingAuditReqType = operations['PRouting_DoAudit']['parameters']['body']['dto']
export type PostProutingAuditResType = definitions['LJsonResult']
/**
 * @description 工艺路线审核
 * @param {PostProutingAuditReqType} data 请求参数
 * @returns {Promise<PostProutingAuditResType>} ajax
 */
const postProutingAudit = (data: PostProutingAuditReqType): Promise<PostProutingAuditResType> => {
  return ajax({
    url: '/prouting/audit',
    method: Method.POST
  }, data)
}

export type GetProutingSelectReqType = operations['PRouting_QueryPRoutingSelectDtos']['parameters']['query']
export type GetProutingSelectResType = definitions['LJsonResult[List[PRoutingSelectDto]]']
/**
 * @description 根据存货编码获取工艺路线下拉列表
 * @param {GetProutingSelectReqType} data 请求参数
 * @returns {Promise<GetProutingSelectResType>} ajax
 */
const getProutingSelect = (data: GetProutingSelectReqType): Promise<GetProutingSelectResType> => {
  return ajax({
    url: '/prouting/select',
    method: Method.GET
  }, data)
}

export default {
  postProutingSave,
  postProutingDelete,
  postProutingInfo,
  postProutingPage,
  postProutingAudit,
  getProutingSelect
}
