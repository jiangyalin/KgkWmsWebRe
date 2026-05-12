import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetOtherinGenDocCodeReqType = {}
export type GetOtherinGenDocCodeResType = definitions['LJsonResult[String]']
/**
 * @description 生成单号
 * @param {GetOtherinGenDocCodeReqType} data 请求参数
 * @returns {Promise<GetOtherinGenDocCodeResType>} ajax
 */
const getOtherinGenDocCode = (data: GetOtherinGenDocCodeReqType = {}): Promise<GetOtherinGenDocCodeResType> => {
  return ajax({
    url: '/otherin/genDocCode',
    method: Method.GET
  }, data)
}

export type GetOtherinCodesReqType = operations['OtherIn_QueryCodes']['parameters']['query']
export type GetOtherinCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询单号下拉列表
 * @param {GetOtherinCodesReqType} data 请求参数
 * @returns {Promise<GetOtherinCodesResType>} ajax
 */
const getOtherinCodes = (data: GetOtherinCodesReqType): Promise<GetOtherinCodesResType> => {
  return ajax({
    url: '/otherin/codes',
    method: Method.GET
  }, data)
}

export type PostOtherinInfoReqType = operations['OtherIn_Info']['parameters']['body']['dto']
export type PostOtherinInfoResType = definitions['LJsonResult[OtherInInfoDto]']
/**
 * @description 查询单据信息
 * @param {PostOtherinInfoReqType} data 请求参数
 * @returns {Promise<PostOtherinInfoResType>} ajax
 */
const postOtherinInfo = (data: PostOtherinInfoReqType): Promise<PostOtherinInfoResType> => {
  return ajax({
    url: '/otherin/info',
    method: Method.POST
  }, data)
}

export type PostOtherinPagewithdetailReqType = operations['OtherIn_PageWithDetail']['parameters']['body']['dto']
export type PostOtherinPagewithdetailResType = definitions['LLPJsonResult[OtherInPageFullDto]']
/**
 * @description 带明细分页查询
 * @param {PostOtherinPagewithdetailReqType} data 请求参数
 * @returns {Promise<PostOtherinPagewithdetailResType>} ajax
 */
const postOtherinPagewithdetail = (data: PostOtherinPagewithdetailReqType): Promise<PostOtherinPagewithdetailResType> => {
  return ajax({
    url: '/otherin/pagewithdetail',
    method: Method.POST
  }, data)
}

export type PostOtherinQuerybybarcodeReqType = operations['OtherIn_QueryByBarCode']['parameters']['body']['dto']
export type PostOtherinQuerybybarcodeResType = definitions['LJsonResult[OtherInPageWithBarCodeDto]']
/**
 * @description 条码查询其他入库单行
 * @param {PostOtherinQuerybybarcodeReqType} data 请求参数
 * @returns {Promise<PostOtherinQuerybybarcodeResType>} ajax
 */
const postOtherinQuerybybarcode = (data: PostOtherinQuerybybarcodeReqType): Promise<PostOtherinQuerybybarcodeResType> => {
  return ajax({
    url: '/otherin/querybybarcode',
    method: Method.POST
  }, data)
}

export type PostOtherinQuerybybarcodenewReqType = operations['OtherIn_QueryByBarCodeNew']['parameters']['body']['dto']
export type PostOtherinQuerybybarcodenewResType = definitions['LJsonResult[List[OtherInPageWithBarCodeDto]]']
/**
 * @description 条码查询其他入库单行(新版,支持装箱码聚合)
 * @param {PostOtherinQuerybybarcodenewReqType} data 请求参数
 * @returns {Promise<PostOtherinQuerybybarcodenewResType>} ajax
 */
const postOtherinQuerybybarcodenew = (data: PostOtherinQuerybybarcodenewReqType): Promise<PostOtherinQuerybybarcodenewResType> => {
  return ajax({
    url: '/otherin/querybybarcodenew',
    method: Method.POST
  }, data)
}

export type PostOtherinExportReqType = operations['OtherIn_ExportData']['parameters']['body']['dto']
export type PostOtherinExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 导出其他入库单数据
 * @param {PostOtherinExportReqType} data 请求参数
 * @returns {Promise<PostOtherinExportResType>} ajax
 */
const postOtherinExport = (data: PostOtherinExportReqType): Promise<PostOtherinExportResType> => {
  return ajax({
    url: '/otherin/export',
    method: Method.POST
  }, data)
}

export type PostOtherinSaveReqType = operations['OtherIn_Save']['parameters']['body']['dto']
export type PostOtherinSaveResType = definitions['LJsonResult']
/**
 * @description 保存/更新<br />
/otherin/save
 * @param {PostOtherinSaveReqType} data 请求参数
 * @returns {Promise<PostOtherinSaveResType>} ajax
 */
const postOtherinSave = (data: PostOtherinSaveReqType): Promise<PostOtherinSaveResType> => {
  return ajax({
    url: '/otherin/save',
    method: Method.POST
  }, data)
}

export type PostOtherinDeleteReqType = operations['OtherIn_BulkDelete']['parameters']['body']['dto']
export type PostOtherinDeleteResType = definitions['LJsonResult']
/**
 * @description 其他入库单删除
 * @param {PostOtherinDeleteReqType} data 请求参数
 * @returns {Promise<PostOtherinDeleteResType>} ajax
 */
