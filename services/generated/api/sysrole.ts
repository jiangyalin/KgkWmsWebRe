import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSysroleSaveReqType = operations['SysRole_Save']['parameters']['body']['dto']
export type PostSysroleSaveResType = definitions['LJsonResult']
/**
 * @description 角色保存
 * @param {PostSysroleSaveReqType} data 请求参数
 * @returns {Promise<PostSysroleSaveResType>} ajax
 */
const postSysroleSave = (data: PostSysroleSaveReqType): Promise<PostSysroleSaveResType> => {
  return ajax({
    url: '/sysrole/save',
    method: Method.POST
  }, data)
}

export type PostSysroleDelReqType = operations['SysRole_DicDataDel']['parameters']['body']['dto']
export type PostSysroleDelResType = definitions['LJsonResult']
/**
 * @description 角色删除
 * @param {PostSysroleDelReqType} data 请求参数
 * @returns {Promise<PostSysroleDelResType>} ajax
 */
const postSysroleDel = (data: PostSysroleDelReqType): Promise<PostSysroleDelResType> => {
  return ajax({
    url: '/sysrole/del',
    method: Method.POST
  }, data)
}

export type PostSysrolePageReqType = operations['SysRole_QueryPage']['parameters']['body']['dto']
export type PostSysrolePageResType = definitions['LPJsonResult[List[SysRoleInfoDto]]']
/**
 * @description 查询角色分页数据
 * @param {PostSysrolePageReqType} data 请求参数
 * @returns {Promise<PostSysrolePageResType>} ajax
 */
const postSysrolePage = (data: PostSysrolePageReqType): Promise<PostSysrolePageResType> => {
  return ajax({
    url: '/sysrole/page',
    method: Method.POST
  }, data)
}

export type GetSysroleSelectReqType = operations['SysRole_QuerySelectDtos']['parameters']['query']
export type GetSysroleSelectResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询角色下拉列表
 * @param {GetSysroleSelectReqType} data 请求参数
 * @returns {Promise<GetSysroleSelectResType>} ajax
 */
const getSysroleSelect = (data: GetSysroleSelectReqType): Promise<GetSysroleSelectResType> => {
  return ajax({
    url: '/sysrole/select',
    method: Method.GET
  }, data)
}

export type PostSysroleRolepersonassReqType = operations['SysRole_RolePersonAss']['parameters']['body']['dto']
export type PostSysroleRolepersonassResType = definitions['LJsonResult']
/**
 * @description 角色人员分配
 * @param {PostSysroleRolepersonassReqType} data 请求参数
 * @returns {Promise<PostSysroleRolepersonassResType>} ajax
 */
const postSysroleRolepersonass = (data: PostSysroleRolepersonassReqType): Promise<PostSysroleRolepersonassResType> => {
  return ajax({
    url: '/sysrole/rolepersonass',
    method: Method.POST
  }, data)
}

export type GetSysroleAsspersonsReqType = operations['SysRole_QueryPersons']['parameters']['query']
export type GetSysroleAsspersonsResType = definitions['LJsonResult[List[OpUserDto]]']
/**
 * @description 根据角色获取用户列表
 * @param {GetSysroleAsspersonsReqType} data 请求参数
 * @returns {Promise<GetSysroleAsspersonsResType>} ajax
 */
const getSysroleAsspersons = (data: GetSysroleAsspersonsReqType): Promise<GetSysroleAsspersonsResType> => {
  return ajax({
    url: '/sysrole/asspersons',
    method: Method.GET
  }, data)
}

export type PostSysroleAuthorityReqType = operations['SysRole_RoleAuthority']['parameters']['body']['dto']
export type PostSysroleAuthorityResType = definitions['LJsonResult']
/**
 * @description 角色权限分配
 * @param {PostSysroleAuthorityReqType} data 请求参数
 * @returns {Promise<PostSysroleAuthorityResType>} ajax
 */
const postSysroleAuthority = (data: PostSysroleAuthorityReqType): Promise<PostSysroleAuthorityResType> => {
  return ajax({
    url: '/sysrole/authority',
    method: Method.POST
  }, data)
}

export type GetSysroleAuthtreeReqType = operations['SysRole_QueryAuthTree']['parameters']['query']
export type GetSysroleAuthtreeResType = definitions['LJsonResult[List[TreeSelectDto]]']
/**
 * @description 获取角色对应的权限树
 * @param {GetSysroleAuthtreeReqType} data 请求参数
 * @returns {Promise<GetSysroleAuthtreeResType>} ajax
 */
const getSysroleAuthtree = (data: GetSysroleAuthtreeReqType): Promise<GetSysroleAuthtreeResType> => {
  return ajax({
    url: '/sysrole/authtree',
    method: Method.GET
  }, data)
}

export type GetSysroleAuthitemsReqType = operations['SysRole_QueryAuthMenuIds']['parameters']['query']
export type GetSysroleAuthitemsResType = definitions['LJsonResult[List[String]]']
/**
 * @description 获取角色对应的权限ID集合
 * @param {GetSysroleAuthitemsReqType} data 请求参数
 * @returns {Promise<GetSysroleAuthitemsResType>} ajax
 */
const getSysroleAuthitems = (data: GetSysroleAuthitemsReqType): Promise<GetSysroleAuthitemsResType> => {
  return ajax({
    url: '/sysrole/authitems',
    method: Method.GET
  }, data)
}

export default {
  postSysroleSave,
  postSysroleDel,
  postSysrolePage,
  getSysroleSelect,
  postSysroleRolepersonass,
  getSysroleAsspersons,
  postSysroleAuthority,
  getSysroleAuthtree,
  getSysroleAuthitems
}
