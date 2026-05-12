import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSysdicTypeaddReqType = operations['SysDic_DicTypeAdd']['parameters']['body']['dto']
export type PostSysdicTypeaddResType = definitions['LJsonResult']
/**
 * @description 数据字典分类新增
 * @param {PostSysdicTypeaddReqType} data 请求参数
 * @returns {Promise<PostSysdicTypeaddResType>} ajax
 */
const postSysdicTypeadd = (data: PostSysdicTypeaddReqType): Promise<PostSysdicTypeaddResType> => {
  return ajax({
    url: '/sysdic/typeadd',
    method: Method.POST
  }, data)
}

export type PostSysdicTypeupdateReqType = operations['SysDic_DicTypeUpdate']['parameters']['body']['dto']
export type PostSysdicTypeupdateResType = definitions['LJsonResult']
/**
 * @description 数据字典分类修改
 * @param {PostSysdicTypeupdateReqType} data 请求参数
 * @returns {Promise<PostSysdicTypeupdateResType>} ajax
 */
const postSysdicTypeupdate = (data: PostSysdicTypeupdateReqType): Promise<PostSysdicTypeupdateResType> => {
  return ajax({
    url: '/sysdic/typeupdate',
    method: Method.POST
  }, data)
}

export type PostSysdicTypepageReqType = operations['SysDic_DicTypePage']['parameters']['body']['dto']
export type PostSysdicTypepageResType = definitions['LPJsonResult[List[DicTypeInfoDto]]']
/**
 * @description 数据字典分类分页数据
 * @param {PostSysdicTypepageReqType} data 请求参数
 * @returns {Promise<PostSysdicTypepageResType>} ajax
 */
const postSysdicTypepage = (data: PostSysdicTypepageReqType): Promise<PostSysdicTypepageResType> => {
  return ajax({
    url: '/sysdic/typepage',
    method: Method.POST
  }, data)
}

export type PostSysdicTypedelReqType = operations['SysDic_DicTypeDel']['parameters']['body']['dto']
export type PostSysdicTypedelResType = definitions['LJsonResult']
/**
 * @description 数据字典分类删除
 * @param {PostSysdicTypedelReqType} data 请求参数
 * @returns {Promise<PostSysdicTypedelResType>} ajax
 */
const postSysdicTypedel = (data: PostSysdicTypedelReqType): Promise<PostSysdicTypedelResType> => {
  return ajax({
    url: '/sysdic/typedel',
    method: Method.POST
  }, data)
}

export type GetSysdicTypetreeReqType = {}
export type GetSysdicTypetreeResType = definitions['LJsonResult[List[TreeSelectDto]]']
/**
 * @description 查询数下拉列表
 * @param {GetSysdicTypetreeReqType} data 请求参数
 * @returns {Promise<GetSysdicTypetreeResType>} ajax
 */
const getSysdicTypetree = (data: GetSysdicTypetreeReqType = {}): Promise<GetSysdicTypetreeResType> => {
  return ajax({
    url: '/sysdic/typetree',
    method: Method.GET
  }, data)
}

export type PostSysdicSaveReqType = operations['SysDic_Save']['parameters']['body']['dto']
export type PostSysdicSaveResType = definitions['LJsonResult']
/**
 * @description 数据字典保存
 * @param {PostSysdicSaveReqType} data 请求参数
 * @returns {Promise<PostSysdicSaveResType>} ajax
 */
const postSysdicSave = (data: PostSysdicSaveReqType): Promise<PostSysdicSaveResType> => {
  return ajax({
    url: '/sysdic/save',
    method: Method.POST
  }, data)
}

export type PostSysdicDelReqType = operations['SysDic_DicDataDel']['parameters']['body']['dto']
export type PostSysdicDelResType = definitions['LJsonResult']
/**
 * @description 数据字典删除
 * @param {PostSysdicDelReqType} data 请求参数
 * @returns {Promise<PostSysdicDelResType>} ajax
 */
const postSysdicDel = (data: PostSysdicDelReqType): Promise<PostSysdicDelResType> => {
  return ajax({
    url: '/sysdic/del',
    method: Method.POST
  }, data)
}

export type PostSysdicPageReqType = operations['SysDic_QueryPage']['parameters']['body']['dto']
export type PostSysdicPageResType = definitions['LPJsonResult[List[DicDataInfoDto]]']
/**
 * @description 查询数据字典分页数据
 * @param {PostSysdicPageReqType} data 请求参数
 * @returns {Promise<PostSysdicPageResType>} ajax
 */
const postSysdicPage = (data: PostSysdicPageReqType): Promise<PostSysdicPageResType> => {
  return ajax({
    url: '/sysdic/page',
    method: Method.POST
  }, data)
}

export type GetSysdicSelectReqType = operations['SysDic_QuerySelect']['parameters']['query']
export type GetSysdicSelectResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询数据字典下拉列表
 * @param {GetSysdicSelectReqType} data 请求参数
 * @returns {Promise<GetSysdicSelectResType>} ajax
 */
const getSysdicSelect = (data: GetSysdicSelectReqType): Promise<GetSysdicSelectResType> => {
  return ajax({
    url: '/sysdic/select',
    method: Method.GET
  }, data)
}

export default {
  postSysdicTypeadd,
  postSysdicTypeupdate,
  postSysdicTypepage,
  postSysdicTypedel,
  getSysdicTypetree,
  postSysdicSave,
  postSysdicDel,
  postSysdicPage,
  getSysdicSelect
}
