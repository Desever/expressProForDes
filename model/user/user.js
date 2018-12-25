// 引入模块
//mongoose
var mongoose=require('mongoose');
var Schema = mongoose.Schema;

//用户信息modal
var UserSchema = new Schema({
    //用户账号
    username : { 
        type: String 
    },
    //密码
    userpwd: {
        type: String
    },
    //最近登录时间
    logindate : { 
        type: Date
    },
    //用户类型
    loginType:{
        type:Number
    }
},{ collection: 'webUser'});

//导出数据
module.exports = mongoose.model('UserModel',UserSchema);