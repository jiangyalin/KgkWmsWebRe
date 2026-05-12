import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetWmssaleoutGenDocCodeReqType = {}
export type GetWmssaleoutGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetWmssaleoutGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetWmssaleoutGenDocCodeResType>} ajax
 */
const getWmssaleoutGenDocCode = (data: GetWmssaleoutGenDocCodeReqType = {}): Promise<GetWmssaleoutGenDocCodeResType> => {
  return ajax({
    url: '/wmssaleout/genDocCode',
    method: Method.GET
  }, data)
}

export type GetWmssaleoutCodesReqType = operations['SaleOut_QueryCodes']['parameters']['query']
export type GetWmssaleoutCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetWmssaleoutCodesReqType} data 请求参数
 * @returns {Promise<GetWmssaleoutCodesResType>} ajax
 */
const getWmssaleoutCodes = (data: GetWmssaleoutCodesReqType): Promise<GetWmssaleoutCodesResType> => {
  return ajax({
    url: '/wmssaleout/codes',
    method: Method.GET
  }, data)
}

export type PostWmssaleoutInfoReqType = operations['SaleOut_Info']['parameters']['body']['dto']
export type PostWmssaleoutInfoResType = definitions['LJsonResult[SaleOutDto]']
/**
 * @description 销售出库信息查询
 * @param {PostWmssaleoutInfoReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutInfoResType>} ajax
 */
const postWmssaleoutInfo = (data: PostWmssaleoutInfoReqType): Promise<PostWmssaleoutInfoResType> => {
  return ajax({
    url: '/wmssaleout/info',
    method: Method.POST
  }, data)
}

export type PostWmssaleoutPageWithDetailReqType = operations['SaleOut_QueryPageWithDetail']['parameters']['body']['dto']
export type PostWmssaleoutPageWithDetailResType = definitions['LPJsonResult[List[SaleOutFullPageDto]]']
/**
 * @description 带明细的分页查询
 * @param {PostWmssaleoutPageWithDetailReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutPageWithDetailResType>} ajax
 */
const postWmssaleoutPageWithDetail = (data: PostWmssaleoutPageWithDetailReqType): Promise<PostWmssaleoutPageWithDetailResType> => {
  return ajax({
    url: '/wmssaleout/pageWithDetail',
    method: Method.POST
  }, data)
}

export type PostWmssaleoutU8SaleOutStockInfoReqType = operations['SaleOut_U8SaleOutStockInfo']['parameters']['body']['dto']
export type PostWmssaleoutU8SaleOutStockInfoResType = definitions['LJsonResult[U8SaleOutWithWmsDto]']
/**
 * @description U8销售出库详情查询
 * @param {PostWmssaleoutU8SaleOutStockInfoReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutU8SaleOutStockInfoResType>} ajax
 */
const postWmssaleoutU8SaleOutStockInfo = (data: PostWmssaleoutU8SaleOutStockInfoReqType): Promise<PostWmssaleoutU8SaleOutStockInfoResType> => {
  return ajax({
    url: '/wmssaleout/u8SaleOutStockInfo',
    method: Method.POST
  }, data)
}

export type PostWmssaleoutPointSnForSaleOutReqType = operations['SaleOut_PointSnForSaleOut']['parameters']['body']['dto']
export type PostWmssaleoutPointSnForSaleOutResType = definitions['LJsonResult']
/**
 * @description 销售出库单绑定序列号并审核(红字)<br />
/wmssaleout/pointSnForSaleOut
 * @param {PostWmssaleoutPointSnForSaleOutReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutPointSnForSaleOutResType>} ajax
 */
const postWmssaleoutPointSnForSaleOut = (data: PostWmssaleoutPointSnForSaleOutReqType): Promise<PostWmssaleoutPointSnForSaleOutResType> => {
  return ajax({
    url: '/wmssaleout/pointSnForSaleOut',
    method: Method.POST
  }, data)
}

export type PostWmssaleoutPointSnForSaleOutForBlueReqType = operations['SaleOut_PointSnForSaleOutForBlue']['parameters']['body']['dto']
export type PostWmssaleoutPointSnForSaleOutForBlueResType = definitions['LJsonResult']
/**
 * @description 销售出库单绑定序列号并审核(蓝字)<br />
/wmssaleout/pointSnForSaleOutForBlue
 * @param {PostWmssaleoutPointSnForSaleOutForBlueReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutPointSnForSaleOutForBlueResType>} ajax
 */
const postWmssaleoutPointSnForSaleOutForBlue = (data: PostWmssaleoutPointSnForSaleOutForBlueReqType): Promise<PostWmssaleoutPointSnForSaleOutForBlueResType> => {
  return ajax({
    url: '/wmssaleout/pointSnForSaleOutForBlue',
    method: Method.POST
  }, data)
}

export type PostWmssaleoutChangeBindForBlueReqType = operations['SaleOut_ChangeBindForBlue']['parameters']['body']['dto']
export type PostWmssaleoutChangeBindForBlueResType = definitions['LJsonResult']
/**
 * @description 修改绑定的序列号(蓝字)-销售出库换绑<br />
/wmssaleout/changeBindForBlue
 * @param {PostWmssaleoutChangeBindForBlueReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutChangeBindForBlueResType>} ajax
 */
