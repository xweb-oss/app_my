
// 日期格式的转换，result必须为number类型
/**
 * 
 * @param {*} result 
    *过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。
    过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

    当全局过滤器 和 局部过滤器同名的时候，会优先使用局部过滤器 
 */

export function getDate(result){
    // debugger;
    if(!result) return " "
    console.log(result)
    var now = new Date(Number(result));    // 需要数字类型
    var y = now.getFullYear();
    var month = now.getMonth();
    month=month < 10 ? '0' + month : month;
    var date = now.getDate();
    date=date < 10 ? '0' + date : date;
    var hour = now.getHours();
    hour=hour < 10 ? '0' + hour : hour;
    var minu = now.getMinutes(); 
    minu=minu < 10 ? '0' + minu : minu;
    var sec = now.getSeconds(); 
    sec=sec < 10 ? '0' + sec : sec;
    return result = y + "-" + month + '-' + date + " "+ hour + ":" + minu + ":" + sec;
}

// 过滤器串联 把前面一个过滤器的结果传给下一个过滤器 此时result的结果为 1970-07-06 18：02：32

export function secondToDate(result) {
    // debugger;
    var getCountryTime = new Date(result)   // Mon Jul 06 1970 18:02:32 GMT+0800 (中国标准时间)
    var getMill = getCountryTime.getTime() // 得到毫秒
    var h = Math.floor(getMill / 3600) < 10 ? '0' + Math.floor(getMill / 3600) : Math.floor(getMill / 3600);
    var m = Math.floor((getMill / 60 % 60)) < 10 ? '0' + Math.floor((getMill / 60 % 60)) : Math.floor((getMill / 60 % 60));
    var s = Math.floor((getMill % 60)) < 10 ? '0' + Math.floor((getMill % 60)) : Math.floor((getMill % 60));
    return result = h + ":" + m + ":" + s;
}