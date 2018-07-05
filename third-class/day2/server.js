//引入http模块
const http = require("http");

//创建服务器，并监听
http.createServer(function(req,resp){
	resp.end("hello word !!!!");;
}).listen(3000);

console.log("连接成功");