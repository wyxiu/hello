const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/position_project");

const schema = mongoose.Schema({
	position_name: String,
	company_name: String,
	expirance: String,
	position_type: String,
	address: String,
	salary: Number,
	username: String,
	logo: String
});

//创建数据库中创建文档的模型
const Position = mongoose.model("position", schema);

//保存用户信息
const PositionModel = {
	save: function (positionInfo, success, error) {
		const pos = new Position(positionInfo);
		pos.save((err, data) => {
			if (err) {
				error(err);
				return;
			}

			success(data);
		});
	},
	findByPage: function (params, success, err) {
		const pageSize = 5; //每页显示的文档数量
		//查询
		Position.find({
			username: params.username
		}).limit(pageSize).skip((params.pageIndex - 1) * pageSize).then(success, err);
	},

	//动态加载页数
	PageList: function (username, success, err) {
		Position.find({ username: username }).then(success, err);
	},


	//修改
	modify: function (mdInfo, success, err) {
		if (mdInfo.logo_md === "") {
			Position.update({
				_id: mdInfo.id
			}, {
					position_name: mdInfo.position_name_md,
					company_name: mdInfo.company_name_md,
					expirance: mdInfo.expirance_md,
					position_type: mdInfo.position_type_md,
					address: mdInfo.address_md,
					salary: mdInfo.salary_md
				}).then(success, err);

		} else {
			Position.update({
				_id: mdInfo.id
			}, {
					position_name: mdInfo.position_name_md,
					company_name: mdInfo.company_name_md,
					expirance: mdInfo.expirance_md,
					position_type: mdInfo.position_type_md,
					address: mdInfo.address_md,
					salary: mdInfo.salary_md,
					logo: mdInfo.logo_md
				}).then(success, err);
		}

	},

	//删除
	delete: function (id, success, err) {
		Position.findOneAndDelete({
			_id: id
		}).then(success, err);
	}

}

module.exports = PositionModel;