var express = require('express');
var router = express.Router();

//用户信息model
var User = require("../../model/user/user");
//引入dao层
var baseDao=require("../../dao/baseDao");


//后台用户登录操作
router.get('/login', function(req, routerRes, next) {
    baseDao.create(User,{
        username:"123123"
    });
    routerRes.send({
        msg:"123123"
    })
});

//后台用户退出登录操作
router.get('/loginout', function(req, routerRes, next) {

});

//后台用户充值密码
router.get('/changepass', function(req, routerRes, next) {

});
module.exports = router;
