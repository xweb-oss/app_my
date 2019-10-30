/**
 *
 * http配置
 *
 */
import axios from 'axios'
// import { Message } from 'element-ui'
// import errorCode from '@/util/common/code'
// import store from '../vuex'   // 待完善
// import router from './index'  // 待完善
// import NProgress from 'nprogress' // 安装progress bar   进度条
//  import 'nprogress/nprogress.css'// progress bar style
// 超时时间
// axios.defaults.timeout = 300000;
// // 跨域请求，允许保存cookie
// axios.defaults.withCredentials = true;
// // NProgress.configure({ showSpinner: false }); // NProgress Configuration
// let msg;
// // HTTPrequest拦截
// axios.interceptors.request.use(config => {
//     // NProgress.start() // start progress bar
//     if (store.getters.access_token) {
//         // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
//         config.headers['Authorization'] = 'Bearer ' + store.getters.access_token
//     }
//     return config
// }, error => {
//     return Promise.reject(error)
// })
// // HTTPresponse拦截
// axios.interceptors.response.use(data => {
//     NProgress.done();
// //  console.log(router.history.current.path)
// //  console.log(window.location)
//     if (data.data.code === '401' || data.data.code === 'RBAC1007') {
//         // 清除token
//         store.dispatch('LogOut').then(res => {
//             router.push({
//                 path: '/'
//             });
//         }).catch(err => {
//             router.push({
//                 path: '/'
//             });
//         });
//         //console.log('axios拦截处发送token失效信息')
// 		var pw = window.parent
// 		var fullhref = sessionStorage.getItem('currentHref') + ':8000';
// 		pw.postMessage('RBAC1007', fullhref)
//     }
//     return data
// }, error => {
//     NProgress.done()
//     let errMsg = error.toString()
//     let code = errMsg.substr(errMsg.indexOf('code') + 5)
//     Message({
//         message: errorCode[code] || errorCode['default'],
//         type: 'error'
//     })
//     return Promise.reject(new Error(error))
// })

export default axios
