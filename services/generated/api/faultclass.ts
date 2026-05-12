import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostFaultclassSaveReqType = operations['FaultClass_Save']['parameters']['body']['dto']
export type PostFaultclassSaveResType = definitions['LJsonResult']
/**
 * @description 故障分类保存
 * @param {PostFaultclassSaveReqType} data 请求参数
 * @returns {Promise<PostFaultclassSaveResType>} ajax
 */
const postFaultclassSave = (data: PostFaultclassSaveReqType): Promise<PostFaultclassSaveResType> => {
  return ajax({
    url: '/faultclass/save',
    method: Method.POST
  }, data)
}

export type PostFaultclassDeleteReqType = operations['FaultClass_DicDataDel']['parameters']['body']['dto']
export type PostFaultclassDeleteResType = definitions['LJsonResult']
/**
 * @description 故障分类删除
 * @param {PostFaultclassDeleteReqType} data 请求参数
 * @returns {Promise<PostFaultclassDeleteResType>} ajax
 */
const postFaultclassDelete = (data: PostFaultclassDeleteReqType): Promise<PostFaultclassDeleteResType> => {
  return ajax({
    url: '/faultclass/delete',
    method: Method.POST
  }, data)
}

export type GetFaultclassInfoReqType = operations['FaultClass_QueryInfo']['parameters']['query']
export type GetFaultclassInfoResType = definitions['LJsonResult[FaultClassInfoDto]']
/**
 * @description 故障分类明细
 * @param {GetFaultclassInfoReqType} data 请求参数
 * @returns {Promise<GetFaultclassInfoResType>} ajax
 */
const getFaultclassInfo = (data: GetFaultclassInfoReqType): Promise<GetFaultclassInfoResType> => {
  return ajax({
    url: '/faultclass/info',
    method: Method.GET
  }, data)
}

export type PostFaultclassPageReqType = operations['FaultClass_QueryPage']['parameters']['body']['dto']
export type PostFaultclassPageResType = definitions['LPJsonResult[List[FaultClassInfoDto]]']
/**
 * @description 查询故障分类分页数据
 * @param {PostFaultclassPageReqType} data 请求参数
 * @returns {Promise<PostFaultclassPageResType>} ajax
 */
const postFaultclassPage = (data: PostFaultclassPageReqType): Promise<PostFaultclassPageResType> => {
  return ajax({
    url: '/faultclass/page',
    method: Method.POST
  }, data)
}

export type GetFaultclassTreeSelectReqType = {}
export type GetFaultclassTreeSelectResType = definitions['LJsonResult[List[TreeSelectDto]]']
/**
 * @description 查询树下拉列表
 * @param {GetFaultclassTreeSelectReqType} data 请求参数
 * @returns {Promise<GetFaultclassTreeSelectResType>} ajax
 */
const getFaultclassTreeSelect = (data: GetFaultclassTreeSelectReqType = {}): Promise<GetFaultclassTreeSelectResType> => {
  return ajax({
    url: '/faultclass/treeSelect',
    method: Method.GET
  }, data)
}

export type PostFaultclassExportReqType = operations['FaultClass_ExportData']['parameters']['body']['dto']
export type PostFaultclassExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostFaultclassExportReqType} data 请求参数
 * @returns {Promise<PostFaultclassExportResType>} ajax
 */
const postFaultclassExport = (data: PostFaultclassExportReqType): Promise<PostFaultclassExportResType> => {
  return ajax({
    url: '/faultclass/export',
    method: Method.POST
  }, data)
}

export default {
  postFaultclassSave,
  postFaultclassDelete,
  getFaultclassInfo,
  postFaultclassPage,
  getFaultclassTreeSelect,
  postFaultclassExport
}
