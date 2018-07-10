
const UserModel = require("../models/UserModel")
const UserController = {
	login:function(){},
	
	register:function(req,res,next){
		//用post请求
		//结构赋值
		const {username,password,email} = req.body;
		//将数据保存到数据库
		UserModel.save({username,password,email},(msg)=>{
			res.json({
				res_code:0,
				res_error:"",
				res_body:msg
			});
		},(err)=>{
			res.json({
				res_code:-1,
				res_error:err,
				res_body:{}
			});
		});
	},
	check:function(){}
	
};
module.exports = UserController;
