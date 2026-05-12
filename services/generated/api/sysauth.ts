import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSysauthRolesReqType = operations['SysAuth_QueryRoleList']['parameters']['body']['dto']
export type PostSysauthRolesResType = definitions['LJsonResult[List[SysRoleBaseDto]]']
/**
 * @description 查询角色列表
 * @param {PostSysauthRolesReqType} data 请求参数
 * @returns {Promise<PostSysauthRolesResType>} ajax
 */
const postSysauthRoles = (data: PostSysauthRolesReqType): Promise<PostSysauthRolesResType> => {
  return ajax({
    url: '/sysauth/roles',
    method: Method.POST
  }, data)
}

export type PostSysauthRoleassusersReqType = operations['SysAuth_QueryUserAuthTree']['parameters']['body']['dto']
export type PostSysauthRoleassusersResType = definitions['LJsonResult[List[OpUserDto]]']
/**
 * @description 查询角色下面用户列表
 * @param {PostSysauthRoleassusersReqType} data 请求参数
 * @returns {Promise<PostSysauthRoleassusersResType>} ajax
 */
const postSysauthRoleassusers = (data: PostSysauthRoleassusersReqType): Promise<PostSysauthRoleassusersResType> => {
  return ajax({
    url: '/sysauth/roleassusers',
    method: Method.POST
  }, data)
}

export type PostSysauthRoleauthtreeReqType = operations['SysAuth_QueryRoleAuthTree']['parameters']['body']['dto']
export type PostSysauthRoleauthtreeResType = definitions['LJsonResult[List[TreeMenuDto]]']
/**
 * @description 查询角色下面权限树列表
 * @param {PostSysauthRoleauthtreeReqType} data 请求参数
 * @returns {Promise<PostSysauthRoleauthtreeResType>} ajax
 */
const postSysauthRoleauthtree = (data: PostSysauthRoleauthtreeReqType): Promise<PostSysauthRoleauthtreeResType> => {
  return ajax({
    url: '/sysauth/roleauthtree',
    method: Method.POST
  }, data)
}

export type PostSysauthDelReqType = operations['SysAuth_AuthDel']['parameters']['body']['dto']
export type PostSysauthDelResType = definitions['LJsonResult']
/**
 * @description 权限删除
 * @param {PostSysauthDelReqType} data 请求参数
 * @returns {Promise<PostSysauthDelResType>} ajax
 */
const postSysauthDel = (data: PostSysauthDelReqType): Promise<PostSysauthDelResType> => {
  return ajax({
    url: '/sysauth/del',
    method: Method.POST
  }, data)
}

export default {
  postSysauthRoles,
  postSysauthRoleassusers,
  postSysauthRoleauthtree,
  postSysauthDel
}
