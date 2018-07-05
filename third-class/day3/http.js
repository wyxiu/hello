const http = require("http");
const fs = require("fs");
http.get("http://tech.ifeng.com/product/",(res)=>{
	console.log(res.headers);
	console.log(res.method);
	console.log(res.statusCode);
	console.log(res.statusMessage);
	
	//设置编码
	res.setEncoding("utf8");
	//该事件会在接受到数据时候触发
	let str = "";
		res.on("data",(data)=>{
		str +=data;
	});
	
	//该事件接受完毕会触发end事件
	res.on("end",()=>{
		//console.log(str);
		fs.writeFile("test/test.html",str,(err)=>{
			if(err){
				return;
			}
			console.log("写入成功.....")
		});
		
	});
});
































