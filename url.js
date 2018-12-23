const url = require('url')
const obj = url.parse('https://www.baidu.com/s?wd=npm&rsv_spt=1&rsv_iqid=0x8c56e80e00035266&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=3&rsv_sug1=2&rsv_sug7=100', true)
console.log(obj)