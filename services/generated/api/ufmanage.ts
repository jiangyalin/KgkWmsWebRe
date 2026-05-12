import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type GetUfmanageWorkcentersReqType = operations['UFManage_QueryWorkCenters']['parameters']['query']
export type GetUfmanageWorkcentersResType = definitions['LJsonResult[List[WorkCenterDto]]']
/**
 * @description 查询工作中心列表
 * @param {GetUfmanageWorkcentersReqType} data 请求参数
 * @returns {Promise<GetUfmanageWorkcentersResType>} ajax
 */
const getUfmanageWorkcenters = (data: GetUfmanageWorkcentersReqType): Promise<GetUfmanageWorkcentersResType> => {
  return ajax({
    url: '/ufmanage/workcenters',
    method: Method.GET
  }, data)
}

export type GetUfmanageDeplistReqType = operations['UFManage_QueryDepList']['parameters']['query']
export type GetUfmanageDeplistResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询部门下拉列表
 * @param {GetUfmanageDeplistReqType} data 请求参数
 * @returns {Promise<GetUfmanageDeplistResType>} ajax
 */
const getUfmanageDeplist = (data: GetUfmanageDeplistReqType): Promise<GetUfmanageDeplistResType> => {
  return ajax({
    url: '/ufmanage/deplist',
    method: Method.GET
  }, data)
}

export type PostUfmanagePersonsReqType = operations['UFManage_QueryPersonList']['parameters']['body']['dto']
export type PostUfmanagePersonsResType = definitions['LPJsonResult[List[PersonDto]]']
/**
 * @description 查询人员档案
 * @param {PostUfmanagePersonsReqType} data 请求参数
 * @returns {Promise<PostUfmanagePersonsResType>} ajax
 */
const postUfmanagePersons = (data: PostUfmanagePersonsReqType): Promise<PostUfmanagePersonsResType> => {
  return ajax({
    url: '/ufmanage/persons',
    method: Method.POST
  }, data)
}

export type PostUfmanageOpusersReqType = operations['UFManage_QueryOpUserList']['parameters']['body']['dto']
export type PostUfmanageOpusersResType = definitions['LPJsonResult[List[OpUserDto]]']
/**
 * @description 查询操作员档案
 * @param {PostUfmanageOpusersReqType} data 请求参数
 * @returns {Promise<PostUfmanageOpusersResType>} ajax
 */
const postUfmanageOpusers = (data: PostUfmanageOpusersReqType): Promise<PostUfmanageOpusersResType> => {
  return ajax({
    url: '/ufmanage/opusers',
    method: Method.POST
  }, data)
}

export type GetUfmanageExchlistReqType = {}
export type GetUfmanageExchlistResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询币种下拉列表
 * @param {GetUfmanageExchlistReqType} data 请求参数
 * @returns {Promise<GetUfmanageExchlistResType>} ajax
 */
const getUfmanageExchlist = (data: GetUfmanageExchlistReqType = {}): Promise<GetUfmanageExchlistResType> => {
  return ajax({
    url: '/ufmanage/exchlist',
    method: Method.GET
  }, data)
}

export type GetUfmanageInvclstreeReqType = operations['UFManage_QueryInvTreeList']['parameters']['query']
export type GetUfmanageInvclstreeResType = definitions['LJsonResult[List[InvClassTreeDto]]']
/**
 * @description 查询存货分类树数据
 * @param {GetUfmanageInvclstreeReqType} data 请求参数
 * @returns {Promise<GetUfmanageInvclstreeResType>} ajax
 */
const getUfmanageInvclstree = (data: GetUfmanageInvclstreeReqType): Promise<GetUfmanageInvclstreeResType> => {
  return ajax({
    url: '/ufmanage/invclstree',
    method: Method.GET
  }, data)
}

export type PostUfmanageInvlistReqType = operations['UFManage_QueryInvList']['parameters']['body']['dto']
export type PostUfmanageInvlistResType = definitions['LPJsonResult[List[InventoryDto]]']
/**
 * @description 查询存货分页数据
 * @param {PostUfmanageInvlistReqType} data 请求参数
 * @returns {Promise<PostUfmanageInvlistResType>} ajax
 */
