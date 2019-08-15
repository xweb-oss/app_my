
// 电话号码
export function regtel(val){
    const tel =/^1[3456789]\d{9}$/
   return tel.test(val)
}
// 登录密码验证
export function regpassword(val){
    const pword =/^[0-9a-zA-z]{8,12}$/
    return pword.test(val)
}

  // 邮箱验证
export function validateEmail(val) {
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email.test(val)
}
// 用户名
export function regusername(val){
    const username =/^[a-zA-Z0-9]{4,10}$/
    return username.test(val)
}