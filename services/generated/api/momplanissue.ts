import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostMomplanissueAssresdataReqType = operations['MomPlanIssue_QueryAssResData']['parameters']['body']['dto']
export type PostMomplanissueAssresdataResType = definitions['LLJsonResult[MomPlanAssResDto]']
/**
 * @description 获取计划下达辅助数据的整合
 * @param {PostMomplanissueAssresdataReqType} data 请求参数
 * @returns {Promise<PostMomplanissueAssresdataResType>} ajax
 */
const postMomplanissueAssresdata = (data: PostMomplanissueAssresdataReqType): Promise<PostMomplanissueAssresdataResType> => {
  return ajax({
    url: '/momplanissue/assresdata',
    method: Method.POST
  }, data)
}

export type PostMomplanissueMomissuedetailsReqType = operations['MomPlanIssue_QueryMomIssueDetailList']['parameters']['body']['dto']
export type PostMomplanissueMomissuedetailsResType = definitions['LPJsonResult[List[JHXDMomDetailDto]]']
/**
 * @description 查询可下达计划的生产订单明细列表
 * @param {PostMomplanissueMomissuedetailsReqType} data 请求参数
 * @returns {Promise<PostMomplanissueMomissuedetailsResType>} ajax
 */
const postMomplanissueMomissuedetails = (data: PostMomplanissueMomissuedetailsReqType): Promise<PostMomplanissueMomissuedetailsResType> => {
  return ajax({
    url: '/momplanissue/momissuedetails',
    method: Method.POST
  }, data)
}

export type PostMomplanissueAddReqType = operations['MomPlanIssue_Save']['parameters']['body']['dto']
export type PostMomplanissueAddResType = definitions['LJsonResult']
/**
 * @description 生产计划新增
 * @param {PostMomplanissueAddReqType} data 请求参数
 * @returns {Promise<PostMomplanissueAddResType>} ajax
 */
const postMomplanissueAdd = (data: PostMomplanissueAddReqType): Promise<PostMomplanissueAddResType> => {
  return ajax({
    url: '/momplanissue/add',
    method: Method.POST
  }, data)
}

export type PostMomplanissueJhxdmrpdetailsReqType = operations['MomPlanIssue_QueryJHXDMrpList']['parameters']['body']['dto']
export type PostMomplanissueJhxdmrpdetailsResType = definitions['LPJsonResult[List[JHXDMrpDetailDto]]']
/**
 * @description 查询可下达计划的MRP明细列表
 * @param {PostMomplanissueJhxdmrpdetailsReqType} data 请求参数
 * @returns {Promise<PostMomplanissueJhxdmrpdetailsResType>} ajax
 */
const postMomplanissueJhxdmrpdetails = (data: PostMomplanissueJhxdmrpdetailsReqType): Promise<PostMomplanissueJhxdmrpdetailsResType> => {
  return ajax({
    url: '/momplanissue/jhxdmrpdetails',
    method: Method.POST
  }, data)
}

export type PostMomplanissueSaveReqType = operations['MomPlanIssue_PlanSave']['parameters']['body']['dto']
export type PostMomplanissueSaveResType = definitions['LJsonResult']
/**
 * @description 生产计划保存（生成U8生产订单）
 * @param {PostMomplanissueSaveReqType} data 请求参数
 * @returns {Promise<PostMomplanissueSaveResType>} ajax
 */
const postMomplanissueSave = (data: PostMomplanissueSaveReqType): Promise<PostMomplanissueSaveResType> => {
  return ajax({
    url: '/momplanissue/save',
    method: Method.POST
  }, data)
}

export type PostMomplanissueEditReqType = operations['MomPlanIssue_PlanEdit']['parameters']['body']['dto']
export type PostMomplanissueEditResType = definitions['LJsonResult']
/**
 * @description 生产计划编辑
 * @param {PostMomplanissueEditReqType} data 请求参数
 * @returns {Promise<PostMomplanissueEditResType>} ajax
 */
