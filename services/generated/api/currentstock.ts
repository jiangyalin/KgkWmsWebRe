import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostCurrentstockQueryinvstocksReqType = operations['CurrentStock_QueryInvStocks']['parameters']['body']['dto']
export type PostCurrentstockQueryinvstocksResType = definitions['LLJsonResult[SaveCurrentStockReqDto]']
/**
 * @description 查询存货现存量列表
 * @param {PostCurrentstockQueryinvstocksReqType} data 请求参数
 * @returns {Promise<PostCurrentstockQueryinvstocksResType>} ajax
 */
const postCurrentstockQueryinvstocks = (data: PostCurrentstockQueryinvstocksReqType): Promise<PostCurrentstockQueryinvstocksResType> => {
  return ajax({
    url: '/currentstock/queryinvstocks',
    method: Method.POST
  }, data)
}

export type PostCurrentstockQueryinvstocksbyvouchReqType = operations['CurrentStock_QueryInvStocksByVouch']['parameters']['body']['dto']
export type PostCurrentstockQueryinvstocksbyvouchResType = definitions['LLJsonResult[SaveCurrentStockReqDto]']
/**
 * @description 查询存货现存量列表根据单据
 * @param {PostCurrentstockQueryinvstocksbyvouchReqType} data 请求参数
 * @returns {Promise<PostCurrentstockQueryinvstocksbyvouchResType>} ajax
 */
const postCurrentstockQueryinvstocksbyvouch = (data: PostCurrentstockQueryinvstocksbyvouchReqType): Promise<PostCurrentstockQueryinvstocksbyvouchResType> => {
  return ajax({
    url: '/currentstock/queryinvstocksbyvouch',
    method: Method.POST
  }, data)
}

export type PostCurrentstockQueryvouchbarcodetreeReqType = operations['CurrentStock_QueryVouchBarCodeTree']['parameters']['body']['dto']
export type PostCurrentstockQueryvouchbarcodetreeResType = definitions['LLJsonResult[CurrentStockVouchLineTreeDto]']
/**
 * @description 查询单据现存条码货位树
 * @param {PostCurrentstockQueryvouchbarcodetreeReqType} data 请求参数
 * @returns {Promise<PostCurrentstockQueryvouchbarcodetreeResType>} ajax
 */
const postCurrentstockQueryvouchbarcodetree = (data: PostCurrentstockQueryvouchbarcodetreeReqType): Promise<PostCurrentstockQueryvouchbarcodetreeResType> => {
  return ajax({
    url: '/currentstock/queryvouchbarcodetree',
    method: Method.POST
  }, data)
}

export type PostCurrentstockQueryvouchbarcodetreev1ReqType = operations['CurrentStock_QueryVouchBarCodeTreeV1']['parameters']['body']['dto']
export type PostCurrentstockQueryvouchbarcodetreev1ResType = definitions['LLJsonResult[CurrentStockVouchLineTreeDto]']
/**
 * @description 查询单据现存条码货位树V1(不按货位合并节点)
 * @param {PostCurrentstockQueryvouchbarcodetreev1ReqType} data 请求参数
 * @returns {Promise<PostCurrentstockQueryvouchbarcodetreev1ResType>} ajax
 */
const postCurrentstockQueryvouchbarcodetreev1 = (data: PostCurrentstockQueryvouchbarcodetreev1ReqType): Promise<PostCurrentstockQueryvouchbarcodetreev1ResType> => {
  return ajax({
    url: '/currentstock/queryvouchbarcodetreev1',
    method: Method.POST
  }, data)
}

export type PostCurrentstockCurrentstocksReqType = operations['CurrentStock_CurrentStocks']['parameters']['body']['dto']
export type PostCurrentstockCurrentstocksResType = definitions['LLJsonResult[CurrentStockOutDto]']
/**
 * @description 查询存货现存量
 * @param {PostCurrentstockCurrentstocksReqType} data 请求参数
 * @returns {Promise<PostCurrentstockCurrentstocksResType>} ajax
 */
const postCurrentstockCurrentstocks = (data: PostCurrentstockCurrentstocksReqType): Promise<PostCurrentstockCurrentstocksResType> => {
  return ajax({
    url: '/currentstock/currentstocks',
    method: Method.POST
  }, data)
}

export type PostCurrentstockPageReqType = operations['CurrentStock_Page']['parameters']['body']['dto']
export type PostCurrentstockPageResType = definitions['LLPJsonResult[CurrentStockBaseDto]']
/**
 * @description 仓库/货位存量查询
 * @param {PostCurrentstockPageReqType} data 请求参数
 * @returns {Promise<PostCurrentstockPageResType>} ajax
 */
