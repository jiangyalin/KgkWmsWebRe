import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostAppupgradeSaveReqType = operations['AppUpGrade_SaveData']['parameters']['body']['dto']
export type PostAppupgradeSaveResType = definitions['LJsonResult']
/**
 * @description APP升级配置保存
 * @param {PostAppupgradeSaveReqType} data 请求参数
 * @returns {Promise<PostAppupgradeSaveResType>} ajax
 */
const postAppupgradeSave = (data: PostAppupgradeSaveReqType): Promise<PostAppupgradeSaveResType> => {
  return ajax({
    url: '/appupgrade/save',
    method: Method.POST
  }, data)
}

export type PostAppupgradeDelReqType = operations['AppUpGrade_DeleteData']['parameters']['body']['dto']
export type PostAppupgradeDelResType = definitions['LJsonResult']
/**
 * @description 删除数据
 * @param {PostAppupgradeDelReqType} data 请求参数
 * @returns {Promise<PostAppupgradeDelResType>} ajax
 */
const postAppupgradeDel = (data: PostAppupgradeDelReqType): Promise<PostAppupgradeDelResType> => {
  return ajax({
    url: '/appupgrade/del',
    method: Method.POST
  }, data)
}

export type PostAppupgradePageReqType = operations['AppUpGrade_QueryPage']['parameters']['body']['dto']
export type PostAppupgradePageResType = definitions['LLPJsonResult[AppUpGradeListDto]']
/**
 * @description 查询分页数据
 * @param {PostAppupgradePageReqType} data 请求参数
 * @returns {Promise<PostAppupgradePageResType>} ajax
 */
const postAppupgradePage = (data: PostAppupgradePageReqType): Promise<PostAppupgradePageResType> => {
  return ajax({
    url: '/appupgrade/page',
    method: Method.POST
  }, data)
}

export type PostAppupgradeAppupgradeReqType = operations['AppUpGrade_AppUpgrade']['parameters']['body']['dto']
export type PostAppupgradeAppupgradeResType = definitions['LJsonResult[AppUpGradeDto]']
/**
 * @description 获取APP升级信息
 * @param {PostAppupgradeAppupgradeReqType} data 请求参数
 * @returns {Promise<PostAppupgradeAppupgradeResType>} ajax
 */
const postAppupgradeAppupgrade = (data: PostAppupgradeAppupgradeReqType): Promise<PostAppupgradeAppupgradeResType> => {
  return ajax({
    url: '/appupgrade/appupgrade',
    method: Method.POST
  }, data)
}

export default {
  postAppupgradeSave,
  postAppupgradeDel,
  postAppupgradePage,
  postAppupgradeAppupgrade
}