const postMomplanissueEdit = (data: PostMomplanissueEditReqType): Promise<PostMomplanissueEditResType> => {
  return ajax({
    url: '/momplanissue/edit',
    method: Method.POST
  }, data)
}

export type PostMomplanissueDeleteReqType = operations['MomPlanIssue_DicDataDel']['parameters']['body']['dto']
export type PostMomplanissueDeleteResType = definitions['LJsonResult']
/**
 * @description 生产计划删除
 * @param {PostMomplanissueDeleteReqType} data 请求参数
 * @returns {Promise<PostMomplanissueDeleteResType>} ajax
 */
const postMomplanissueDelete = (data: PostMomplanissueDeleteReqType): Promise<PostMomplanissueDeleteResType> => {
  return ajax({
    url: '/momplanissue/delete',
    method: Method.POST
  }, data)
}

export type PostMomplanissueInfoReqType = operations['MomPlanIssue_QueryInfo']['parameters']['body']['dto']
export type PostMomplanissueInfoResType = definitions['LJsonResult[MomPlanIssueInfoDto]']
/**
 * @description 生产计划明细
 * @param {PostMomplanissueInfoReqType} data 请求参数
 * @returns {Promise<PostMomplanissueInfoResType>} ajax
 */
const postMomplanissueInfo = (data: PostMomplanissueInfoReqType): Promise<PostMomplanissueInfoResType> => {
  return ajax({
    url: '/momplanissue/info',
    method: Method.POST
  }, data)
}

export type PostMomplanissuePageReqType = operations['MomPlanIssue_QueryPage']['parameters']['body']['dto']
export type PostMomplanissuePageResType = definitions['LLPJsonResult[MomPlanIssueInfoDto]']
/**
 * @description 查询生产计划分页数据
 * @param {PostMomplanissuePageReqType} data 请求参数
 * @returns {Promise<PostMomplanissuePageResType>} ajax
 */
const postMomplanissuePage = (data: PostMomplanissuePageReqType): Promise<PostMomplanissuePageResType> => {
  return ajax({
    url: '/momplanissue/page',
    method: Method.POST
  }, data)
}

export type PostMomplanissueRawcodeReqType = operations['MomPlanIssue_RawCode']['parameters']['body']['dto']
export type PostMomplanissueRawcodeResType = definitions['LJsonResult[BarCodeFileResDto]']
/**
 * @description 生产计划生码
 * @param {PostMomplanissueRawcodeReqType} data 请求参数
 * @returns {Promise<PostMomplanissueRawcodeResType>} ajax
 */
const postMomplanissueRawcode = (data: PostMomplanissueRawcodeReqType): Promise<PostMomplanissueRawcodeResType> => {
  return ajax({
    url: '/momplanissue/rawcode',
    method: Method.POST
  }, data)
}

export type PostMomplanissueCloseReqType = operations['MomPlanIssue_PlanClose']['parameters']['body']['dto']
export type PostMomplanissueCloseResType = definitions['LJsonResult']
/**
 * @description 生产计划关闭
 * @param {PostMomplanissueCloseReqType} data 请求参数
 * @returns {Promise<PostMomplanissueCloseResType>} ajax
 */
const postMomplanissueClose = (data: PostMomplanissueCloseReqType): Promise<PostMomplanissueCloseResType> => {
  return ajax({
    url: '/momplanissue/close',
    method: Method.POST
  }, data)
}

export type PostMomplanissueOpenReqType = operations['MomPlanIssue_PlanOpen']['parameters']['body']['dto']
export type PostMomplanissueOpenResType = definitions['LJsonResult']
/**
 * @description 生产计划打开
 * @param {PostMomplanissueOpenReqType} data 请求参数
 * @returns {Promise<PostMomplanissueOpenResType>} ajax
 */
const postMomplanissueOpen = (data: PostMomplanissueOpenReqType): Promise<PostMomplanissueOpenResType> => {
  return ajax({
    url: '/momplanissue/open',
    method: Method.POST
  }, data)
}

