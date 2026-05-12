import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetAdjustpvouchNewinitReqType = {}
export type GetAdjustpvouchNewinitResType = definitions['LJsonResult[AdjustPVouchSaveReqDto]']
/**
 * @description 新增初始化
 * @param {GetAdjustpvouchNewinitReqType} data 请求参数
 * @returns {Promise<GetAdjustpvouchNewinitResType>} ajax
 */
const getAdjustpvouchNewinit = (data: GetAdjustpvouchNewinitReqType = {}): Promise<GetAdjustpvouchNewinitResType> => {
  return ajax({
    url: '/adjustpvouch/newinit',
    method: Method.GET
  }, data)
}

export type GetAdjustpvouchCodesReqType = operations['AdjustPVouch_QueryCodes']['parameters']['query']
export type GetAdjustpvouchCodesResType = definitions['LLJsonResult[BaseSelectDto]']
/**
 * @description 查询单号下拉列表
 * @param {GetAdjustpvouchCodesReqType} data 请求参数
 * @returns {Promise<GetAdjustpvouchCodesResType>} ajax
 */
const getAdjustpvouchCodes = (data: GetAdjustpvouchCodesReqType): Promise<GetAdjustpvouchCodesResType> => {
  return ajax({
    url: '/adjustpvouch/codes',
    method: Method.GET
  }, data)
}

export type PostAdjustpvouchSaveReqType = operations['AdjustPVouch_SaveOrder']['parameters']['body']['dto']
export type PostAdjustpvouchSaveResType = definitions['LJsonResult']
/**
 * @description 单据保存
 * @param {PostAdjustpvouchSaveReqType} data 请求参数
 * @returns {Promise<PostAdjustpvouchSaveResType>} ajax
 */
const postAdjustpvouchSave = (data: PostAdjustpvouchSaveReqType): Promise<PostAdjustpvouchSaveResType> => {
  return ajax({
    url: '/adjustpvouch/save',
    method: Method.POST
  }, data)
}

export type PostAdjustpvouchDelReqType = operations['AdjustPVouch_DeleteOrder']['parameters']['body']['dto']
export type PostAdjustpvouchDelResType = definitions['LJsonResult']
/**
 * @description 单据删除
 * @param {PostAdjustpvouchDelReqType} data 请求参数
 * @returns {Promise<PostAdjustpvouchDelResType>} ajax
 */
const postAdjustpvouchDel = (data: PostAdjustpvouchDelReqType): Promise<PostAdjustpvouchDelResType> => {
  return ajax({
    url: '/adjustpvouch/del',
    method: Method.POST
  }, data)
}

export type PostAdjustpvouchInfoReqType = operations['AdjustPVouch_QueryInfo']['parameters']['body']['dto']
export type PostAdjustpvouchInfoResType = definitions['LJsonResult[AdjustPVouchInfoDto]']
/**
 * @description 单据明细查询
 * @param {PostAdjustpvouchInfoReqType} data 请求参数
 * @returns {Promise<PostAdjustpvouchInfoResType>} ajax
 */
const postAdjustpvouchInfo = (data: PostAdjustpvouchInfoReqType): Promise<PostAdjustpvouchInfoResType> => {
  return ajax({
    url: '/adjustpvouch/info',
    method: Method.POST
  }, data)
}

export type PostAdjustpvouchPageReqType = operations['AdjustPVouch_QueryPage']['parameters']['body']['dto']
export type PostAdjustpvouchPageResType = definitions['LLPJsonResult[AdjustPVouchListDto]']
/**
 * @description 查询分页数据
 * @param {PostAdjustpvouchPageReqType} data 请求参数
 * @returns {Promise<PostAdjustpvouchPageResType>} ajax
 */
const postAdjustpvouchPage = (data: PostAdjustpvouchPageReqType): Promise<PostAdjustpvouchPageResType> => {
  return ajax({
    url: '/adjustpvouch/page',
    method: Method.POST
  }, data)
}

export type PostAdjustpvouchExportReqType = operations['AdjustPVouch_ExportData']['parameters']['body']['dto']
export type PostAdjustpvouchExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostAdjustpvouchExportReqType} data 请求参数
 * @returns {Promise<PostAdjustpvouchExportResType>} ajax
 */
const postAdjustpvouchExport = (data: PostAdjustpvouchExportReqType): Promise<PostAdjustpvouchExportResType> => {
  return ajax({
    url: '/adjustpvouch/export',
    method: Method.POST
  }, data)
}

export default {
  getAdjustpvouchNewinit,
  getAdjustpvouchCodes,
  postAdjustpvouchSave,
  postAdjustpvouchDel,
  postAdjustpvouchInfo,
  postAdjustpvouchPage,
  postAdjustpvouchExport
}
