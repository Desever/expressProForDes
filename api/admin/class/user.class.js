//用户信息model
var UserModel = require("../../../model/user/user");
//引入dao层
var baseDao=require("../../../dao/baseDao");
//用户类
class userClass{

    constructor(){

    }

    //登录逻辑
    login(routerRes){
        routerRes.send({
            msg:"123123"
        })
    }
}
exports.userClass = userClass;