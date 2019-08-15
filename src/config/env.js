/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 老项目域名地址
 * khglUrl: 客户管理域名地址
 * dicUrl : 字典服务器地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * welUrl :默认欢迎页
 *
 */

// 走gateway
let baseUrl = '/cusc/rbacadmin';

let product = '/gateway/amsp/product';
// 码表
let orgn = '/gateway/amsp/base';
let terms = '/gateway/amsp/report';
let amspdatatatransfer = '/gateway/amsp/datatransfer';
let amspSim = '/gateway/amsp/sim';
let amspRechargecard = '/gateway/amsp/rechargecard';

let amspUsercontrol = '/gateway/amsp/usercontrol';

 let wxb ='project62_01/toIndex.do'      // 膀子
  
let iconfontVersion = ['810835_7jzxgeoli89'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
const env = p.env;rocess
if (env.NODE_ENV == 'development') {
  // 开发环境地址
  product = '/gateway/amsp/amsp/product';
  orgn = '/base/amsp/base';
  terms = '/base/amsp/report';
  amspRechargecard = '/base/amsp/rechargecard'
  amspdatatatransfer = '/gateway/amsp/amsp/datatransfer';
  amspSim = '/gateway/amsp/amsp/sim';
  
  amspUsercontrol = '/gateway/amsp/amsp/usercontrol';
  
  

} else if (env.NODE_ENV == 'production') {
  //生产环境地址

} else if (env.NODE_ENV == 'test') {
  //测试环境地址
}
export {
  baseUrl,
  product,
  terms,
  iconfontUrl,
  iconfontVersion,
  env,
  orgn,
  amspdatatatransfer,
  amspSim,
  amspRechargecard,
  amspUsercontrol,
  wxb
}
