var express = require('express');
var router = express.Router();

//用户类
var userClass=require("./class/user.class").userClass;
var userClassObject=new userClass();

//后台用户登录操作
router.get('/login', function(req, routerRes, next) {
    //调用登录方法
    userClassObject.login(routerRes);
});

//后台用户退出登录操作
router.get('/loginout', function(req, routerRes, next) {

});

//后台用重置密码
router.get('/changepass', function(req, routerRes, next) {

});
module.exports = router;
