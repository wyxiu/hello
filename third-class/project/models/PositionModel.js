const  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/position_project");

const schema = mongoose.Schema({
	position_name:String,
	company_name:String,
	expirance:String,
	position_type:String,
	address:String,
	salary:Number,
	logo:String
});

//创建数据库中创建文档的模型
const Position = mongoose.model("position",schema);

//保存用户信息
const PositionModel = {
	save :　function(positionInfo,success,error){
		const pos = new Position(positionInfo);
		pos.save((err,data)=>{
			if(err){
				error(err);
				return;
			}
			
			success(data);
		});
	},
	findByPage:function(pageIndex,success,err){
		const pageSize = 5; //每页显示的文档数量
		//查询
		Position.find().limit(pageSize).skip((pageIndex-1)*pageSize).then(success,err);
	},
	PageList:function(success,err){
		Position.find().then(success,err);
	},
	modifyPosition:function(_id,success,err){
		Position.findByIdAndUpdate();
	}
	
}

module.exports = PositionModel;