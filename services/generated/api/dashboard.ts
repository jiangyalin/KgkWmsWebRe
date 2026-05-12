import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostDashboardConstidxSavejsonReqType = operations['Dashboard_ConstIdxSaveJson']['parameters']['body']['dto']
export type PostDashboardConstidxSavejsonResType = definitions['LJsonResult']
/**
 * @description 常量保存JSON文件
 * @param {PostDashboardConstidxSavejsonReqType} data 请求参数
 * @returns {Promise<PostDashboardConstidxSavejsonResType>} ajax
 */
const postDashboardConstidxSavejson = (data: PostDashboardConstidxSavejsonReqType): Promise<PostDashboardConstidxSavejsonResType> => {
  return ajax({
    url: '/dashboard/constidx/savejson',
    method: Method.POST
  }, data)
}

export type GetDashboardBaoluReqType = {}
export type GetDashboardBaoluResType = definitions['LJsonResult[BaoLuDashboardResDto]']
/**
 * @description 查询宝陆看板数据
 * @param {GetDashboardBaoluReqType} data 请求参数
 * @returns {Promise<GetDashboardBaoluResType>} ajax
 */
const getDashboardBaolu = (data: GetDashboardBaoluReqType = {}): Promise<GetDashboardBaoluResType> => {
  return ajax({
    url: '/dashboard/baolu',
    method: Method.GET
  }, data)
}

export default {
  postDashboardConstidxSavejson,
  getDashboardBaolu
}
