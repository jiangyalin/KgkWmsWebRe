import ajax from './ajax'
import { Method } from './interface/enum'
import type { operations, definitions } from './interface/docs'

export type PostCheckdStagdataReqType = operations['CheckVouch_QueryStagList']['parameters']['body']['dto']
export type PostCheckdStagdataResType = definitions['LJsonResult[List[CheckVouchInvDto]]']
/**
 * @description 查询暂存数据
 * @param {PostCheckdStagdataReqType} data 请求参数
 * @returns {Promise<PostCheckdStagdataResType>} ajax
 */
const postCheckdStagdata = (data: PostCheckdStagdataReqType): Promise<PostCheckdStagdataResType> => {
  return ajax({
    url: '/checkd/stagdata',
    method: Method.POST
  }, data)
}

export type PostCheckdClearstagReqType = operations['CheckVouch_ClearStag']['parameters']['body']['dto']
export type PostCheckdClearstagResType = definitions['LJsonResult']
/**
 * @description 查询暂存数据
 * @param {PostCheckdClearstagReqType} data 请求参数
 * @returns {Promise<PostCheckdClearstagResType>} ajax
 */
const postCheckdClearstag = (data: PostCheckdClearstagReqType): Promise<PostCheckdClearstagResType> => {
  return ajax({
    url: '/checkd/clearstag',
    method: Method.POST
  }, data)
}

export type PostCheckdSaveReqType = operations['CheckVouch_VouchSave']['parameters']['body']['dto']
export type PostCheckdSaveResType = definitions['LJsonResult']
/**
 * @description 暂存/生单
 * @param {PostCheckdSaveReqType} data 请求参数
 * @returns {Promise<PostCheckdSaveResType>} ajax
 */
const postCheckdSave = (data: PostCheckdSaveReqType): Promise<PostCheckdSaveResType> => {
  return ajax({
    url: '/checkd/save',
    method: Method.POST
  }, data)
}

export default {
  postCheckdStagdata,
  postCheckdClearstag,
  postCheckdSave
}
