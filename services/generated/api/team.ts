import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostTeamSaveReqType = operations['TeamGroup_Save']['parameters']['body']['dto']
export type PostTeamSaveResType = definitions['LJsonResult']
/**
 * @description 班组保存
 * @param {PostTeamSaveReqType} data 请求参数
 * @returns {Promise<PostTeamSaveResType>} ajax
 */
const postTeamSave = (data: PostTeamSaveReqType): Promise<PostTeamSaveResType> => {
  return ajax({
    url: '/team/save',
    method: Method.POST
  }, data)
}

export type PostTeamDeleteReqType = operations['TeamGroup_DicDataDel']['parameters']['body']['dto']
export type PostTeamDeleteResType = definitions['LJsonResult']
/**
 * @description 班组删除
 * @param {PostTeamDeleteReqType} data 请求参数
 * @returns {Promise<PostTeamDeleteResType>} ajax
 */
const postTeamDelete = (data: PostTeamDeleteReqType): Promise<PostTeamDeleteResType> => {
  return ajax({
    url: '/team/delete',
    method: Method.POST
  }, data)
}

export type PostTeamPageReqType = operations['TeamGroup_QueryPage']['parameters']['body']['dto']
export type PostTeamPageResType = definitions['LPJsonResult[List[TeamGroupInfoDto]]']
/**
 * @description 查询班组分页数据
 * @param {PostTeamPageReqType} data 请求参数
 * @returns {Promise<PostTeamPageResType>} ajax
 */
const postTeamPage = (data: PostTeamPageReqType): Promise<PostTeamPageResType> => {
  return ajax({
    url: '/team/page',
    method: Method.POST
  }, data)
}

export type PostTeamExportReqType = operations['TeamGroup_ExportData']['parameters']['body']['dto']
export type PostTeamExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 数据导出
 * @param {PostTeamExportReqType} data 请求参数
 * @returns {Promise<PostTeamExportResType>} ajax
 */
const postTeamExport = (data: PostTeamExportReqType): Promise<PostTeamExportResType> => {
  return ajax({
    url: '/team/export',
    method: Method.POST
  }, data)
}

export type PostTeamExportPersReqType = operations['TeamGroup_ExportPersonData']['parameters']['body']['dto']
export type PostTeamExportPersResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 班组人员导出
 * @param {PostTeamExportPersReqType} data 请求参数
 * @returns {Promise<PostTeamExportPersResType>} ajax
 */
const postTeamExportPers = (data: PostTeamExportPersReqType): Promise<PostTeamExportPersResType> => {
  return ajax({
    url: '/team/exportPers',
    method: Method.POST
  }, data)
}

export type GetTeamSelectReqType = operations['TeamGroup_QueryTeamSelect']['parameters']['query']
export type GetTeamSelectResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询班组下拉列表
 * @param {GetTeamSelectReqType} data 请求参数
 * @returns {Promise<GetTeamSelectResType>} ajax
 */
const getTeamSelect = (data: GetTeamSelectReqType): Promise<GetTeamSelectResType> => {
  return ajax({
    url: '/team/select',
    method: Method.GET
  }, data)
}

export type PostTeamPerallotmentReqType = operations['TeamGroup_PersonAllotment']['parameters']['body']['dto']
export type PostTeamPerallotmentResType = definitions['LJsonResult']
/**
 * @description 班组人员分配
 * @param {PostTeamPerallotmentReqType} data 请求参数
 * @returns {Promise<PostTeamPerallotmentResType>} ajax
 */
const postTeamPerallotment = (data: PostTeamPerallotmentReqType): Promise<PostTeamPerallotmentResType> => {
  return ajax({
    url: '/team/perallotment',
    method: Method.POST
  }, data)
}

export type PostTeamAsspersonsReqType = operations['TeamGroup_QueryTeamPersons']['parameters']['body']['dto']
export type PostTeamAsspersonsResType = definitions['LJsonResult[List[TeamPersonDto]]']
/**
 * @description 查询班组下人员列表
 * @param {PostTeamAsspersonsReqType} data 请求参数
 * @returns {Promise<PostTeamAsspersonsResType>} ajax
 */
const postTeamAsspersons = (data: PostTeamAsspersonsReqType): Promise<PostTeamAsspersonsResType> => {
  return ajax({
    url: '/team/asspersons',
    method: Method.POST
  }, data)
}

export type PostTeamDelteampersonsReqType = operations['TeamGroup_DeleteTeamPerson']['parameters']['body']['dto']
export type PostTeamDelteampersonsResType = definitions['LJsonResult']
/**
 * @description 删除班组人员配置
 * @param {PostTeamDelteampersonsReqType} data 请求参数
 * @returns {Promise<PostTeamDelteampersonsResType>} ajax
 */
const postTeamDelteampersons = (data: PostTeamDelteampersonsReqType): Promise<PostTeamDelteampersonsResType> => {
  return ajax({
    url: '/team/delteampersons',
    method: Method.POST
  }, data)
}

export default {
  postTeamSave,
  postTeamDelete,
  postTeamPage,
  postTeamExport,
  postTeamExportPers,
  getTeamSelect,
  postTeamPerallotment,
  postTeamAsspersons,
  postTeamDelteampersons
}
