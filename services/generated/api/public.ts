import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostPublicAppupgradeReqType = operations['Public_AppUpgrade']['parameters']['body']['dto']
export type PostPublicAppupgradeResType = definitions['LJsonResult[AppUpdateResDto]']
/**
 * @description 获取APP升级信息
 * @param {PostPublicAppupgradeReqType} data 请求参数
 * @returns {Promise<PostPublicAppupgradeResType>} ajax
 */
const postPublicAppupgrade = (data: PostPublicAppupgradeReqType): Promise<PostPublicAppupgradeResType> => {
  return ajax({
    url: '/public/appupgrade',
    method: Method.POST
  }, data)
}

export type GetPublicTasklicenceReqType = operations['Public_TaskLicence']['parameters']['query']
export type GetPublicTasklicenceResType = any
/**
 * @description 生成Licence
 * @param {GetPublicTasklicenceReqType} data 请求参数
 * @returns {Promise<GetPublicTasklicenceResType>} ajax
 */
const getPublicTasklicence = (data: GetPublicTasklicenceReqType): Promise<GetPublicTasklicenceResType> => {
  return ajax({
    url: '/public/tasklicence',
    method: Method.GET
  }, data)
}

export type GetPublicTestReqType = {}
export type GetPublicTestResType = definitions['LJsonResult']
/**
 * @description 测试
 * @param {GetPublicTestReqType} data 请求参数
 * @returns {Promise<GetPublicTestResType>} ajax
 */
const getPublicTest = (data: GetPublicTestReqType = {}): Promise<GetPublicTestResType> => {
  return ajax({
    url: '/public/test',
    method: Method.GET
  }, data)
}

export type PostPublicTestu8loginReqType = {}
export type PostPublicTestu8loginResType = definitions['LJsonResult']
/**
 * @description 测试U8登录
 * @param {PostPublicTestu8loginReqType} data 请求参数
 * @returns {Promise<PostPublicTestu8loginResType>} ajax
 */
const postPublicTestu8login = (data: PostPublicTestu8loginReqType = {}): Promise<PostPublicTestu8loginResType> => {
  return ajax({
    url: '/public/testu8login',
    method: Method.POST
  }, data)
}

export type PostPublicTestdomainaccloginReqType = operations['Public_TestDomainAccLogin']['parameters']['query']
export type PostPublicTestdomainaccloginResType = definitions['LJsonResult']
/**
 * @description 测试域账号登录
 * @param {PostPublicTestdomainaccloginReqType} data 请求参数
 * @returns {Promise<PostPublicTestdomainaccloginResType>} ajax
 */
const postPublicTestdomainacclogin = (data: PostPublicTestdomainaccloginReqType): Promise<PostPublicTestdomainaccloginResType> => {
  return ajax({
    url: '/public/testdomainacclogin',
    method: Method.POST
  }, data)
}

export type PostPublicScentityReqType = operations['Public_SCEntity']['parameters']['body']
export type PostPublicScentityResType = any
/**
 * @description 生成实体
 * @param {PostPublicScentityReqType} data 请求参数
 * @returns {Promise<PostPublicScentityResType>} ajax
 */
const postPublicScentity = (data: PostPublicScentityReqType): Promise<PostPublicScentityResType> => {
  return ajax({
    url: '/public/scentity',
    method: Method.POST
  }, data)
}

export type PostPublicScwmsentityReqType = operations['Public_SCWMSEntity']['parameters']['body']
export type PostPublicScwmsentityResType = any
/**
 * @description 生成WMS实体
 * @param {PostPublicScwmsentityReqType} data 请求参数
 * @returns {Promise<PostPublicScwmsentityResType>} ajax
 */
const postPublicScwmsentity = (data: PostPublicScwmsentityReqType): Promise<PostPublicScwmsentityResType> => {
  return ajax({
    url: '/public/scwmsentity',
    method: Method.POST
  }, data)
}

export type PostPublicUploadFileReqType = {}
export type PostPublicUploadFileResType = definitions['BaseFileResDto']
/**
 * @description 上传文件
 * @param {PostPublicUploadFileReqType} data 请求参数
 * @returns {Promise<PostPublicUploadFileResType>} ajax
 */
const postPublicUploadFile = (data: PostPublicUploadFileReqType = {}): Promise<PostPublicUploadFileResType> => {
  return ajax({
    url: '/public/uploadFile',
    method: Method.POST
  }, data)
}

export type GetPublicHealthReqType = {}
export type GetPublicHealthResType = definitions['LJsonResult']
/**
 * @description 健康检查/接口测试
 * @param {GetPublicHealthReqType} data 请求参数
 * @returns {Promise<GetPublicHealthResType>} ajax
 */
const getPublicHealth = (data: GetPublicHealthReqType = {}): Promise<GetPublicHealthResType> => {
  return ajax({
    url: '/public/health',
    method: Method.GET
  }, data)
}

export type PostPublicEnumValReqType = operations['Public_GetEnumDataList']['parameters']['body']['dto']
export type PostPublicEnumValResType = definitions['LLJsonResult[EnumDataOutput]']
/**
 * @description 通过枚举类型获取枚举值集合
 * @param {PostPublicEnumValReqType} data 请求参数
 * @returns {Promise<PostPublicEnumValResType>} ajax
 */
const postPublicEnumVal = (data: PostPublicEnumValReqType): Promise<PostPublicEnumValResType> => {
  return ajax({
    url: '/public/enumVal',
    method: Method.POST
  }, data)
}

export type GetPublicTestflakeReqType = operations['Public_SnowflakeTest']['parameters']['query']
export type GetPublicTestflakeResType = definitions['LJsonResult[List[Int64]]']
/**
 * @description 测试获取雪花Id
 * @param {GetPublicTestflakeReqType} data 请求参数
 * @returns {Promise<GetPublicTestflakeResType>} ajax
 */
const getPublicTestflake = (data: GetPublicTestflakeReqType): Promise<GetPublicTestflakeResType> => {
  return ajax({
    url: '/public/testflake',
    method: Method.GET
  }, data)
}

export default {
  postPublicAppupgrade,
  getPublicTasklicence,
  getPublicTest,
  postPublicTestu8login,
  postPublicTestdomainacclogin,
  postPublicScentity,
  postPublicScwmsentity,
  postPublicUploadFile,
  getPublicHealth,
  postPublicEnumVal,
  getPublicTestflake
}