const postUfmanageInvlist = (data: PostUfmanageInvlistReqType): Promise<PostUfmanageInvlistResType> => {
  return ajax({
    url: '/ufmanage/invlist',
    method: Method.POST
  }, data)
}

export type GetUfmanageInvinfoReqType = operations['UFManage_QueryInv']['parameters']['query']
export type GetUfmanageInvinfoResType = definitions['LJsonResult[InventoryDto]']
/**
 * @description 查询单个存货信息
 * @param {GetUfmanageInvinfoReqType} data 请求参数
 * @returns {Promise<GetUfmanageInvinfoResType>} ajax
 */
const getUfmanageInvinfo = (data: GetUfmanageInvinfoReqType): Promise<GetUfmanageInvinfoResType> => {
  return ajax({
    url: '/ufmanage/invinfo',
    method: Method.GET
  }, data)
}

export type GetUfmanageBfreelistReqType = operations['UFManage_InvbFreeList']['parameters']['query']
export type GetUfmanageBfreelistResType = definitions['LJsonResult[List[String]]']
/**
 * @description 一品多点列表
 * @param {GetUfmanageBfreelistReqType} data 请求参数
 * @returns {Promise<GetUfmanageBfreelistResType>} ajax
 */
const getUfmanageBfreelist = (data: GetUfmanageBfreelistReqType): Promise<GetUfmanageBfreelistResType> => {
  return ajax({
    url: '/ufmanage/bfreelist',
    method: Method.GET
  }, data)
}

export type PostUfmanageInvfreelistReqType = operations['UFManage_InvFreeValueList']['parameters']['body']['dto']
export type PostUfmanageInvfreelistResType = definitions['LPJsonResult[List[BaseSelectDto]]']
/**
 * @description 获取存货自由项取值
 * @param {PostUfmanageInvfreelistReqType} data 请求参数
 * @returns {Promise<PostUfmanageInvfreelistResType>} ajax
 */
const postUfmanageInvfreelist = (data: PostUfmanageInvfreelistReqType): Promise<PostUfmanageInvfreelistResType> => {
  return ajax({
    url: '/ufmanage/invfreelist',
    method: Method.POST
  }, data)
}

export type PostUfmanageCuslistReqType = operations['UFManage_QueryCusList']['parameters']['body']['dto']
export type PostUfmanageCuslistResType = definitions['LPJsonResult[List[CusBaseDto]]']
/**
 * @description 获取客户列表
 * @param {PostUfmanageCuslistReqType} data 请求参数
 * @returns {Promise<PostUfmanageCuslistResType>} ajax
 */
const postUfmanageCuslist = (data: PostUfmanageCuslistReqType): Promise<PostUfmanageCuslistResType> => {
  return ajax({
    url: '/ufmanage/cuslist',
    method: Method.POST
  }, data)
}

export type PostUfmanageSaletypesReqType = {}
export type PostUfmanageSaletypesResType = definitions['LLJsonResult[SaleTypeDto]']
/**
 * @description 获取销售类型下拉列表
 * @param {PostUfmanageSaletypesReqType} data 请求参数
 * @returns {Promise<PostUfmanageSaletypesResType>} ajax
 */
const postUfmanageSaletypes = (data: PostUfmanageSaletypesReqType = {}): Promise<PostUfmanageSaletypesResType> => {
  return ajax({
    url: '/ufmanage/saletypes',
    method: Method.POST
  }, data)
}

export type PostUfmanageWhlistReqType = operations['UFManage_QueryWHList']['parameters']['body']['dto']
export type PostUfmanageWhlistResType = definitions['LPJsonResult[List[WarehouseBaseDto]]']
/**
 * @description 获取仓库列表
 * @param {PostUfmanageWhlistReqType} data 请求参数
 * @returns {Promise<PostUfmanageWhlistResType>} ajax
 */
const postUfmanageWhlist = (data: PostUfmanageWhlistReqType): Promise<PostUfmanageWhlistResType> => {
  return ajax({
    url: '/ufmanage/whlist',
    method: Method.POST
  }, data)
}

