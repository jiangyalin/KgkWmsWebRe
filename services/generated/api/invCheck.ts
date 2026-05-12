import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetInvCheckCodesReqType = operations['InvCheck_QueryCodes']['parameters']['query']
export type GetInvCheckCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetInvCheckCodesReqType} data 请求参数
 * @returns {Promise<GetInvCheckCodesResType>} ajax
 */
const getInvCheckCodes = (data: GetInvCheckCodesReqType): Promise<GetInvCheckCodesResType> => {
  return ajax({
    url: '/invCheck/codes',
    method: Method.GET
  }, data)
}

export type GetInvCheckGenDocCodeReqType = {}
export type GetInvCheckGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetInvCheckGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetInvCheckGenDocCodeResType>} ajax
 */
const getInvCheckGenDocCode = (data: GetInvCheckGenDocCodeReqType = {}): Promise<GetInvCheckGenDocCodeResType> => {
  return ajax({
    url: '/invCheck/genDocCode',
    method: Method.GET
  }, data)
}

export type PostInvCheckInfoReqType = operations['InvCheck_Info']['parameters']['body']['dto']
export type PostInvCheckInfoResType = definitions['LJsonResult[InventoryCheckInfoDto]']
/**
 * @description 来料检验单详情查询
 * @param {PostInvCheckInfoReqType} data 请求参数
 * @returns {Promise<PostInvCheckInfoResType>} ajax
 */
const postInvCheckInfo = (data: PostInvCheckInfoReqType): Promise<PostInvCheckInfoResType> => {
  return ajax({
    url: '/invCheck/info',
    method: Method.POST
  }, data)
}

export type PostInvCheckPageReqType = operations['InvCheck_QueryPage']['parameters']['body']['dto']
export type PostInvCheckPageResType = definitions['LPJsonResult[List[InventoryCheckInfoDto]]']
/**
 * @description 来料检验单分页查询
 * @param {PostInvCheckPageReqType} data 请求参数
 * @returns {Promise<PostInvCheckPageResType>} ajax
 */
const postInvCheckPage = (data: PostInvCheckPageReqType): Promise<PostInvCheckPageResType> => {
  return ajax({
    url: '/invCheck/page',
    method: Method.POST
  }, data)
}

export type PostInvCheckPageWithDetailReqType = operations['InvCheck_QueryPageWithDetail']['parameters']['body']['dto']
export type PostInvCheckPageWithDetailResType = definitions['LPJsonResult[List[InventoryCheckFullInfoDto]]']
/**
 * @description 来料检验单带明细分页查询
 * @param {PostInvCheckPageWithDetailReqType} data 请求参数
 * @returns {Promise<PostInvCheckPageWithDetailResType>} ajax
 */
const postInvCheckPageWithDetail = (data: PostInvCheckPageWithDetailReqType): Promise<PostInvCheckPageWithDetailResType> => {
  return ajax({
    url: '/invCheck/pageWithDetail',
    method: Method.POST
  }, data)
}

export type PostInvCheckExportReqType = operations['InvCheck_ExportData']['parameters']['body']['dto']
export type PostInvCheckExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 导出来料检验单
 * @param {PostInvCheckExportReqType} data 请求参数
 * @returns {Promise<PostInvCheckExportResType>} ajax
 */
const postInvCheckExport = (data: PostInvCheckExportReqType): Promise<PostInvCheckExportResType> => {
  return ajax({
    url: '/invCheck/export',
    method: Method.POST
  }, data)
}

export type PostInvCheckQueryArrByBarCodeV1ReqType = operations['InvCheck_QueryArrByBarCodeV1']['parameters']['body']['dto']
export type PostInvCheckQueryArrByBarCodeV1ResType = definitions['LJsonResult[ArrivalWithInvDto]']
/**
 * @description 条码查询WMS采购到货单V1
 * @param {PostInvCheckQueryArrByBarCodeV1ReqType} data 请求参数
 * @returns {Promise<PostInvCheckQueryArrByBarCodeV1ResType>} ajax
 */
