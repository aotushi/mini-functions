const router = require('./router')
// server服务器

// 1.引入express
const express = require('express');


// 2.实例化
const app = express();


// 4.使用路由中间件
app.use(router)


// 3.监听地址
app.listen('3003', (err) => {
    if(err) return console.log('错误信息'+err)
    console.log('服务器启动成功');
    console.log('服务器地址: http://localhost:3003')
})