export type PostMomplanissueProspectReqType = operations['MomPlanIssue_ProSpect']['parameters']['body']['dto']
export type PostMomplanissueProspectResType = definitions['LJsonResult[List[MaterialProSpectDto]]']
/**
 * @description 计划齐料展望
 * @param {PostMomplanissueProspectReqType} data 请求参数
 * @returns {Promise<PostMomplanissueProspectResType>} ajax
 */
const postMomplanissueProspect = (data: PostMomplanissueProspectReqType): Promise<PostMomplanissueProspectResType> => {
  return ajax({
    url: '/momplanissue/prospect',
    method: Method.POST
  }, data)
}

export type PostMomplanissueProspectexportReqType = operations['MomPlanIssue_ProSpectExport']['parameters']['body']['dto']
export type PostMomplanissueProspectexportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 计划齐料展望导出
 * @param {PostMomplanissueProspectexportReqType} data 请求参数
 * @returns {Promise<PostMomplanissueProspectexportResType>} ajax
 */
const postMomplanissueProspectexport = (data: PostMomplanissueProspectexportReqType): Promise<PostMomplanissueProspectexportResType> => {
  return ajax({
    url: '/momplanissue/prospectexport',
    method: Method.POST
  }, data)
}

export type PostMomplanissueExportReqType = operations['MomPlanIssue_PlanExport']['parameters']['body']['dto']
export type PostMomplanissueExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 计划下达列表导出
 * @param {PostMomplanissueExportReqType} data 请求参数
 * @returns {Promise<PostMomplanissueExportResType>} ajax
 */
const postMomplanissueExport = (data: PostMomplanissueExportReqType): Promise<PostMomplanissueExportResType> => {
  return ajax({
    url: '/momplanissue/export',
    method: Method.POST
  }, data)
}

export type PostMomplanissueAllocateissuelistReqType = operations['MomPlanIssue_QueryMoAllocateIssueList']['parameters']['body']['dto']
export type PostMomplanissueAllocateissuelistResType = definitions['LJsonResult[List[MoAlloacteIssueDto]]']
/**
 * @description 查询子件的领料情况
 * @param {PostMomplanissueAllocateissuelistReqType} data 请求参数
 * @returns {Promise<PostMomplanissueAllocateissuelistResType>} ajax
 */
const postMomplanissueAllocateissuelist = (data: PostMomplanissueAllocateissuelistReqType): Promise<PostMomplanissueAllocateissuelistResType> => {
  return ajax({
    url: '/momplanissue/allocateissuelist',
    method: Method.POST
  }, data)
}

export type PostMomplanissuePrintmaterialappReqType = operations['MomPlanIssue_PrintMaterialApp']['parameters']['body']['dto']
export type PostMomplanissuePrintmaterialappResType = definitions['LJsonResult[BaseFileListResDto]']
/**
 * @description 领料申请打印参数
 * @param {PostMomplanissuePrintmaterialappReqType} data 请求参数
 * @returns {Promise<PostMomplanissuePrintmaterialappResType>} ajax
 */
const postMomplanissuePrintmaterialapp = (data: PostMomplanissuePrintmaterialappReqType): Promise<PostMomplanissuePrintmaterialappResType> => {
  return ajax({
    url: '/momplanissue/printmaterialapp',
    method: Method.POST
  }, data)
}

export type PostMomplanissuePrintReqType = operations['MomPlanIssue_PlanPrint']['parameters']['body']['dto']
export type PostMomplanissuePrintResType = definitions['LJsonResult[BaseFileListResDto]']
/**
 * @description 计划下达打印-电子专用
 * @param {PostMomplanissuePrintReqType} data 请求参数
 * @returns {Promise<PostMomplanissuePrintResType>} ajax
 */
const postMomplanissuePrint = (data: PostMomplanissuePrintReqType): Promise<PostMomplanissuePrintResType> => {
  return ajax({
    url: '/momplanissue/print',
    method: Method.POST
  }, data)
}

