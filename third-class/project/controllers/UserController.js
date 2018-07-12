
const UserModel = require("../models/UserModel")
const UserController = {
	login:function(req,res,next){
		const {username,password} = req.body;
		UserModel.find({username,password},(data)=>{
			if(data.length === 1){//登录成功
				//在session 中记录登录成功的用户名
				req.session.loginUser = data[0].username;
				res.json({
				res_code:0,
				res_error:"",
				res_body:{username:data[0].username,email:data[0].email}
			});
			}else{//登录失败
				res.json({
					res_code : -2,
					res_error : "用户名或密码错误",
					res_body : {}
				});
			}
			
		},(err)=>{//异常
			res.json({
				res_code:-1,
				res_error:err,
				res_body:{}
			});
		});
	},
	
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
	check:function(req,res,next){
		//从session中获取登录用户信息
		var user = req.session.loginUser;
		if(user){
			res.json({
				res_code : 0,
				res_error : "",
				res_body : {
					username : user
				}
			});
		}else{
			res.json({
				res_code : -1,
				res_error : "用户登录失效",
				res_body : {}
			});
		}
	},
	logout:function(req,res,next){
		req.session = null;
		res.json({
			res_code : 0,
			res_error : "",
			res_body : {}
		});
	}
	
};
module.exports = UserController;
