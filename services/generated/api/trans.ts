import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetTransWhlistReqType = operations['TransVouch_WHList']['parameters']['query']
export type GetTransWhlistResType = definitions['LJsonResult[List[WHListResDto]]']
/**
 * @description 获取可调出的仓库列表
 * @param {GetTransWhlistReqType} data 请求参数
 * @returns {Promise<GetTransWhlistResType>} ajax
 */
const getTransWhlist = (data: GetTransWhlistReqType): Promise<GetTransWhlistResType> => {
  return ajax({
    url: '/trans/whlist',
    method: Method.GET
  }, data)
}

export type PostTransWhinvposstockReqType = operations['TransVouch_QueryWhInvPosStock']['parameters']['body']['dto']
export type PostTransWhinvposstockResType = definitions['LJsonResult[List[WhInvPosStockDto]]']
/**
 * @description 获取仓库下存货的现存量或货位存量
 * @param {PostTransWhinvposstockReqType} data 请求参数
 * @returns {Promise<PostTransWhinvposstockResType>} ajax
 */
const postTransWhinvposstock = (data: PostTransWhinvposstockReqType): Promise<PostTransWhinvposstockResType> => {
  return ajax({
    url: '/trans/whinvposstock',
    method: Method.POST
  }, data)
}

export type GetTransPoslistReqType = operations['TransVouch_QueryPosList']['parameters']['query']
export type GetTransPoslistResType = definitions['LJsonResult[List[PositionListResDto]]']
/**
 * @description 查询货位列表
 * @param {GetTransPoslistReqType} data 请求参数
 * @returns {Promise<GetTransPoslistResType>} ajax
 */
const getTransPoslist = (data: GetTransPoslistReqType): Promise<GetTransPoslistResType> => {
  return ajax({
    url: '/trans/poslist',
    method: Method.GET
  }, data)
}

export type PostTransSaveReqType = operations['TransVouch_TransVouchSave']['parameters']['body']['dto']
export type PostTransSaveResType = definitions['LJsonResult']
/**
 * @description 调拨出库保存生单
 * @param {PostTransSaveReqType} data 请求参数
 * @returns {Promise<PostTransSaveResType>} ajax
 */
const postTransSave = (data: PostTransSaveReqType): Promise<PostTransSaveResType> => {
  return ajax({
    url: '/trans/save',
    method: Method.POST
  }, data)
}

export type PostTransAuditReqType = operations['TransVouch_TransVouchAudit']['parameters']['body']['dto']
export type PostTransAuditResType = definitions['LJsonResult']
/**
 * @description 调拨出库审核
 * @param {PostTransAuditReqType} data 请求参数
 * @returns {Promise<PostTransAuditResType>} ajax
 */
const postTransAudit = (data: PostTransAuditReqType): Promise<PostTransAuditResType> => {
  return ajax({
    url: '/trans/audit',
    method: Method.POST
  }, data)
}

export type PostTransAuditv2ReqType = operations['TransVouch_TransVouchAuditV2']['parameters']['body']['dto']
export type PostTransAuditv2ResType = definitions['LJsonResult']
/**
 * @description 调拨出库审核V2
 * @param {PostTransAuditv2ReqType} data 请求参数
 * @returns {Promise<PostTransAuditv2ResType>} ajax
 */
const postTransAuditv2 = (data: PostTransAuditv2ReqType): Promise<PostTransAuditv2ResType> => {
  return ajax({
    url: '/trans/auditv2',
    method: Method.POST
  }, data)
}

export type GetTransWaitauditlistReqType = operations['TransVouch_QueryWaitAuditList']['parameters']['query']
export type GetTransWaitauditlistResType = definitions['LPJsonResult[List[WaitAuditTransVouchDto]]']
/**
 * @description 查询待审核的调拨单列表
 * @param {GetTransWaitauditlistReqType} data 请求参数
 * @returns {Promise<GetTransWaitauditlistResType>} ajax
 */
const getTransWaitauditlist = (data: GetTransWaitauditlistReqType): Promise<GetTransWaitauditlistResType> => {
  return ajax({
    url: '/trans/waitauditlist',
    method: Method.GET
  }, data)
}

export type GetTransInfoReqType = operations['TransVouch_QueryTVInfo']['parameters']['query']
export type GetTransInfoResType = definitions['LJsonResult[List[TransVouchInfoDto]]']
/**
 * @description 查询调拨单明细
 * @param {GetTransInfoReqType} data 请求参数
 * @returns {Promise<GetTransInfoResType>} ajax
 */
const getTransInfo = (data: GetTransInfoReqType): Promise<GetTransInfoResType> => {
  return ajax({
    url: '/trans/info',
    method: Method.GET
  }, data)
}

export default {
  getTransWhlist,
  postTransWhinvposstock,
  getTransPoslist,
  postTransSave,
  postTransAudit,
  postTransAuditv2,
  getTransWaitauditlist,
  getTransInfo
}
