import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetDispatchlistGenDocCodeReqType = {}
export type GetDispatchlistGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetDispatchlistGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetDispatchlistGenDocCodeResType>} ajax
 */
const getDispatchlistGenDocCode = (data: GetDispatchlistGenDocCodeReqType = {}): Promise<GetDispatchlistGenDocCodeResType> => {
  return ajax({
    url: '/dispatchlist/genDocCode',
    method: Method.GET
  }, data)
}

export type GetDispatchlistCodesReqType = operations['DispatchList_QueryCodes']['parameters']['query']
export type GetDispatchlistCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetDispatchlistCodesReqType} data 请求参数
 * @returns {Promise<GetDispatchlistCodesResType>} ajax
 */
const getDispatchlistCodes = (data: GetDispatchlistCodesReqType): Promise<GetDispatchlistCodesResType> => {
  return ajax({
    url: '/dispatchlist/codes',
    method: Method.GET
  }, data)
}

export type PostDispatchlistInfoReqType = operations['DispatchList_Info']['parameters']['body']['dto']
export type PostDispatchlistInfoResType = definitions['LJsonResult[DispatchListInfoDto]']
/**
 * @description 查询单据信息
 * @param {PostDispatchlistInfoReqType} data 请求参数
 * @returns {Promise<PostDispatchlistInfoResType>} ajax
 */
const postDispatchlistInfo = (data: PostDispatchlistInfoReqType): Promise<PostDispatchlistInfoResType> => {
  return ajax({
    url: '/dispatchlist/info',
    method: Method.POST
  }, data)
}

export type PostDispatchlistPagewithdetailReqType = operations['DispatchList_QueryPageWithDetail']['parameters']['body']['dto']
export type PostDispatchlistPagewithdetailResType = definitions['LPJsonResult[List[DispatchListFullPageDto]]']
/**
 * @description 分页查询发货单列表
 * @param {PostDispatchlistPagewithdetailReqType} data 请求参数
 * @returns {Promise<PostDispatchlistPagewithdetailResType>} ajax
 */
const postDispatchlistPagewithdetail = (data: PostDispatchlistPagewithdetailReqType): Promise<PostDispatchlistPagewithdetailResType> => {
  return ajax({
    url: '/dispatchlist/pagewithdetail',
    method: Method.POST
  }, data)
}

export type PostDispatchlistSaveReqType = operations['DispatchList_Save']['parameters']['body']['dto']
export type PostDispatchlistSaveResType = definitions['LJsonResult']
/**
 * @description 发货退货编辑保存
 * @param {PostDispatchlistSaveReqType} data 请求参数
 * @returns {Promise<PostDispatchlistSaveResType>} ajax
 */
const postDispatchlistSave = (data: PostDispatchlistSaveReqType): Promise<PostDispatchlistSaveResType> => {
  return ajax({
    url: '/dispatchlist/save',
    method: Method.POST
  }, data)
}

export type PostDispatchlistBusoptionReqType = operations['DispatchList_BusOption']['parameters']['body']['dto']
export type PostDispatchlistBusoptionResType = definitions['LJsonResult']
/**
 * @description 业务操作
 * @param {PostDispatchlistBusoptionReqType} data 请求参数
 * @returns {Promise<PostDispatchlistBusoptionResType>} ajax
 */
const postDispatchlistBusoption = (data: PostDispatchlistBusoptionReqType): Promise<PostDispatchlistBusoptionResType> => {
  return ajax({
    url: '/dispatchlist/busoption',
    method: Method.POST
  }, data)
}

export type PostDispatchlistBusoptionbakReqType = operations['DispatchList_BusOptionBak']['parameters']['body']['dto']
export type PostDispatchlistBusoptionbakResType = definitions['LJsonResult']
/**
 * @description 业务操作退回
 * @param {PostDispatchlistBusoptionbakReqType} data 请求参数
 * @returns {Promise<PostDispatchlistBusoptionbakResType>} ajax
 */
const postDispatchlistBusoptionbak = (data: PostDispatchlistBusoptionbakReqType): Promise<PostDispatchlistBusoptionbakResType> => {
  return ajax({
    url: '/dispatchlist/busoptionbak',
    method: Method.POST
  }, data)
}

export type PostDispatchlistDeleteReqType = operations['DispatchList_Delete']['parameters']['body']['dto']
export type PostDispatchlistDeleteResType = definitions['LJsonResult']
/**
 * @description 单据删除
 * @param {PostDispatchlistDeleteReqType} data 请求参数
 * @returns {Promise<PostDispatchlistDeleteResType>} ajax
 */
const postDispatchlistDelete = (data: PostDispatchlistDeleteReqType): Promise<PostDispatchlistDeleteResType> => {
  return ajax({
    url: '/dispatchlist/delete',
    method: Method.POST
  }, data)
}

export default {
  getDispatchlistGenDocCode,
  getDispatchlistCodes,
  postDispatchlistInfo,
  postDispatchlistPagewithdetail,
  postDispatchlistSave,
  postDispatchlistBusoption,
  postDispatchlistBusoptionbak,
  postDispatchlistDelete
}
