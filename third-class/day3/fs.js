const fs = require("fs")
/*
fs.mkdir("test",(err)=>{
	if(err){
		console.log("出错:"+err);
		return;
	}
	
	console.log("创建完成...");
});

//异步

fs.mkdirSync("demo");
console.log("创建完成")

//写文件
//异步

fs.writeFile("test/hello.txt","大家好",(err)=>{
	if(err){
		console.log("出错:"+err);
		return;
	}
	console.log("写入成功")
});

//同步

try{
	fs.writeSync("test/world.txt","今天晚上吃啥");
	console.log("写入文件成功.......");
}catch(err){
	console.log("出错:"+err);
}

console.log("继续.......");


//读文件
//异步
fs.readFile("note.txt","utf8",(err,data)=>{
	if(err){
		console.log("出错:"+err);
		return;
	}
	console.log(data);
});
*/
 fs.unlink("test/hello.txt",(err)=>{
 	if(err){
 		console.log(err);
 		return;
 	}
 	console.log("删除成功....")
 });































