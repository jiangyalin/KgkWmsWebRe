import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostArrivalU8PoOrderQueryReqType = operations['PuArrival_U8PoOrderQuery']['parameters']['body']['dto']
export type PostArrivalU8PoOrderQueryResType = definitions['LPJsonResult[List[OrderInfoWithQtyDto]]']
/**
 * @description 查询U8采购订单
 * @param {PostArrivalU8PoOrderQueryReqType} data 请求参数
 * @returns {Promise<PostArrivalU8PoOrderQueryResType>} ajax
 */
const postArrivalU8PoOrderQuery = (data: PostArrivalU8PoOrderQueryReqType): Promise<PostArrivalU8PoOrderQueryResType> => {
  return ajax({
    url: '/arrival/u8PoOrderQuery',
    method: Method.POST
  }, data)
}

export type GetArrivalGenDocCodeReqType = {}
export type GetArrivalGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetArrivalGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetArrivalGenDocCodeResType>} ajax
 */
const getArrivalGenDocCode = (data: GetArrivalGenDocCodeReqType = {}): Promise<GetArrivalGenDocCodeResType> => {
  return ajax({
    url: '/arrival/genDocCode',
    method: Method.GET
  }, data)
}

export type PostArrivalSaveReqType = operations['PuArrival_Save']['parameters']['body']['dto']
export type PostArrivalSaveResType = definitions['LJsonResult']
/**
 * @description 到货单编辑保存
 * @param {PostArrivalSaveReqType} data 请求参数
 * @returns {Promise<PostArrivalSaveResType>} ajax
 */
const postArrivalSave = (data: PostArrivalSaveReqType): Promise<PostArrivalSaveResType> => {
  return ajax({
    url: '/arrival/save',
    method: Method.POST
  }, data)
}

export type GetArrivalCodesReqType = operations['PuArrival_QueryCodes']['parameters']['query']
export type GetArrivalCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetArrivalCodesReqType} data 请求参数
 * @returns {Promise<GetArrivalCodesResType>} ajax
 */
const getArrivalCodes = (data: GetArrivalCodesReqType): Promise<GetArrivalCodesResType> => {
  return ajax({
    url: '/arrival/codes',
    method: Method.GET
  }, data)
}

export type PostArrivalInfoReqType = operations['PuArrival_Info']['parameters']['body']['dto']
export type PostArrivalInfoResType = definitions['LJsonResult[PuArrivalInfoDto]']
/**
 * @description 到货单详情查询
 * @param {PostArrivalInfoReqType} data 请求参数
 * @returns {Promise<PostArrivalInfoResType>} ajax
 */
const postArrivalInfo = (data: PostArrivalInfoReqType): Promise<PostArrivalInfoResType> => {
  return ajax({
    url: '/arrival/info',
    method: Method.POST
  }, data)
}

export type PostArrivalPageReqType = operations['PuArrival_QueryPage']['parameters']['body']['dto']
export type PostArrivalPageResType = definitions['LPJsonResult[List[PuArrivalInfoDto]]']
/**
 * @description 到货单分页查询
 * @param {PostArrivalPageReqType} data 请求参数
 * @returns {Promise<PostArrivalPageResType>} ajax
 */
const postArrivalPage = (data: PostArrivalPageReqType): Promise<PostArrivalPageResType> => {
  return ajax({
    url: '/arrival/page',
    method: Method.POST
  }, data)
}

export type PostArrivalPageWithDetailReqType = operations['PuArrival_QueryPageWithDetail']['parameters']['body']['dto']
export type PostArrivalPageWithDetailResType = definitions['LPJsonResult[List[PuArrivalFullInfoDto]]']
/**
 * @description 带明细的到货单分页查询
 * @param {PostArrivalPageWithDetailReqType} data 请求参数
 * @returns {Promise<PostArrivalPageWithDetailResType>} ajax
 */
const postArrivalPageWithDetail = (data: PostArrivalPageWithDetailReqType): Promise<PostArrivalPageWithDetailResType> => {
  return ajax({
    url: '/arrival/pageWithDetail',
    method: Method.POST
  }, data)
}

export type PostArrivalExportReqType = operations['PuArrival_ExportData']['parameters']['body']['dto']
export type PostArrivalExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 到货单导出
 * @param {PostArrivalExportReqType} data 请求参数
 * @returns {Promise<PostArrivalExportResType>} ajax
 */
const postArrivalExport = (data: PostArrivalExportReqType): Promise<PostArrivalExportResType> => {
  return ajax({
    url: '/arrival/export',
    method: Method.POST
  }, data)
}

export type PostArrivalQueryByLineIdsReqType = operations['PuArrival_QueryByLineIds']['parameters']['body']['dto']
export type PostArrivalQueryByLineIdsResType = definitions['LLJsonResult[PuArrivalFullInfoDto]']
/**
 * @description 到货单行id查到货单行
 * @param {PostArrivalQueryByLineIdsReqType} data 请求参数
 * @returns {Promise<PostArrivalQueryByLineIdsResType>} ajax
 */
const postArrivalQueryByLineIds = (data: PostArrivalQueryByLineIdsReqType): Promise<PostArrivalQueryByLineIdsResType> => {
  return ajax({
    url: '/arrival/queryByLineIds',
    method: Method.POST
  }, data)
}

export type PostArrivalQueryReverseTreeByLineIdReqType = operations['PuArrival_QueryReverseTreeByLineId']['parameters']['body']['dto']
export type PostArrivalQueryReverseTreeByLineIdResType = definitions['LJsonResult[PuArrivalsInfoDto]']
/**
 * @description 到货单行id查倒着的树
 * @param {PostArrivalQueryReverseTreeByLineIdReqType} data 请求参数
 * @returns {Promise<PostArrivalQueryReverseTreeByLineIdResType>} ajax
 */
