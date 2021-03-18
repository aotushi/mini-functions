// 1.引入express
const express = require('express');

// 2.创建路由器对象
const router = express.Router();

// 3.创建路由规则
let data = require('../datas')
router.get('/indexData', (req, res) => {
    res.send(data)
})

// 4.对外暴露
module.exports = router;