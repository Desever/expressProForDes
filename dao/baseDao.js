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
    }
    
}
module.exports = baseDao;