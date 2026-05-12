import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostPrintdataSaveReqType = operations['PrintData_Save']['parameters']['body']['dto']
export type PostPrintdataSaveResType = definitions['LJsonResult']
/**
 * @description 新增/修改
 * @param {PostPrintdataSaveReqType} data 请求参数
 * @returns {Promise<PostPrintdataSaveResType>} ajax
 */
const postPrintdataSave = (data: PostPrintdataSaveReqType): Promise<PostPrintdataSaveResType> => {
  return ajax({
    url: '/printdata/save',
    method: Method.POST
  }, data)
}

export type GetPrintdataInfoReqType = operations['PrintData_Info']['parameters']['query']
export type GetPrintdataInfoResType = definitions['LJsonResult[PlatPrintDataSourceEntity]']
/**
 * @description 详情查询
 * @param {GetPrintdataInfoReqType} data 请求参数
 * @returns {Promise<GetPrintdataInfoResType>} ajax
 */
const getPrintdataInfo = (data: GetPrintdataInfoReqType): Promise<GetPrintdataInfoResType> => {
  return ajax({
    url: '/printdata/info',
    method: Method.GET
  }, data)
}

export type PostPrintdataPageReqType = operations['PrintData_Page']['parameters']['body']['dto']
export type PostPrintdataPageResType = definitions['LLPJsonResult[DataPrintPageListDto]']
/**
 * @description 分页查询
 * @param {PostPrintdataPageReqType} data 请求参数
 * @returns {Promise<PostPrintdataPageResType>} ajax
 */
const postPrintdataPage = (data: PostPrintdataPageReqType): Promise<PostPrintdataPageResType> => {
  return ajax({
    url: '/printdata/page',
    method: Method.POST
  }, data)
}

export type PostPrintdataDeleteReqType = operations['PrintData_Delete']['parameters']['body']['dto']
export type PostPrintdataDeleteResType = definitions['LJsonResult[String]']
/**
 * @description 依据打印模板Id集合删除
 * @param {PostPrintdataDeleteReqType} data 请求参数
 * @returns {Promise<PostPrintdataDeleteResType>} ajax
 */
const postPrintdataDelete = (data: PostPrintdataDeleteReqType): Promise<PostPrintdataDeleteResType> => {
  return ajax({
    url: '/printdata/delete',
    method: Method.POST
  }, data)
}

export type PostPrintdataVouchPrintTempReqType = operations['PrintData_VouchPrintTemplate']['parameters']['body']['dto']
export type PostPrintdataVouchPrintTempResType = definitions['LLJsonResult[PlatPrintTemplateEntity]']
/**
 * @description 单据打印模板下拉
 * @param {PostPrintdataVouchPrintTempReqType} data 请求参数
 * @returns {Promise<PostPrintdataVouchPrintTempResType>} ajax
 */
const postPrintdataVouchPrintTemp = (data: PostPrintdataVouchPrintTempReqType): Promise<PostPrintdataVouchPrintTempResType> => {
  return ajax({
    url: '/printdata/vouchPrintTemp',
    method: Method.POST
  }, data)
}

export type PostPrintdataPrintReqType = operations['PrintData_Print']['parameters']['body']['dto']
export type PostPrintdataPrintResType = definitions['LJsonResult[BaseFileListResDto]']
/**
 * @description 通用打印
 * @param {PostPrintdataPrintReqType} data 请求参数
 * @returns {Promise<PostPrintdataPrintResType>} ajax
 */
const postPrintdataPrint = (data: PostPrintdataPrintReqType): Promise<PostPrintdataPrintResType> => {
  return ajax({
    url: '/printdata/print',
    method: Method.POST
  }, data)
}

export default {
  postPrintdataSave,
  getPrintdataInfo,
  postPrintdataPage,
  postPrintdataDelete,
  postPrintdataVouchPrintTemp,
  postPrintdataPrint
}
