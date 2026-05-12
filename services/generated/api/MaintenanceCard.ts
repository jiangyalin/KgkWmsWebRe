import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetMaintenanceCardNewinitReqType = {}
export type GetMaintenanceCardNewinitResType = definitions['LJsonResult[MaintenanceCardDto]']
/**
 * @description 新增初始化
 * @param {GetMaintenanceCardNewinitReqType} data 请求参数
 * @returns {Promise<GetMaintenanceCardNewinitResType>} ajax
 */
const getMaintenanceCardNewinit = (data: GetMaintenanceCardNewinitReqType = {}): Promise<GetMaintenanceCardNewinitResType> => {
  return ajax({
    url: '/MaintenanceCard/newinit',
    method: Method.GET
  }, data)
}

export type PostMaintenanceCardSaveMaintenanceCardReqType = operations['MaintenanceCard_Save']['parameters']['body']['dto']
export type PostMaintenanceCardSaveMaintenanceCardResType = definitions['LJsonResult']
/**
 * @description 维修信息保存
 * @param {PostMaintenanceCardSaveMaintenanceCardReqType} data 请求参数
 * @returns {Promise<PostMaintenanceCardSaveMaintenanceCardResType>} ajax
 */
const postMaintenanceCardSaveMaintenanceCard = (data: PostMaintenanceCardSaveMaintenanceCardReqType): Promise<PostMaintenanceCardSaveMaintenanceCardResType> => {
  return ajax({
    url: '/MaintenanceCard/saveMaintenanceCard',
    method: Method.POST
  }, data)
}

export type GetMaintenanceCardCodesReqType = operations['MaintenanceCard_QueryCodes']['parameters']['query']
export type GetMaintenanceCardCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetMaintenanceCardCodesReqType} data 请求参数
 * @returns {Promise<GetMaintenanceCardCodesResType>} ajax
 */
const getMaintenanceCardCodes = (data: GetMaintenanceCardCodesReqType): Promise<GetMaintenanceCardCodesResType> => {
  return ajax({
    url: '/MaintenanceCard/codes',
    method: Method.GET
  }, data)
}

export type PostMaintenanceCardInfoReqType = operations['MaintenanceCard_Info']['parameters']['body']['dto']
export type PostMaintenanceCardInfoResType = definitions['LJsonResult[MaintenanceCardDto]']
/**
 * @description 协调单单据页分页
 * @param {PostMaintenanceCardInfoReqType} data 请求参数
 * @returns {Promise<PostMaintenanceCardInfoResType>} ajax
 */
const postMaintenanceCardInfo = (data: PostMaintenanceCardInfoReqType): Promise<PostMaintenanceCardInfoResType> => {
  return ajax({
    url: '/MaintenanceCard/info',
    method: Method.POST
  }, data)
}

export type PostMaintenanceCardPagequeryMaintenanceCardReqType = operations['MaintenanceCard_PageQuery']['parameters']['body']['dto']
export type PostMaintenanceCardPagequeryMaintenanceCardResType = definitions['LPJsonResult[List[MaintenanceCardDto]]']
/**
 * @description 维修卡查询
 * @param {PostMaintenanceCardPagequeryMaintenanceCardReqType} data 请求参数
 * @returns {Promise<PostMaintenanceCardPagequeryMaintenanceCardResType>} ajax
 */
const postMaintenanceCardPagequeryMaintenanceCard = (data: PostMaintenanceCardPagequeryMaintenanceCardReqType): Promise<PostMaintenanceCardPagequeryMaintenanceCardResType> => {
  return ajax({
    url: '/MaintenanceCard/pagequeryMaintenanceCard',
    method: Method.POST
  }, data)
}

export type PostMaintenanceCardQuerydetailReqType = operations['MaintenanceCard_QueryDetail']['parameters']['body']['dto']
export type PostMaintenanceCardQuerydetailResType = definitions['LJsonResult[MaintenanceCardDto]']
/**
 * @description 维修卡详情
 * @param {PostMaintenanceCardQuerydetailReqType} data 请求参数
 * @returns {Promise<PostMaintenanceCardQuerydetailResType>} ajax
 */
const postMaintenanceCardQuerydetail = (data: PostMaintenanceCardQuerydetailReqType): Promise<PostMaintenanceCardQuerydetailResType> => {
  return ajax({
    url: '/MaintenanceCard/querydetail',
    method: Method.POST
  }, data)
}

export type PostMaintenanceCardDeleteReqType = operations['MaintenanceCard_Delete']['parameters']['body']['dto']
export type PostMaintenanceCardDeleteResType = definitions['LJsonResult']
/**
 * @description 维修卡删除
 * @param {PostMaintenanceCardDeleteReqType} data 请求参数
 * @returns {Promise<PostMaintenanceCardDeleteResType>} ajax
 */
const postMaintenanceCardDelete = (data: PostMaintenanceCardDeleteReqType): Promise<PostMaintenanceCardDeleteResType> => {
  return ajax({
    url: '/MaintenanceCard/delete',
    method: Method.POST
  }, data)
}

export type PostMaintenanceCardUpdateStatusReqType = operations['MaintenanceCard_UpdateStatus']['parameters']['body']['dto']
export type PostMaintenanceCardUpdateStatusResType = definitions['LJsonResult']
/**
 * @description 维修卡审核
 * @param {PostMaintenanceCardUpdateStatusReqType} data 请求参数
 * @returns {Promise<PostMaintenanceCardUpdateStatusResType>} ajax
 */
const postMaintenanceCardUpdateStatus = (data: PostMaintenanceCardUpdateStatusReqType): Promise<PostMaintenanceCardUpdateStatusResType> => {
  return ajax({
    url: '/MaintenanceCard/UpdateStatus',
    method: Method.POST
  }, data)
}

export type PostMaintenanceCardFlowActionReqType = operations['MaintenanceCard_FlowAction']['parameters']['body']['dto']
export type PostMaintenanceCardFlowActionResType = definitions['LJsonResult[FlowUserActionOutput]']
/**
 * @description 获取流程操作按钮
 * @param {PostMaintenanceCardFlowActionReqType} data 请求参数
 * @returns {Promise<PostMaintenanceCardFlowActionResType>} ajax
 */
const postMaintenanceCardFlowAction = (data: PostMaintenanceCardFlowActionReqType): Promise<PostMaintenanceCardFlowActionResType> => {
  return ajax({
    url: '/MaintenanceCard/flowAction',
    method: Method.POST
  }, data)
}

export type PostMaintenanceCardFlowApproveReqType = operations['MaintenanceCard_FlowApprove']['parameters']['body']['flowHandleModel']
export type PostMaintenanceCardFlowApproveResType = definitions['LJsonResult[HandleResDto]']
/**
 * @description 流程审核
 * @param {PostMaintenanceCardFlowApproveReqType} data 请求参数
 * @returns {Promise<PostMaintenanceCardFlowApproveResType>} ajax
 */
const postMaintenanceCardFlowApprove = (data: PostMaintenanceCardFlowApproveReqType): Promise<PostMaintenanceCardFlowApproveResType> => {
  return ajax({
    url: '/MaintenanceCard/flowApprove',
    method: Method.POST
  }, data)
}

export default {
  getMaintenanceCardNewinit,
  postMaintenanceCardSaveMaintenanceCard,
  getMaintenanceCardCodes,
  postMaintenanceCardInfo,
  postMaintenanceCardPagequeryMaintenanceCard,
  postMaintenanceCardQuerydetail,
  postMaintenanceCardDelete,
  postMaintenanceCardUpdateStatus,
  postMaintenanceCardFlowAction,
  postMaintenanceCardFlowApprove
}