export type PostMomplanissueMergetransallocatelistReqType = operations['MomPlanIssue_QueryMomTransAllocateList']['parameters']['body']['dto']
export type PostMomplanissueMergetransallocatelistResType = definitions['LLJsonResult[MergeTransAllocateListDto]']
/**
 * @description 查询合并调拨的生产订单子件列表
 * @param {PostMomplanissueMergetransallocatelistReqType} data 请求参数
 * @returns {Promise<PostMomplanissueMergetransallocatelistResType>} ajax
 */
const postMomplanissueMergetransallocatelist = (data: PostMomplanissueMergetransallocatelistReqType): Promise<PostMomplanissueMergetransallocatelistResType> => {
  return ajax({
    url: '/momplanissue/mergetransallocatelist',
    method: Method.POST
  }, data)
}

export type PostMomplanissueMergetransallocateReqType = operations['MomPlanIssue_MergeTransAllocate']['parameters']['body']['dto']
export type PostMomplanissueMergetransallocateResType = definitions['LJsonResult']
/**
 * @description 合并调拨保存
 * @param {PostMomplanissueMergetransallocateReqType} data 请求参数
 * @returns {Promise<PostMomplanissueMergetransallocateResType>} ajax
 */
const postMomplanissueMergetransallocate = (data: PostMomplanissueMergetransallocateReqType): Promise<PostMomplanissueMergetransallocateResType> => {
  return ajax({
    url: '/momplanissue/mergetransallocate',
    method: Method.POST
  }, data)
}

export type PostMomplanissueMoissueprintReqType = operations['MomPlanIssue_MoMaterialPrint']['parameters']['body']['dto']
export type PostMomplanissueMoissueprintResType = definitions['LJsonResult[BaseFileListResDto]']
/**
 * @description 生产领料打印
 * @param {PostMomplanissueMoissueprintReqType} data 请求参数
 * @returns {Promise<PostMomplanissueMoissueprintResType>} ajax
 */
const postMomplanissueMoissueprint = (data: PostMomplanissueMoissueprintReqType): Promise<PostMomplanissueMoissueprintResType> => {
  return ajax({
    url: '/momplanissue/moissueprint',
    method: Method.POST
  }, data)
}

export type PostMomplanissueGenprodinvsnReqType = operations['MomPlanIssue_GenProdInvSNByPlans']['parameters']['body']['dto']
export type PostMomplanissueGenprodinvsnResType = definitions['LJsonResult']
/**
 * @description 根据计划下达生成成品序列号
 * @param {PostMomplanissueGenprodinvsnReqType} data 请求参数
 * @returns {Promise<PostMomplanissueGenprodinvsnResType>} ajax
 */
const postMomplanissueGenprodinvsn = (data: PostMomplanissueGenprodinvsnReqType): Promise<PostMomplanissueGenprodinvsnResType> => {
  return ajax({
    url: '/momplanissue/genprodinvsn',
    method: Method.POST
  }, data)
}

export type PostMomplanissueEditprodinvsnReqType = operations['MomPlanIssue_SaveProdInvSN']['parameters']['body']['dto']
export type PostMomplanissueEditprodinvsnResType = definitions['LJsonResult']
/**
 * @description 计划下达生成成品序列号编辑保存
 * @param {PostMomplanissueEditprodinvsnReqType} data 请求参数
 * @returns {Promise<PostMomplanissueEditprodinvsnResType>} ajax
 */
const postMomplanissueEditprodinvsn = (data: PostMomplanissueEditprodinvsnReqType): Promise<PostMomplanissueEditprodinvsnResType> => {
  return ajax({
    url: '/momplanissue/editprodinvsn',
    method: Method.POST
  }, data)
}

export type PostMomplanissuePlansnexportReqType = operations['MomPlanIssue_ExportData']['parameters']['body']['dto']
export type PostMomplanissuePlansnexportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 计划下达序列号导出
 * @param {PostMomplanissuePlansnexportReqType} data 请求参数
 * @returns {Promise<PostMomplanissuePlansnexportResType>} ajax
 */
