// const module = require('module')
// 
function formatDate(datetime) {
    let year = datetime.getFullYear(),
        month = (datetime.getMonth() + 1 < 10) ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1,
        day = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate(),
        hour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours(),
        min = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes(),
        sec = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
    return year + '-' + month + '-' + day + " " + hour + ':' + min + ':' + sec;
}
function nowDate(params) {
    // let time1 = "2016-01-01 17:22:37";
    let time1 = params;
    let date = new Date(time1.replace(/-/g, "/")); //开始时间
    return date.getTime();
}
function repair0(m) {
    return m < 10 ? '0' + m : m
}
function rTime(date) {
    let times = new Date(date).getTime()
    let time = new Date(times);
    let y = time.getFullYear();
    let m = time.getMonth() + 1;
    let d = time.getDate();
    let h = time.getHours();
    let mm = time.getMinutes();
    let s = time.getSeconds();
    return y + '-' + repair0(m) + '-' + repair0(d) + ' ' + repair0(h) + ':' + repair0(mm) + ':' + repair0(s);
    // 
    // let json_date = new Date(date).toJSON();
    // return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
}

function totalDuration(params) {
    let time1 = new Date()
    let times = time1 - (new Date(params))

    let years = Math.floor(times / (24 * 3600 * 1000 * 365)) !== 0 ? Math.floor(times / (24 * 3600 * 1000 * 365)) : 0
    times = times % (24 * 3600 * 1000 * 365)
    let days = Math.floor(times / (24 * 3600 * 1000))
    times = times % (24 * 3600 * 1000)
    let hours = Math.floor(times / (3600 * 1000))
    times = times % (3600 * 1000)
    let minutes = Math.floor(times / (60 * 1000))
    return " 帐号存在 "+days+"天 "+hours+"小时 "+minutes+"分钟"
}


module.exports = {
    formatDate,
    nowDate,
    rTime,
    totalDuration
}


