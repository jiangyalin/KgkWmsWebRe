import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostMomshiftMomplandetailsReqType = operations['MomShift_QueryMomIssueDetailList']['parameters']['body']['dto']
export type PostMomshiftMomplandetailsResType = definitions['LPJsonResult[List[MomShiftDetailListDto]]']
/**
 * @description 查询可派工的生产派工明细列表
 * @param {PostMomshiftMomplandetailsReqType} data 请求参数
 * @returns {Promise<PostMomshiftMomplandetailsResType>} ajax
 */
const postMomshiftMomplandetails = (data: PostMomshiftMomplandetailsReqType): Promise<PostMomshiftMomplandetailsResType> => {
  return ajax({
    url: '/momshift/momplandetails',
    method: Method.POST
  }, data)
}

export type PostMomshiftSaveReqType = operations['MomShift_Save']['parameters']['body']['dto']
export type PostMomshiftSaveResType = definitions['LJsonResult']
/**
 * @description 生产派工保存
 * @param {PostMomshiftSaveReqType} data 请求参数
 * @returns {Promise<PostMomshiftSaveResType>} ajax
 */
const postMomshiftSave = (data: PostMomshiftSaveReqType): Promise<PostMomshiftSaveResType> => {
  return ajax({
    url: '/momshift/save',
    method: Method.POST
  }, data)
}

export type PostMomshiftDeleteReqType = operations['MomShift_ShiftDel']['parameters']['body']['dto']
export type PostMomshiftDeleteResType = definitions['LJsonResult']
/**
 * @description 生产派工删除
 * @param {PostMomshiftDeleteReqType} data 请求参数
 * @returns {Promise<PostMomshiftDeleteResType>} ajax
 */
const postMomshiftDelete = (data: PostMomshiftDeleteReqType): Promise<PostMomshiftDeleteResType> => {
  return ajax({
    url: '/momshift/delete',
    method: Method.POST
  }, data)
}

export type PostMomshiftInfoReqType = operations['MomShift_QueryInfo']['parameters']['body']['dto']
export type PostMomshiftInfoResType = definitions['LJsonResult[MomShiftMainDto]']
/**
 * @description 生产派工明细
 * @param {PostMomshiftInfoReqType} data 请求参数
 * @returns {Promise<PostMomshiftInfoResType>} ajax
 */
const postMomshiftInfo = (data: PostMomshiftInfoReqType): Promise<PostMomshiftInfoResType> => {
  return ajax({
    url: '/momshift/info',
    method: Method.POST
  }, data)
}

export type PostMomshiftPageReqType = operations['MomShift_QueryPage']['parameters']['body']['dto']
export type PostMomshiftPageResType = definitions['LPJsonResult[List[MomShiftListDto]]']
/**
 * @description 查询生产派工分页数据
 * @param {PostMomshiftPageReqType} data 请求参数
 * @returns {Promise<PostMomshiftPageResType>} ajax
 */
const postMomshiftPage = (data: PostMomshiftPageReqType): Promise<PostMomshiftPageResType> => {
  return ajax({
    url: '/momshift/page',
    method: Method.POST
  }, data)
}

export type PostMomshiftAuditReqType = operations['MomShift_DoAudit']['parameters']['body']['dto']
export type PostMomshiftAuditResType = definitions['LJsonResult']
/**
 * @description 派工单审核
 * @param {PostMomshiftAuditReqType} data 请求参数
 * @returns {Promise<PostMomshiftAuditResType>} ajax
 */
const postMomshiftAudit = (data: PostMomshiftAuditReqType): Promise<PostMomshiftAuditResType> => {
  return ajax({
    url: '/momshift/audit',
    method: Method.POST
  }, data)
}

export type GetMomshiftGetcodeReqType = {}
export type GetMomshiftGetcodeResType = definitions['LJsonResult']
/**
 * @description 获取派工单号
 * @param {GetMomshiftGetcodeReqType} data 请求参数
 * @returns {Promise<GetMomshiftGetcodeResType>} ajax
 */