const postCurrentstockPage = (data: PostCurrentstockPageReqType): Promise<PostCurrentstockPageResType> => {
  return ajax({
    url: '/currentstock/page',
    method: Method.POST
  }, data)
}

export type PostCurrentstockExportReqType = operations['CurrentStock_ExportData']['parameters']['body']['dto']
export type PostCurrentstockExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostCurrentstockExportReqType} data 请求参数
 * @returns {Promise<PostCurrentstockExportResType>} ajax
 */
const postCurrentstockExport = (data: PostCurrentstockExportReqType): Promise<PostCurrentstockExportResType> => {
  return ajax({
    url: '/currentstock/export',
    method: Method.POST
  }, data)
}

export type PostCurrentstockStockRecordSummaryPageReqType = operations['CurrentStock_StockRecordSummaryPage']['parameters']['body']['dto']
export type PostCurrentstockStockRecordSummaryPageResType = definitions['LLPJsonResult[InvStockRecordSummaryDto]']
/**
 * @description 收发存汇总表
 * @param {PostCurrentstockStockRecordSummaryPageReqType} data 请求参数
 * @returns {Promise<PostCurrentstockStockRecordSummaryPageResType>} ajax
 */
const postCurrentstockStockRecordSummaryPage = (data: PostCurrentstockStockRecordSummaryPageReqType): Promise<PostCurrentstockStockRecordSummaryPageResType> => {
  return ajax({
    url: '/currentstock/stockRecordSummaryPage',
    method: Method.POST
  }, data)
}

export type PostCurrentstockExportStockRecordSummaryReqType = operations['CurrentStock_ExportStockRecordSummary']['parameters']['body']['dto']
export type PostCurrentstockExportStockRecordSummaryResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 收发存汇总表导出
 * @param {PostCurrentstockExportStockRecordSummaryReqType} data 请求参数
 * @returns {Promise<PostCurrentstockExportStockRecordSummaryResType>} ajax
 */
const postCurrentstockExportStockRecordSummary = (data: PostCurrentstockExportStockRecordSummaryReqType): Promise<PostCurrentstockExportStockRecordSummaryResType> => {
  return ajax({
    url: '/currentstock/exportStockRecordSummary',
    method: Method.POST
  }, data)
}

export type PostCurrentstockStockRecordDetailPageReqType = operations['CurrentStock_StockRecordDetailPage']['parameters']['body']['dto']
export type PostCurrentstockStockRecordDetailPageResType = definitions['LLPJsonResult[InvStockRecordDetailDto]']
/**
 * @description 出入库流水账
 * @param {PostCurrentstockStockRecordDetailPageReqType} data 请求参数
 * @returns {Promise<PostCurrentstockStockRecordDetailPageResType>} ajax
 */
const postCurrentstockStockRecordDetailPage = (data: PostCurrentstockStockRecordDetailPageReqType): Promise<PostCurrentstockStockRecordDetailPageResType> => {
  return ajax({
    url: '/currentstock/stockRecordDetailPage',
    method: Method.POST
  }, data)
}

export type PostCurrentstockExportStockRecordDetailReqType = operations['CurrentStock_ExportStockRecordDetail']['parameters']['body']['dto']
export type PostCurrentstockExportStockRecordDetailResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 出入库流水账导出
 * @param {PostCurrentstockExportStockRecordDetailReqType} data 请求参数
 * @returns {Promise<PostCurrentstockExportStockRecordDetailResType>} ajax
 */
const postCurrentstockExportStockRecordDetail = (data: PostCurrentstockExportStockRecordDetailReqType): Promise<PostCurrentstockExportStockRecordDetailResType> => {
  return ajax({
    url: '/currentstock/exportStockRecordDetail',
    method: Method.POST
  }, data)
}

export type PostCurrentstockInvledgerReqType = operations['CurrentStock_InvLedger']['parameters']['body']['dto']
export type PostCurrentstockInvledgerResType = definitions['LJsonResult[InvLedgerGroupDto]']
/**
 * @description 库存台账
 * @param {PostCurrentstockInvledgerReqType} data 请求参数
 * @returns {Promise<PostCurrentstockInvledgerResType>} ajax
 */
