import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostMessageReceverlistReqType = {}
export type PostMessageReceverlistResType = definitions['LLJsonResult[MessageReceiverConfigDto]']
/**
 * @description 获取消息接配置列表
 * @param {PostMessageReceverlistReqType} data 请求参数
 * @returns {Promise<PostMessageReceverlistResType>} ajax
 */
const postMessageReceverlist = (data: PostMessageReceverlistReqType = {}): Promise<PostMessageReceverlistResType> => {
  return ajax({
    url: '/message/receverlist',
    method: Method.POST
  }, data)
}

export type PostMessageSavercvconfReqType = operations['Message_SaveRcvConf']['parameters']['body']['dto']
export type PostMessageSavercvconfResType = definitions['LJsonResult']
/**
 * @description 保存消息接收方配置
 * @param {PostMessageSavercvconfReqType} data 请求参数
 * @returns {Promise<PostMessageSavercvconfResType>} ajax
 */
const postMessageSavercvconf = (data: PostMessageSavercvconfReqType): Promise<PostMessageSavercvconfResType> => {
  return ajax({
    url: '/message/savercvconf',
    method: Method.POST
  }, data)
}

export type PostMessageFindmsgreceiversReqType = operations['Message_FindMsgReceivers']['parameters']['query']
export type PostMessageFindmsgreceiversResType = definitions['LLJsonResult[PersonDto]']
/**
 * @description 查找消息接收人
 * @param {PostMessageFindmsgreceiversReqType} data 请求参数
 * @returns {Promise<PostMessageFindmsgreceiversResType>} ajax
 */
const postMessageFindmsgreceivers = (data: PostMessageFindmsgreceiversReqType): Promise<PostMessageFindmsgreceiversResType> => {
  return ajax({
    url: '/message/findmsgreceivers',
    method: Method.POST
  }, data)
}

export default {
  postMessageReceverlist,
  postMessageSavercvconf,
  postMessageFindmsgreceivers
}
