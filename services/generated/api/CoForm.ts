import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetCoFormNewinitReqType = {}
export type GetCoFormNewinitResType = definitions['LJsonResult[CoordinationFormDto]']
/**
 * @description 新增初始化
 * @param {GetCoFormNewinitReqType} data 请求参数
 * @returns {Promise<GetCoFormNewinitResType>} ajax
 */
const getCoFormNewinit = (data: GetCoFormNewinitReqType = {}): Promise<GetCoFormNewinitResType> => {
  return ajax({
    url: '/CoForm/newinit',
    method: Method.GET
  }, data)
}

export type PostCoFormSaveReqType = operations['CoordinationForm_Save']['parameters']['body']['dto']
export type PostCoFormSaveResType = definitions['LJsonResult']
/**
 * @description 协调单保存更新
 * @param {PostCoFormSaveReqType} data 请求参数
 * @returns {Promise<PostCoFormSaveResType>} ajax
 */
const postCoFormSave = (data: PostCoFormSaveReqType): Promise<PostCoFormSaveResType> => {
  return ajax({
    url: '/CoForm/save',
    method: Method.POST
  }, data)
}

export type PostCoFormPagequeryReqType = operations['CoordinationForm_PageQuery']['parameters']['body']['dto']
export type PostCoFormPagequeryResType = definitions['LPJsonResult[List[CoordinationFormDto]]']
/**
 * @description 协调单查询
 * @param {PostCoFormPagequeryReqType} data 请求参数
 * @returns {Promise<PostCoFormPagequeryResType>} ajax
 */
const postCoFormPagequery = (data: PostCoFormPagequeryReqType): Promise<PostCoFormPagequeryResType> => {
  return ajax({
    url: '/CoForm/pagequery',
    method: Method.POST
  }, data)
}

export type PostCoFormPagequerylistReqType = operations['CoordinationForm_PageQueryList']['parameters']['body']['dto']
export type PostCoFormPagequerylistResType = definitions['LPJsonResult[List[CoordinationFormTupleDto]]']
/**
 * @description 协调单列表查询
 * @param {PostCoFormPagequerylistReqType} data 请求参数
 * @returns {Promise<PostCoFormPagequerylistResType>} ajax
 */
const postCoFormPagequerylist = (data: PostCoFormPagequerylistReqType): Promise<PostCoFormPagequerylistResType> => {
  return ajax({
    url: '/CoForm/pagequerylist',
    method: Method.POST
  }, data)
}

export type PostCoFormExportReqType = operations['CoordinationForm_ExportData']['parameters']['body']['dto']
export type PostCoFormExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 导出数据
 * @param {PostCoFormExportReqType} data 请求参数
 * @returns {Promise<PostCoFormExportResType>} ajax
 */
const postCoFormExport = (data: PostCoFormExportReqType): Promise<PostCoFormExportResType> => {
  return ajax({
    url: '/CoForm/export',
    method: Method.POST
  }, data)
}

export type PostCoFormUpdatestatusReqType = operations['CoordinationForm_UpdateStatus']['parameters']['body']['dto']
export type PostCoFormUpdatestatusResType = definitions['LJsonResult']
/**
 * @description 状态修改
 * @param {PostCoFormUpdatestatusReqType} data 请求参数
 * @returns {Promise<PostCoFormUpdatestatusResType>} ajax
 */
const postCoFormUpdatestatus = (data: PostCoFormUpdatestatusReqType): Promise<PostCoFormUpdatestatusResType> => {
  return ajax({
    url: '/CoForm/updatestatus',
    method: Method.POST
  }, data)
}

export type PostCoFormUpdateconfirmdateReqType = operations['CoordinationForm_UpdateConfirmDate']['parameters']['body']['dto']
export type PostCoFormUpdateconfirmdateResType = definitions['LJsonResult']
/**
 * @description 更新确认日期
 * @param {PostCoFormUpdateconfirmdateReqType} data 请求参数
 * @returns {Promise<PostCoFormUpdateconfirmdateResType>} ajax
 */
const postCoFormUpdateconfirmdate = (data: PostCoFormUpdateconfirmdateReqType): Promise<PostCoFormUpdateconfirmdateResType> => {
  return ajax({
    url: '/CoForm/updateconfirmdate',
    method: Method.POST
  }, data)
}

