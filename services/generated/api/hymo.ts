import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostHymoIssueListReqType = operations['HyMoOrder_QueryHyMoIssueList']['parameters']['body']['dto']
export type PostHymoIssueListResType = definitions['LJsonResult[List[HyMoIssueListDto]]']
/**
 * @description 查询待发料列表
 * @param {PostHymoIssueListReqType} data 请求参数
 * @returns {Promise<PostHymoIssueListResType>} ajax
 */
const postHymoIssueList = (data: PostHymoIssueListReqType): Promise<PostHymoIssueListResType> => {
  return ajax({
    url: '/hymo/issueList',
    method: Method.POST
  }, data)
}

export type PostHymoReviceListReqType = operations['HyMoOrder_QueryHyReviceList']['parameters']['body']['dto']
export type PostHymoReviceListResType = definitions['LJsonResult[List[HyMoReviceListDto]]']
/**
 * @description 查询待收料列表
 * @param {PostHymoReviceListReqType} data 请求参数
 * @returns {Promise<PostHymoReviceListResType>} ajax
 */
const postHymoReviceList = (data: PostHymoReviceListReqType): Promise<PostHymoReviceListResType> => {
  return ajax({
    url: '/hymo/reviceList',
    method: Method.POST
  }, data)
}

export type PostHymoScanQueryReqType = operations['HyMoOrder_QueryHyMoOrderInfo']['parameters']['body']['dto']
export type PostHymoScanQueryResType = definitions['LJsonResult[HyMoOrderInfoDto]']
/**
 * @description 委外发料根据流转卡获取工序委外信息
 * @param {PostHymoScanQueryReqType} data 请求参数
 * @returns {Promise<PostHymoScanQueryResType>} ajax
 */
const postHymoScanQuery = (data: PostHymoScanQueryReqType): Promise<PostHymoScanQueryResType> => {
  return ajax({
    url: '/hymo/scanQuery',
    method: Method.POST
  }, data)
}

export type PostHymoReviceScanQueryReqType = operations['HyMoOrder_QueryHyReviceScanInfo']['parameters']['body']['dto']
export type PostHymoReviceScanQueryResType = definitions['LJsonResult[HyReviceScanInfoDto]']
/**
 * @description 委外收料根据流转卡获取工序委外信息
 * @param {PostHymoReviceScanQueryReqType} data 请求参数
 * @returns {Promise<PostHymoReviceScanQueryResType>} ajax
 */
const postHymoReviceScanQuery = (data: PostHymoReviceScanQueryReqType): Promise<PostHymoReviceScanQueryResType> => {
  return ajax({
    url: '/hymo/reviceScanQuery',
    method: Method.POST
  }, data)
}

export type PostHymoSaveReqType = operations['HyMoOrder_HyMoOrderSave']['parameters']['body']['dto']
export type PostHymoSaveResType = definitions['LJsonResult']
/**
 * @description 委外发料提交
 * @param {PostHymoSaveReqType} data 请求参数
 * @returns {Promise<PostHymoSaveResType>} ajax
 */
const postHymoSave = (data: PostHymoSaveReqType): Promise<PostHymoSaveResType> => {
  return ajax({
    url: '/hymo/save',
    method: Method.POST
  }, data)
}

export type PostHymoReviceSaveReqType = operations['HyMoOrder_HyMoReviceSave']['parameters']['body']['dto']
export type PostHymoReviceSaveResType = definitions['LJsonResult']
/**
 * @description 委外收料提交
 * @param {PostHymoReviceSaveReqType} data 请求参数
 * @returns {Promise<PostHymoReviceSaveResType>} ajax
 */
const postHymoReviceSave = (data: PostHymoReviceSaveReqType): Promise<PostHymoReviceSaveResType> => {
  return ajax({
    url: '/hymo/reviceSave',
    method: Method.POST
  }, data)
}

export type PostHymoQueryReviceScrapPageReqType = operations['HyMoOrder_QueryReviceScrapPage']['parameters']['body']['dto']
export type PostHymoQueryReviceScrapPageResType = definitions['LPJsonResult[List[HyMoReviceScrapDto]]']
/**
 * @description 查询工序委外收料不良记录
 * @param {PostHymoQueryReviceScrapPageReqType} data 请求参数
 * @returns {Promise<PostHymoQueryReviceScrapPageResType>} ajax
 */
const postHymoQueryReviceScrapPage = (data: PostHymoQueryReviceScrapPageReqType): Promise<PostHymoQueryReviceScrapPageResType> => {
  return ajax({
    url: '/hymo/queryReviceScrapPage',
    method: Method.POST
  }, data)
}

export default {
  postHymoIssueList,
  postHymoReviceList,
  postHymoScanQuery,
  postHymoReviceScanQuery,
  postHymoSave,
  postHymoReviceSave,
  postHymoQueryReviceScrapPage
}
