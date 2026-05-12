import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostPiecewageCalcReqType = operations['PieceWage_PieceWageCalc']['parameters']['body']['dto']
export type PostPiecewageCalcResType = definitions['LJsonResult']
/**
 * @description 开始计算计件工资
 * @param {PostPiecewageCalcReqType} data 请求参数
 * @returns {Promise<PostPiecewageCalcResType>} ajax
 */
const postPiecewageCalc = (data: PostPiecewageCalcReqType): Promise<PostPiecewageCalcResType> => {
  return ajax({
    url: '/piecewage/calc',
    method: Method.POST
  }, data)
}

export type PostPiecewageRecalcReqType = operations['PieceWage_PieceWageReCalc']['parameters']['body']['dto']
export type PostPiecewageRecalcResType = definitions['LJsonResult']
/**
 * @description 计件工资重新计算
 * @param {PostPiecewageRecalcReqType} data 请求参数
 * @returns {Promise<PostPiecewageRecalcResType>} ajax
 */
const postPiecewageRecalc = (data: PostPiecewageRecalcReqType): Promise<PostPiecewageRecalcResType> => {
  return ajax({
    url: '/piecewage/recalc',
    method: Method.POST
  }, data)
}

export type PostPiecewageDelReqType = operations['PieceWage_PieceWageDel']['parameters']['body']['dto']
export type PostPiecewageDelResType = definitions['LJsonResult']
/**
 * @description 计件工资单删除
 * @param {PostPiecewageDelReqType} data 请求参数
 * @returns {Promise<PostPiecewageDelResType>} ajax
 */
const postPiecewageDel = (data: PostPiecewageDelReqType): Promise<PostPiecewageDelResType> => {
  return ajax({
    url: '/piecewage/del',
    method: Method.POST
  }, data)
}

export type PostPiecewageDoauditReqType = operations['PieceWage_DoAudit']['parameters']['body']['dto']
export type PostPiecewageDoauditResType = definitions['LJsonResult']
/**
 * @description 计件工资单审核
 * @param {PostPiecewageDoauditReqType} data 请求参数
 * @returns {Promise<PostPiecewageDoauditResType>} ajax
 */
const postPiecewageDoaudit = (data: PostPiecewageDoauditReqType): Promise<PostPiecewageDoauditResType> => {
  return ajax({
    url: '/piecewage/doaudit',
    method: Method.POST
  }, data)
}

export type PostPiecewageMainlistReqType = operations['PieceWage_QueryMainList']['parameters']['body']['dto']
export type PostPiecewageMainlistResType = definitions['LPJsonResult[List[PieceWageMainDto]]']
/**
 * @description 查询主列表
 * @param {PostPiecewageMainlistReqType} data 请求参数
 * @returns {Promise<PostPiecewageMainlistResType>} ajax
 */
const postPiecewageMainlist = (data: PostPiecewageMainlistReqType): Promise<PostPiecewageMainlistResType> => {
  return ajax({
    url: '/piecewage/mainlist',
    method: Method.POST
  }, data)
}

export type PostPiecewageDetaildelReqType = operations['PieceWage_DetailDel']['parameters']['body']['dto']
export type PostPiecewageDetaildelResType = definitions['LJsonResult']
/**
 * @description 明细行删除
 * @param {PostPiecewageDetaildelReqType} data 请求参数
 * @returns {Promise<PostPiecewageDetaildelResType>} ajax
 */
const postPiecewageDetaildel = (data: PostPiecewageDetaildelReqType): Promise<PostPiecewageDetaildelResType> => {
  return ajax({
    url: '/piecewage/detaildel',
    method: Method.POST
  }, data)
}

export type PostPiecewageDetaillistReqType = operations['PieceWage_QueryDetailList']['parameters']['body']['dto']
export type PostPiecewageDetaillistResType = definitions['LPJsonResult[List[PieceWageDetailDto]]']
/**
 * @description 查询明细分页列表
 * @param {PostPiecewageDetaillistReqType} data 请求参数
 * @returns {Promise<PostPiecewageDetaillistResType>} ajax
 */
const postPiecewageDetaillist = (data: PostPiecewageDetaillistReqType): Promise<PostPiecewageDetaillistResType> => {
  return ajax({
    url: '/piecewage/detaillist',
    method: Method.POST
  }, data)
}

export type PostPiecewageDetaileditReqType = operations['PieceWage_PieceWageDetailUpdate']['parameters']['body']['dto']
export type PostPiecewageDetaileditResType = definitions['LJsonResult']
/**
 * @description 工资单明细行修改
 * @param {PostPiecewageDetaileditReqType} data 请求参数
 * @returns {Promise<PostPiecewageDetaileditResType>} ajax
 */
const postPiecewageDetailedit = (data: PostPiecewageDetaileditReqType): Promise<PostPiecewageDetaileditResType> => {
  return ajax({
    url: '/piecewage/detailedit',
    method: Method.POST
  }, data)
}

export type PostPiecewageReportReqType = operations['PieceWage_QueryPieceWageReport']['parameters']['body']['dto']
export type PostPiecewageReportResType = definitions['LJsonResult[List[PieceWageReportDto]]']
/**
 * @description 工资报表-将主表按人按工序动态列展开
 * @param {PostPiecewageReportReqType} data 请求参数
 * @returns {Promise<PostPiecewageReportResType>} ajax
 */
const postPiecewageReport = (data: PostPiecewageReportReqType): Promise<PostPiecewageReportResType> => {
  return ajax({
    url: '/piecewage/report',
    method: Method.POST
  }, data)
}

export default {
  postPiecewageCalc,
  postPiecewageRecalc,
  postPiecewageDel,
  postPiecewageDoaudit,
  postPiecewageMainlist,
  postPiecewageDetaildel,
  postPiecewageDetaillist,
  postPiecewageDetailedit,
  postPiecewageReport
}