const postInvCheckQueryArrByBarCodeV1 = (data: PostInvCheckQueryArrByBarCodeV1ReqType): Promise<PostInvCheckQueryArrByBarCodeV1ResType> => {
  return ajax({
    url: '/invCheck/queryArrByBarCodeV1',
    method: Method.POST
  }, data)
}

export type PostInvCheckQueryarrbybarcodechassisReqType = operations['InvCheck_QueryArrByBarCodeChassis']['parameters']['body']['dto']
export type PostInvCheckQueryarrbybarcodechassisResType = definitions['LLJsonResult[PuArrivalFullInfoDto]']
/**
 * @description 机箱码找到货单
 * @param {PostInvCheckQueryarrbybarcodechassisReqType} data 请求参数
 * @returns {Promise<PostInvCheckQueryarrbybarcodechassisResType>} ajax
 */
const postInvCheckQueryarrbybarcodechassis = (data: PostInvCheckQueryarrbybarcodechassisReqType): Promise<PostInvCheckQueryarrbybarcodechassisResType> => {
  return ajax({
    url: '/invCheck/queryarrbybarcodechassis',
    method: Method.POST
  }, data)
}

export type PostInvCheckSaveReqType = operations['InvCheck_Save']['parameters']['body']['dto']
export type PostInvCheckSaveResType = definitions['LJsonResult']
/**
 * @description 来料检验单保存
 * @param {PostInvCheckSaveReqType} data 请求参数
 * @returns {Promise<PostInvCheckSaveResType>} ajax
 */
const postInvCheckSave = (data: PostInvCheckSaveReqType): Promise<PostInvCheckSaveResType> => {
  return ajax({
    url: '/invCheck/save',
    method: Method.POST
  }, data)
}

export type PostInvCheckDeleteReqType = operations['InvCheck_BulkDelete']['parameters']['body']['dto']
export type PostInvCheckDeleteResType = definitions['LJsonResult']
/**
 * @description 来料检验单删除
 * @param {PostInvCheckDeleteReqType} data 请求参数
 * @returns {Promise<PostInvCheckDeleteResType>} ajax
 */
const postInvCheckDelete = (data: PostInvCheckDeleteReqType): Promise<PostInvCheckDeleteResType> => {
  return ajax({
    url: '/invCheck/delete',
    method: Method.POST
  }, data)
}

export type PostInvCheckBulkAuditReqType = operations['InvCheck_BulkAudit']['parameters']['body']['dto']
export type PostInvCheckBulkAuditResType = definitions['LJsonResult']
/**
 * @description 来料检验单批量审核
 * @param {PostInvCheckBulkAuditReqType} data 请求参数
 * @returns {Promise<PostInvCheckBulkAuditResType>} ajax
 */
const postInvCheckBulkAudit = (data: PostInvCheckBulkAuditReqType): Promise<PostInvCheckBulkAuditResType> => {
  return ajax({
    url: '/invCheck/bulkAudit',
    method: Method.POST
  }, data)
}

export type PostInvCheckRejectLineReqType = operations['InvCheck_RejectLine']['parameters']['body']['dto']
export type PostInvCheckRejectLineResType = definitions['LJsonResult']
/**
 * @description 来料检验单行退单
 * @param {PostInvCheckRejectLineReqType} data 请求参数
 * @returns {Promise<PostInvCheckRejectLineResType>} ajax
 */
const postInvCheckRejectLine = (data: PostInvCheckRejectLineReqType): Promise<PostInvCheckRejectLineResType> => {
  return ajax({
    url: '/invCheck/rejectLine',
    method: Method.POST
  }, data)
}

export default {
  getInvCheckCodes,
  getInvCheckGenDocCode,
  postInvCheckInfo,
  postInvCheckPage,
  postInvCheckPageWithDetail,
  postInvCheckExport,
  postInvCheckQueryArrByBarCodeV1,
  postInvCheckQueryarrbybarcodechassis,
  postInvCheckSave,
  postInvCheckDelete,
  postInvCheckBulkAudit,
  postInvCheckRejectLine
}
