import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostVenorderPopageReqType = operations['VenOrder_QueryPoPage']['parameters']['body']['dto']
export type PostVenorderPopageResType = definitions['LPJsonResult[List[VenPoOrderListDto]]']
/**
 * @description 查询采购订单列表
 * @param {PostVenorderPopageReqType} data 请求参数
 * @returns {Promise<PostVenorderPopageResType>} ajax
 */
const postVenorderPopage = (data: PostVenorderPopageReqType): Promise<PostVenorderPopageResType> => {
  return ajax({
    url: '/venorder/popage',
    method: Method.POST
  }, data)
}

export type PostVenorderPoreviceReqType = operations['VenOrder_VenPoOrderRevice']['parameters']['body']['dto']
export type PostVenorderPoreviceResType = definitions['LJsonResult']
/**
 * @description 供应商采购订单接收
 * @param {PostVenorderPoreviceReqType} data 请求参数
 * @returns {Promise<PostVenorderPoreviceResType>} ajax
 */
const postVenorderPorevice = (data: PostVenorderPoreviceReqType): Promise<PostVenorderPoreviceResType> => {
  return ajax({
    url: '/venorder/porevice',
    method: Method.POST
  }, data)
}

export type PostVenorderDeliveryPoListReqType = operations['VenOrder_VenDeliveryPoOrderList']['parameters']['body']['dto']
export type PostVenorderDeliveryPoListResType = definitions['LPJsonResult[List[VenDeliveryPoOrderListDto]]']
/**
 * @description 查询可发货的采购订单分页数据
 * @param {PostVenorderDeliveryPoListReqType} data 请求参数
 * @returns {Promise<PostVenorderDeliveryPoListResType>} ajax
 */
const postVenorderDeliveryPoList = (data: PostVenorderDeliveryPoListReqType): Promise<PostVenorderDeliveryPoListResType> => {
  return ajax({
    url: '/venorder/deliveryPoList',
    method: Method.POST
  }, data)
}

export type PostVenorderOmpageReqType = operations['VenOrder_QueryOMPage']['parameters']['body']['dto']
export type PostVenorderOmpageResType = definitions['LPJsonResult[List[VenOMOrderListDto]]']
/**
 * @description 查询委外订单列表
 * @param {PostVenorderOmpageReqType} data 请求参数
 * @returns {Promise<PostVenorderOmpageResType>} ajax
 */
const postVenorderOmpage = (data: PostVenorderOmpageReqType): Promise<PostVenorderOmpageResType> => {
  return ajax({
    url: '/venorder/ompage',
    method: Method.POST
  }, data)
}

export type PostVenorderOmreviceReqType = operations['VenOrder_VenOMOrderRevice']['parameters']['body']['dto']
export type PostVenorderOmreviceResType = definitions['LJsonResult']
/**
 * @description 供应商委外订单接收
 * @param {PostVenorderOmreviceReqType} data 请求参数
 * @returns {Promise<PostVenorderOmreviceResType>} ajax
 */
const postVenorderOmrevice = (data: PostVenorderOmreviceReqType): Promise<PostVenorderOmreviceResType> => {
  return ajax({
    url: '/venorder/omrevice',
    method: Method.POST
  }, data)
}

export type PostVenorderDeliveryOmListReqType = operations['VenOrder_VenDeliveryOMOrderList']['parameters']['body']['dto']
export type PostVenorderDeliveryOmListResType = definitions['LPJsonResult[List[VenDeliveryOMOrderListDto]]']
/**
 * @description 查询可发货的委外订单分页数据
 * @param {PostVenorderDeliveryOmListReqType} data 请求参数
 * @returns {Promise<PostVenorderDeliveryOmListResType>} ajax
 */
const postVenorderDeliveryOmList = (data: PostVenorderDeliveryOmListReqType): Promise<PostVenorderDeliveryOmListResType> => {
  return ajax({
    url: '/venorder/deliveryOmList',
    method: Method.POST
  }, data)
}

export default {
  postVenorderPopage,
  postVenorderPorevice,
  postVenorderDeliveryPoList,
  postVenorderOmpage,
  postVenorderOmrevice,
  postVenorderDeliveryOmList
}