export type PostUfmanagePoslistReqType = operations['UFManage_QueryPosList_PostUfmanagePoslist']['parameters']['body']['dto']
export type PostUfmanagePoslistResType = definitions['LPJsonResult[List[PositionDto]]']
/**
 * @description 获取货位列表
 * @param {PostUfmanagePoslistReqType} data 请求参数
 * @returns {Promise<PostUfmanagePoslistResType>} ajax
 */
const postUfmanagePoslist = (data: PostUfmanagePoslistReqType): Promise<PostUfmanagePoslistResType> => {
  return ajax({
    url: '/ufmanage/poslist',
    method: Method.POST
  }, data)
}

export type PostUfmanageVendorsReqType = operations['UFManage_QueryPosList_PostUfmanageVendors']['parameters']['body']['dto']
export type PostUfmanageVendorsResType = definitions['LPJsonResult[List[VendorDto]]']
/**
 * @description 获取供应商档案列表
 * @param {PostUfmanageVendorsReqType} data 请求参数
 * @returns {Promise<PostUfmanageVendorsResType>} ajax
 */
const postUfmanageVendors = (data: PostUfmanageVendorsReqType): Promise<PostUfmanageVendorsResType> => {
  return ajax({
    url: '/ufmanage/vendors',
    method: Method.POST
  }, data)
}

export type PostUfmanageMomrdpageReqType = operations['UFManage_QueryMomRdPage']['parameters']['body']['dto']
export type PostUfmanageMomrdpageResType = definitions['LPJsonResult[List[MomRdListDto]]']
/**
 * @description 查询生产入库单列表
 * @param {PostUfmanageMomrdpageReqType} data 请求参数
 * @returns {Promise<PostUfmanageMomrdpageResType>} ajax
 */
const postUfmanageMomrdpage = (data: PostUfmanageMomrdpageReqType): Promise<PostUfmanageMomrdpageResType> => {
  return ajax({
    url: '/ufmanage/momrdpage',
    method: Method.POST
  }, data)
}

export type PostUfmanagePuarrpageReqType = operations['UFManage_QueryPuArrPage']['parameters']['body']['dto']
export type PostUfmanagePuarrpageResType = definitions['LPJsonResult[List[PuArrListDto]]']
/**
 * @description 查询采购到货单列表
 * @param {PostUfmanagePuarrpageReqType} data 请求参数
 * @returns {Promise<PostUfmanagePuarrpageResType>} ajax
 */
const postUfmanagePuarrpage = (data: PostUfmanagePuarrpageReqType): Promise<PostUfmanagePuarrpageResType> => {
  return ajax({
    url: '/ufmanage/puarrpage',
    method: Method.POST
  }, data)
}

export type PostUfmanageWhposbatchstockReqType = operations['UFManage_QueryInvWhPosBatchStocks']['parameters']['body']['dto']
export type PostUfmanageWhposbatchstockResType = definitions['LJsonResult[List[InvWhPosBatchStockDto]]']
/**
 * @description 查询存货仓库货位批次存量
 * @param {PostUfmanageWhposbatchstockReqType} data 请求参数
 * @returns {Promise<PostUfmanageWhposbatchstockResType>} ajax
 */
const postUfmanageWhposbatchstock = (data: PostUfmanageWhposbatchstockReqType): Promise<PostUfmanageWhposbatchstockResType> => {
  return ajax({
    url: '/ufmanage/whposbatchstock',
    method: Method.POST
  }, data)
}

export type PostUfmanageWhstocksumReqType = operations['UFManage_QueryWhStockSum']['parameters']['body']['dto']
export type PostUfmanageWhstocksumResType = definitions['LJsonResult[List[WHStockSumDto]]']
/**
 * @description 查询仓库现存量数据
 * @param {PostUfmanageWhstocksumReqType} data 请求参数
 * @returns {Promise<PostUfmanageWhstocksumResType>} ajax
 */
