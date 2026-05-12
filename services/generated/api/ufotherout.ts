import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostUfotheroutSaveReqType = operations['UFOtherOut_Save']['parameters']['body']['dto']
export type PostUfotheroutSaveResType = definitions['LJsonResult']
/**
 * @description 保存生单
 * @param {PostUfotheroutSaveReqType} data 请求参数
 * @returns {Promise<PostUfotheroutSaveResType>} ajax
 */
const postUfotheroutSave = (data: PostUfotheroutSaveReqType): Promise<PostUfotheroutSaveResType> => {
  return ajax({
    url: '/ufotherout/save',
    method: Method.POST
  }, data)
}

export type GetUfotheroutNochecklistReqType = operations['UFOtherOut_QueryNoCheckList']['parameters']['query']
export type GetUfotheroutNochecklistResType = definitions['LJsonResult[List[NoCheckOtherOutRdDto]]']
/**
 * @description 查询未审核的单据列表
 * @param {GetUfotheroutNochecklistReqType} data 请求参数
 * @returns {Promise<GetUfotheroutNochecklistResType>} ajax
 */
const getUfotheroutNochecklist = (data: GetUfotheroutNochecklistReqType): Promise<GetUfotheroutNochecklistResType> => {
  return ajax({
    url: '/ufotherout/nochecklist',
    method: Method.GET
  }, data)
}

export type GetUfotheroutInfoReqType = operations['UFOtherOut_QueryInfo']['parameters']['query']
export type GetUfotheroutInfoResType = definitions['LJsonResult[List[OtherOutRdInfoDto]]']
/**
 * @description 查询单据明细
 * @param {GetUfotheroutInfoReqType} data 请求参数
 * @returns {Promise<GetUfotheroutInfoResType>} ajax
 */
const getUfotheroutInfo = (data: GetUfotheroutInfoReqType): Promise<GetUfotheroutInfoResType> => {
  return ajax({
    url: '/ufotherout/info',
    method: Method.GET
  }, data)
}

export type PostUfotheroutCheckReqType = operations['UFOtherOut_Check']['parameters']['body']['dto']
export type PostUfotheroutCheckResType = definitions['LJsonResult']
/**
 * @description 上架审核
 * @param {PostUfotheroutCheckReqType} data 请求参数
 * @returns {Promise<PostUfotheroutCheckResType>} ajax
 */
const postUfotheroutCheck = (data: PostUfotheroutCheckReqType): Promise<PostUfotheroutCheckResType> => {
  return ajax({
    url: '/ufotherout/check',
    method: Method.POST
  }, data)
}

export type PostUfotheroutQcconfirmReqType = operations['UFOtherOut_QcConfirm']['parameters']['body']['dto']
export type PostUfotheroutQcconfirmResType = definitions['LJsonResult']
/**
 * @description 品质扫码确认
 * @param {PostUfotheroutQcconfirmReqType} data 请求参数
 * @returns {Promise<PostUfotheroutQcconfirmResType>} ajax
 */
const postUfotheroutQcconfirm = (data: PostUfotheroutQcconfirmReqType): Promise<PostUfotheroutQcconfirmResType> => {
  return ajax({
    url: '/ufotherout/qcconfirm',
    method: Method.POST
  }, data)
}

export type PostUfotheroutChangebindReqType = operations['UFOtherOut_ChangeBind']['parameters']['body']['dto']
export type PostUfotheroutChangebindResType = definitions['LJsonResult']
/**
 * @description 其他出库单换绑
 * @param {PostUfotheroutChangebindReqType} data 请求参数
 * @returns {Promise<PostUfotheroutChangebindResType>} ajax
 */
const postUfotheroutChangebind = (data: PostUfotheroutChangebindReqType): Promise<PostUfotheroutChangebindResType> => {
  return ajax({
    url: '/ufotherout/changebind',
    method: Method.POST
  }, data)
}

export type PostUfotheroutPageforpreReqType = operations['UFOtherOut_PageForPre']['parameters']['body']['dto']
export type PostUfotheroutPageforpreResType = definitions['LLPJsonResult[OtherOutSnPageDto]']
/**
 * @description 其他出库单分页(预出库)
 * @param {PostUfotheroutPageforpreReqType} data 请求参数
 * @returns {Promise<PostUfotheroutPageforpreResType>} ajax
 */
const postUfotheroutPageforpre = (data: PostUfotheroutPageforpreReqType): Promise<PostUfotheroutPageforpreResType> => {
  return ajax({
    url: '/ufotherout/pageforpre',
    method: Method.POST
  }, data)
}

export type PostUfotheroutExportdataforpreReqType = operations['UFOtherOut_ExportDataForPre']['parameters']['body']['dto']
export type PostUfotheroutExportdataforpreResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 其他出库导出
 * @param {PostUfotheroutExportdataforpreReqType} data 请求参数
 * @returns {Promise<PostUfotheroutExportdataforpreResType>} ajax
 */
const postUfotheroutExportdataforpre = (data: PostUfotheroutExportdataforpreReqType): Promise<PostUfotheroutExportdataforpreResType> => {
  return ajax({
    url: '/ufotherout/exportdataforpre',
    method: Method.POST
  }, data)
}

export default {
  postUfotheroutSave,
  getUfotheroutNochecklist,
  getUfotheroutInfo,
  postUfotheroutCheck,
  postUfotheroutQcconfirm,
  postUfotheroutChangebind,
  postUfotheroutPageforpre,
  postUfotheroutExportdataforpre
}
