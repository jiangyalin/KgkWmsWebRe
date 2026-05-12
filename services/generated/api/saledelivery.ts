import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostSaledeliverySaleReqType = operations['SaleDelivery_Sale']['parameters']['body']['dto']
export type PostSaledeliverySaleResType = definitions['LJsonResult']
/**
 * @description 销售发货
 * @param {PostSaledeliverySaleReqType} data 请求参数
 * @returns {Promise<PostSaledeliverySaleResType>} ajax
 */
const postSaledeliverySale = (data: PostSaledeliverySaleReqType): Promise<PostSaledeliverySaleResType> => {
  return ajax({
    url: '/saledelivery/sale',
    method: Method.POST
  }, data)
}

export type GetSaledeliveryAuditDispatchBakReqType = operations['SaleDelivery_AuditDispatchBak']['parameters']['query']
export type GetSaledeliveryAuditDispatchBakResType = definitions['LJsonResult']
/**
 * @description 审核退货单
 * @param {GetSaledeliveryAuditDispatchBakReqType} data 请求参数
 * @returns {Promise<GetSaledeliveryAuditDispatchBakResType>} ajax
 */
const getSaledeliveryAuditDispatchBak = (data: GetSaledeliveryAuditDispatchBakReqType): Promise<GetSaledeliveryAuditDispatchBakResType> => {
  return ajax({
    url: '/saledelivery/auditDispatchBak',
    method: Method.GET
  }, data)
}

export type GetSaledeliveryQuerySdByBarCodeReqType = operations['SaleDelivery_QuerySdByBarCode']['parameters']['query']
export type GetSaledeliveryQuerySdByBarCodeResType = definitions['LJsonResult[SaleDeliveryInfoVo]']
/**
 * @description 条码查询销售发货单/退货单
 * @param {GetSaledeliveryQuerySdByBarCodeReqType} data 请求参数
 * @returns {Promise<GetSaledeliveryQuerySdByBarCodeResType>} ajax
 */
const getSaledeliveryQuerySdByBarCode = (data: GetSaledeliveryQuerySdByBarCodeReqType): Promise<GetSaledeliveryQuerySdByBarCodeResType> => {
  return ajax({
    url: '/saledelivery/querySdByBarCode',
    method: Method.GET
  }, data)
}

export type PostSaledeliveryPointClientReqType = operations['SaleDelivery_PointClient']['parameters']['body']['dto']
export type PostSaledeliveryPointClientResType = definitions['LJsonResult']
/**
 * @description 箱码瓶码指定最终客户
 * @param {PostSaledeliveryPointClientReqType} data 请求参数
 * @returns {Promise<PostSaledeliveryPointClientResType>} ajax
 */
const postSaledeliveryPointClient = (data: PostSaledeliveryPointClientReqType): Promise<PostSaledeliveryPointClientResType> => {
  return ajax({
    url: '/saledelivery/pointClient',
    method: Method.POST
  }, data)
}

export type PostSaledeliveryQueryTransVouchInfoReqType = operations['SaleDelivery_QueryTransVouchInfo']['parameters']['body']['dto']
export type PostSaledeliveryQueryTransVouchInfoResType = definitions['LJsonResult[List[TransVouchInfoVo]]']
/**
 * @description 序列号或调拨单号查询调拨单信息
 * @param {PostSaledeliveryQueryTransVouchInfoReqType} data 请求参数
 * @returns {Promise<PostSaledeliveryQueryTransVouchInfoResType>} ajax
 */
const postSaledeliveryQueryTransVouchInfo = (data: PostSaledeliveryQueryTransVouchInfoReqType): Promise<PostSaledeliveryQueryTransVouchInfoResType> => {
  return ajax({
    url: '/saledelivery/queryTransVouchInfo',
    method: Method.POST
  }, data)
}

export type GetSaledeliveryQueryOsBySdReqType = operations['SaleDelivery_QueryOutStockBySaleDelivery']['parameters']['query']
export type GetSaledeliveryQueryOsBySdResType = definitions['LJsonResult[List[U8SaleOutStockInfoDto]]']
/**
 * @description 销售发货单号查询到未审核的销售出库单
 * @param {GetSaledeliveryQueryOsBySdReqType} data 请求参数
 * @returns {Promise<GetSaledeliveryQueryOsBySdResType>} ajax
 */
const getSaledeliveryQueryOsBySd = (data: GetSaledeliveryQueryOsBySdReqType): Promise<GetSaledeliveryQueryOsBySdResType> => {
  return ajax({
    url: '/saledelivery/queryOsBySd',
    method: Method.GET
  }, data)
}

export type PostSaledeliveryQueryBoxBottleBindRecordListReqType = operations['SaleDelivery_QueryBoxBottleBindRecordList']['parameters']['body']['dto']
export type PostSaledeliveryQueryBoxBottleBindRecordListResType = definitions['LLPJsonResult[BoxBottleBindRecordListDto]']
/**
 * @description 查询发货记录
 * @param {PostSaledeliveryQueryBoxBottleBindRecordListReqType} data 请求参数
 * @returns {Promise<PostSaledeliveryQueryBoxBottleBindRecordListResType>} ajax
 */
const postSaledeliveryQueryBoxBottleBindRecordList = (data: PostSaledeliveryQueryBoxBottleBindRecordListReqType): Promise<PostSaledeliveryQueryBoxBottleBindRecordListResType> => {
  return ajax({
    url: '/saledelivery/queryBoxBottleBindRecordList',
    method: Method.POST
  }, data)
}

export type PostSaledeliveryExportBoxBottleBindRecordListReqType = operations['SaleDelivery_ExportBoxBottleBindRecordList']['parameters']['body']['dto']
export type PostSaledeliveryExportBoxBottleBindRecordListResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 查询发货记录
 * @param {PostSaledeliveryExportBoxBottleBindRecordListReqType} data 请求参数
 * @returns {Promise<PostSaledeliveryExportBoxBottleBindRecordListResType>} ajax
 */
const postSaledeliveryExportBoxBottleBindRecordList = (data: PostSaledeliveryExportBoxBottleBindRecordListReqType): Promise<PostSaledeliveryExportBoxBottleBindRecordListResType> => {
  return ajax({
    url: '/saledelivery/exportBoxBottleBindRecordList',
    method: Method.POST
  }, data)
}

export type GetSaledeliveryQueryByBarCodeReqType = operations['SaleDelivery_QueryByBarCode']['parameters']['query']
export type GetSaledeliveryQueryByBarCodeResType = definitions['LJsonResult[OtherOutInfoVo]']
/**
 * @description 条码查询其他出库单详情
 * @param {GetSaledeliveryQueryByBarCodeReqType} data 请求参数
 * @returns {Promise<GetSaledeliveryQueryByBarCodeResType>} ajax
 */
const getSaledeliveryQueryByBarCode = (data: GetSaledeliveryQueryByBarCodeReqType): Promise<GetSaledeliveryQueryByBarCodeResType> => {
  return ajax({
    url: '/saledelivery/queryByBarCode',
    method: Method.GET
  }, data)
}

export default {
  postSaledeliverySale,
  getSaledeliveryAuditDispatchBak,
  getSaledeliveryQuerySdByBarCode,
  postSaledeliveryPointClient,
  postSaledeliveryQueryTransVouchInfo,
  getSaledeliveryQueryOsBySd,
  postSaledeliveryQueryBoxBottleBindRecordList,
  postSaledeliveryExportBoxBottleBindRecordList,
  getSaledeliveryQueryByBarCode
}