const postUfmanageWhstocksum = (data: PostUfmanageWhstocksumReqType): Promise<PostUfmanageWhstocksumResType> => {
  return ajax({
    url: '/ufmanage/whstocksum',
    method: Method.POST
  }, data)
}

export type GetUfmanageRdstylesReqType = operations['UFManage_QueryRdStyle']['parameters']['query']
export type GetUfmanageRdstylesResType = definitions['LJsonResult[List[RdStyleDto]]']
/**
 * @description 查询出入库类别
 * @param {GetUfmanageRdstylesReqType} data 请求参数
 * @returns {Promise<GetUfmanageRdstylesResType>} ajax
 */
const getUfmanageRdstyles = (data: GetUfmanageRdstylesReqType): Promise<GetUfmanageRdstylesResType> => {
  return ajax({
    url: '/ufmanage/rdstyles',
    method: Method.GET
  }, data)
}

export type GetUfmanageMotypesReqType = {}
export type GetUfmanageMotypesResType = definitions['LLJsonResult[BaseSelectDto]']
/**
 * @description 获取生产订单类别列表
 * @param {GetUfmanageMotypesReqType} data 请求参数
 * @returns {Promise<GetUfmanageMotypesResType>} ajax
 */
const getUfmanageMotypes = (data: GetUfmanageMotypesReqType = {}): Promise<GetUfmanageMotypesResType> => {
  return ajax({
    url: '/ufmanage/motypes',
    method: Method.GET
  }, data)
}

export type PostUfmanageQueryStSnStateReqType = operations['UFManage_QuerySnState']['parameters']['body']['dto']
export type PostUfmanageQueryStSnStateResType = definitions['LLJsonResult[StSnStateDto]']
/**
 * @description 获取序列号(状态)
 * @param {PostUfmanageQueryStSnStateReqType} data 请求参数
 * @returns {Promise<PostUfmanageQueryStSnStateResType>} ajax
 */
const postUfmanageQueryStSnState = (data: PostUfmanageQueryStSnStateReqType): Promise<PostUfmanageQueryStSnStateResType> => {
  return ajax({
    url: '/ufmanage/queryStSnState',
    method: Method.POST
  }, data)
}

export type GetUfmanageAccvalsReqType = {}
export type GetUfmanageAccvalsResType = definitions['LJsonResult[U8AccVal]']
/**
 * @description 获取U8的参数配置信息
 * @param {GetUfmanageAccvalsReqType} data 请求参数
 * @returns {Promise<GetUfmanageAccvalsResType>} ajax
 */
const getUfmanageAccvals = (data: GetUfmanageAccvalsReqType = {}): Promise<GetUfmanageAccvalsResType> => {
  return ajax({
    url: '/ufmanage/accvals',
    method: Method.GET
  }, data)
}

export type PostUfmanageOplistReqType = operations['UFManage_QueryOpList']['parameters']['body']['dto']
export type PostUfmanageOplistResType = definitions['LPJsonResult[List[SfcOperationDto]]']
/**
 * @description 查询工序档案
 * @param {PostUfmanageOplistReqType} data 请求参数
 * @returns {Promise<PostUfmanageOplistResType>} ajax
 */
const postUfmanageOplist = (data: PostUfmanageOplistReqType): Promise<PostUfmanageOplistResType> => {
  return ajax({
    url: '/ufmanage/oplist',
    method: Method.POST
  }, data)
}

export type PostUfmanagePrlistReqType = operations['UFManage_QueryPRoutingList']['parameters']['body']['dto']
export type PostUfmanagePrlistResType = definitions['LPJsonResult[List[SfcPRoutingDto]]']
/**
 * @description 查询料品工艺路线主表
 * @param {PostUfmanagePrlistReqType} data 请求参数
 * @returns {Promise<PostUfmanagePrlistResType>} ajax
 */
const postUfmanagePrlist = (data: PostUfmanagePrlistReqType): Promise<PostUfmanagePrlistResType> => {
  return ajax({
    url: '/ufmanage/prlist',
    method: Method.POST
  }, data)
}

