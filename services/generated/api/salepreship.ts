import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetSalepreshipGenDocCodeReqType = {}
export type GetSalepreshipGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetSalepreshipGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetSalepreshipGenDocCodeResType>} ajax
 */
const getSalepreshipGenDocCode = (data: GetSalepreshipGenDocCodeReqType = {}): Promise<GetSalepreshipGenDocCodeResType> => {
  return ajax({
    url: '/salepreship/genDocCode',
    method: Method.GET
  }, data)
}

export type GetSalepreshipCodesReqType = operations['SalePreShip_QueryCodes']['parameters']['query']
export type GetSalepreshipCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetSalepreshipCodesReqType} data 请求参数
 * @returns {Promise<GetSalepreshipCodesResType>} ajax
 */
const getSalepreshipCodes = (data: GetSalepreshipCodesReqType): Promise<GetSalepreshipCodesResType> => {
  return ajax({
    url: '/salepreship/codes',
    method: Method.GET
  }, data)
}

export type PostSalepreshipInfoReqType = operations['SalePreShip_Info']['parameters']['body']['dto']
export type PostSalepreshipInfoResType = definitions['LJsonResult[SalePreShipInfoDto]']
/**
 * @description 销售预发货单详情查询
 * @param {PostSalepreshipInfoReqType} data 请求参数
 * @returns {Promise<PostSalepreshipInfoResType>} ajax
 */
const postSalepreshipInfo = (data: PostSalepreshipInfoReqType): Promise<PostSalepreshipInfoResType> => {
  return ajax({
    url: '/salepreship/info',
    method: Method.POST
  }, data)
}

export type PostSalepreshipPageWithDetailsReqType = operations['SalePreShip_PageWithDetails']['parameters']['body']['dto']
export type PostSalepreshipPageWithDetailsResType = definitions['LLPJsonResult[SalePreShipFullPageInfo]']
/**
 * @description 带明细预出库单分页查询
 * @param {PostSalepreshipPageWithDetailsReqType} data 请求参数
 * @returns {Promise<PostSalepreshipPageWithDetailsResType>} ajax
 */
const postSalepreshipPageWithDetails = (data: PostSalepreshipPageWithDetailsReqType): Promise<PostSalepreshipPageWithDetailsResType> => {
  return ajax({
    url: '/salepreship/PageWithDetails',
    method: Method.POST
  }, data)
}

export type PostSalepreshipQuerylineinfoReqType = operations['SalePreShip_QueryLineInfo']['parameters']['body']['input']
export type PostSalepreshipQuerylineinfoResType = definitions['LJsonResult[SalePreSnAndCodeDto]']
/**
 * @description 查询行绑定的条码和序列号信息
 * @param {PostSalepreshipQuerylineinfoReqType} data 请求参数
 * @returns {Promise<PostSalepreshipQuerylineinfoResType>} ajax
 */
const postSalepreshipQuerylineinfo = (data: PostSalepreshipQuerylineinfoReqType): Promise<PostSalepreshipQuerylineinfoResType> => {
  return ajax({
    url: '/salepreship/querylineinfo',
    method: Method.POST
  }, data)
}

export type PostSalepreshipExportReqType = operations['SalePreShip_ExportData']['parameters']['body']['dto']
export type PostSalepreshipExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 导出预出库单数据
 * @param {PostSalepreshipExportReqType} data 请求参数
 * @returns {Promise<PostSalepreshipExportResType>} ajax
 */
const postSalepreshipExport = (data: PostSalepreshipExportReqType): Promise<PostSalepreshipExportResType> => {
  return ajax({
    url: '/salepreship/export',
    method: Method.POST
  }, data)
}

export type PostSalepreshipQueryU8SaleOutStockPageReqType = operations['SalePreShip_QueryU8SaleOutStockPag']['parameters']['body']['dto']
export type PostSalepreshipQueryU8SaleOutStockPageResType = definitions['LLPJsonResult[SaleOutStockPageDto]']
/**
 * @description 分页查询U8销售出库
 * @param {PostSalepreshipQueryU8SaleOutStockPageReqType} data 请求参数
 * @returns {Promise<PostSalepreshipQueryU8SaleOutStockPageResType>} ajax
 */
