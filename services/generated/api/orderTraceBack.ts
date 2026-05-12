import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostOrderTraceBackQueryOrderTraceBackTreeReqType = operations['OrderTraceBack_QueryOrderTraceBackTree']['parameters']['body']['dto']
export type PostOrderTraceBackQueryOrderTraceBackTreeResType = definitions['LJsonResult[OrderTraceBackTreeDto]']
/**
 * @description 订单追溯查询
 * @param {PostOrderTraceBackQueryOrderTraceBackTreeReqType} data 请求参数
 * @returns {Promise<PostOrderTraceBackQueryOrderTraceBackTreeResType>} ajax
 */
const postOrderTraceBackQueryOrderTraceBackTree = (data: PostOrderTraceBackQueryOrderTraceBackTreeReqType): Promise<PostOrderTraceBackQueryOrderTraceBackTreeResType> => {
  return ajax({
    url: '/orderTraceBack/queryOrderTraceBackTree',
    method: Method.POST
  }, data)
}

export default {
  postOrderTraceBackQueryOrderTraceBackTree
}