export type GetUfmanagePrlistbyinvReqType = operations['UFManage_QueryPRoutingListByInv']['parameters']['query']
export type GetUfmanagePrlistbyinvResType = definitions['LLJsonResult[SfcPRoutingDto]']
/**
 * @description 查询料品工艺路线主表
 * @param {GetUfmanagePrlistbyinvReqType} data 请求参数
 * @returns {Promise<GetUfmanagePrlistbyinvResType>} ajax
 */
const getUfmanagePrlistbyinv = (data: GetUfmanagePrlistbyinvReqType): Promise<GetUfmanagePrlistbyinvResType> => {
  return ajax({
    url: '/ufmanage/prlistbyinv',
    method: Method.GET
  }, data)
}

export type GetUfmanagePrdetailsReqType = operations['UFManage_QueryPRoutingDetails']['parameters']['query']
export type GetUfmanagePrdetailsResType = definitions['LJsonResult[List[SfcPRoutingDetailDto]]']
/**
 * @description 查询工艺路线明细列表
 * @param {GetUfmanagePrdetailsReqType} data 请求参数
 * @returns {Promise<GetUfmanagePrdetailsResType>} ajax
 */
const getUfmanagePrdetails = (data: GetUfmanagePrdetailsReqType): Promise<GetUfmanagePrdetailsResType> => {
  return ajax({
    url: '/ufmanage/prdetails',
    method: Method.GET
  }, data)
}

export type GetUfmanageUpdateprdetailqcwayReqType = operations['UFManage_UpdSfcPRoutingQcWay']['parameters']['query']
export type GetUfmanageUpdateprdetailqcwayResType = definitions['LJsonResult']
/**
 * @description 更新工艺路线明细里工序的检验方式
 * @param {GetUfmanageUpdateprdetailqcwayReqType} data 请求参数
 * @returns {Promise<GetUfmanageUpdateprdetailqcwayResType>} ajax
 */
const getUfmanageUpdateprdetailqcway = (data: GetUfmanageUpdateprdetailqcwayReqType): Promise<GetUfmanageUpdateprdetailqcwayResType> => {
  return ajax({
    url: '/ufmanage/updateprdetailqcway',
    method: Method.GET
  }, data)
}

export type PostUfmanageUpdateprdetailReqType = operations['UFManage_UpdSfcPRoutingDetail']['parameters']['body']['dto']
export type PostUfmanageUpdateprdetailResType = definitions['LJsonResult']
/**
 * @description 更新工艺路线明细里检验信息
 * @param {PostUfmanageUpdateprdetailReqType} data 请求参数
 * @returns {Promise<PostUfmanageUpdateprdetailResType>} ajax
 */
const postUfmanageUpdateprdetail = (data: PostUfmanageUpdateprdetailReqType): Promise<PostUfmanageUpdateprdetailResType> => {
  return ajax({
    url: '/ufmanage/updateprdetail',
    method: Method.POST
  }, data)
}

export type PostUfmanageBomverionsReqType = operations['UFManage_QueryInvBomVersionDtos']['parameters']['body']['dto']
export type PostUfmanageBomverionsResType = definitions['LJsonResult[List[InvBomVersionDto]]']
/**
 * @description 查询BOM版本列表
 * @param {PostUfmanageBomverionsReqType} data 请求参数
 * @returns {Promise<PostUfmanageBomverionsResType>} ajax
 */
const postUfmanageBomverions = (data: PostUfmanageBomverionsReqType): Promise<PostUfmanageBomverionsResType> => {
  return ajax({
    url: '/ufmanage/bomverions',
    method: Method.POST
  }, data)
}

export type PostUfmanageBomleftlistReqType = operations['UFManage_QueryBomLeftList']['parameters']['body']['dto']
export type PostUfmanageBomleftlistResType = definitions['LJsonResult[List[BomLeftListDto]]']
/**
 * @description 查询BOM左边树列表
 * @param {PostUfmanageBomleftlistReqType} data 请求参数
 * @returns {Promise<PostUfmanageBomleftlistResType>} ajax
 */
