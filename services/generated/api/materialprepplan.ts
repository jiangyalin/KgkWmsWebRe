import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostMaterialprepplanSaveReqType = operations['MaterialPrepPlan_SaveMaterialPrepPlan']['parameters']['body']['dto']
export type PostMaterialprepplanSaveResType = definitions['LJsonResult']
/**
 * @description 备料计划表生成
 * @param {PostMaterialprepplanSaveReqType} data 请求参数
 * @returns {Promise<PostMaterialprepplanSaveResType>} ajax
 */
const postMaterialprepplanSave = (data: PostMaterialprepplanSaveReqType): Promise<PostMaterialprepplanSaveResType> => {
  return ajax({
    url: '/materialprepplan/save',
    method: Method.POST
  }, data)
}

export type PostMaterialprepplanPageReqType = operations['MaterialPrepPlan_QueryMaterialPrepPlans']['parameters']['body']['dto']
export type PostMaterialprepplanPageResType = definitions['LLPJsonResult[MaterialPrepPlanListDto]']
/**
 * @description 查询备料计划表
 * @param {PostMaterialprepplanPageReqType} data 请求参数
 * @returns {Promise<PostMaterialprepplanPageResType>} ajax
 */
const postMaterialprepplanPage = (data: PostMaterialprepplanPageReqType): Promise<PostMaterialprepplanPageResType> => {
  return ajax({
    url: '/materialprepplan/page',
    method: Method.POST
  }, data)
}

export type GetMaterialprepplanDetailReqType = operations['MaterialPrepPlan_QueryMaterialPrepPlanDetails']['parameters']['query']
export type GetMaterialprepplanDetailResType = definitions['LLJsonResult[MaterialPrepPlanDetailListDto]']
/**
 * @description 查询备料计划明细列表
 * @param {GetMaterialprepplanDetailReqType} data 请求参数
 * @returns {Promise<GetMaterialprepplanDetailResType>} ajax
 */
const getMaterialprepplanDetail = (data: GetMaterialprepplanDetailReqType): Promise<GetMaterialprepplanDetailResType> => {
  return ajax({
    url: '/materialprepplan/detail',
    method: Method.GET
  }, data)
}

export type PostMaterialprepplanExportReqType = operations['MaterialPrepPlan_ExportData']['parameters']['body']['dto']
export type PostMaterialprepplanExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostMaterialprepplanExportReqType} data 请求参数
 * @returns {Promise<PostMaterialprepplanExportResType>} ajax
 */
const postMaterialprepplanExport = (data: PostMaterialprepplanExportReqType): Promise<PostMaterialprepplanExportResType> => {
  return ajax({
    url: '/materialprepplan/export',
    method: Method.POST
  }, data)
}

export default {
  postMaterialprepplanSave,
  postMaterialprepplanPage,
  getMaterialprepplanDetail,
  postMaterialprepplanExport
}