const postArrivalQueryReverseTreeByLineId = (data: PostArrivalQueryReverseTreeByLineIdReqType): Promise<PostArrivalQueryReverseTreeByLineIdResType> => {
  return ajax({
    url: '/arrival/queryReverseTreeByLineId',
    method: Method.POST
  }, data)
}

export type PostArrivalQueryByLineIdReqType = operations['PuArrival_QueryByLineId']['parameters']['body']['dto']
export type PostArrivalQueryByLineIdResType = definitions['LLJsonResult[PuArrivalsInfoDto]']
/**
 * @description 到货单行id查树
 * @param {PostArrivalQueryByLineIdReqType} data 请求参数
 * @returns {Promise<PostArrivalQueryByLineIdResType>} ajax
 */
const postArrivalQueryByLineId = (data: PostArrivalQueryByLineIdReqType): Promise<PostArrivalQueryByLineIdResType> => {
  return ajax({
    url: '/arrival/queryByLineId',
    method: Method.POST
  }, data)
}

export type PostArrivalQueryLineReqType = operations['PuArrival_QueryLine']['parameters']['body']['dto']
export type PostArrivalQueryLineResType = definitions['LLJsonResult[PuArrivalsInfoDto]']
/**
 * @description 到货单表体id查到货单行
 * @param {PostArrivalQueryLineReqType} data 请求参数
 * @returns {Promise<PostArrivalQueryLineResType>} ajax
 */
const postArrivalQueryLine = (data: PostArrivalQueryLineReqType): Promise<PostArrivalQueryLineResType> => {
  return ajax({
    url: '/arrival/queryLine',
    method: Method.POST
  }, data)
}

export type PostArrivalBatchauditReqType = operations['PuArrival_BatchAudit']['parameters']['body']['dto']
export type PostArrivalBatchauditResType = definitions['LJsonResult']
/**
 * @description 批量审核/弃审到货单
 * @param {PostArrivalBatchauditReqType} data 请求参数
 * @returns {Promise<PostArrivalBatchauditResType>} ajax
 */
const postArrivalBatchaudit = (data: PostArrivalBatchauditReqType): Promise<PostArrivalBatchauditResType> => {
  return ajax({
    url: '/arrival/batchaudit',
    method: Method.POST
  }, data)
}

export type PostArrivalDeleteReqType = operations['PuArrival_Delete']['parameters']['body']['dto']
export type PostArrivalDeleteResType = definitions['LJsonResult']
/**
 * @description 到货单删除
 * @param {PostArrivalDeleteReqType} data 请求参数
 * @returns {Promise<PostArrivalDeleteResType>} ajax
 */
const postArrivalDelete = (data: PostArrivalDeleteReqType): Promise<PostArrivalDeleteResType> => {
  return ajax({
    url: '/arrival/delete',
    method: Method.POST
  }, data)
}

export type PostArrivalUplevelNotifyReqType = operations['PuArrival_UpLevelNotify']['parameters']['body']['dto']
export type PostArrivalUplevelNotifyResType = definitions['LJsonResult']
/**
 * @description 添加升版提醒
 * @param {PostArrivalUplevelNotifyReqType} data 请求参数
 * @returns {Promise<PostArrivalUplevelNotifyResType>} ajax
 */
const postArrivalUplevelNotify = (data: PostArrivalUplevelNotifyReqType): Promise<PostArrivalUplevelNotifyResType> => {
  return ajax({
    url: '/arrival/uplevelNotify',
    method: Method.POST
  }, data)
}

export type PostArrivalPrintReqType = operations['PuArrival_ArrivalPrint']['parameters']['body']['dto']
export type PostArrivalPrintResType = definitions['LJsonResult[BaseFileListResDto]']
/**
 * @description 打印
 * @param {PostArrivalPrintReqType} data 请求参数
 * @returns {Promise<PostArrivalPrintResType>} ajax
 */
const postArrivalPrint = (data: PostArrivalPrintReqType): Promise<PostArrivalPrintResType> => {
  return ajax({
    url: '/arrival/print',
    method: Method.POST
  }, data)
}

export type PostArrivalQueryarrbybarcodeReqType = operations['PuArrival_QueryArrByBarCode']['parameters']['body']['dto']
export type PostArrivalQueryarrbybarcodeResType = definitions['LLJsonResult[BarCodeForArr]']
/**
 * @description 条码获取存货及相关信息
 * @param {PostArrivalQueryarrbybarcodeReqType} data 请求参数
 * @returns {Promise<PostArrivalQueryarrbybarcodeResType>} ajax
 */
const postArrivalQueryarrbybarcode = (data: PostArrivalQueryarrbybarcodeReqType): Promise<PostArrivalQueryarrbybarcodeResType> => {
  return ajax({
    url: '/arrival/queryarrbybarcode',
    method: Method.POST
  }, data)
}

export default {
  postArrivalU8PoOrderQuery,
  getArrivalGenDocCode,
  postArrivalSave,
  getArrivalCodes,
  postArrivalInfo,
  postArrivalPage,
  postArrivalPageWithDetail,
  postArrivalExport,
  postArrivalQueryByLineIds,
  postArrivalQueryReverseTreeByLineId,
  postArrivalQueryByLineId,
  postArrivalQueryLine,
  postArrivalBatchaudit,
  postArrivalDelete,
  postArrivalUplevelNotify,
  postArrivalPrint,
  postArrivalQueryarrbybarcode
}
