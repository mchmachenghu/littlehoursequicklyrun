const http = require('http')
const cherrio = require('cheerio')
const fs = require('fs')
http.get('http://www.easyvoa.com/', (res) =>{
    if (res.statusCode === 200) {
        let result = ''
        res.on('data', (data) => {
            result += data
        })
        res.on('end', () => {
            const $ = cherrio.load(result)
            const list = $('.title_a')
            let finalResult = '';
            for(let i = 0; i < list.length; i++) {
                finalResult += (list.eq(i).text() + '\n')
            }
            fs.writeFileSync('demo.text', finalResult)
        })
    }

})