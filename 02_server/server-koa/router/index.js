// 1.安装引入koarouter

const KoaRouter = require('koa-router');

// 2.生成路由对象
let router = new KoaRouter();

// 3.注册路由
router.get('/test', (ctx) => {
    ctx.body = '测试数据'
})

// 3.1 页面接口数据
let data = require('../datas');
router.get('/indexData', (ctx) => {
    ctx.body = data;
})

module.exports = router;