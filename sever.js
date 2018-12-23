// import { createServer } from 'http';
// import { port } from './config.js';
// const sever = createServer((req, res) => {
//     res.end('hello world, mch')
// })
// sever.listen(port)
// export default sever
const http = require('http')
const sever = http.createServer((req, res) => {
    console.log(req, '1111')
    res.end('hello world, mch')
})
sever.listen(9000)