import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostBarcodeBarcodescanqueryReqType = operations['BarCode_PageQuery']['parameters']['body']['dto']
export type PostBarcodeBarcodescanqueryResType = definitions['LPJsonResult[List[BarCodeScanDto]]']
/**
 * @description 条码扫描记录查询
 * @param {PostBarcodeBarcodescanqueryReqType} data 请求参数
 * @returns {Promise<PostBarcodeBarcodescanqueryResType>} ajax
 */
const postBarcodeBarcodescanquery = (data: PostBarcodeBarcodescanqueryReqType): Promise<PostBarcodeBarcodescanqueryResType> => {
  return ajax({
    url: '/barcode/barcodescanquery',
    method: Method.POST
  }, data)
}

export type PostBarcodeBarcodescanExportReqType = operations['BarCode_ExportData_PostBarcodeBarcodescanExport']['parameters']['body']['dto']
export type PostBarcodeBarcodescanExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 条码扫描记录导出
 * @param {PostBarcodeBarcodescanExportReqType} data 请求参数
 * @returns {Promise<PostBarcodeBarcodescanExportResType>} ajax
 */
const postBarcodeBarcodescanExport = (data: PostBarcodeBarcodescanExportReqType): Promise<PostBarcodeBarcodescanExportResType> => {
  return ajax({
    url: '/barcode/barcodescanExport',
    method: Method.POST
  }, data)
}

export type PostBarcodeExportReqType = operations['BarCode_ExportData_PostBarcodeExport']['parameters']['body']['dto']
export type PostBarcodeExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 导出
 * @param {PostBarcodeExportReqType} data 请求参数
 * @returns {Promise<PostBarcodeExportResType>} ajax
 */
const postBarcodeExport = (data: PostBarcodeExportReqType): Promise<PostBarcodeExportResType> => {
  return ajax({
    url: '/barcode/export',
    method: Method.POST
  }, data)
}

export type PostBarcodeRawcodeReqType = operations['BarCode_Save']['parameters']['body']['dto']
export type PostBarcodeRawcodeResType = definitions['LJsonResult']
/**
 * @description 条码档案生成
 * @param {PostBarcodeRawcodeReqType} data 请求参数
 * @returns {Promise<PostBarcodeRawcodeResType>} ajax
 */
const postBarcodeRawcode = (data: PostBarcodeRawcodeReqType): Promise<PostBarcodeRawcodeResType> => {
  return ajax({
    url: '/barcode/rawcode',
    method: Method.POST
  }, data)
}

export type PostBarcodeUnpackReqType = operations['BarCode_UnPack']['parameters']['body']['dto']
export type PostBarcodeUnpackResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description 拆包
 * @param {PostBarcodeUnpackReqType} data 请求参数
 * @returns {Promise<PostBarcodeUnpackResType>} ajax
 */
const postBarcodeUnpack = (data: PostBarcodeUnpackReqType): Promise<PostBarcodeUnpackResType> => {
  return ajax({
    url: '/barcode/unpack',
    method: Method.POST
  }, data)
}

export type PostBarcodePackReqType = operations['BarCode_Pack']['parameters']['body']['dto']
export type PostBarcodePackResType = definitions['LJsonResult']
/**
 * @description 装箱
 * @param {PostBarcodePackReqType} data 请求参数
 * @returns {Promise<PostBarcodePackResType>} ajax
 */
const postBarcodePack = (data: PostBarcodePackReqType): Promise<PostBarcodePackResType> => {
  return ajax({
    url: '/barcode/pack',
    method: Method.POST
  }, data)
}

export type PostBarcodeUpdqtyReqType = operations['BarCode_UpdCodeQty']['parameters']['body']['dto']
export type PostBarcodeUpdqtyResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description 修改条码数量
 * @param {PostBarcodeUpdqtyReqType} data 请求参数
 * @returns {Promise<PostBarcodeUpdqtyResType>} ajax
 */
const postBarcodeUpdqty = (data: PostBarcodeUpdqtyReqType): Promise<PostBarcodeUpdqtyResType> => {
  return ajax({
    url: '/barcode/updqty',
    method: Method.POST
  }, data)
}

