import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSnListReqType = operations['STSN_GetSnList']['parameters']['body']['dto']
export type PostSnListResType = definitions['LLJsonResult[String]']
/**
 * @description 查询SN列表
 * @param {PostSnListReqType} data 请求参数
 * @returns {Promise<PostSnListResType>} ajax
 */
const postSnList = (data: PostSnListReqType): Promise<PostSnListResType> => {
  return ajax({
    url: '/sn/list',
    method: Method.POST
  }, data)
}

export type PostSnRecordlistReqType = operations['STSN_QuerySTSNRecordList']['parameters']['body']['dto']
export type PostSnRecordlistResType = definitions['LLJsonResult[STSNRecordBaseDto]']
/**
 * @description 查询单据对应的SN记录列表
 * @param {PostSnRecordlistReqType} data 请求参数
 * @returns {Promise<PostSnRecordlistResType>} ajax
 */
const postSnRecordlist = (data: PostSnRecordlistReqType): Promise<PostSnRecordlistResType> => {
  return ajax({
    url: '/sn/recordlist',
    method: Method.POST
  }, data)
}

export type PostSnInfolistReqType = operations['STSN_GetSnInfoList']['parameters']['body']['dto']
export type PostSnInfolistResType = definitions['LLJsonResult[InvSnRecordOutPut]']
/**
 * @description 查询SN信息列表
 * @param {PostSnInfolistReqType} data 请求参数
 * @returns {Promise<PostSnInfolistResType>} ajax
 */
const postSnInfolist = (data: PostSnInfolistReqType): Promise<PostSnInfolistResType> => {
  return ajax({
    url: '/sn/infolist',
    method: Method.POST
  }, data)
}

export type PostSnPageReqType = operations['STSN_Page']['parameters']['body']['dto']
export type PostSnPageResType = definitions['LLPJsonResult[InvSnBaseOutput]']
/**
 * @description 分页查询序列号
 * @param {PostSnPageReqType} data 请求参数
 * @returns {Promise<PostSnPageResType>} ajax
 */
const postSnPage = (data: PostSnPageReqType): Promise<PostSnPageResType> => {
  return ajax({
    url: '/sn/page',
    method: Method.POST
  }, data)
}

export type PostSnQueryhistoryReqType = operations['STSN_SnHistory']['parameters']['body']['dto']
export type PostSnQueryhistoryResType = definitions['LLJsonResult[SnRecordVo]']
/**
 * @description 序列号追溯列表
 * @param {PostSnQueryhistoryReqType} data 请求参数
 * @returns {Promise<PostSnQueryhistoryResType>} ajax
 */
const postSnQueryhistory = (data: PostSnQueryhistoryReqType): Promise<PostSnQueryhistoryResType> => {
  return ajax({
    url: '/sn/queryhistory',
    method: Method.POST
  }, data)
}

export default {
  postSnList,
  postSnRecordlist,
  postSnInfolist,
  postSnPage,
  postSnQueryhistory
}