const postOtherinDelete = (data: PostOtherinDeleteReqType): Promise<PostOtherinDeleteResType> => {
  return ajax({
    url: '/otherin/delete',
    method: Method.POST
  }, data)
}

export type PostOtherinSavesnReqType = operations['OtherIn_SaveSn']['parameters']['body']['dto']
export type PostOtherinSavesnResType = definitions['LJsonResult']
/**
 * @description 保存其他入库单序列号
 * @param {PostOtherinSavesnReqType} data 请求参数
 * @returns {Promise<PostOtherinSavesnResType>} ajax
 */
const postOtherinSavesn = (data: PostOtherinSavesnReqType): Promise<PostOtherinSavesnResType> => {
  return ajax({
    url: '/otherin/savesn',
    method: Method.POST
  }, data)
}

export type PostOtherinCheckpointReqType = operations['OtherIn_CheckAndPoint']['parameters']['body']['dto']
export type PostOtherinCheckpointResType = definitions['LJsonResult']
/**
 * @description PDA绑码审核
 * @param {PostOtherinCheckpointReqType} data 请求参数
 * @returns {Promise<PostOtherinCheckpointResType>} ajax
 */
const postOtherinCheckpoint = (data: PostOtherinCheckpointReqType): Promise<PostOtherinCheckpointResType> => {
  return ajax({
    url: '/otherin/checkpoint',
    method: Method.POST
  }, data)
}

export type PostOtherinAuditReqType = operations['OtherIn_Audit']['parameters']['body']['dto']
export type PostOtherinAuditResType = definitions['LJsonResult']
/**
 * @description 其他入库单审核/弃审
 * @param {PostOtherinAuditReqType} data 请求参数
 * @returns {Promise<PostOtherinAuditResType>} ajax
 */
const postOtherinAudit = (data: PostOtherinAuditReqType): Promise<PostOtherinAuditResType> => {
  return ajax({
    url: '/otherin/audit',
    method: Method.POST
  }, data)
}

export type PostOtherinBulkauditReqType = operations['OtherIn_BulkAudit']['parameters']['body']['dto']
export type PostOtherinBulkauditResType = definitions['LJsonResult']
/**
 * @description 其他入库单批量审核/弃审
 * @param {PostOtherinBulkauditReqType} data 请求参数
 * @returns {Promise<PostOtherinBulkauditResType>} ajax
 */
const postOtherinBulkaudit = (data: PostOtherinBulkauditReqType): Promise<PostOtherinBulkauditResType> => {
  return ajax({
    url: '/otherin/bulkaudit',
    method: Method.POST
  }, data)
}

export type PostOtherinReplenishcodelistReqType = operations['OtherIn_ReplenishCodeList']['parameters']['body']['dto']
export type PostOtherinReplenishcodelistResType = definitions['LJsonResult']
/**
 * @description 补充条码信息(瓶码,请勿滥用)
 * @param {PostOtherinReplenishcodelistReqType} data 请求参数
 * @returns {Promise<PostOtherinReplenishcodelistResType>} ajax
 */
const postOtherinReplenishcodelist = (data: PostOtherinReplenishcodelistReqType): Promise<PostOtherinReplenishcodelistResType> => {
  return ajax({
    url: '/otherin/replenishcodelist',
    method: Method.POST
  }, data)
}

export type PostOtherinModifydocnoReqType = operations['OtherIn_ModifyDocNo']['parameters']['body']['dto']
export type PostOtherinModifydocnoResType = definitions['LJsonResult']
/**
 * @description
 * @param {PostOtherinModifydocnoReqType} data 请求参数
 * @returns {Promise<PostOtherinModifydocnoResType>} ajax
 */
const postOtherinModifydocno = (data: PostOtherinModifydocnoReqType): Promise<PostOtherinModifydocnoResType> => {
  return ajax({
    url: '/otherin/modifydocno',
    method: Method.POST
  }, data)
}

export type PostOtherinSetu8unitcostReqType = operations['OtherIn_SetU8UnitCost']['parameters']['body']['dto']
export type PostOtherinSetu8unitcostResType = definitions['LJsonResult']
/**
 * @description U8其他入库单单价设置(按其他入库单行Id)
 * @param {PostOtherinSetu8unitcostReqType} data 请求参数
 * @returns {Promise<PostOtherinSetu8unitcostResType>} ajax
 */
const postOtherinSetu8unitcost = (data: PostOtherinSetu8unitcostReqType): Promise<PostOtherinSetu8unitcostResType> => {
  return ajax({
    url: '/otherin/setu8unitcost',
    method: Method.POST
  }, data)
}

export default {
  getOtherinGenDocCode,
  getOtherinCodes,
  postOtherinInfo,
  postOtherinPagewithdetail,
  postOtherinQuerybybarcode,
  postOtherinQuerybybarcodenew,
  postOtherinExport,
  postOtherinSave,
  postOtherinDelete,
  postOtherinSavesn,
  postOtherinCheckpoint,
  postOtherinAudit,
  postOtherinBulkaudit,
  postOtherinReplenishcodelist,
  postOtherinModifydocno,
  postOtherinSetu8unitcost
}
