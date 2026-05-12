import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostPackingPagequerymoReqType = operations['Packing_PageQueryMO']['parameters']['body']['dto']
export type PostPackingPagequerymoResType = definitions['LPJsonResult[List[MOQueryResultDto]]']
/**
 * @description 生产订单查询
 * @param {PostPackingPagequerymoReqType} data 请求参数
 * @returns {Promise<PostPackingPagequerymoResType>} ajax
 */
const postPackingPagequerymo = (data: PostPackingPagequerymoReqType): Promise<PostPackingPagequerymoResType> => {
  return ajax({
    url: '/packing/pagequerymo',
    method: Method.POST
  }, data)
}

export type PostPackingSavepackingReqType = operations['Packing_Save']['parameters']['body']['dto']
export type PostPackingSavepackingResType = definitions['LJsonResult']
/**
 * @description 装箱单保存
 * @param {PostPackingSavepackingReqType} data 请求参数
 * @returns {Promise<PostPackingSavepackingResType>} ajax
 */
const postPackingSavepacking = (data: PostPackingSavepackingReqType): Promise<PostPackingSavepackingResType> => {
  return ajax({
    url: '/packing/savepacking',
    method: Method.POST
  }, data)
}

export type PostPackingUpdatepackingReqType = operations['Packing_UpdateData']['parameters']['body']['dto']
export type PostPackingUpdatepackingResType = definitions['LJsonResult']
/**
 * @description 装箱单修改
 * @param {PostPackingUpdatepackingReqType} data 请求参数
 * @returns {Promise<PostPackingUpdatepackingResType>} ajax
 */
const postPackingUpdatepacking = (data: PostPackingUpdatepackingReqType): Promise<PostPackingUpdatepackingResType> => {
  return ajax({
    url: '/packing/updatepacking',
    method: Method.POST
  }, data)
}

export type PostPackingPagequerypackingReqType = operations['Packing_PageQuery']['parameters']['body']['dto']
export type PostPackingPagequerypackingResType = definitions['LPJsonResult[List[PackingDto]]']
/**
 * @description 装箱单查询
 * @param {PostPackingPagequerypackingReqType} data 请求参数
 * @returns {Promise<PostPackingPagequerypackingResType>} ajax
 */
const postPackingPagequerypacking = (data: PostPackingPagequerypackingReqType): Promise<PostPackingPagequerypackingResType> => {
  return ajax({
    url: '/packing/pagequerypacking',
    method: Method.POST
  }, data)
}

export type GetPackingCodesReqType = operations['Packing_QueryCodes']['parameters']['query']
export type GetPackingCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetPackingCodesReqType} data 请求参数
 * @returns {Promise<GetPackingCodesResType>} ajax
 */
const getPackingCodes = (data: GetPackingCodesReqType): Promise<GetPackingCodesResType> => {
  return ajax({
    url: '/packing/codes',
    method: Method.GET
  }, data)
}

export type PostPackingInfoReqType = operations['Packing_Info']['parameters']['body']['dto']
export type PostPackingInfoResType = definitions['LJsonResult[PackingDto]']
/**
 * @description 装箱单分页详情
 * @param {PostPackingInfoReqType} data 请求参数
 * @returns {Promise<PostPackingInfoResType>} ajax
 */
const postPackingInfo = (data: PostPackingInfoReqType): Promise<PostPackingInfoResType> => {
  return ajax({
    url: '/packing/info',
    method: Method.POST
  }, data)
}

export type GetPackingNewinitReqType = {}
export type GetPackingNewinitResType = definitions['LJsonResult[PackingDto]']
/**
 * @description 新增初始化
 * @param {GetPackingNewinitReqType} data 请求参数
 * @returns {Promise<GetPackingNewinitResType>} ajax
 */
const getPackingNewinit = (data: GetPackingNewinitReqType = {}): Promise<GetPackingNewinitResType> => {
  return ajax({
    url: '/packing/newinit',
    method: Method.GET
  }, data)
}

export type GetPackingGetmodulesReqType = {}
export type GetPackingGetmodulesResType = definitions['LJsonResult[List[PackingModuleDto]]']
/**
 * @description 获取模板
 * @param {GetPackingGetmodulesReqType} data 请求参数
 * @returns {Promise<GetPackingGetmodulesResType>} ajax
 */
const getPackingGetmodules = (data: GetPackingGetmodulesReqType = {}): Promise<GetPackingGetmodulesResType> => {
  return ajax({
    url: '/packing/getmodules',
    method: Method.GET
  }, data)
}

export type GetPackingGetpartsnamesReqType = operations['Packing_GetPartsNamesFromModule']['parameters']['query']
export type GetPackingGetpartsnamesResType = definitions['LJsonResult[List[PackingDetailDto]]']
/**
 * @description 获取模板中部件名称
 * @param {GetPackingGetpartsnamesReqType} data 请求参数
 * @returns {Promise<GetPackingGetpartsnamesResType>} ajax
 */
const getPackingGetpartsnames = (data: GetPackingGetpartsnamesReqType): Promise<GetPackingGetpartsnamesResType> => {
  return ajax({
    url: '/packing/getpartsnames',
    method: Method.GET
  }, data)
}

export type PostPackingQuerydetailReqType = operations['Packing_QueryDetail']['parameters']['body']['dto']
export type PostPackingQuerydetailResType = definitions['LJsonResult[PackingDto]']
/**
 * @description 装箱单详情
 * @param {PostPackingQuerydetailReqType} data 请求参数
 * @returns {Promise<PostPackingQuerydetailResType>} ajax
 */
const postPackingQuerydetail = (data: PostPackingQuerydetailReqType): Promise<PostPackingQuerydetailResType> => {
  return ajax({
    url: '/packing/querydetail',
    method: Method.POST
  }, data)
}

export type PostPackingDeleteReqType = operations['Packing_Delete']['parameters']['body']['dto']
export type PostPackingDeleteResType = definitions['LJsonResult']
/**
 * @description 装箱单删除
 * @param {PostPackingDeleteReqType} data 请求参数
 * @returns {Promise<PostPackingDeleteResType>} ajax
 */
const postPackingDelete = (data: PostPackingDeleteReqType): Promise<PostPackingDeleteResType> => {
  return ajax({
    url: '/packing/delete',
    method: Method.POST
  }, data)
}

export default {
  postPackingPagequerymo,
  postPackingSavepacking,
  postPackingUpdatepacking,
  postPackingPagequerypacking,
  getPackingCodes,
  postPackingInfo,
  getPackingNewinit,
  getPackingGetmodules,
  getPackingGetpartsnames,
  postPackingQuerydetail,
  postPackingDelete
}
