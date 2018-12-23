const querystring = require('querystring')
// const url = require('url')

const param = querystring.escape('a?b=c&d=e')
// const link = 'https://www.baidu.com?param=' + param
// const urlObj = url.parse(link, true)
console.log(param)