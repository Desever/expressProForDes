//引入数据库管理模块
let {close} = require('../mongodb/mongodb');
var baseDao={
    /**
     * 添加操作
     * @param model mongoose model
     * @param modelObject 数据集合
     * @returns {Promise}
     */
    create(model,modelObject){
        return new Promise((resolve, reject) => {
            //mongoose实体对象
            var targetModel=new model(modelObject);
            targetModel.save((err, res)=>{

                //数据库操作结束
                //关闭mongodb
                close();
                if (err) {
                    resolve({
                        state:0,
                        msg:err,
                        data:null
                    })
                }
                else {
                    resolve({
                        state:1,
                        msg:"成功",
                        data:null
                    })
                }
            });

        })
    },
    /**
     * 删除操作
     * @param model mongoose model
     * @param condition 查找条件
     * @returns {Promise}
     */
    remove(model,condition){

        return new Promise((resolve, reject) => {
            model.remove(condition,(err, res)=>{
                //数据库操作结束
                //关闭mongodb
                close();
                if (err) {
                    resolve({
                        state:0,
                        msg:err,
                        data:null
                    })
                }
                else {
                    resolve({
                        state:1,
                        msg:"成功",
                        data:null
                    })
                }
            });
        })

        
    },
    /**
     * 修改单条数据
     * @param model mongoose model
     * @param condition 修改条件
     * @returns {Promise} 返回更新以后的数据
     */
    update:function(model,condition,changeData){
        
        return new Promise((resolve, reject) => {
            //multi为true允许更新多条查询记录。
            model.update(condition,changeData, {multi: true}, function(err, res){
                //数据库操作结束
                //关闭mongodb
                close();
                if (err) {
                    resolve({
                        state:0,
                        msg:err,
                        data:null
                    })
                }
                else {
                    resolve({
                        state:1,
                        msg:"成功",
                        data:res
                    })
                }

            })
        })

        
    },

    /**
     * 修改单条数据
     * @param model mongoose model
     * @param condition 查询条件
     * @param resolveData 返回数据的字段显示{title:"a"}
     * @returns {Promise} 返回查询数据
     */
    find(model,condition,resolveData){
        
        return new Promise((resolve, reject) => {
            if(resolveData){
                model.find(condition,resolveData, function(err, res){
                    //数据库操作结束
                    //关闭mongodb
                    close();
                    if (err) {
                        resolve({
                            state:0,
                            msg:err,
                            data:null
                        })
                    }
                    else {
                        resolve({
                            state:1,
                            msg:"成功",
                            data:res
                        })
                    }
                })
            }else{
                model.find(condition,resolveData, function(err, res){
                    //数据库操作结束
                    //关闭mongodb
                    close();
                    if (err) {
                        resolve({
                            state:0,
                            msg:err,
                            data:null
                        })
                    }
                    else {
                        resolve({
                            state:1,
                            msg:"成功",
                            data:res
                        })
                    }
                })
            }
        })
        
    }
    
}
module.exports = baseDao;