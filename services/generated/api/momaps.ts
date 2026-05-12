import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostMomapsNocompareplanlistReqType = operations['MomAPS_QueryNoComparePlanList']['parameters']['body']['dto']
export type PostMomapsNocompareplanlistResType = definitions['LPJsonResult[List[APSPlanListDto]]']
/**
 * @description 查询未配置产能对照的计划列表
 * @param {PostMomapsNocompareplanlistReqType} data 请求参数
 * @returns {Promise<PostMomapsNocompareplanlistResType>} ajax
 */
const postMomapsNocompareplanlist = (data: PostMomapsNocompareplanlistReqType): Promise<PostMomapsNocompareplanlistResType> => {
  return ajax({
    url: '/momaps/nocompareplanlist',
    method: Method.POST
  }, data)
}

export type PostMomapsPlanlistReqType = operations['MomAPS_QueryAPSPlanList']['parameters']['body']['dto']
export type PostMomapsPlanlistResType = definitions['LJsonResult[List[APSPlanListDto]]']
/**
 * @description 查询待排产的计划列表
 * @param {PostMomapsPlanlistReqType} data 请求参数
 * @returns {Promise<PostMomapsPlanlistResType>} ajax
 */
const postMomapsPlanlist = (data: PostMomapsPlanlistReqType): Promise<PostMomapsPlanlistResType> => {
  return ajax({
    url: '/momaps/planlist',
    method: Method.POST
  }, data)
}

export type PostMomapsWorkshoplistReqType = operations['MomAPS_QueryAPSWorkShopList']['parameters']['query']
export type PostMomapsWorkshoplistResType = definitions['LJsonResult[List[APSWorkShopDto]]']
/**
 * @description 查询排产车间列表
 * @param {PostMomapsWorkshoplistReqType} data 请求参数
 * @returns {Promise<PostMomapsWorkshoplistResType>} ajax
 */
const postMomapsWorkshoplist = (data: PostMomapsWorkshoplistReqType): Promise<PostMomapsWorkshoplistResType> => {
  return ajax({
    url: '/momaps/workshoplist',
    method: Method.POST
  }, data)
}

export type PostMomapsReslistReqType = operations['MomAPS_QueryResList']['parameters']['body']['dto']
export type PostMomapsReslistResType = definitions['LJsonResult[List[APSResDto]]']
/**
 * @description 查询待排产的资源列表
 * @param {PostMomapsReslistReqType} data 请求参数
 * @returns {Promise<PostMomapsReslistResType>} ajax
 */
const postMomapsReslist = (data: PostMomapsReslistReqType): Promise<PostMomapsReslistResType> => {
  return ajax({
    url: '/momaps/reslist',
    method: Method.POST
  }, data)
}

export type PostMomapsAutoapsReqType = operations['MomAPS_MomAutoAPS']['parameters']['body']['dto']
export type PostMomapsAutoapsResType = definitions['LJsonResult[PlanAPSInfoDto]']
/**
 * @description 计划或工序行自动排产
 * @param {PostMomapsAutoapsReqType} data 请求参数
 * @returns {Promise<PostMomapsAutoapsResType>} ajax
 */
const postMomapsAutoaps = (data: PostMomapsAutoapsReqType): Promise<PostMomapsAutoapsResType> => {
  return ajax({
    url: '/momaps/autoaps',
    method: Method.POST
  }, data)
}

export type PostMomapsResinfoReqType = operations['MomAPS_QueryResInfo']['parameters']['body']['dto']
export type PostMomapsResinfoResType = definitions['LJsonResult[APSResInfoDto]']
/**
 * @description 获取待排资源明细信息
 * @param {PostMomapsResinfoReqType} data 请求参数
 * @returns {Promise<PostMomapsResinfoResType>} ajax
 */
const postMomapsResinfo = (data: PostMomapsResinfoReqType): Promise<PostMomapsResinfoResType> => {
  return ajax({
    url: '/momaps/resinfo',
    method: Method.POST
  }, data)
}

export type PostMomapsMainlistReqType = operations['MomAPS_QueryMainList']['parameters']['body']['dto']
export type PostMomapsMainlistResType = definitions['LPJsonResult[List[APSMainDto]]']
/**
 * @description 获取排产单主表列表
 * @param {PostMomapsMainlistReqType} data 请求参数
 * @returns {Promise<PostMomapsMainlistResType>} ajax
 */
