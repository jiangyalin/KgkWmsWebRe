import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostCusManageUpdatepassReqType = operations['CusManage_UpdatePass']['parameters']['body']['dto']
export type PostCusManageUpdatepassResType = definitions['LJsonResult']
/**
 * @description 客户修改密码
 * @param {PostCusManageUpdatepassReqType} data 请求参数
 * @returns {Promise<PostCusManageUpdatepassResType>} ajax
 */
const postCusManageUpdatepass = (data: PostCusManageUpdatepassReqType): Promise<PostCusManageUpdatepassResType> => {
  return ajax({
    url: '/cusManage/updatepass',
    method: Method.POST
  }, data)
}

export type PostCusManageResetpassReqType = operations['CusManage_ResetVenPass']['parameters']['body']['dto']
export type PostCusManageResetpassResType = definitions['LJsonResult']
/**
 * @description 重置客户账号密码
 * @param {PostCusManageResetpassReqType} data 请求参数
 * @returns {Promise<PostCusManageResetpassResType>} ajax
 */
const postCusManageResetpass = (data: PostCusManageResetpassReqType): Promise<PostCusManageResetpassResType> => {
  return ajax({
    url: '/cusManage/resetpass',
    method: Method.POST
  }, data)
}

export default {
  postCusManageUpdatepass,
  postCusManageResetpass
}
