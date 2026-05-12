import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostUnpackingInspectSaveReqType = operations['UnpackingInspect_Save']['parameters']['body']['dto']
export type PostUnpackingInspectSaveResType = definitions['LJsonResult']
/**
 * @description 拆箱单保存
 * @param {PostUnpackingInspectSaveReqType} data 请求参数
 * @returns {Promise<PostUnpackingInspectSaveResType>} ajax
 */
const postUnpackingInspectSave = (data: PostUnpackingInspectSaveReqType): Promise<PostUnpackingInspectSaveResType> => {
  return ajax({
    url: '/UnpackingInspect/save',
    method: Method.POST
  }, data)
}

export type PostUnpackingInspectUpdateReqType = operations['UnpackingInspect_Update']['parameters']['body']['dto']
export type PostUnpackingInspectUpdateResType = definitions['LJsonResult']
/**
 * @description 修改拆箱单
 * @param {PostUnpackingInspectUpdateReqType} data 请求参数
 * @returns {Promise<PostUnpackingInspectUpdateResType>} ajax
 */
const postUnpackingInspectUpdate = (data: PostUnpackingInspectUpdateReqType): Promise<PostUnpackingInspectUpdateResType> => {
  return ajax({
    url: '/UnpackingInspect/update',
    method: Method.POST
  }, data)
}

export type PostUnpackingInspectPagequeryReqType = operations['UnpackingInspect_PageQuery']['parameters']['body']['dto']
export type PostUnpackingInspectPagequeryResType = definitions['LPJsonResult[List[UnpackingInspectDto]]']
/**
 * @description 装箱单查询
 * @param {PostUnpackingInspectPagequeryReqType} data 请求参数
 * @returns {Promise<PostUnpackingInspectPagequeryResType>} ajax
 */
const postUnpackingInspectPagequery = (data: PostUnpackingInspectPagequeryReqType): Promise<PostUnpackingInspectPagequeryResType> => {
  return ajax({
    url: '/UnpackingInspect/pagequery',
    method: Method.POST
  }, data)
}

export type PostUnpackingInspectQueryprodexpmaterialReqType = operations['UnpackingInspect_QueryProdExpMaterial']['parameters']['body']['dto']
export type PostUnpackingInspectQueryprodexpmaterialResType = definitions['LPJsonResult[List[UnpackingInspectProdRefMDto]]']
/**
 * @description 查询机器材料领料信息
 * @param {PostUnpackingInspectQueryprodexpmaterialReqType} data 请求参数
 * @returns {Promise<PostUnpackingInspectQueryprodexpmaterialResType>} ajax
 */
const postUnpackingInspectQueryprodexpmaterial = (data: PostUnpackingInspectQueryprodexpmaterialReqType): Promise<PostUnpackingInspectQueryprodexpmaterialResType> => {
  return ajax({
    url: '/UnpackingInspect/queryprodexpmaterial',
    method: Method.POST
  }, data)
}

export type GetUnpackingInspectCodesReqType = operations['UnpackingInspect_QueryCodes']['parameters']['query']
export type GetUnpackingInspectCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetUnpackingInspectCodesReqType} data 请求参数
 * @returns {Promise<GetUnpackingInspectCodesResType>} ajax
 */
const getUnpackingInspectCodes = (data: GetUnpackingInspectCodesReqType): Promise<GetUnpackingInspectCodesResType> => {
  return ajax({
    url: '/UnpackingInspect/codes',
    method: Method.GET
  }, data)
}

export type PostUnpackingInspectInfoReqType = operations['UnpackingInspect_Info']['parameters']['body']['dto']
export type PostUnpackingInspectInfoResType = definitions['LJsonResult[UnpackingInspectDto]']
/**
 * @description 协调单单据页分页
 * @param {PostUnpackingInspectInfoReqType} data 请求参数
 * @returns {Promise<PostUnpackingInspectInfoResType>} ajax
 */
const postUnpackingInspectInfo = (data: PostUnpackingInspectInfoReqType): Promise<PostUnpackingInspectInfoResType> => {
  return ajax({
    url: '/UnpackingInspect/info',
    method: Method.POST
  }, data)
}

export type GetUnpackingInspectNewinitReqType = {}
export type GetUnpackingInspectNewinitResType = definitions['LJsonResult[UnpackingInspectDto]']
/**
 * @description 新增初始化
 * @param {GetUnpackingInspectNewinitReqType} data 请求参数
 * @returns {Promise<GetUnpackingInspectNewinitResType>} ajax
 */
const getUnpackingInspectNewinit = (data: GetUnpackingInspectNewinitReqType = {}): Promise<GetUnpackingInspectNewinitResType> => {
  return ajax({
    url: '/UnpackingInspect/newinit',
    method: Method.GET
  }, data)
}

export type PostUnpackingInspectQuerydetailReqType = operations['UnpackingInspect_QueryDetail']['parameters']['body']['dto']
export type PostUnpackingInspectQuerydetailResType = definitions['LJsonResult[UnpackingInspectDto]']
/**
 * @description 装箱单详情
 * @param {PostUnpackingInspectQuerydetailReqType} data 请求参数
 * @returns {Promise<PostUnpackingInspectQuerydetailResType>} ajax
 */
const postUnpackingInspectQuerydetail = (data: PostUnpackingInspectQuerydetailReqType): Promise<PostUnpackingInspectQuerydetailResType> => {
  return ajax({
    url: '/UnpackingInspect/querydetail',
    method: Method.POST
  }, data)
}

export type PostUnpackingInspectDeleteReqType = operations['UnpackingInspect_Delete']['parameters']['body']['dto']
export type PostUnpackingInspectDeleteResType = definitions['LJsonResult']
/**
 * @description 拆箱检查删除
 * @param {PostUnpackingInspectDeleteReqType} data 请求参数
 * @returns {Promise<PostUnpackingInspectDeleteResType>} ajax
 */
const postUnpackingInspectDelete = (data: PostUnpackingInspectDeleteReqType): Promise<PostUnpackingInspectDeleteResType> => {
  return ajax({
    url: '/UnpackingInspect/delete',
    method: Method.POST
  }, data)
}

export default {
  postUnpackingInspectSave,
  postUnpackingInspectUpdate,
  postUnpackingInspectPagequery,
  postUnpackingInspectQueryprodexpmaterial,
  getUnpackingInspectCodes,
  postUnpackingInspectInfo,
  getUnpackingInspectNewinit,
  postUnpackingInspectQuerydetail,
  postUnpackingInspectDelete
}