const postUfmanageBomleftlist = (data: PostUfmanageBomleftlistReqType): Promise<PostUfmanageBomleftlistResType> => {
  return ajax({
    url: '/ufmanage/bomleftlist',
    method: Method.POST
  }, data)
}

export type PostUfmanageBominfoReqType = operations['UFManage_QueryBomInfo']['parameters']['body']['dto']
export type PostUfmanageBominfoResType = definitions['LJsonResult[BomInfoDto]']
/**
 * @description 查询BOM明细
 * @param {PostUfmanageBominfoReqType} data 请求参数
 * @returns {Promise<PostUfmanageBominfoResType>} ajax
 */
const postUfmanageBominfo = (data: PostUfmanageBominfoReqType): Promise<PostUfmanageBominfoResType> => {
  return ajax({
    url: '/ufmanage/bominfo',
    method: Method.POST
  }, data)
}

export type GetUfmanagePubustypesReqType = {}
export type GetUfmanagePubustypesResType = definitions['LJsonResult[List[String]]']
/**
 * @description 获取采购业务类型
 * @param {GetUfmanagePubustypesReqType} data 请求参数
 * @returns {Promise<GetUfmanagePubustypesResType>} ajax
 */
const getUfmanagePubustypes = (data: GetUfmanagePubustypesReqType = {}): Promise<GetUfmanagePubustypesResType> => {
  return ajax({
    url: '/ufmanage/pubustypes',
    method: Method.GET
  }, data)
}

export type GetUfmanagePurtypesReqType = {}
export type GetUfmanagePurtypesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询采购类型列表
 * @param {GetUfmanagePurtypesReqType} data 请求参数
 * @returns {Promise<GetUfmanagePurtypesResType>} ajax
 */
const getUfmanagePurtypes = (data: GetUfmanagePurtypesReqType = {}): Promise<GetUfmanagePurtypesResType> => {
  return ajax({
    url: '/ufmanage/purtypes',
    method: Method.GET
  }, data)
}

export type GetUfmanageItemclassesReqType = operations['UFManage_QueryItemClassList']['parameters']['query']
export type GetUfmanageItemclassesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询项目大类列表
 * @param {GetUfmanageItemclassesReqType} data 请求参数
 * @returns {Promise<GetUfmanageItemclassesResType>} ajax
 */
const getUfmanageItemclasses = (data: GetUfmanageItemclassesReqType): Promise<GetUfmanageItemclassesResType> => {
  return ajax({
    url: '/ufmanage/itemclasses',
    method: Method.GET
  }, data)
}

export type GetUfmanageItemsReqType = operations['UFManage_QueryItemList']['parameters']['query']
export type GetUfmanageItemsResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description 查询项目列表
 * @param {GetUfmanageItemsReqType} data 请求参数
 * @returns {Promise<GetUfmanageItemsResType>} ajax
 */
const getUfmanageItems = (data: GetUfmanageItemsReqType): Promise<GetUfmanageItemsResType> => {
  return ajax({
    url: '/ufmanage/items',
    method: Method.GET
  }, data)
}

export type PostUfmanageSaleoutheadpageReqType = operations['UFManage_SaleOutHeadPage']['parameters']['body']['dto']
export type PostUfmanageSaleoutheadpageResType = definitions['LLPJsonResult[SaleOutStockDto]']
/**
 * @description 分页查询U8销售出表头
 * @param {PostUfmanageSaleoutheadpageReqType} data 请求参数
 * @returns {Promise<PostUfmanageSaleoutheadpageResType>} ajax
 */
const postUfmanageSaleoutheadpage = (data: PostUfmanageSaleoutheadpageReqType): Promise<PostUfmanageSaleoutheadpageResType> => {
  return ajax({
    url: '/ufmanage/saleoutheadpage',
    method: Method.POST
  }, data)
}

export type PostUfmanageQueryU8SaleOutStockPageReqType = operations['UFManage_QueryU8SaleOutStockPage']['parameters']['body']['dto']
export type PostUfmanageQueryU8SaleOutStockPageResType = definitions['LLPJsonResult[SaleOutStockPageDto]']
/**
 * @description 分页查询U8销售出库
 * @param {PostUfmanageQueryU8SaleOutStockPageReqType} data 请求参数
 * @returns {Promise<PostUfmanageQueryU8SaleOutStockPageResType>} ajax
 */
