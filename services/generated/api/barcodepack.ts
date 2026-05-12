import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostBarcodepackPageReqType = operations['BarCodePack_Page']['parameters']['body']['dto']
export type PostBarcodepackPageResType = definitions['LPJsonResult[List[BoxedBarCodeDto]]']
/**
 * @description 分页查询装箱码(机箱码)
 * @param {PostBarcodepackPageReqType} data 请求参数
 * @returns {Promise<PostBarcodepackPageResType>} ajax
 */
const postBarcodepackPage = (data: PostBarcodepackPageReqType): Promise<PostBarcodepackPageResType> => {
  return ajax({
    url: '/barcodepack/page',
    method: Method.POST
  }, data)
}

export type PostBarcodepackQuerybyboxcodeReqType = operations['BarCodePack_QueryByBoxCode']['parameters']['body']['dto']
export type PostBarcodepackQuerybyboxcodeResType = definitions['LJsonResult[List[SaleOutScanInfoDto]]']
/**
 * @description 查询机箱码下子码
 * @param {PostBarcodepackQuerybyboxcodeReqType} data 请求参数
 * @returns {Promise<PostBarcodepackQuerybyboxcodeResType>} ajax
 */
const postBarcodepackQuerybyboxcode = (data: PostBarcodepackQuerybyboxcodeReqType): Promise<PostBarcodepackQuerybyboxcodeResType> => {
  return ajax({
    url: '/barcodepack/querybyboxcode',
    method: Method.POST
  }, data)
}

export default {
  postBarcodepackPage,
  postBarcodepackQuerybyboxcode
}
