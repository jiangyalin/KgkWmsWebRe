import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostInvcommontypeSaveReqType = operations['InventoryCommonType_Save']['parameters']['body']['dto']
export type PostInvcommontypeSaveResType = definitions['LJsonResult']
/**
 * @description 存货通用型号保存更新
 * @param {PostInvcommontypeSaveReqType} data 请求参数
 * @returns {Promise<PostInvcommontypeSaveResType>} ajax
 */
const postInvcommontypeSave = (data: PostInvcommontypeSaveReqType): Promise<PostInvcommontypeSaveResType> => {
  return ajax({
    url: '/invcommontype/save',
    method: Method.POST
  }, data)
}

export type PostInvcommontypeInfoReqType = operations['InventoryCommonType_Info']['parameters']['body']['dto']
export type PostInvcommontypeInfoResType = definitions['LJsonResult[InvCommonTypeBaseDto]']
/**
 * @description 查询通用型号信息
 * @param {PostInvcommontypeInfoReqType} data 请求参数
 * @returns {Promise<PostInvcommontypeInfoResType>} ajax
 */
const postInvcommontypeInfo = (data: PostInvcommontypeInfoReqType): Promise<PostInvcommontypeInfoResType> => {
  return ajax({
    url: '/invcommontype/info',
    method: Method.POST
  }, data)
}

export type PostInvcommontypePageReqType = operations['InventoryCommonType_QueryPage']['parameters']['body']['dto']
export type PostInvcommontypePageResType = definitions['LPJsonResult[List[InvCommonTypeBaseDto]]']
/**
 * @description 存货通用型号分页查询
 * @param {PostInvcommontypePageReqType} data 请求参数
 * @returns {Promise<PostInvcommontypePageResType>} ajax
 */
const postInvcommontypePage = (data: PostInvcommontypePageReqType): Promise<PostInvcommontypePageResType> => {
  return ajax({
    url: '/invcommontype/page',
    method: Method.POST
  }, data)
}

export type PostInvcommontypeQueryInvByTypeReqType = operations['InventoryCommonType_QueryInvByType']['parameters']['body']['dto']
export type PostInvcommontypeQueryInvByTypeResType = definitions['LPJsonResult[List[InventoryWithBindVo]]']
/**
 * @description 根据通用型号查询对应的存货
 * @param {PostInvcommontypeQueryInvByTypeReqType} data 请求参数
 * @returns {Promise<PostInvcommontypeQueryInvByTypeResType>} ajax
 */
const postInvcommontypeQueryInvByType = (data: PostInvcommontypeQueryInvByTypeReqType): Promise<PostInvcommontypeQueryInvByTypeResType> => {
  return ajax({
    url: '/invcommontype/queryInvByType',
    method: Method.POST
  }, data)
}

export type GetInvcommontypeFindInvCodeByTypeReqType = operations['InventoryCommonType_FindInvCodeByType']['parameters']['query']
export type GetInvcommontypeFindInvCodeByTypeResType = definitions['LJsonResult[List[String]]']
/**
 * @description 查询通用型号下绑定的存货编码
 * @param {GetInvcommontypeFindInvCodeByTypeReqType} data 请求参数
 * @returns {Promise<GetInvcommontypeFindInvCodeByTypeResType>} ajax
 */
const getInvcommontypeFindInvCodeByType = (data: GetInvcommontypeFindInvCodeByTypeReqType): Promise<GetInvcommontypeFindInvCodeByTypeResType> => {
  return ajax({
    url: '/invcommontype/findInvCodeByType',
    method: Method.GET
  }, data)
}

export type PostInvcommontypeBindReqType = operations['InventoryCommonType_Bind']['parameters']['body']['dto']
export type PostInvcommontypeBindResType = definitions['LJsonResult']
/**
 * @description 绑定(解绑)存货到通用类型
 * @param {PostInvcommontypeBindReqType} data 请求参数
 * @returns {Promise<PostInvcommontypeBindResType>} ajax
 */
const postInvcommontypeBind = (data: PostInvcommontypeBindReqType): Promise<PostInvcommontypeBindResType> => {
  return ajax({
    url: '/invcommontype/Bind',
    method: Method.POST
  }, data)
}

export type PostInvcommontypeDeleteReqType = operations['InventoryCommonType_Delete']['parameters']['body']['dto']
export type PostInvcommontypeDeleteResType = definitions['LJsonResult']
/**
 * @description 删除通用型号
 * @param {PostInvcommontypeDeleteReqType} data 请求参数
 * @returns {Promise<PostInvcommontypeDeleteResType>} ajax
 */
const postInvcommontypeDelete = (data: PostInvcommontypeDeleteReqType): Promise<PostInvcommontypeDeleteResType> => {
  return ajax({
    url: '/invcommontype/delete',
    method: Method.POST
  }, data)
}

export default {
  postInvcommontypeSave,
  postInvcommontypeInfo,
  postInvcommontypePage,
  postInvcommontypeQueryInvByType,
  getInvcommontypeFindInvCodeByType,
  postInvcommontypeBind,
  postInvcommontypeDelete
}
