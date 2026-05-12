import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSysuserPageReqType = operations['SysUser_QueryPage']['parameters']['body']['dto']
export type PostSysuserPageResType = definitions['LPJsonResult[List[UserInfoDto]]']
/**
 * @description 查询人员分页数据
 * @param {PostSysuserPageReqType} data 请求参数
 * @returns {Promise<PostSysuserPageResType>} ajax
 */
const postSysuserPage = (data: PostSysuserPageReqType): Promise<PostSysuserPageResType> => {
  return ajax({
    url: '/sysuser/page',
    method: Method.POST
  }, data)
}

export type GetSysuserUserauthtreeReqType = {}
export type GetSysuserUserauthtreeResType = definitions['LJsonResult[List[TreeMenuDto]]']
/**
 * @description 查询用户权限列表
 * @param {GetSysuserUserauthtreeReqType} data 请求参数
 * @returns {Promise<GetSysuserUserauthtreeResType>} ajax
 */
const getSysuserUserauthtree = (data: GetSysuserUserauthtreeReqType = {}): Promise<GetSysuserUserauthtreeResType> => {
  return ajax({
    url: '/sysuser/userauthtree',
    method: Method.GET
  }, data)
}

export type GetSysuserUserauthdataReqType = operations['SysUser_QueryAuthDto']['parameters']['query']
export type GetSysuserUserauthdataResType = definitions['LJsonResult[SysUserAuthDto]']
/**
 * @description 查询用户权限列表
 * @param {GetSysuserUserauthdataReqType} data 请求参数
 * @returns {Promise<GetSysuserUserauthdataResType>} ajax
 */
const getSysuserUserauthdata = (data: GetSysuserUserauthdataReqType): Promise<GetSysuserUserauthdataResType> => {
  return ajax({
    url: '/sysuser/userauthdata',
    method: Method.GET
  }, data)
}

export type GetSysuserUserauthbtnsReqType = {}
export type GetSysuserUserauthbtnsResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询用户有权限的按钮列表
 * @param {GetSysuserUserauthbtnsReqType} data 请求参数
 * @returns {Promise<GetSysuserUserauthbtnsResType>} ajax
 */
const getSysuserUserauthbtns = (data: GetSysuserUserauthbtnsReqType = {}): Promise<GetSysuserUserauthbtnsResType> => {
  return ajax({
    url: '/sysuser/userauthbtns',
    method: Method.GET
  }, data)
}

export default {
  postSysuserPage,
  getSysuserUserauthtree,
  getSysuserUserauthdata,
  getSysuserUserauthbtns
}
