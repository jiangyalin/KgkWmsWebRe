import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostApiOtherInReqType = operations['OtherIn_QuerySn']['parameters']['body']['dto']
export type PostApiOtherInResType = definitions['LJsonResult[DocLineSnDto]']
/**
 * @description 查询单据绑定的序列号
 * @param {PostApiOtherInReqType} data 请求参数
 * @returns {Promise<PostApiOtherInResType>} ajax
 */
const postApiOtherIn = (data: PostApiOtherInReqType): Promise<PostApiOtherInResType> => {
  return ajax({
    url: '/api/OtherIn',
    method: Method.POST
  }, data)
}

export type PostApiOtherOutReqType = operations['OtherOut_QuerySn']['parameters']['body']['dto']
export type PostApiOtherOutResType = definitions['LJsonResult[DocLineSnDto]']
/**
 * @description 查询单据绑定的序列号
 * @param {PostApiOtherOutReqType} data 请求参数
 * @returns {Promise<PostApiOtherOutResType>} ajax
 */
const postApiOtherOut = (data: PostApiOtherOutReqType): Promise<PostApiOtherOutResType> => {
  return ajax({
    url: '/api/OtherOut',
    method: Method.POST
  }, data)
}

export default {
  postApiOtherIn,
  postApiOtherOut
}
