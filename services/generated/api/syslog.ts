import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSyslogPageReqType = operations['SysLog_QueryList']['parameters']['body']['dto']
export type PostSyslogPageResType = definitions['LLPJsonResult[SysLogListDto]']
/**
 * @description 查询系统日志列表
 * @param {PostSyslogPageReqType} data 请求参数
 * @returns {Promise<PostSyslogPageResType>} ajax
 */
const postSyslogPage = (data: PostSyslogPageReqType): Promise<PostSyslogPageResType> => {
  return ajax({
    url: '/syslog/page',
    method: Method.POST
  }, data)
}

export type GetSyslogInfoReqType = operations['SysLog_QueryInfo']['parameters']['query']
export type GetSyslogInfoResType = definitions['LJsonResult[SysLogInfoDto]']
/**
 * @description 查询系统日志详情
 * @param {GetSyslogInfoReqType} data 请求参数
 * @returns {Promise<GetSyslogInfoResType>} ajax
 */
const getSyslogInfo = (data: GetSyslogInfoReqType): Promise<GetSyslogInfoResType> => {
  return ajax({
    url: '/syslog/info',
    method: Method.GET
  }, data)
}

export default {
  postSyslogPage,
  getSyslogInfo
}
