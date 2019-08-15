import {amspUsercontrol} from '@/config/env';   // 路径前缀
import request from '@/router/axios'    // axios  , vuex 

// one methods
export function getlist(query){
    return request({
        url:`${amspUsercontrol}/invoce/invoiceQuery`,
        method:'post',
        data:query
    })
}



// tow methods
// export const getList=(query)=>{
//     return request({
//         url:`${amspUsercontrol}/invoce/invoiceQuery`,
//         method:'post',
//         data:query
//     })
// }


// /**
//  * 电子发票查看下载
//  * **/
// export const ele_downPDF = (invoiceId) => {
//     return request({
//       url: `${amspUsercontrol}/invoce/invoceGetPdf/${invoiceId}`,   // 换成 下载的接口
//       method: 'post',
//       data: {},
//       responseType: 'blob'
//     })
//   };

/**
 * 电子发票查看导出
 * **/
// export const ele2_excel = (data = {}) => {
//     return request({
//       url: `${amspUsercontrol}/invoce/invoiceQueryExpect`,
//       method: 'post',
//       data: data,
//       headers: {
//         'filename': 'utf-8',
//       },
//       responseType: 'blob' // 表明返回服务器返回的数据类型
//     })
//   };
  

/**
 * 机构上架过的产品id集合
 * **/
// export const queryOrgnIds = () => {
//     return request({
//       url: `${orgn}/amsp/findAllOnProducts`,
//       method: 'get',
//     })
//   };
  