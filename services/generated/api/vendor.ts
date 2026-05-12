import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostVendorUpdatepassReqType = operations['Vendor_UpdatePass']['parameters']['body']['dto']
export type PostVendorUpdatepassResType = definitions['LJsonResult']
/**
 * @description 供应商修改密码
 * @param {PostVendorUpdatepassReqType} data 请求参数
 * @returns {Promise<PostVendorUpdatepassResType>} ajax
 */
const postVendorUpdatepass = (data: PostVendorUpdatepassReqType): Promise<PostVendorUpdatepassResType> => {
  return ajax({
    url: '/vendor/updatepass',
    method: Method.POST
  }, data)
}

export type PostVendorResetpassReqType = operations['Vendor_ResetVenPass']['parameters']['body']['dto']
export type PostVendorResetpassResType = definitions['LJsonResult']
/**
 * @description 重置供应商账号密码
 * @param {PostVendorResetpassReqType} data 请求参数
 * @returns {Promise<PostVendorResetpassResType>} ajax
 */
const postVendorResetpass = (data: PostVendorResetpassReqType): Promise<PostVendorResetpassResType> => {
  return ajax({
    url: '/vendor/resetpass',
    method: Method.POST
  }, data)
}

export default {
  postVendorUpdatepass,
  postVendorResetpass
}
