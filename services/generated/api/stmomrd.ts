import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetStmomrdMobodysReqType = operations['STMomRd_QueryMomRdBodyByMoCode']['parameters']['query']
export type GetStmomrdMobodysResType = definitions['LLJsonResult[MomOrderBodyDto]']
/**
 * @description 扫码查询生产订单可入库的明细
 * @param {GetStmomrdMobodysReqType} data 请求参数
 * @returns {Promise<GetStmomrdMobodysResType>} ajax
 */
const getStmomrdMobodys = (data: GetStmomrdMobodysReqType): Promise<GetStmomrdMobodysResType> => {
  return ajax({
    url: '/stmomrd/mobodys',
    method: Method.GET
  }, data)
}

export type PostStmomrdMobodylistReqType = operations['STMomRd_QueryMomRdBodyList']['parameters']['body']['dto']
export type PostStmomrdMobodylistResType = definitions['LLJsonResult[MomOrderBodyDto]']
/**
 * @description 查询可入库的计划下达列表
 * @param {PostStmomrdMobodylistReqType} data 请求参数
 * @returns {Promise<PostStmomrdMobodylistResType>} ajax
 */
const postStmomrdMobodylist = (data: PostStmomrdMobodylistReqType): Promise<PostStmomrdMobodylistResType> => {
  return ajax({
    url: '/stmomrd/mobodylist',
    method: Method.POST
  }, data)
}

export type GetStmomrdNewinitReqType = operations['STMomRd_NewInit']['parameters']['query']
export type GetStmomrdNewinitResType = definitions['LJsonResult[STRdRecord10SaveReqDto]']
/**
 * @description 新增初始化
 * @param {GetStmomrdNewinitReqType} data 请求参数
 * @returns {Promise<GetStmomrdNewinitResType>} ajax
 */
const getStmomrdNewinit = (data: GetStmomrdNewinitReqType): Promise<GetStmomrdNewinitResType> => {
  return ajax({
    url: '/stmomrd/newinit',
    method: Method.GET
  }, data)
}

export type GetStmomrdCodesReqType = operations['STMomRd_QueryCodes']['parameters']['query']
export type GetStmomrdCodesResType = definitions['LLJsonResult[BaseSelectDto]']
/**
 * @description 查询单号下拉列表
 * @param {GetStmomrdCodesReqType} data 请求参数
 * @returns {Promise<GetStmomrdCodesResType>} ajax
 */
const getStmomrdCodes = (data: GetStmomrdCodesReqType): Promise<GetStmomrdCodesResType> => {
  return ajax({
    url: '/stmomrd/codes',
    method: Method.GET
  }, data)
}

export type PostStmomrdSaveReqType = operations['STMomRd_SaveOrder']['parameters']['body']['dto']
export type PostStmomrdSaveResType = definitions['LJsonResult']
/**
 * @description 单据保存
 * @param {PostStmomrdSaveReqType} data 请求参数
 * @returns {Promise<PostStmomrdSaveResType>} ajax
 */
const postStmomrdSave = (data: PostStmomrdSaveReqType): Promise<PostStmomrdSaveResType> => {
  return ajax({
    url: '/stmomrd/save',
    method: Method.POST
  }, data)
}

export type PostStmomrdAuditactionReqType = operations['STMomRd_AuditOrder']['parameters']['body']['dto']
export type PostStmomrdAuditactionResType = definitions['LJsonResult']
/**
 * @description 审核/弃审
 * @param {PostStmomrdAuditactionReqType} data 请求参数
 * @returns {Promise<PostStmomrdAuditactionResType>} ajax
 */
const postStmomrdAuditaction = (data: PostStmomrdAuditactionReqType): Promise<PostStmomrdAuditactionResType> => {
  return ajax({
    url: '/stmomrd/auditaction',
    method: Method.POST
  }, data)
}

export type PostStmomrdBulkauditReqType = operations['STMomRd_BulkAudit']['parameters']['body']['dto']
export type PostStmomrdBulkauditResType = definitions['LJsonResult']
/**
 * @description 批量审核/弃审
 * @param {PostStmomrdBulkauditReqType} data 请求参数
 * @returns {Promise<PostStmomrdBulkauditResType>} ajax
 */
