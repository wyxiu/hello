const http =require("http");
const fs = require("fs");
http.createServer((req,res)=>{
	//结构赋值
	const {url} = req;
	if(url!=="/favicon.ico"){
		if(url==="/" || url === "/index.html"){
			const data = fs.readFileSync("index.html","utf8");
			res.end(data);
		}else if(url ==="/html/register.html"){
			const data = fs.readFileSync("register.html","utf8");
			res.end(data);
		}else{
			res.writeHead(404,{
				"content-type" : "text/html;charset=utf-8"
			})
			res.write("404,文件未找到");
			res.end();
		}
	
	}else{
		res.end();
	}
	res.end("hello");
}).listen(3000);
