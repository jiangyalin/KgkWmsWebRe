import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostOtherrdSaveReqType = operations['OtherRd_Save']['parameters']['body']['dto']
export type PostOtherrdSaveResType = definitions['LJsonResult']
/**
 * @description 保存生单
 * @param {PostOtherrdSaveReqType} data 请求参数
 * @returns {Promise<PostOtherrdSaveResType>} ajax
 */
const postOtherrdSave = (data: PostOtherrdSaveReqType): Promise<PostOtherrdSaveResType> => {
  return ajax({
    url: '/otherrd/save',
    method: Method.POST
  }, data)
}

export type GetOtherrdNochecklistReqType = operations['OtherRd_QueryNoCheckList']['parameters']['query']
export type GetOtherrdNochecklistResType = definitions['LJsonResult[List[NoCheckOtherOutRdDto]]']
/**
 * @description 查询未审核的单据列表
 * @param {GetOtherrdNochecklistReqType} data 请求参数
 * @returns {Promise<GetOtherrdNochecklistResType>} ajax
 */
const getOtherrdNochecklist = (data: GetOtherrdNochecklistReqType): Promise<GetOtherrdNochecklistResType> => {
  return ajax({
    url: '/otherrd/nochecklist',
    method: Method.GET
  }, data)
}

export type GetOtherrdInfoReqType = operations['OtherRd_QueryInfo']['parameters']['query']
export type GetOtherrdInfoResType = definitions['LJsonResult[List[OtherOutRdInfoDto]]']
/**
 * @description 查询单据明细
 * @param {GetOtherrdInfoReqType} data 请求参数
 * @returns {Promise<GetOtherrdInfoResType>} ajax
 */
const getOtherrdInfo = (data: GetOtherrdInfoReqType): Promise<GetOtherrdInfoResType> => {
  return ajax({
    url: '/otherrd/info',
    method: Method.GET
  }, data)
}

export type PostOtherrdCheckReqType = operations['OtherRd_Check']['parameters']['body']['dto']
export type PostOtherrdCheckResType = definitions['LJsonResult']
/**
 * @description 上架审核
 * @param {PostOtherrdCheckReqType} data 请求参数
 * @returns {Promise<PostOtherrdCheckResType>} ajax
 */
const postOtherrdCheck = (data: PostOtherrdCheckReqType): Promise<PostOtherrdCheckResType> => {
  return ajax({
    url: '/otherrd/check',
    method: Method.POST
  }, data)
}

export default {
  postOtherrdSave,
  getOtherrdNochecklist,
  getOtherrdInfo,
  postOtherrdCheck
}