const postUfmanageQueryU8SaleOutStockPage = (data: PostUfmanageQueryU8SaleOutStockPageReqType): Promise<PostUfmanageQueryU8SaleOutStockPageResType> => {
  return ajax({
    url: '/ufmanage/queryU8SaleOutStockPage',
    method: Method.POST
  }, data)
}

export type PostUfmanageExportReqType = operations['UFManage_ExportData']['parameters']['body']['dto']
export type PostUfmanageExportResType = definitions['LJsonResult[BaseFileResDto]']
/**
 * @description 导出U8销售出库数据
 * @param {PostUfmanageExportReqType} data 请求参数
 * @returns {Promise<PostUfmanageExportResType>} ajax
 */
const postUfmanageExport = (data: PostUfmanageExportReqType): Promise<PostUfmanageExportResType> => {
  return ajax({
    url: '/ufmanage/export',
    method: Method.POST
  }, data)
}

export type PostUfmanageU8SaleOutStockInfoReqType = operations['UFManage_U8SaleOutStockInfo']['parameters']['body']['dto']
export type PostUfmanageU8SaleOutStockInfoResType = definitions['LJsonResult[U8SaleOutStockInfoDto]']
/**
 * @description U8销售出库详情查询
 * @param {PostUfmanageU8SaleOutStockInfoReqType} data 请求参数
 * @returns {Promise<PostUfmanageU8SaleOutStockInfoResType>} ajax
 */
const postUfmanageU8SaleOutStockInfo = (data: PostUfmanageU8SaleOutStockInfoReqType): Promise<PostUfmanageU8SaleOutStockInfoResType> => {
  return ajax({
    url: '/ufmanage/u8SaleOutStockInfo',
    method: Method.POST
  }, data)
}

export type GetUfmanageCodesReqType = operations['UFManage_U8QueryCodes']['parameters']['query']
export type GetUfmanageCodesResType = definitions['LJsonResult[List[BaseSelectDto]]']
/**
 * @description U8销售出库查询单号下拉列表
 * @param {GetUfmanageCodesReqType} data 请求参数
 * @returns {Promise<GetUfmanageCodesResType>} ajax
 */
const getUfmanageCodes = (data: GetUfmanageCodesReqType): Promise<GetUfmanageCodesResType> => {
  return ajax({
    url: '/ufmanage/codes',
    method: Method.GET
  }, data)
}

export default {
  getUfmanageWorkcenters,
  getUfmanageDeplist,
  postUfmanagePersons,
  postUfmanageOpusers,
  getUfmanageExchlist,
  getUfmanageInvclstree,
  postUfmanageInvlist,
  getUfmanageInvinfo,
  getUfmanageBfreelist,
  postUfmanageInvfreelist,
  postUfmanageCuslist,
  postUfmanageSaletypes,
  postUfmanageWhlist,
  postUfmanagePoslist,
  postUfmanageVendors,
  postUfmanageMomrdpage,
  postUfmanagePuarrpage,
  postUfmanageWhposbatchstock,
  postUfmanageWhstocksum,
  getUfmanageRdstyles,
  getUfmanageMotypes,
  postUfmanageQueryStSnState,
  getUfmanageAccvals,
  postUfmanageOplist,
  postUfmanagePrlist,
  getUfmanagePrlistbyinv,
  getUfmanagePrdetails,
  getUfmanageUpdateprdetailqcway,
  postUfmanageUpdateprdetail,
  postUfmanageBomverions,
  postUfmanageBomleftlist,
  postUfmanageBominfo,
  getUfmanagePubustypes,
  getUfmanagePurtypes,
  getUfmanageItemclasses,
  getUfmanageItems,
  postUfmanageSaleoutheadpage,
  postUfmanageQueryU8SaleOutStockPage,
  postUfmanageExport,
  postUfmanageU8SaleOutStockInfo,
  getUfmanageCodes
}
