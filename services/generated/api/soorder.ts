import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSoorderPageReqType = operations['SoOrder_QueryPage']['parameters']['body']['dto']
export type PostSoorderPageResType = definitions['LPJsonResult[List[SoFullPageDto]]']
/**
 * @description 销售订单查询
 * @param {PostSoorderPageReqType} data 请求参数
 * @returns {Promise<PostSoorderPageResType>} ajax
 */
const postSoorderPage = (data: PostSoorderPageReqType): Promise<PostSoorderPageResType> => {
  return ajax({
    url: '/soorder/page',
    method: Method.POST
  }, data)
}

export type PostSoorderQuerywithinvReqType = operations['SoOrder_QueryWithInv']['parameters']['body']['dto']
export type PostSoorderQuerywithinvResType = definitions['LLJsonResult[SoFullPageDto]']
/**
 * @description 单号,存货查询销售订单
 * @param {PostSoorderQuerywithinvReqType} data 请求参数
 * @returns {Promise<PostSoorderQuerywithinvResType>} ajax
 */
const postSoorderQuerywithinv = (data: PostSoorderQuerywithinvReqType): Promise<PostSoorderQuerywithinvResType> => {
  return ajax({
    url: '/soorder/querywithinv',
    method: Method.POST
  }, data)
}

export default {
  postSoorderPage,
  postSoorderQuerywithinv
}
