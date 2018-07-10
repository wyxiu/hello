//这个页面主要是连接mongodb数据库
//引入mongoose模块
const  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/position_project");

const schema = mongoose.Schema({
	username:String,
	password:String,
	email:String
});

//创建数据库中创建文档的模型
const User = mongoose.model("user",schema);

//保存用户信息
const UserModel = {
	save :　function(userinfo,success,error){
		const user = new User(userinfo);
		user.save((err,userinfo)=>{
			if(err){
				error(err);
				return;
			}
			
			success(userinfo);
		});
	}
}

module.exports = UserModel;