const postMomplanissuePlansnexport = (data: PostMomplanissuePlansnexportReqType): Promise<PostMomplanissuePlansnexportResType> => {
  return ajax({
    url: '/momplanissue/plansnexport',
    method: Method.POST
  }, data)
}

export type PostMomplanissueSavev2ReqType = operations['MomPlanIssue_PlanSaveV2']['parameters']['body']['dto']
export type PostMomplanissueSavev2ResType = definitions['LJsonResult']
/**
 * @description 生产计划保存
 * @param {PostMomplanissueSavev2ReqType} data 请求参数
 * @returns {Promise<PostMomplanissueSavev2ResType>} ajax
 */
const postMomplanissueSavev2 = (data: PostMomplanissueSavev2ReqType): Promise<PostMomplanissueSavev2ResType> => {
  return ajax({
    url: '/momplanissue/savev2',
    method: Method.POST
  }, data)
}

export type PostMomplanissueAuditReqType = operations['MomPlanIssue_DoAudit_PostMomplanissueAudit']['parameters']['body']['dto']
export type PostMomplanissueAuditResType = definitions['LJsonResult']
/**
 * @description 审核(审核并生成U8生产订单)
 * @param {PostMomplanissueAuditReqType} data 请求参数
 * @returns {Promise<PostMomplanissueAuditResType>} ajax
 */
const postMomplanissueAudit = (data: PostMomplanissueAuditReqType): Promise<PostMomplanissueAuditResType> => {
  return ajax({
    url: '/momplanissue/audit',
    method: Method.POST
  }, data)
}

export type PostMomplanissueBlukauditReqType = operations['MomPlanIssue_DoAudit_PostMomplanissueBlukaudit']['parameters']['body']['dto']
export type PostMomplanissueBlukauditResType = definitions['LJsonResult']
/**
 * @description 批量审核(审核并生成U8生产订单)
 * @param {PostMomplanissueBlukauditReqType} data 请求参数
 * @returns {Promise<PostMomplanissueBlukauditResType>} ajax
 */
const postMomplanissueBlukaudit = (data: PostMomplanissueBlukauditReqType): Promise<PostMomplanissueBlukauditResType> => {
  return ajax({
    url: '/momplanissue/blukaudit',
    method: Method.POST
  }, data)
}

export type PostMomplanissueInfov2ReqType = operations['MomPlanIssue_QueryInfoV2']['parameters']['body']['dto']
export type PostMomplanissueInfov2ResType = definitions['LJsonResult[MomPlanIssueInfoV2Dto]']
/**
 * @description 生产计划明细
 * @param {PostMomplanissueInfov2ReqType} data 请求参数
 * @returns {Promise<PostMomplanissueInfov2ResType>} ajax
 */
const postMomplanissueInfov2 = (data: PostMomplanissueInfov2ReqType): Promise<PostMomplanissueInfov2ResType> => {
  return ajax({
    url: '/momplanissue/infov2',
    method: Method.POST
  }, data)
}

export default {
  postMomplanissueAssresdata,
  postMomplanissueMomissuedetails,
  postMomplanissueAdd,
  postMomplanissueJhxdmrpdetails,
  postMomplanissueSave,
  postMomplanissueEdit,
  postMomplanissueDelete,
  postMomplanissueInfo,
  postMomplanissuePage,
  postMomplanissueRawcode,
  postMomplanissueClose,
  postMomplanissueOpen,
  postMomplanissueProspect,
  postMomplanissueProspectexport,
  postMomplanissueExport,
  postMomplanissueAllocateissuelist,
  postMomplanissuePrintmaterialapp,
  postMomplanissuePrint,
  postMomplanissueMergetransallocatelist,
  postMomplanissueMergetransallocate,
  postMomplanissueMoissueprint,
  postMomplanissueGenprodinvsn,
  postMomplanissueEditprodinvsn,
  postMomplanissuePlansnexport,
  postMomplanissueSavev2,
  postMomplanissueAudit,
  postMomplanissueBlukaudit,
  postMomplanissueInfov2
}
