import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostWorkbenchListReqType = {}
export type PostWorkbenchListResType = definitions['LJsonResult[List[OpGroupIconDto]]']
/**
 * @description 查询工序组列表
 * @param {PostWorkbenchListReqType} data 请求参数
 * @returns {Promise<PostWorkbenchListResType>} ajax
 */
const postWorkbenchList = (data: PostWorkbenchListReqType = {}): Promise<PostWorkbenchListResType> => {
  return ajax({
    url: '/workbench/list',
    method: Method.POST
  }, data)
}

export type PostWorkbenchMopreportinfoReqType = operations['WorkBench_QueryMomOpReport']['parameters']['body']['dto']
export type PostWorkbenchMopreportinfoResType = definitions['LJsonResult[MomOpReportDto]']
/**
 * @description 根据流转卡查询工序组下可报工的生产订单信息
 * @param {PostWorkbenchMopreportinfoReqType} data 请求参数
 * @returns {Promise<PostWorkbenchMopreportinfoResType>} ajax
 */
const postWorkbenchMopreportinfo = (data: PostWorkbenchMopreportinfoReqType): Promise<PostWorkbenchMopreportinfoResType> => {
  return ajax({
    url: '/workbench/mopreportinfo',
    method: Method.POST
  }, data)
}

export type PostWorkbenchOpreportReqType = operations['WorkBench_OpReport']['parameters']['body']['dto']
export type PostWorkbenchOpreportResType = definitions['LJsonResult[MoRoutingResDto]']
/**
 * @description 工序报工
 * @param {PostWorkbenchOpreportReqType} data 请求参数
 * @returns {Promise<PostWorkbenchOpreportResType>} ajax
 */
const postWorkbenchOpreport = (data: PostWorkbenchOpreportReqType): Promise<PostWorkbenchOpreportResType> => {
  return ajax({
    url: '/workbench/opreport',
    method: Method.POST
  }, data)
}

export type GetWorkbenchTeampersonsReqType = operations['WorkBench_QueryTeamPersons']['parameters']['query']
export type GetWorkbenchTeampersonsResType = definitions['LJsonResult[List[TeamPersonDto]]']
/**
 * @description 查询登录人所在班组下人员列表
 * @param {GetWorkbenchTeampersonsReqType} data 请求参数
 * @returns {Promise<GetWorkbenchTeampersonsResType>} ajax
 */
const getWorkbenchTeampersons = (data: GetWorkbenchTeampersonsReqType): Promise<GetWorkbenchTeampersonsResType> => {
  return ajax({
    url: '/workbench/teampersons',
    method: Method.GET
  }, data)
}

export default {
  postWorkbenchList,
  postWorkbenchMopreportinfo,
  postWorkbenchOpreport,
  getWorkbenchTeampersons
}