const getMomshiftGetcode = (data: GetMomshiftGetcodeReqType = {}): Promise<GetMomshiftGetcodeResType> => {
  return ajax({
    url: '/momshift/getcode',
    method: Method.GET
  }, data)
}

export type PostMomshiftCloseReqType = operations['MomShift_MomShiftClose']['parameters']['body']['dto']
export type PostMomshiftCloseResType = definitions['LJsonResult']
/**
 * @description 派工单余量关闭
 * @param {PostMomshiftCloseReqType} data 请求参数
 * @returns {Promise<PostMomshiftCloseResType>} ajax
 */
const postMomshiftClose = (data: PostMomshiftCloseReqType): Promise<PostMomshiftCloseResType> => {
  return ajax({
    url: '/momshift/close',
    method: Method.POST
  }, data)
}

export type GetMomshiftCodesReqType = operations['MomShift_QueryCodes']['parameters']['query']
export type GetMomshiftCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetMomshiftCodesReqType} data 请求参数
 * @returns {Promise<GetMomshiftCodesResType>} ajax
 */
const getMomshiftCodes = (data: GetMomshiftCodesReqType): Promise<GetMomshiftCodesResType> => {
  return ajax({
    url: '/momshift/codes',
    method: Method.GET
  }, data)
}

export type PostMomshiftTaskpageReqType = operations['MomShift_QueryShiftTaskList']['parameters']['body']['dto']
export type PostMomshiftTaskpageResType = definitions['LPJsonResult[List[MoShiftTaskDto]]']
/**
 * @description 查询派工任务列表
 * @param {PostMomshiftTaskpageReqType} data 请求参数
 * @returns {Promise<PostMomshiftTaskpageResType>} ajax
 */
const postMomshiftTaskpage = (data: PostMomshiftTaskpageReqType): Promise<PostMomshiftTaskpageResType> => {
  return ajax({
    url: '/momshift/taskpage',
    method: Method.POST
  }, data)
}

export type PostMomshiftQuerytransdataReqType = operations['MomShift_QueryShiftTransData']['parameters']['body']['dto']
export type PostMomshiftQuerytransdataResType = definitions['LJsonResult[MomShiftMainDto]']
/**
 * @description 获取转单数据
 * @param {PostMomshiftQuerytransdataReqType} data 请求参数
 * @returns {Promise<PostMomshiftQuerytransdataResType>} ajax
 */
const postMomshiftQuerytransdata = (data: PostMomshiftQuerytransdataReqType): Promise<PostMomshiftQuerytransdataResType> => {
  return ajax({
    url: '/momshift/querytransdata',
    method: Method.POST
  }, data)
}

export type PostMomshiftPrintReqType = operations['MomShift_MomShiftPrint']['parameters']['body']['dto']
export type PostMomshiftPrintResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 派工单打印
 * @param {PostMomshiftPrintReqType} data 请求参数
 * @returns {Promise<PostMomshiftPrintResType>} ajax
 */
const postMomshiftPrint = (data: PostMomshiftPrintReqType): Promise<PostMomshiftPrintResType> => {
  return ajax({
    url: '/momshift/print',
    method: Method.POST
  }, data)
}

export type PostMomshiftRawcodeReqType = operations['MomShift_MomShiftFlowCardRawCode']['parameters']['body']['dto']
export type PostMomshiftRawcodeResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description 派工单生成流转卡
 * @param {PostMomshiftRawcodeReqType} data 请求参数
 * @returns {Promise<PostMomshiftRawcodeResType>} ajax
 */
const postMomshiftRawcode = (data: PostMomshiftRawcodeReqType): Promise<PostMomshiftRawcodeResType> => {
  return ajax({
    url: '/momshift/rawcode',
    method: Method.POST
  }, data)
}

export default {
  postMomshiftMomplandetails,
  postMomshiftSave,
  postMomshiftDelete,
  postMomshiftInfo,
  postMomshiftPage,
  postMomshiftAudit,
  getMomshiftGetcode,
  postMomshiftClose,
  getMomshiftCodes,
  postMomshiftTaskpage,
  postMomshiftQuerytransdata,
  postMomshiftPrint,
  postMomshiftRawcode
}
