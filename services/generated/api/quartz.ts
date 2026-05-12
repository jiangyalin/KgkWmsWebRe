import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostQuartzSaveReqType = operations['QuartzConfig_Save']['parameters']['body']['dto']
export type PostQuartzSaveResType = definitions['LJsonResult']
/**
 * @description 保存修改
 * @param {PostQuartzSaveReqType} data 请求参数
 * @returns {Promise<PostQuartzSaveResType>} ajax
 */
const postQuartzSave = (data: PostQuartzSaveReqType): Promise<PostQuartzSaveResType> => {
  return ajax({
    url: '/quartz/save',
    method: Method.POST
  }, data)
}

export type GetQuartzInfoReqType = operations['QuartzConfig_QueryInfo']['parameters']['query']
export type GetQuartzInfoResType = definitions['LJsonResult[QuartzInfoDto]']
/**
 * @description 明细
 * @param {GetQuartzInfoReqType} data 请求参数
 * @returns {Promise<GetQuartzInfoResType>} ajax
 */
const getQuartzInfo = (data: GetQuartzInfoReqType): Promise<GetQuartzInfoResType> => {
  return ajax({
    url: '/quartz/info',
    method: Method.GET
  }, data)
}

export type PostQuartzPageReqType = operations['QuartzConfig_QueryPage']['parameters']['body']['dto']
export type PostQuartzPageResType = definitions['LPJsonResult[List[QuartzInfoDto]]']
/**
 * @description 查询分页数据
 * @param {PostQuartzPageReqType} data 请求参数
 * @returns {Promise<PostQuartzPageResType>} ajax
 */
const postQuartzPage = (data: PostQuartzPageReqType): Promise<PostQuartzPageResType> => {
  return ajax({
    url: '/quartz/page',
    method: Method.POST
  }, data)
}

export type GetQuartzNonoticeReqType = operations['QuartzConfig_NoNotice']['parameters']['query']
export type GetQuartzNonoticeResType = definitions['LJsonResult[String]']
/**
 * @description 不再通知
 * @param {GetQuartzNonoticeReqType} data 请求参数
 * @returns {Promise<GetQuartzNonoticeResType>} ajax
 */
const getQuartzNonotice = (data: GetQuartzNonoticeReqType): Promise<GetQuartzNonoticeResType> => {
  return ajax({
    url: '/quartz/nonotice',
    method: Method.GET
  }, data)
}

export type PostQuartzNoticepageReqType = operations['QuartzConfig_QueryNoticePage']['parameters']['body']['dto']
export type PostQuartzNoticepageResType = definitions['LPJsonResult[QuartzUserLog]']
/**
 * @description 查询通知消息分页数据
 * @param {PostQuartzNoticepageReqType} data 请求参数
 * @returns {Promise<PostQuartzNoticepageResType>} ajax
 */
const postQuartzNoticepage = (data: PostQuartzNoticepageReqType): Promise<PostQuartzNoticepageResType> => {
  return ajax({
    url: '/quartz/noticepage',
    method: Method.POST
  }, data)
}

export type PostQuartzNoticecountReqType = {}
export type PostQuartzNoticecountResType = definitions['LJsonResult[Int32]']
/**
 * @description 查询待读消息数量
 * @param {PostQuartzNoticecountReqType} data 请求参数
 * @returns {Promise<PostQuartzNoticecountResType>} ajax
 */
const postQuartzNoticecount = (data: PostQuartzNoticecountReqType = {}): Promise<PostQuartzNoticecountResType> => {
  return ajax({
    url: '/quartz/noticecount',
    method: Method.POST
  }, data)
}

export default {
  postQuartzSave,
  getQuartzInfo,
  postQuartzPage,
  getQuartzNonotice,
  postQuartzNoticepage,
  postQuartzNoticecount
}
