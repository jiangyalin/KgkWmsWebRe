import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostVouchdraftDelbycodeReqType = operations['VouchDraft_DelVouchDraftByCode']['parameters']['body']['dto']
export type PostVouchdraftDelbycodeResType = definitions['LJsonResult']
/**
 * @description 手动删除单据暂存数据根据条码
 * @param {PostVouchdraftDelbycodeReqType} data 请求参数
 * @returns {Promise<PostVouchdraftDelbycodeResType>} ajax
 */
const postVouchdraftDelbycode = (data: PostVouchdraftDelbycodeReqType): Promise<PostVouchdraftDelbycodeResType> => {
  return ajax({
    url: '/vouchdraft/delbycode',
    method: Method.POST
  }, data)
}

export type PostVouchdraftQuerylistReqType = operations['VouchDraft_QueryVouchDraftListDto']['parameters']['body']['dto']
export type PostVouchdraftQuerylistResType = definitions['LLPJsonResult[VouchDraftListDto]']
/**
 * @description 查询暂存数据列表
 * @param {PostVouchdraftQuerylistReqType} data 请求参数
 * @returns {Promise<PostVouchdraftQuerylistResType>} ajax
 */
const postVouchdraftQuerylist = (data: PostVouchdraftQuerylistReqType): Promise<PostVouchdraftQuerylistResType> => {
  return ajax({
    url: '/vouchdraft/querylist',
    method: Method.POST
  }, data)
}

export type PostVouchdraftInfoReqType = operations['VouchDraft_QueryVouchDraftInfo']['parameters']['body']['dto']
export type PostVouchdraftInfoResType = definitions['LJsonResult[VouchDraftInfoDto]']
/**
 * @description 查询单据暂存信息
 * @param {PostVouchdraftInfoReqType} data 请求参数
 * @returns {Promise<PostVouchdraftInfoResType>} ajax
 */
const postVouchdraftInfo = (data: PostVouchdraftInfoReqType): Promise<PostVouchdraftInfoResType> => {
  return ajax({
    url: '/vouchdraft/info',
    method: Method.POST
  }, data)
}

export type PostVouchdraftExportReqType = operations['VouchDraft_ExportData']['parameters']['body']['dto']
export type PostVouchdraftExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostVouchdraftExportReqType} data 请求参数
 * @returns {Promise<PostVouchdraftExportResType>} ajax
 */
const postVouchdraftExport = (data: PostVouchdraftExportReqType): Promise<PostVouchdraftExportResType> => {
  return ajax({
    url: '/vouchdraft/export',
    method: Method.POST
  }, data)
}

export default {
  postVouchdraftDelbycode,
  postVouchdraftQuerylist,
  postVouchdraftInfo,
  postVouchdraftExport
}
