const http = require("http");
const url = require("url");

// 端口号的范围：0~65535
// 通常自定义使用端口时，使用 1024 之后的端口
http.createServer((req, res)=>{
	if (req.url !== "/favicon.ico"){	
		console.log("请求的URL：" + req.url);
		// 获取请求的URL
		const reqUrl = req.url;
		// 解析为 URL 对象
		const obj = url.parse(reqUrl, true);
		// console.log(obj);
		// 查询字符串
		const queryString = obj.query;
		console.log(queryString)
		res.end("hello");
	} else {
		res.end();
	}
}).listen(3000);

console.log("服务器已启动...");