export type PostCoFormQuerydetailReqType = operations['CoordinationForm_QueryDetail']['parameters']['body']['dto']
export type PostCoFormQuerydetailResType = definitions['LJsonResult[CoordinationFormDto]']
/**
 * @description 协调单详情
 * @param {PostCoFormQuerydetailReqType} data 请求参数
 * @returns {Promise<PostCoFormQuerydetailResType>} ajax
 */
const postCoFormQuerydetail = (data: PostCoFormQuerydetailReqType): Promise<PostCoFormQuerydetailResType> => {
  return ajax({
    url: '/CoForm/querydetail',
    method: Method.POST
  }, data)
}

export type PostCoFormDeleteReqType = operations['CoordinationForm_Delete']['parameters']['body']['dto']
export type PostCoFormDeleteResType = definitions['LJsonResult']
/**
 * @description 协调单删除
 * @param {PostCoFormDeleteReqType} data 请求参数
 * @returns {Promise<PostCoFormDeleteResType>} ajax
 */
const postCoFormDelete = (data: PostCoFormDeleteReqType): Promise<PostCoFormDeleteResType> => {
  return ajax({
    url: '/CoForm/delete',
    method: Method.POST
  }, data)
}

export type PostCoFormInfoReqType = operations['CoordinationForm_Info']['parameters']['body']['dto']
export type PostCoFormInfoResType = definitions['LJsonResult[CoordinationFormDto]']
/**
 * @description 协调单单据页分页
 * @param {PostCoFormInfoReqType} data 请求参数
 * @returns {Promise<PostCoFormInfoResType>} ajax
 */
const postCoFormInfo = (data: PostCoFormInfoReqType): Promise<PostCoFormInfoResType> => {
  return ajax({
    url: '/CoForm/info',
    method: Method.POST
  }, data)
}

export type PostCoFormGetdatafromu8ReqType = operations['CoordinationForm_GetCorpFormDataFromU8']['parameters']['body']['dto']
export type PostCoFormGetdatafromu8ResType = definitions['LPJsonResult[List[TransRequestDetailDto]]']
/**
 * @description 查询U8调拨申请单
 * @param {PostCoFormGetdatafromu8ReqType} data 请求参数
 * @returns {Promise<PostCoFormGetdatafromu8ResType>} ajax
 */
const postCoFormGetdatafromu8 = (data: PostCoFormGetdatafromu8ReqType): Promise<PostCoFormGetdatafromu8ResType> => {
  return ajax({
    url: '/CoForm/getdatafromu8',
    method: Method.POST
  }, data)
}

export type PostCoFormFlowActionReqType = operations['CoordinationForm_FlowAction']['parameters']['body']['dto']
export type PostCoFormFlowActionResType = definitions['LJsonResult[FlowUserActionOutput]']
/**
 * @description 获取流程操作按钮
 * @param {PostCoFormFlowActionReqType} data 请求参数
 * @returns {Promise<PostCoFormFlowActionResType>} ajax
 */
const postCoFormFlowAction = (data: PostCoFormFlowActionReqType): Promise<PostCoFormFlowActionResType> => {
  return ajax({
    url: '/CoForm/flowAction',
    method: Method.POST
  }, data)
}

export type PostCoFormFlowApproveReqType = operations['CoordinationForm_FlowApprove']['parameters']['body']['flowHandleModel']
export type PostCoFormFlowApproveResType = definitions['LJsonResult[HandleResDto]']
/**
 * @description 流程审核
 * @param {PostCoFormFlowApproveReqType} data 请求参数
 * @returns {Promise<PostCoFormFlowApproveResType>} ajax
 */
const postCoFormFlowApprove = (data: PostCoFormFlowApproveReqType): Promise<PostCoFormFlowApproveResType> => {
  return ajax({
    url: '/CoForm/flowApprove',
    method: Method.POST
  }, data)
}

export default {
  getCoFormNewinit,
  postCoFormSave,
  postCoFormPagequery,
  postCoFormPagequerylist,
  postCoFormExport,
  postCoFormUpdatestatus,
  postCoFormUpdateconfirmdate,
  postCoFormQuerydetail,
  postCoFormDelete,
  postCoFormInfo,
  postCoFormGetdatafromu8,
  postCoFormFlowAction,
  postCoFormFlowApprove
}
