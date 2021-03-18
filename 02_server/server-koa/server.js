
const router = require('./router');


// 1.安装引入koa
const Koa = require('koa');

// 2.实例化
const app = new Koa();

// 4.使用中间件
app
    .use(router.routes())
    .use(router.allowedMethods())


// 3.监听端口
app.listen('3003', (err) => {
    if (err) return console.log('请求错误' + err);
    console.log('服务器启动成功');
    console.log('服务器地址: http://localhost:3003');
})