export type PostBarcodeCopyReqType = operations['BarCode_BarCodeCopy']['parameters']['body']['dto']
export type PostBarcodeCopyResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description 条码复制补打
 * @param {PostBarcodeCopyReqType} data 请求参数
 * @returns {Promise<PostBarcodeCopyResType>} ajax
 */
const postBarcodeCopy = (data: PostBarcodeCopyReqType): Promise<PostBarcodeCopyResType> => {
  return ajax({
    url: '/barcode/copy',
    method: Method.POST
  }, data)
}

export type PostBarcodePrintReqType = operations['BarCode_PrintCode']['parameters']['body']['dto']
export type PostBarcodePrintResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description 条码打印
 * @param {PostBarcodePrintReqType} data 请求参数
 * @returns {Promise<PostBarcodePrintResType>} ajax
 */
const postBarcodePrint = (data: PostBarcodePrintReqType): Promise<PostBarcodePrintResType> => {
  return ajax({
    url: '/barcode/print',
    method: Method.POST
  }, data)
}

export type PostBarcodeRawcodeandprintReqType = operations['BarCode_RawCodeAndPrint']['parameters']['body']['dto']
export type PostBarcodeRawcodeandprintResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description 生码并打印
 * @param {PostBarcodeRawcodeandprintReqType} data 请求参数
 * @returns {Promise<PostBarcodeRawcodeandprintResType>} ajax
 */
const postBarcodeRawcodeandprint = (data: PostBarcodeRawcodeandprintReqType): Promise<PostBarcodeRawcodeandprintResType> => {
  return ajax({
    url: '/barcode/rawcodeandprint',
    method: Method.POST
  }, data)
}

export type PostBarcodeDeleteReqType = operations['BarCode_DataDel']['parameters']['body']['dto']
export type PostBarcodeDeleteResType = definitions['LJsonResult']
/**
 * @description 条码档案删除
 * @param {PostBarcodeDeleteReqType} data 请求参数
 * @returns {Promise<PostBarcodeDeleteResType>} ajax
 */
const postBarcodeDelete = (data: PostBarcodeDeleteReqType): Promise<PostBarcodeDeleteResType> => {
  return ajax({
    url: '/barcode/delete',
    method: Method.POST
  }, data)
}

export type PostBarcodePageReqType = operations['BarCode_QueryPage']['parameters']['body']['dto']
export type PostBarcodePageResType = definitions['LPJsonResult[List[BarCodeBaseDto]]']
/**
 * @description 查询条码档案分页数据
 * @param {PostBarcodePageReqType} data 请求参数
 * @returns {Promise<PostBarcodePageResType>} ajax
 */
const postBarcodePage = (data: PostBarcodePageReqType): Promise<PostBarcodePageResType> => {
  return ajax({
    url: '/barcode/page',
    method: Method.POST
  }, data)
}

export type GetBarcodeCodeinfoReqType = operations['BarCode_QueryBarCodeInfo_GetBarcodeCodeinfo']['parameters']['query']
export type GetBarcodeCodeinfoResType = definitions['LJsonResult[BarCodeInfoDto]']
/**
 * @description 查询条码信息-扫码通用
 * @param {GetBarcodeCodeinfoReqType} data 请求参数
 * @returns {Promise<GetBarcodeCodeinfoResType>} ajax
 */
const getBarcodeCodeinfo = (data: GetBarcodeCodeinfoReqType): Promise<GetBarcodeCodeinfoResType> => {
  return ajax({
    url: '/barcode/codeinfo',
    method: Method.GET
  }, data)
}

export type PostBarcodeCodeinfov3ReqType = operations['BarCode_QueryBarCodeInfo_PostBarcodeCodeinfov3']['parameters']['body']['dto']
export type PostBarcodeCodeinfov3ResType = definitions['LJsonResult[SaleOutScanWithOlderInfoDto]']
/**
 * @description 查询条码信息
 * @param {PostBarcodeCodeinfov3ReqType} data 请求参数
 * @returns {Promise<PostBarcodeCodeinfov3ResType>} ajax
 */
