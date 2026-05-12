import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostBoxAndBottleQueryForConsumableReqType = operations['Consumable_QueryForConsumable']['parameters']['body']['dto']
export type PostBoxAndBottleQueryForConsumableResType = definitions['LJsonResult[MomPlanInfoForConsumableDto]']
/**
 * @description 生产订单查询
 * @param {PostBoxAndBottleQueryForConsumableReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleQueryForConsumableResType>} ajax
 */
const postBoxAndBottleQueryForConsumable = (data: PostBoxAndBottleQueryForConsumableReqType): Promise<PostBoxAndBottleQueryForConsumableResType> => {
  return ajax({
    url: '/boxAndBottle/queryForConsumable',
    method: Method.POST
  }, data)
}

export type GetBoxAndBottleCodeparseReqType = operations['Consumable_CodeParse']['parameters']['query']
export type GetBoxAndBottleCodeparseResType = definitions['LJsonResult[ContainerInfoDto]']
/**
 * @description 箱码瓶码解析
 * @param {GetBoxAndBottleCodeparseReqType} data 请求参数
 * @returns {Promise<GetBoxAndBottleCodeparseResType>} ajax
 */
const getBoxAndBottleCodeparse = (data: GetBoxAndBottleCodeparseReqType): Promise<GetBoxAndBottleCodeparseResType> => {
  return ajax({
    url: '/boxAndBottle/codeparse',
    method: Method.GET
  }, data)
}

export type PostBoxAndBottleCodeparsev2ReqType = operations['Consumable_CodeParseV2']['parameters']['body']['dto']
export type PostBoxAndBottleCodeparsev2ResType = definitions['LJsonResult[ContainerInfoDto]']
/**
 * @description 箱码瓶码解析
 * @param {PostBoxAndBottleCodeparsev2ReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleCodeparsev2ResType>} ajax
 */