const postSalepreshipQueryU8SaleOutStockPage = (data: PostSalepreshipQueryU8SaleOutStockPageReqType): Promise<PostSalepreshipQueryU8SaleOutStockPageResType> => {
  return ajax({
    url: '/salepreship/queryU8SaleOutStockPage',
    method: Method.POST
  }, data)
}

export type PostSalepreshipSaveReqType = operations['SalePreShip_Save']['parameters']['body']['dto']
export type PostSalepreshipSaveResType = definitions['LJsonResult']
/**
 * @description 预出库单保存更新(/salepreship/save)
 * @param {PostSalepreshipSaveReqType} data 请求参数
 * @returns {Promise<PostSalepreshipSaveResType>} ajax
 */
const postSalepreshipSave = (data: PostSalepreshipSaveReqType): Promise<PostSalepreshipSaveResType> => {
  return ajax({
    url: '/salepreship/save',
    method: Method.POST
  }, data)
}

export type PostSalepreshipStockReleaseReqType = operations['SalePreShip_StockRelease']['parameters']['body']['dto']
export type PostSalepreshipStockReleaseResType = definitions['LJsonResult']
/**
 * @description 预出库单库存释放(/salepreship/stockRelease)
 * @param {PostSalepreshipStockReleaseReqType} data 请求参数
 * @returns {Promise<PostSalepreshipStockReleaseResType>} ajax
 */
const postSalepreshipStockRelease = (data: PostSalepreshipStockReleaseReqType): Promise<PostSalepreshipStockReleaseResType> => {
  return ajax({
    url: '/salepreship/stockRelease',
    method: Method.POST
  }, data)
}

export type PostSalepreshipStockBindReqType = operations['SalePreShip_StockBind']['parameters']['body']['dto']
export type PostSalepreshipStockBindResType = definitions['LJsonResult']
/**
 * @description 预出库单绑定U8销售出库(/salepreship/stockBind)
 * @param {PostSalepreshipStockBindReqType} data 请求参数
 * @returns {Promise<PostSalepreshipStockBindResType>} ajax
 */
const postSalepreshipStockBind = (data: PostSalepreshipStockBindReqType): Promise<PostSalepreshipStockBindResType> => {
  return ajax({
    url: '/salepreship/stockBind',
    method: Method.POST
  }, data)
}

export type PostSalepreshipStockUnbindReqType = operations['SalePreShip_StockUnbind']['parameters']['body']['dto']
export type PostSalepreshipStockUnbindResType = definitions['LJsonResult']
/**
 * @description 预出库单解绑U8销售出库(/salepreship/stockUnbind)
 * @param {PostSalepreshipStockUnbindReqType} data 请求参数
 * @returns {Promise<PostSalepreshipStockUnbindResType>} ajax
 */
const postSalepreshipStockUnbind = (data: PostSalepreshipStockUnbindReqType): Promise<PostSalepreshipStockUnbindResType> => {
  return ajax({
    url: '/salepreship/stockUnbind',
    method: Method.POST
  }, data)
}

export type PostSalepreshipOtherOutStockBindReqType = operations['SalePreShip_OtherOutStockBind']['parameters']['body']['dto']
export type PostSalepreshipOtherOutStockBindResType = definitions['LJsonResult']
/**
 * @description 预出库单绑定U8其他出库
 * @param {PostSalepreshipOtherOutStockBindReqType} data 请求参数
 * @returns {Promise<PostSalepreshipOtherOutStockBindResType>} ajax
 */
const postSalepreshipOtherOutStockBind = (data: PostSalepreshipOtherOutStockBindReqType): Promise<PostSalepreshipOtherOutStockBindResType> => {
  return ajax({
    url: '/salepreship/otherOutStockBind',
    method: Method.POST
  }, data)
}

export default {
  getSalepreshipGenDocCode,
  getSalepreshipCodes,
  postSalepreshipInfo,
  postSalepreshipPageWithDetails,
  postSalepreshipQuerylineinfo,
  postSalepreshipExport,
  postSalepreshipQueryU8SaleOutStockPage,
  postSalepreshipSave,
  postSalepreshipStockRelease,
  postSalepreshipStockBind,
  postSalepreshipStockUnbind,
  postSalepreshipOtherOutStockBind
}
