import Axios from 'axios'
import { Message } from '@arco-design/web-react';
import config from '@app/config'
import type { RequestFunc } from '../interface/type'
import { Method } from '../interface/enum'
import privateCookies from '@shared/utils/privateCookies'

// 是否存在未关闭的弹窗
let isExistModal: boolean = false
const ajax: RequestFunc = (
  { url, method, baseUrl, responseType } = { url: '', method: Method.GET, baseUrl: '', responseType: undefined },
  data = { query: {}, body: {}, headers: {} },
  showErrMsg = true
) => {
  return new Promise((resolve, reject) => {
    Axios({
      baseURL: baseUrl || config.serverApi,
      url,
      method,
      params: data.query || (method === Method.GET ? data : {}),
      data: data.body || (method === Method.POST ? data : {}),
      timeout: 1000 * 60 * 3,
      responseType: responseType,
      headers: {
        access_token: privateCookies.get('token')
        // access_token: Cookies.get('token') // 'Bearer ' +
        // ...(data.headers || {})
      }
    })
      .then((res) => {
        if (responseType === 'blob' || responseType === 'arraybuffer') return resolve(res.data)
        res.data.code = Number(res.data.code)
        const code = res.data.code
        if (code === 401 || code === 1001) {
          if (isExistModal) return
          isExistModal = true
          // signOut(res.data.msg || '登录失效，请重新登陆。').then(() => {
          //   isExistModal = false
          // })
          return false
        }

        if (code !== 0 && code !== 206 && code !== 204) {
          // 业务异常
          if (showErrMsg) Message.warning(res.data.msg)
          reject(res.data)
          return false
        }
        resolve(res.data)
      })
      .catch((err) => {
        // http异常
        // 请在此处处理http异常
        console.log(err)
        reject(err.data)
        if (showErrMsg) Message.error('网络异常，请稍后再试!')
      })
  })
}

export default ajax
