import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostApplydocSaveReqType = operations['WxByApplyDoc_Save']['parameters']['body']['dto']
export type PostApplydocSaveResType = definitions['LJsonResult']
/**
 * @description 申请单保存
 * @param {PostApplydocSaveReqType} data 请求参数
 * @returns {Promise<PostApplydocSaveResType>} ajax
 */
const postApplydocSave = (data: PostApplydocSaveReqType): Promise<PostApplydocSaveResType> => {
  return ajax({
    url: '/applydoc/save',
    method: Method.POST
  }, data)
}

export type PostApplydocDeleteReqType = operations['WxByApplyDoc_ShiftDel']['parameters']['body']['dto']
export type PostApplydocDeleteResType = definitions['LJsonResult']
/**
 * @description 申请单删除
 * @param {PostApplydocDeleteReqType} data 请求参数
 * @returns {Promise<PostApplydocDeleteResType>} ajax
 */
const postApplydocDelete = (data: PostApplydocDeleteReqType): Promise<PostApplydocDeleteResType> => {
  return ajax({
    url: '/applydoc/delete',
    method: Method.POST
  }, data)
}

export type PostApplydocInfoReqType = operations['WxByApplyDoc_QueryInfo']['parameters']['body']['dto']
export type PostApplydocInfoResType = definitions['LJsonResult[WxByApplyDocInfoDto]']
/**
 * @description 申请单明细
 * @param {PostApplydocInfoReqType} data 请求参数
 * @returns {Promise<PostApplydocInfoResType>} ajax
 */
const postApplydocInfo = (data: PostApplydocInfoReqType): Promise<PostApplydocInfoResType> => {
  return ajax({
    url: '/applydoc/info',
    method: Method.POST
  }, data)
}

export type PostApplydocPageReqType = operations['WxByApplyDoc_QueryPage']['parameters']['body']['dto']
export type PostApplydocPageResType = definitions['LPJsonResult[List[WxByApplyDocInfoDto]]']
/**
 * @description 查询申请单分页数据
 * @param {PostApplydocPageReqType} data 请求参数
 * @returns {Promise<PostApplydocPageResType>} ajax
 */
const postApplydocPage = (data: PostApplydocPageReqType): Promise<PostApplydocPageResType> => {
  return ajax({
    url: '/applydoc/page',
    method: Method.POST
  }, data)
}

export type GetApplydocGetcodeReqType = operations['WxByApplyDoc_GetNewCode']['parameters']['query']
export type GetApplydocGetcodeResType = definitions['LJsonResult']
/**
 * @description 获取申请单号
 * @param {GetApplydocGetcodeReqType} data 请求参数
 * @returns {Promise<GetApplydocGetcodeResType>} ajax
 */
const getApplydocGetcode = (data: GetApplydocGetcodeReqType): Promise<GetApplydocGetcodeResType> => {
  return ajax({
    url: '/applydoc/getcode',
    method: Method.GET
  }, data)
}

export type GetApplydocCodesReqType = operations['WxByApplyDoc_QueryCodes']['parameters']['query']
export type GetApplydocCodesResType = definitions['LLJsonResult[BaseSelectDto]']
/**
 * @description 查询单号下拉列表
 * @param {GetApplydocCodesReqType} data 请求参数
 * @returns {Promise<GetApplydocCodesResType>} ajax
 */
const getApplydocCodes = (data: GetApplydocCodesReqType): Promise<GetApplydocCodesResType> => {
  return ajax({
    url: '/applydoc/codes',
    method: Method.GET
  }, data)
}

export type PostApplydocExportReqType = operations['WxByApplyDoc_ExportData']['parameters']['body']['dto']
export type PostApplydocExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostApplydocExportReqType} data 请求参数
 * @returns {Promise<PostApplydocExportResType>} ajax
 */
const postApplydocExport = (data: PostApplydocExportReqType): Promise<PostApplydocExportResType> => {
  return ajax({
    url: '/applydoc/export',
    method: Method.POST
  }, data)
}

export type PostApplydocApplyshiftReqType = operations['WxByApplyDoc_ApplyShift']['parameters']['body']['dto']
export type PostApplydocApplyshiftResType = definitions['LJsonResult']
/**
 * @description 申请单派工
 * @param {PostApplydocApplyshiftReqType} data 请求参数
 * @returns {Promise<PostApplydocApplyshiftResType>} ajax
 */
const postApplydocApplyshift = (data: PostApplydocApplyshiftReqType): Promise<PostApplydocApplyshiftResType> => {
  return ajax({
    url: '/applydoc/applyshift',
    method: Method.POST
  }, data)
}

export type PostApplydocNoticelistReqType = operations['WxByApplyDoc_QueryNoticeDocPage']['parameters']['body']['dto']
export type PostApplydocNoticelistResType = definitions['LLPJsonResult[WxByNoticeDocListDto]']
/**
 * @description 查询维修保养通知单列表
 * @param {PostApplydocNoticelistReqType} data 请求参数
 * @returns {Promise<PostApplydocNoticelistResType>} ajax
 */
const postApplydocNoticelist = (data: PostApplydocNoticelistReqType): Promise<PostApplydocNoticelistResType> => {
  return ajax({
    url: '/applydoc/noticelist',
    method: Method.POST
  }, data)
}

export type PostApplydocExportNoticeReqType = operations['WxByApplyDoc_ExportNoticeData']['parameters']['body']['dto']
export type PostApplydocExportNoticeResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 维修保养通知单数据导出
 * @param {PostApplydocExportNoticeReqType} data 请求参数
 * @returns {Promise<PostApplydocExportNoticeResType>} ajax
 */
const postApplydocExportNotice = (data: PostApplydocExportNoticeReqType): Promise<PostApplydocExportNoticeResType> => {
  return ajax({
    url: '/applydoc/exportNotice',
    method: Method.POST
  }, data)
}

export default {
  postApplydocSave,
  postApplydocDelete,
  postApplydocInfo,
  postApplydocPage,
  getApplydocGetcode,
  getApplydocCodes,
  postApplydocExport,
  postApplydocApplyshift,
  postApplydocNoticelist,
  postApplydocExportNotice
}
