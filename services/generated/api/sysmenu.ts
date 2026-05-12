import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSysmenuSaveReqType = operations['SysMenu_Save']['parameters']['body']['dto']
export type PostSysmenuSaveResType = definitions['LJsonResult']
/**
 * @description 系统菜单保存
 * @param {PostSysmenuSaveReqType} data 请求参数
 * @returns {Promise<PostSysmenuSaveResType>} ajax
 */
const postSysmenuSave = (data: PostSysmenuSaveReqType): Promise<PostSysmenuSaveResType> => {
  return ajax({
    url: '/sysmenu/save',
    method: Method.POST
  }, data)
}

export type PostSysmenuDelReqType = operations['SysMenu_DicDataDel']['parameters']['body']['dto']
export type PostSysmenuDelResType = definitions['LJsonResult']
/**
 * @description 系统菜单删除
 * @param {PostSysmenuDelReqType} data 请求参数
 * @returns {Promise<PostSysmenuDelResType>} ajax
 */
const postSysmenuDel = (data: PostSysmenuDelReqType): Promise<PostSysmenuDelResType> => {
  return ajax({
    url: '/sysmenu/del',
    method: Method.POST
  }, data)
}

export type PostSysmenuPageReqType = operations['SysMenu_QueryPage']['parameters']['body']['dto']
export type PostSysmenuPageResType = definitions['LPJsonResult[List[SysMenuInfoDto]]']
/**
 * @description 查询系统菜单分页数据
 * @param {PostSysmenuPageReqType} data 请求参数
 * @returns {Promise<PostSysmenuPageResType>} ajax
 */
const postSysmenuPage = (data: PostSysmenuPageReqType): Promise<PostSysmenuPageResType> => {
  return ajax({
    url: '/sysmenu/page',
    method: Method.POST
  }, data)
}

export type PostSysmenuTreegridReqType = operations['SysMenu_QueryMenuTreeList']['parameters']['body']['dto']
export type PostSysmenuTreegridResType = definitions['LJsonResult[List[SysMenuTreeListDto]]']
/**
 * @description 获取菜单树表格
 * @param {PostSysmenuTreegridReqType} data 请求参数
 * @returns {Promise<PostSysmenuTreegridResType>} ajax
 */
const postSysmenuTreegrid = (data: PostSysmenuTreegridReqType): Promise<PostSysmenuTreegridResType> => {
  return ajax({
    url: '/sysmenu/treegrid',
    method: Method.POST
  }, data)
}

export type GetSysmenuTreeReqType = {}
export type GetSysmenuTreeResType = definitions['LJsonResult[List[TreeSelectDto]]']
/**
 * @description 查询树下拉列表
 * @param {GetSysmenuTreeReqType} data 请求参数
 * @returns {Promise<GetSysmenuTreeResType>} ajax
 */
const getSysmenuTree = (data: GetSysmenuTreeReqType = {}): Promise<GetSysmenuTreeResType> => {
  return ajax({
    url: '/sysmenu/tree',
    method: Method.GET
  }, data)
}

export default {
  postSysmenuSave,
  postSysmenuDel,
  postSysmenuPage,
  postSysmenuTreegrid,
  getSysmenuTree
}