const postBarcodeCodeinfov3 = (data: PostBarcodeCodeinfov3ReqType): Promise<PostBarcodeCodeinfov3ResType> => {
  return ajax({
    url: '/barcode/codeinfov3',
    method: Method.POST
  }, data)
}

export type PostBarcodeCodeinfov2ReqType = operations['BarCode_QueryBarCodeInfoV2']['parameters']['body']['dto']
export type PostBarcodeCodeinfov2ResType = definitions['LJsonResult[BarCodeInfoDto]']
/**
 * @description 查询条码信息-扫码通用
 * @param {PostBarcodeCodeinfov2ReqType} data 请求参数
 * @returns {Promise<PostBarcodeCodeinfov2ResType>} ajax
 */
const postBarcodeCodeinfov2 = (data: PostBarcodeCodeinfov2ReqType): Promise<PostBarcodeCodeinfov2ResType> => {
  return ajax({
    url: '/barcode/codeinfov2',
    method: Method.POST
  }, data)
}

export type PostBarcodeOldercodepageReqType = operations['BarCode_QueryOlderBarCodesByProdDate']['parameters']['body']['dto']
export type PostBarcodeOldercodepageResType = definitions['LPJsonResult[List[SaleOutScanInfoDto]]']
/**
 * @description 查询更早入库日期条码(同仓同存货)
 * @param {PostBarcodeOldercodepageReqType} data 请求参数
 * @returns {Promise<PostBarcodeOldercodepageResType>} ajax
 */
const postBarcodeOldercodepage = (data: PostBarcodeOldercodepageReqType): Promise<PostBarcodeOldercodepageResType> => {
  return ajax({
    url: '/barcode/oldercodepage',
    method: Method.POST
  }, data)
}

export type PostBarcodeScanReqType = operations['BarCode_ScanBarCode']['parameters']['body']['dto']
export type PostBarcodeScanResType = definitions['LJsonResult[BarCodeInfoDto]']
/**
 * @description 条码扫码
 * @param {PostBarcodeScanReqType} data 请求参数
 * @returns {Promise<PostBarcodeScanResType>} ajax
 */
const postBarcodeScan = (data: PostBarcodeScanReqType): Promise<PostBarcodeScanResType> => {
  return ajax({
    url: '/barcode/scan',
    method: Method.POST
  }, data)
}

export type PostBarcodeStockrawcodeReqType = operations['BarCode_StockRawCode']['parameters']['body']['dto']
export type PostBarcodeStockrawcodeResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description 库存生码
 * @param {PostBarcodeStockrawcodeReqType} data 请求参数
 * @returns {Promise<PostBarcodeStockrawcodeResType>} ajax
 */
const postBarcodeStockrawcode = (data: PostBarcodeStockrawcodeReqType): Promise<PostBarcodeStockrawcodeResType> => {
  return ajax({
    url: '/barcode/stockrawcode',
    method: Method.POST
  }, data)
}

export type GetBarcodeStockcodeexcelReqType = {}
export type GetBarcodeStockcodeexcelResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 获取期初库存条码导入模板
 * @param {GetBarcodeStockcodeexcelReqType} data 请求参数
 * @returns {Promise<GetBarcodeStockcodeexcelResType>} ajax
 */
const getBarcodeStockcodeexcel = (data: GetBarcodeStockcodeexcelReqType = {}): Promise<GetBarcodeStockcodeexcelResType> => {
  return ajax({
    url: '/barcode/stockcodeexcel',
    method: Method.GET
  }, data)
}

export type PostBarcodeStockcodeimportReqType = {}
export type PostBarcodeStockcodeimportResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description 期初库存码导入
 * @param {PostBarcodeStockcodeimportReqType} data 请求参数
 * @returns {Promise<PostBarcodeStockcodeimportResType>} ajax
 */
const postBarcodeStockcodeimport = (data: PostBarcodeStockcodeimportReqType = {}): Promise<PostBarcodeStockcodeimportResType> => {
  return ajax({
    url: '/barcode/stockcodeimport',
    method: Method.POST
  }, data)
}

export type PostBarcodeBoxbottleimportReqType = {}
export type PostBarcodeBoxbottleimportResType = definitions['LJsonResult']
/**
 * @description 箱码瓶码入库
 * @param {PostBarcodeBoxbottleimportReqType} data 请求参数
 * @returns {Promise<PostBarcodeBoxbottleimportResType>} ajax
 */