const postStmomrdBulkaudit = (data: PostStmomrdBulkauditReqType): Promise<PostStmomrdBulkauditResType> => {
  return ajax({
    url: '/stmomrd/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostStmomrdDelReqType = operations['STMomRd_DeleteOrder']['parameters']['body']['dto']
export type PostStmomrdDelResType = definitions['LJsonResult']
/**
 * @description 单据删除
 * @param {PostStmomrdDelReqType} data 请求参数
 * @returns {Promise<PostStmomrdDelResType>} ajax
 */
const postStmomrdDel = (data: PostStmomrdDelReqType): Promise<PostStmomrdDelResType> => {
  return ajax({
    url: '/stmomrd/del',
    method: Method.POST
  }, data)
}

export type PostStmomrdInfoReqType = operations['STMomRd_QueryInfo']['parameters']['body']['dto']
export type PostStmomrdInfoResType = definitions['LJsonResult[STRdRecord10InfoDto]']
/**
 * @description 单据明细查询
 * @param {PostStmomrdInfoReqType} data 请求参数
 * @returns {Promise<PostStmomrdInfoResType>} ajax
 */
const postStmomrdInfo = (data: PostStmomrdInfoReqType): Promise<PostStmomrdInfoResType> => {
  return ajax({
    url: '/stmomrd/info',
    method: Method.POST
  }, data)
}

export type PostStmomrdPageReqType = operations['STMomRd_QueryPage']['parameters']['body']['dto']
export type PostStmomrdPageResType = definitions['LLPJsonResult[STRdRecord10ListDto]']
/**
 * @description 查询分页数据
 * @param {PostStmomrdPageReqType} data 请求参数
 * @returns {Promise<PostStmomrdPageResType>} ajax
 */
const postStmomrdPage = (data: PostStmomrdPageReqType): Promise<PostStmomrdPageResType> => {
  return ajax({
    url: '/stmomrd/page',
    method: Method.POST
  }, data)
}

export type PostStmomrdExportReqType = operations['STMomRd_ExportData']['parameters']['body']['dto']
export type PostStmomrdExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostStmomrdExportReqType} data 请求参数
 * @returns {Promise<PostStmomrdExportResType>} ajax
 */
const postStmomrdExport = (data: PostStmomrdExportReqType): Promise<PostStmomrdExportResType> => {
  return ajax({
    url: '/stmomrd/export',
    method: Method.POST
  }, data)
}

export type PostStmomrdQueryforoutstockReqType = operations['STMomRd_QueryForOutStock']['parameters']['body']['dto']
export type PostStmomrdQueryforoutstockResType = definitions['LJsonResult[List[InvSnForSaleOutDto]]']
/**
 * @description 销售订单号查绑定的产成品入库单相关信息
 * @param {PostStmomrdQueryforoutstockReqType} data 请求参数
 * @returns {Promise<PostStmomrdQueryforoutstockResType>} ajax
 */
const postStmomrdQueryforoutstock = (data: PostStmomrdQueryforoutstockReqType): Promise<PostStmomrdQueryforoutstockResType> => {
  return ajax({
    url: '/stmomrd/queryforoutstock',
    method: Method.POST
  }, data)
}

export type PostStmomrdQueryforbottlebindprintReqType = operations['STMomRd_QueryForBottleBindPrint']['parameters']['body']['dto']
export type PostStmomrdQueryforbottlebindprintResType = definitions['LLPJsonResult[StRdRecord10PrintVo]']
/**
 * @description 查询瓶码绑定生成产成品入库记录
 * @param {PostStmomrdQueryforbottlebindprintReqType} data 请求参数
 * @returns {Promise<PostStmomrdQueryforbottlebindprintResType>} ajax
 */
const postStmomrdQueryforbottlebindprint = (data: PostStmomrdQueryforbottlebindprintReqType): Promise<PostStmomrdQueryforbottlebindprintResType> => {
  return ajax({
    url: '/stmomrd/queryforbottlebindprint',
    method: Method.POST
  }, data)
}

export default {
  getStmomrdMobodys,
  postStmomrdMobodylist,
  getStmomrdNewinit,
  getStmomrdCodes,
  postStmomrdSave,
  postStmomrdAuditaction,
  postStmomrdBulkaudit,
  postStmomrdDel,
  postStmomrdInfo,
  postStmomrdPage,
  postStmomrdExport,
  postStmomrdQueryforoutstock,
  postStmomrdQueryforbottlebindprint
}
