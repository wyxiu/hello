const PositionModel = require("../models/PositionModel")
const PositionController = {
	//添加
	add: function (req, res, next) {
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
		//console.log("----" + username);
		let logo = "";
		if (req.file) // 有上传的文件
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
	//渲染页面
	list: function (req, res, next) {
		const {
			pageIndex,
			username
		} = req.query;
		PositionModel.findByPage({ pageIndex, username }, (data) => {
			//console.log("+++++++++++++"+data);
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

	//动态加载页码
	page: function (req, res, next) {
		const { username } = req.query;
		PositionModel.PageList(username, (data) => {
				//console.log(data);
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

	//修改
	modify: function (req, res, next) {
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
		if (req.file) // 有上传的文件
			logo_md = "/upload/" + req.file.filename;

		PositionModel.modify({
			id,
			position_name_md,
			company_name_md,
			expirance_md,
			position_type_md,
			address_md,
			salary_md,
			logo_md
		}, (data) => {
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

	//删除
	deletes: function (req, res, next) {
		const {
			id
		} = req.query;
		console.log("===id:" + id);
		PositionModel.delete(id, (data) => {
			console.log("===="+data)
			var fs = require("fs");
			fs.unlink("./public/"+data.get("logo"), function(err) {
				if (err) {
					return console.error(err);
				}
				console.log("文件删除成功！");
			 });
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