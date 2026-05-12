import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostLoginAcclistReqType = operations['Login_GetAccList']['parameters']['body']['dto']
export type PostLoginAcclistResType = definitions['LJsonResult[List[UAccInfoRepDto]]']
/**
 * @description 获取账套列表
 * @param {PostLoginAcclistReqType} data 请求参数
 * @returns {Promise<PostLoginAcclistResType>} ajax
 */
const postLoginAcclist = (data: PostLoginAcclistReqType): Promise<PostLoginAcclistResType> => {
  return ajax({
    url: '/login/acclist',
    method: Method.POST
  }, data)
}

export type PostLoginLogoutReqType = {}
export type PostLoginLogoutResType = definitions['LJsonResult']
/**
 * @description 注销登录
 * @param {PostLoginLogoutReqType} data 请求参数
 * @returns {Promise<PostLoginLogoutResType>} ajax
 */
const postLoginLogout = (data: PostLoginLogoutReqType = {}): Promise<PostLoginLogoutResType> => {
  return ajax({
    url: '/login/logout',
    method: Method.POST
  }, data)
}

export type PostLoginKeepaliveReqType = {}
export type PostLoginKeepaliveResType = definitions['LJsonResult']
/**
 * @description 连接保持
 * @param {PostLoginKeepaliveReqType} data 请求参数
 * @returns {Promise<PostLoginKeepaliveResType>} ajax
 */
const postLoginKeepalive = (data: PostLoginKeepaliveReqType = {}): Promise<PostLoginKeepaliveResType> => {
  return ajax({
    url: '/login/keepalive',
    method: Method.POST
  }, data)
}

export type PostLoginDologinReqType = operations['Login_DoLogin']['parameters']['body']['dto']
export type PostLoginDologinResType = definitions['LJsonResult[LoginResDto]']
/**
 * @description 登录
 * @param {PostLoginDologinReqType} data 请求参数
 * @returns {Promise<PostLoginDologinResType>} ajax
 */
const postLoginDologin = (data: PostLoginDologinReqType): Promise<PostLoginDologinResType> => {
  return ajax({
    url: '/login/dologin',
    method: Method.POST
  }, data)
}

export type PostLoginRefreshtokenReqType = {}
export type PostLoginRefreshtokenResType = definitions['LJsonResult[LoginResDto]']
/**
 * @description accessToken刷新 刷新必须在token过期之前请求 建议可以过期前5-10分钟 请求刷新
 * @param {PostLoginRefreshtokenReqType} data 请求参数
 * @returns {Promise<PostLoginRefreshtokenResType>} ajax
 */
const postLoginRefreshtoken = (data: PostLoginRefreshtokenReqType = {}): Promise<PostLoginRefreshtokenResType> => {
  return ajax({
    url: '/login/refreshtoken',
    method: Method.POST
  }, data)
}

export type PostLoginLicencebindReqType = operations['Login_DeviceAuth']['parameters']['body']['dto']
export type PostLoginLicencebindResType = definitions['LJsonResult']
/**
 * @description PDA设备许可绑定
 * @param {PostLoginLicencebindReqType} data 请求参数
 * @returns {Promise<PostLoginLicencebindResType>} ajax
 */
const postLoginLicencebind = (data: PostLoginLicencebindReqType): Promise<PostLoginLicencebindResType> => {
  return ajax({
    url: '/login/licencebind',
    method: Method.POST
  }, data)
}

export type GetLoginQuerypdaauthlistReqType = operations['Login_QueryPdaAuthList']['parameters']['query']
export type GetLoginQuerypdaauthlistResType = definitions['LJsonResult[List[BarCodeAuthDeviceEntity]]']
/**
 * @description PDA设备许可绑定列表
 * @param {GetLoginQuerypdaauthlistReqType} data 请求参数
 * @returns {Promise<GetLoginQuerypdaauthlistResType>} ajax
 */
const getLoginQuerypdaauthlist = (data: GetLoginQuerypdaauthlistReqType): Promise<GetLoginQuerypdaauthlistResType> => {
  return ajax({
    url: '/login/querypdaauthlist',
    method: Method.GET
  }, data)
}

export type PostLoginLicenceunbindReqType = operations['Login_LicenceUnBind']['parameters']['body']['dto']
export type PostLoginLicenceunbindResType = definitions['LJsonResult']
/**
 * @description PDA授权解绑
 * @param {PostLoginLicenceunbindReqType} data 请求参数
 * @returns {Promise<PostLoginLicenceunbindResType>} ajax
 */
const postLoginLicenceunbind = (data: PostLoginLicenceunbindReqType): Promise<PostLoginLicenceunbindResType> => {
  return ajax({
    url: '/login/licenceunbind',
    method: Method.POST
  }, data)
}

export type GetLoginUpdatepdaremarkReqType = operations['Login_UpdatePdaRemark']['parameters']['query']
export type GetLoginUpdatepdaremarkResType = definitions['LJsonResult']
/**
 * @description 修改PDA备注
 * @param {GetLoginUpdatepdaremarkReqType} data 请求参数
 * @returns {Promise<GetLoginUpdatepdaremarkResType>} ajax
 */
const getLoginUpdatepdaremark = (data: GetLoginUpdatepdaremarkReqType): Promise<GetLoginUpdatepdaremarkResType> => {
  return ajax({
    url: '/login/updatepdaremark',
    method: Method.GET
  }, data)
}

export default {
  postLoginAcclist,
  postLoginLogout,
  postLoginKeepalive,
  postLoginDologin,
  postLoginRefreshtoken,
  postLoginLicencebind,
  getLoginQuerypdaauthlist,
  postLoginLicenceunbind,
  getLoginUpdatepdaremark
}