const postCurrentstockInvledger = (data: PostCurrentstockInvledgerReqType): Promise<PostCurrentstockInvledgerResType> => {
  return ajax({
    url: '/currentstock/invledger',
    method: Method.POST
  }, data)
}

export type PostCurrentstockInvledgerv1ReqType = operations['CurrentStock_InvLedgerV1']['parameters']['body']['dto']
export type PostCurrentstockInvledgerv1ResType = definitions['LJsonResult[List[InvLedgerGroupWithInvDto]]']
/**
 * @description
 * @param {PostCurrentstockInvledgerv1ReqType} data 请求参数
 * @returns {Promise<PostCurrentstockInvledgerv1ResType>} ajax
 */
const postCurrentstockInvledgerv1 = (data: PostCurrentstockInvledgerv1ReqType): Promise<PostCurrentstockInvledgerv1ResType> => {
  return ajax({
    url: '/currentstock/invledgerv1',
    method: Method.POST
  }, data)
}

export type PostCurrentstockInvledgerv1exportReqType = operations['CurrentStock_InvLedgerV1Export']['parameters']['body']['dto']
export type PostCurrentstockInvledgerv1exportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description
 * @param {PostCurrentstockInvledgerv1exportReqType} data 请求参数
 * @returns {Promise<PostCurrentstockInvledgerv1exportResType>} ajax
 */
const postCurrentstockInvledgerv1export = (data: PostCurrentstockInvledgerv1exportReqType): Promise<PostCurrentstockInvledgerv1exportResType> => {
  return ajax({
    url: '/currentstock/invledgerv1export',
    method: Method.POST
  }, data)
}

export type PostCurrentstockCurrentstockfreezeinitReqType = {}
export type PostCurrentstockCurrentstockfreezeinitResType = definitions['LJsonResult']
/**
 * @description 现存冻结重算
 * @param {PostCurrentstockCurrentstockfreezeinitReqType} data 请求参数
 * @returns {Promise<PostCurrentstockCurrentstockfreezeinitResType>} ajax
 */
const postCurrentstockCurrentstockfreezeinit = (data: PostCurrentstockCurrentstockfreezeinitReqType = {}): Promise<PostCurrentstockCurrentstockfreezeinitResType> => {
  return ajax({
    url: '/currentstock/currentstockfreezeinit',
    method: Method.POST
  }, data)
}

export type PostCurrentstockCheckstockbybarcodeReqType = operations['CurrentStock_CheckStockByBarCode']['parameters']['body']['dto']
export type PostCurrentstockCheckstockbybarcodeResType = definitions['LJsonResult']
/**
 * @description 查询条码现存量是否足够
 * @param {PostCurrentstockCheckstockbybarcodeReqType} data 请求参数
 * @returns {Promise<PostCurrentstockCheckstockbybarcodeResType>} ajax
 */
const postCurrentstockCheckstockbybarcode = (data: PostCurrentstockCheckstockbybarcodeReqType): Promise<PostCurrentstockCheckstockbybarcodeResType> => {
  return ajax({
    url: '/currentstock/checkstockbybarcode',
    method: Method.POST
  }, data)
}

export type PostCurrentstockU8sntoWmsReqType = {}
export type PostCurrentstockU8sntoWmsResType = definitions['LJsonResult']
/**
 * @description U8序列号同步到WSM
 * @param {PostCurrentstockU8sntoWmsReqType} data 请求参数
 * @returns {Promise<PostCurrentstockU8sntoWmsResType>} ajax
 */
const postCurrentstockU8sntoWms = (data: PostCurrentstockU8sntoWmsReqType = {}): Promise<PostCurrentstockU8sntoWmsResType> => {
  return ajax({
    url: '/currentstock/u8sntoWms',
    method: Method.POST
  }, data)
}

export default {
  postCurrentstockQueryinvstocks,
  postCurrentstockQueryinvstocksbyvouch,
  postCurrentstockQueryvouchbarcodetree,
  postCurrentstockQueryvouchbarcodetreev1,
  postCurrentstockCurrentstocks,
  postCurrentstockPage,
  postCurrentstockExport,
  postCurrentstockStockRecordSummaryPage,
  postCurrentstockExportStockRecordSummary,
  postCurrentstockStockRecordDetailPage,
  postCurrentstockExportStockRecordDetail,
  postCurrentstockInvledger,
  postCurrentstockInvledgerv1,
  postCurrentstockInvledgerv1export,
  postCurrentstockCurrentstockfreezeinit,
  postCurrentstockCheckstockbybarcode,
  postCurrentstockU8sntoWms
}
