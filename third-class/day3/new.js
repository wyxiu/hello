const http = require("http");
const fs = require("fs");
const cheerio = require("cheerio");

const req = http.request("http://tech.ifeng.com/product/",(res)=>{
	 res.setEncoding("utf8");
	 
	 let html = "";
	 
	 res.on("data",(data)=>{
	 	html += data;
	 });
	 
	 res.on("end",()=>{
	 	//获取html,用cheerio处理
	 	const $ = cheerio.load(html);
	 	//类似jquery的DOM操作
	 	let txt = "";
	 	$(".part").each(function(index,element){
	 		
	 		let title = $(element).find(".text-tit a").text(),
				desc = $(element).find(".text-summary").text();
			txt += `${title}\n\t${desc}\n\n`;
	 		
	 	});
	 	
	 		//写入文件
		fs.writeFile("demo/demo.txt",txt,(err)=>{
			if(err){
				return;
			}
			
			console.log("成功。。。");
		});
	 	
	 	
	 });
});

req.end();