const postWmssaleoutChangeBindForBlue = (data: PostWmssaleoutChangeBindForBlueReqType): Promise<PostWmssaleoutChangeBindForBlueResType> => {
  return ajax({
    url: '/wmssaleout/changeBindForBlue',
    method: Method.POST
  }, data)
}

export type PostWmssaleoutBulkauditReqType = operations['SaleOut_BulkAudit']['parameters']['body']['dto']
export type PostWmssaleoutBulkauditResType = definitions['LJsonResult']
/**
 * @description 销售出库单批量审核/弃审
 * @param {PostWmssaleoutBulkauditReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutBulkauditResType>} ajax
 */
const postWmssaleoutBulkaudit = (data: PostWmssaleoutBulkauditReqType): Promise<PostWmssaleoutBulkauditResType> => {
  return ajax({
    url: '/wmssaleout/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostWmssaleoutDeleteReqType = operations['SaleOut_Delete']['parameters']['body']['dto']
export type PostWmssaleoutDeleteResType = definitions['LJsonResult']
/**
 * @description 出库单删除
 * @param {PostWmssaleoutDeleteReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutDeleteResType>} ajax
 */
const postWmssaleoutDelete = (data: PostWmssaleoutDeleteReqType): Promise<PostWmssaleoutDeleteResType> => {
  return ajax({
    url: '/wmssaleout/delete',
    method: Method.POST
  }, data)
}

export type GetWmssaleoutScanforsaleoutReqType = operations['SaleOut_ScanForSaleOut']['parameters']['query']
export type GetWmssaleoutScanforsaleoutResType = definitions['LJsonResult[SaleOutScanWithOlderInfoDto]']
/**
 * @description 箱码瓶码解析<br />
有特殊逻辑,扫箱码要判断之前是否录入,录入的话要返回绑定的瓶
 * @param {GetWmssaleoutScanforsaleoutReqType} data 请求参数
 * @returns {Promise<GetWmssaleoutScanforsaleoutResType>} ajax
 */
const getWmssaleoutScanforsaleout = (data: GetWmssaleoutScanforsaleoutReqType): Promise<GetWmssaleoutScanforsaleoutResType> => {
  return ajax({
    url: '/wmssaleout/scanforsaleout',
    method: Method.GET
  }, data)
}

export type PostWmssaleoutSupplementstockrecordReqType = {}
export type PostWmssaleoutSupplementstockrecordResType = definitions['LJsonResult']
/**
 * @description 补充出入库流水记录
 * @param {PostWmssaleoutSupplementstockrecordReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutSupplementstockrecordResType>} ajax
 */
const postWmssaleoutSupplementstockrecord = (data: PostWmssaleoutSupplementstockrecordReqType = {}): Promise<PostWmssaleoutSupplementstockrecordResType> => {
  return ajax({
    url: '/wmssaleout/supplementstockrecord',
    method: Method.POST
  }, data)
}

export type PostWmssaleoutRepairrecordsReqType = {}
export type PostWmssaleoutRepairrecordsResType = definitions['LJsonResult']
/**
 * @description 扫码记录修复
 * @param {PostWmssaleoutRepairrecordsReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutRepairrecordsResType>} ajax
 */
const postWmssaleoutRepairrecords = (data: PostWmssaleoutRepairrecordsReqType = {}): Promise<PostWmssaleoutRepairrecordsResType> => {
  return ajax({
    url: '/wmssaleout/repairrecords',
    method: Method.POST
  }, data)
}

export type PostWmssaleoutDirecttoclientReqType = operations['SaleOut_DirectToClient']['parameters']['body']['dto']
export type PostWmssaleoutDirecttoclientResType = definitions['LJsonResult']
/**
 * @description 销售出库单绑定调拨单单号
 * @param {PostWmssaleoutDirecttoclientReqType} data 请求参数
 * @returns {Promise<PostWmssaleoutDirecttoclientResType>} ajax
 */
const postWmssaleoutDirecttoclient = (data: PostWmssaleoutDirecttoclientReqType): Promise<PostWmssaleoutDirecttoclientResType> => {
  return ajax({
    url: '/wmssaleout/directtoclient',
    method: Method.POST
  }, data)
}

export default {
  getWmssaleoutGenDocCode,
  getWmssaleoutCodes,
  postWmssaleoutInfo,
  postWmssaleoutPageWithDetail,
  postWmssaleoutU8SaleOutStockInfo,
  postWmssaleoutPointSnForSaleOut,
  postWmssaleoutPointSnForSaleOutForBlue,
  postWmssaleoutChangeBindForBlue,
  postWmssaleoutBulkaudit,
  postWmssaleoutDelete,
  getWmssaleoutScanforsaleout,
  postWmssaleoutSupplementstockrecord,
  postWmssaleoutRepairrecords,
  postWmssaleoutDirecttoclient
}
