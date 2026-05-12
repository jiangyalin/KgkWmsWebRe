import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostDraftSaveReqType = operations['Draft_Save']['parameters']['body']['dto']
export type PostDraftSaveResType = definitions['LJsonResult']
/**
 * @description 保存/修改
 * @param {PostDraftSaveReqType} data 请求参数
 * @returns {Promise<PostDraftSaveResType>} ajax
 */
const postDraftSave = (data: PostDraftSaveReqType): Promise<PostDraftSaveResType> => {
  return ajax({
    url: '/draft/save',
    method: Method.POST
  }, data)
}

export type PostDraftInfoReqType = operations['Draft_QueryInfo']['parameters']['body']['dto']
export type PostDraftInfoResType = definitions['LJsonResult[DraftDetailDto]']
/**
 * @description 明细查询
 * @param {PostDraftInfoReqType} data 请求参数
 * @returns {Promise<PostDraftInfoResType>} ajax
 */
const postDraftInfo = (data: PostDraftInfoReqType): Promise<PostDraftInfoResType> => {
  return ajax({
    url: '/draft/info',
    method: Method.POST
  }, data)
}

export type PostDraftDraftLsReqType = operations['Draft_DraftLs']['parameters']['query']
export type PostDraftDraftLsResType = definitions['LLJsonResult[DraftDetailDto]']
/**
 * @description 草稿列表
 * @param {PostDraftDraftLsReqType} data 请求参数
 * @returns {Promise<PostDraftDraftLsResType>} ajax
 */
const postDraftDraftLs = (data: PostDraftDraftLsReqType): Promise<PostDraftDraftLsResType> => {
  return ajax({
    url: '/draft/draftLs',
    method: Method.POST
  }, data)
}

export type PostDraftDelReqType = operations['Draft_Del']['parameters']['body']['dto']
export type PostDraftDelResType = definitions['LJsonResult']
/**
 * @description 单据删除
 * @param {PostDraftDelReqType} data 请求参数
 * @returns {Promise<PostDraftDelResType>} ajax
 */
const postDraftDel = (data: PostDraftDelReqType): Promise<PostDraftDelResType> => {
  return ajax({
    url: '/draft/del',
    method: Method.POST
  }, data)
}

export default {
  postDraftSave,
  postDraftInfo,
  postDraftDraftLs,
  postDraftDel
}
