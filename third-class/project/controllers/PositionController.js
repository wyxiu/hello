const PositionModel = require("../models/PositionModel")
const PositionController = {

	add: function(req, res, next) {
		//用post请求
		//结构赋值
		const {
			username,
			position_name,
			company_name,
			expirance,
			position_type,
			address,
			salary
		} = req.body;
		console.log("----" + username);
		//res.json({position_name,company_name,expirance,position_type,address,salary});
		let logo = "";
		if(req.file) // 有上传的文件
			logo = "/upload/" + req.file.filename;

		//这条日志
		//将数据保存到数据库
		PositionModel.save({
			username,
			position_name,
			company_name,
			expirance,
			position_type,
			address,
			salary,
			logo
		}, (msg) => {
			res.json({
				res_code: 0,
				res_error: "",
				res_body: msg
			});
		}, (err) => {
			res.json({
				res_code: -1,
				res_error: err,
				res_body: {}
			});
		});
	},
	list: function(req, res, next) {
		const {
			pageIndex,
			username
		} = req.query;
		PositionModel.findByPage({pageIndex,username}, (data) => {
			res.json({
				res_code: 0,
				res_error: "",
				res_body: data
			});
		}, (err) => {
			res.json({
				res_code: -1,
				res_error: err,
				res_body: {}
			});
		});
	},
	
	page: function(req, res, next) {
		const {username}=req.query;
		PositionModel.PageList(username,(data) => {
			//			console.log(data);
			res.json({
				res_code: 0,
				res_error: "",
				res_body: data
			});

		}, (err) => {
			res.json({
				res_code: -1,
				res_error: err,
				res_body: {}
			});
		});
	},

	modify: function(req, res, next) {
		const {
			id,
			position_name_md,
			company_name_md,
			expirance_md,
			position_type_md,
			address_md,
			salary_md
		} = req.body;

		let logo_md = "";
		if(req.file) // 有上传的文件
			logo_md = "/upload/" + req.file.filename;

		PositionModel.modify({
			id,
			position_name_md,
			company_name_md,
			expirance_md,
			position_type_md,
			address_md,
			salary_md,
			logo_md,
			//bushi zheli
		}, (data) => {
			console.log("+++++++++" + data);
			res.json({
				res_code: 0,
				res_error: "",
				res_body: data
			}, (err) => {
				res.json({
					res_code: -1,
					res_error: err,
					res_body: {}
				});
			});
		});
	},

	deletes: function(req, res, next) {
		const {
			id
		} = req.query;
		console.log("===id:" + id); //看看这个日志
		PositionModel.delete(id, (data) => {
			console.log("+++++++++" + data);
			res.json({
				res_code: 0,
				res_error: "",
				res_body: data
			}, (err) => {
				res.json({
					res_code: -1,
					res_error: err,
					res_body: {}
				});
			});
		});
	}

}
module.exports = PositionController;