const postBarcodeBoxbottleimport = (data: PostBarcodeBoxbottleimportReqType = {}): Promise<PostBarcodeBoxbottleimportResType> => {
  return ajax({
    url: '/barcode/boxbottleimport',
    method: Method.POST
  }, data)
}

export type PostBarcodeQueryscanrecordbyvouchtypeReqType = operations['BarCode_QueryScanRecordByVouchType']['parameters']['body']['dto']
export type PostBarcodeQueryscanrecordbyvouchtypeResType = definitions['LJsonResult[Dictionary[String,List[BarCodeScanDto]]]']
/**
 * @description 查询单据行的最新扫码记录
 * @param {PostBarcodeQueryscanrecordbyvouchtypeReqType} data 请求参数
 * @returns {Promise<PostBarcodeQueryscanrecordbyvouchtypeResType>} ajax
 */
const postBarcodeQueryscanrecordbyvouchtype = (data: PostBarcodeQueryscanrecordbyvouchtypeReqType): Promise<PostBarcodeQueryscanrecordbyvouchtypeResType> => {
  return ajax({
    url: '/barcode/queryscanrecordbyvouchtype',
    method: Method.POST
  }, data)
}

export type PostBarcodeSourcepageReqType = operations['BarCode_QueryDataSourcePage']['parameters']['body']['dto']
export type PostBarcodeSourcepageResType = definitions['LPJsonResult[List[BarCodeDataSourceInfoDto]]']
/**
 * @description 查询条码数据源配置
 * @param {PostBarcodeSourcepageReqType} data 请求参数
 * @returns {Promise<PostBarcodeSourcepageResType>} ajax
 */
const postBarcodeSourcepage = (data: PostBarcodeSourcepageReqType): Promise<PostBarcodeSourcepageResType> => {
  return ajax({
    url: '/barcode/sourcepage',
    method: Method.POST
  }, data)
}

export type PostBarcodeSourcesaveReqType = operations['BarCode_DataSourceSave']['parameters']['body']['dto']
export type PostBarcodeSourcesaveResType = definitions['LJsonResult']
/**
 * @description 条码数据源配置
 * @param {PostBarcodeSourcesaveReqType} data 请求参数
 * @returns {Promise<PostBarcodeSourcesaveResType>} ajax
 */
const postBarcodeSourcesave = (data: PostBarcodeSourcesaveReqType): Promise<PostBarcodeSourcesaveResType> => {
  return ajax({
    url: '/barcode/sourcesave',
    method: Method.POST
  }, data)
}

export type PostBarcodeSourcedelReqType = operations['BarCode_SourceDel']['parameters']['body']['dto']
export type PostBarcodeSourcedelResType = definitions['LJsonResult']
/**
 * @description 条码数据源删除
 * @param {PostBarcodeSourcedelReqType} data 请求参数
 * @returns {Promise<PostBarcodeSourcedelResType>} ajax
 */
const postBarcodeSourcedel = (data: PostBarcodeSourcedelReqType): Promise<PostBarcodeSourcedelResType> => {
  return ajax({
    url: '/barcode/sourcedel',
    method: Method.POST
  }, data)
}

export default {
  postBarcodeBarcodescanquery,
  postBarcodeBarcodescanExport,
  postBarcodeExport,
  postBarcodeRawcode,
  postBarcodeUnpack,
  postBarcodePack,
  postBarcodeUpdqty,
  postBarcodeCopy,
  postBarcodePrint,
  postBarcodeRawcodeandprint,
  postBarcodeDelete,
  postBarcodePage,
  getBarcodeCodeinfo,
  postBarcodeCodeinfov3,
  postBarcodeCodeinfov2,
  postBarcodeOldercodepage,
  postBarcodeScan,
  postBarcodeStockrawcode,
  getBarcodeStockcodeexcel,
  postBarcodeStockcodeimport,
  postBarcodeBoxbottleimport,
  postBarcodeQueryscanrecordbyvouchtype,
  postBarcodeSourcepage,
  postBarcodeSourcesave,
  postBarcodeSourcedel
}