const postBoxAndBottleCodeparsev2 = (data: PostBoxAndBottleCodeparsev2ReqType): Promise<PostBoxAndBottleCodeparsev2ResType> => {
  return ajax({
    url: '/boxAndBottle/codeparsev2',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottleJudgecodeboundReqType = operations['Consumable_JudgeCodeBound']['parameters']['body']['dto']
export type PostBoxAndBottleJudgecodeboundResType = definitions['LJsonResult']
/**
 * @description 判断箱码瓶码是否已经生成过完工汇报
 * @param {PostBoxAndBottleJudgecodeboundReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleJudgecodeboundResType>} ajax
 */
const postBoxAndBottleJudgecodebound = (data: PostBoxAndBottleJudgecodeboundReqType): Promise<PostBoxAndBottleJudgecodeboundResType> => {
  return ajax({
    url: '/boxAndBottle/judgecodebound',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottleSaveV1ReqType = operations['Consumable_SaveV1']['parameters']['body']['dto']
export type PostBoxAndBottleSaveV1ResType = definitions['LJsonResult[ConsumableResWithPrintVo]']
/**
 * @description 绑定耗材箱码及瓶码
 * @param {PostBoxAndBottleSaveV1ReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleSaveV1ResType>} ajax
 */
const postBoxAndBottleSaveV1 = (data: PostBoxAndBottleSaveV1ReqType): Promise<PostBoxAndBottleSaveV1ResType> => {
  return ajax({
    url: '/boxAndBottle/saveV1',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottleSavev2ReqType = operations['Consumable_SaveV2']['parameters']['body']['dto']
export type PostBoxAndBottleSavev2ResType = definitions['LJsonResult[ConsumableResWithPrintVo]']
/**
 * @description 绑定耗材箱码及瓶码
 * @param {PostBoxAndBottleSavev2ReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleSavev2ResType>} ajax
 */
const postBoxAndBottleSavev2 = (data: PostBoxAndBottleSavev2ReqType): Promise<PostBoxAndBottleSavev2ResType> => {
  return ajax({
    url: '/boxAndBottle/savev2',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottlePageWithDetailReqType = operations['Consumable_PageWithDetail']['parameters']['body']['dto']
export type PostBoxAndBottlePageWithDetailResType = definitions['LLPJsonResult[ConsumableFullPageDto]']
/**
 * @description 耗材序列箱码绑定列表
 * @param {PostBoxAndBottlePageWithDetailReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottlePageWithDetailResType>} ajax
 */
const postBoxAndBottlePageWithDetail = (data: PostBoxAndBottlePageWithDetailReqType): Promise<PostBoxAndBottlePageWithDetailResType> => {
  return ajax({
    url: '/boxAndBottle/pageWithDetail',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottleExportReqType = operations['Consumable_ExportData']['parameters']['body']['dto']
export type PostBoxAndBottleExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 耗材序列箱码绑定记录导出
 * @param {PostBoxAndBottleExportReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleExportResType>} ajax
 */
const postBoxAndBottleExport = (data: PostBoxAndBottleExportReqType): Promise<PostBoxAndBottleExportResType> => {
  return ajax({
    url: '/boxAndBottle/export',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottleChangeboxReqType = operations['Consumable_ChangeBox']['parameters']['body']['dto']
export type PostBoxAndBottleChangeboxResType = definitions['LJsonResult']
/**
 * @description 旧箱码换新箱码<br />
/boxAndBottle/changebox
 * @param {PostBoxAndBottleChangeboxReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleChangeboxResType>} ajax
 */
const postBoxAndBottleChangebox = (data: PostBoxAndBottleChangeboxReqType): Promise<PostBoxAndBottleChangeboxResType> => {
  return ajax({
    url: '/boxAndBottle/changebox',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottleDraftsaveReqType = operations['Consumable_DraftSave']['parameters']['body']['input']
export type PostBoxAndBottleDraftsaveResType = definitions['LJsonResult']
/**
 * @description 箱码瓶码绑定暂存
 * @param {PostBoxAndBottleDraftsaveReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleDraftsaveResType>} ajax
 */
const postBoxAndBottleDraftsave = (data: PostBoxAndBottleDraftsaveReqType): Promise<PostBoxAndBottleDraftsaveResType> => {
  return ajax({
    url: '/boxAndBottle/draftsave',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottleQuerydraftReqType = operations['Consumable_QueryDraft']['parameters']['body']['dto']
export type PostBoxAndBottleQuerydraftResType = definitions['LLJsonResult[BoxBottleDraftDto]']
/**
 * @description 查询生产订单的暂存箱码瓶码
 * @param {PostBoxAndBottleQuerydraftReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleQuerydraftResType>} ajax
 */
const postBoxAndBottleQuerydraft = (data: PostBoxAndBottleQuerydraftReqType): Promise<PostBoxAndBottleQuerydraftResType> => {
  return ajax({
    url: '/boxAndBottle/querydraft',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottleDraftpageReqType = operations['Consumable_DraftPage']['parameters']['body']['dto']
export type PostBoxAndBottleDraftpageResType = definitions['LLPJsonResult[BoxBottleDraftInfoDto]']
/**
 * @description 查询生产订单的暂存箱码瓶码暂存<br />
单独的暂存查询页面,提供暂存的删除
 * @param {PostBoxAndBottleDraftpageReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleDraftpageResType>} ajax
 */
const postBoxAndBottleDraftpage = (data: PostBoxAndBottleDraftpageReqType): Promise<PostBoxAndBottleDraftpageResType> => {
  return ajax({
    url: '/boxAndBottle/draftpage',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottleDraftbulkdeleteReqType = operations['Consumable_DraftBulkDelete']['parameters']['body']['dto']
export type PostBoxAndBottleDraftbulkdeleteResType = definitions['LJsonResult']
/**
 * @description 批量删除暂存
 * @param {PostBoxAndBottleDraftbulkdeleteReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleDraftbulkdeleteResType>} ajax
 */
const postBoxAndBottleDraftbulkdelete = (data: PostBoxAndBottleDraftbulkdeleteReqType): Promise<PostBoxAndBottleDraftbulkdeleteResType> => {
  return ajax({
    url: '/boxAndBottle/draftbulkdelete',
    method: Method.POST
  }, data)
}

export type PostBoxAndBottleDraftdeleteReqType = operations['Consumable_DraftDelete']['parameters']['body']['dto']
export type PostBoxAndBottleDraftdeleteResType = definitions['LJsonResult']
/**
 * @description PDA暂存删除
 * @param {PostBoxAndBottleDraftdeleteReqType} data 请求参数
 * @returns {Promise<PostBoxAndBottleDraftdeleteResType>} ajax
 */
const postBoxAndBottleDraftdelete = (data: PostBoxAndBottleDraftdeleteReqType): Promise<PostBoxAndBottleDraftdeleteResType> => {
  return ajax({
    url: '/boxAndBottle/draftdelete',
    method: Method.POST
  }, data)
}

export default {
  postBoxAndBottleQueryForConsumable,
  getBoxAndBottleCodeparse,
  postBoxAndBottleCodeparsev2,
  postBoxAndBottleJudgecodebound,
  postBoxAndBottleSaveV1,
  postBoxAndBottleSavev2,
  postBoxAndBottlePageWithDetail,
  postBoxAndBottleExport,
  postBoxAndBottleChangebox,
  postBoxAndBottleDraftsave,
  postBoxAndBottleQuerydraft,
  postBoxAndBottleDraftpage,
  postBoxAndBottleDraftbulkdelete,
  postBoxAndBottleDraftdelete
}