const postMomapsMainlist = (data: PostMomapsMainlistReqType): Promise<PostMomapsMainlistResType> => {
  return ajax({
    url: '/momaps/mainlist',
    method: Method.POST
  }, data)
}

export type GetMomapsApslistbyapsidReqType = operations['MomAPS_QueryAPSInfoList']['parameters']['query']
export type GetMomapsApslistbyapsidResType = definitions['LJsonResult[List[PlanAPSInfoListDto]]']
/**
 * @description 根据排产单ID查询排产信息列表
 * @param {GetMomapsApslistbyapsidReqType} data 请求参数
 * @returns {Promise<GetMomapsApslistbyapsidResType>} ajax
 */
const getMomapsApslistbyapsid = (data: GetMomapsApslistbyapsidReqType): Promise<GetMomapsApslistbyapsidResType> => {
  return ajax({
    url: '/momaps/apslistbyapsid',
    method: Method.GET
  }, data)
}

export type PostMomapsDeleteReqType = operations['MomAPS_APSDelete']['parameters']['body']['dto']
export type PostMomapsDeleteResType = definitions['LJsonResult']
/**
 * @description 排产单删除
 * @param {PostMomapsDeleteReqType} data 请求参数
 * @returns {Promise<PostMomapsDeleteResType>} ajax
 */
const postMomapsDelete = (data: PostMomapsDeleteReqType): Promise<PostMomapsDeleteResType> => {
  return ajax({
    url: '/momaps/delete',
    method: Method.POST
  }, data)
}

export type PostMomapsDocinfoReqType = operations['MomAPS_QueryDocInfo']['parameters']['body']['dto']
export type PostMomapsDocinfoResType = definitions['LJsonResult[PlanAPSInfoDto]']
/**
 * @description 排产明细信息
 * @param {PostMomapsDocinfoReqType} data 请求参数
 * @returns {Promise<PostMomapsDocinfoResType>} ajax
 */
const postMomapsDocinfo = (data: PostMomapsDocinfoReqType): Promise<PostMomapsDocinfoResType> => {
  return ajax({
    url: '/momaps/docinfo',
    method: Method.POST
  }, data)
}

export type PostMomapsCanshiftapslistReqType = operations['MomAPS_QueryCanShiftApsList']['parameters']['body']['dto']
export type PostMomapsCanshiftapslistResType = definitions['LPJsonResult[List[CanShiftApsListDto]]']
/**
 * @description 可派工的排产单明细列表
 * @param {PostMomapsCanshiftapslistReqType} data 请求参数
 * @returns {Promise<PostMomapsCanshiftapslistResType>} ajax
 */
const postMomapsCanshiftapslist = (data: PostMomapsCanshiftapslistReqType): Promise<PostMomapsCanshiftapslistResType> => {
  return ajax({
    url: '/momaps/canshiftapslist',
    method: Method.POST
  }, data)
}

export type PostMomapsSaveReqType = operations['MomAPS_ApsSave']['parameters']['body']['dto']
export type PostMomapsSaveResType = definitions['LJsonResult[PlanAPSInfoDto]']
/**
 * @description 排产单保存
 * @param {PostMomapsSaveReqType} data 请求参数
 * @returns {Promise<PostMomapsSaveResType>} ajax
 */
const postMomapsSave = (data: PostMomapsSaveReqType): Promise<PostMomapsSaveResType> => {
  return ajax({
    url: '/momaps/save',
    method: Method.POST
  }, data)
}

export type PostMomapsEffectlistReqType = operations['MomAPS_QueryInsertEffectList']['parameters']['body']['dto']
export type PostMomapsEffectlistResType = definitions['LJsonResult[List[ApsInsertEffectListDto]]']
/**
 * @description 查询插单影响的排产单明细列表
 * @param {PostMomapsEffectlistReqType} data 请求参数
 * @returns {Promise<PostMomapsEffectlistResType>} ajax
 */
const postMomapsEffectlist = (data: PostMomapsEffectlistReqType): Promise<PostMomapsEffectlistResType> => {
  return ajax({
    url: '/momaps/effectlist',
    method: Method.POST
  }, data)
}

export default {
  postMomapsNocompareplanlist,
  postMomapsPlanlist,
  postMomapsWorkshoplist,
  postMomapsReslist,
  postMomapsAutoaps,
  postMomapsResinfo,
  postMomapsMainlist,
  getMomapsApslistbyapsid,
  postMomapsDelete,
  postMomapsDocinfo,
  postMomapsCanshiftapslist,
  postMomapsSave,
  postMomapsEffectlist
}
