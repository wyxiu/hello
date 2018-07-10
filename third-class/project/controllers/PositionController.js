const PositionModel = require("../models/PositionModel")
const PositionController = {

	add:function(req,res,next){
		//用post请求
		//结构赋值
		const {position_name,company_name,expirance,position_type,address,salary} = req.body;
		
		//res.json({position_name,company_name,expirance,position_type,address,salary});
		let logo = "";
		if (req.file) // 有上传的文件
			logo = "/upload/" + req.file.filename;
		//将数据保存到数据库
		PositionModel.save({position_name,company_name,expirance,position_type,address,salary,logo},(msg)=>{
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
	list:function(req,res,next){
		const {pageIndex} = req.query;
		PositionModel.findByPage(pageIndex,(data)=>{
			res.json({
				res_code:0,
				res_error:"",
				res_body:data
			});
		},(err)=>{
			res.json({
				res_code:-1,
				res_error:err,
				res_body:{}
			});
		});
	},
	page:function(req,res,next){
		PositionModel.PageList((data)=>{
//			console.log(data);
			res.json({
				res_code:0,
				res_error:"",
				res_body:data
			});
			
		},(err)=>{
			res.json({
				res_code:-1,
				res_error:err,
				res_body:{}
			});
		});
	},
	
	modify:function(req,res,next){
		const {_id} = req.query;
	}
};
module.exports = PositionController;
