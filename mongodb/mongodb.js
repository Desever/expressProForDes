//mongoose
var mongoose=require('mongoose');

//数据库链接配置文件
var dbConfig=require("../config/config");
//连接数据库
mongoose.connect(dbConfig.dgUrl)

// 得到数据库连接句柄
var mongoClient=mongoose.connection;
/**
 * Mongo 连接成功回调
 */
mongoClient.on('connected', ()=>{
    console.log('Mongoose connected to');
});
/**
 * Mongo 连接失败回调
 */
mongoClient.on('error', (err)=>{
    console.log('Mongoose connection error: ' + err);
});
/**
 * Mongo 关闭连接回调
 */
mongoClient.on('disconnected',()=>{
    console.log('Mongoose disconnected');
});
/**
 * 关闭 Mongo 连接
 */
function close() {
    console.log(1123123);
    mongoClient.close();
}
module.exports = {
    mongoClient: mongoClient,
    close: close,
};
