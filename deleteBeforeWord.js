const fs = require('fs');
const moment = require('moment');
fs.readFile('./word.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        let newData = data.replace(/\d+\.\s+/g,"");
        fs.writeFile('./word2.txt', newData, { flag: 'a' }, (err) => {
            if (err) { console.log(err) } else {
                fs.writeFile('./word2.txt', '\r' + "=====" + moment().format('YYYY-MM-DD HH:mm:ss') + "===="+'\r', { flag: 'a' }, () => { })
            }
        })
    }
})