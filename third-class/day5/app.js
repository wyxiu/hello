var express = require('express');
var app = express();

app.get('/', function (req, res) {
	//将HTML文本发送回浏览器
  res.send('Hello World!');
  //res.sendFile()发送文件
  //res.json()发送JSON文本
});
app.get("/index.html",(req,res)=>{
	res.sendFile(_dirname+"/index.html");
});

app.get("/html/register.html",(req,res)=>{
	res.sendFile(_dirname+"/html/register.html");
	
});
app.post("/html/success.html",(req,res)=>{
	res.sendFile(_dirname+"/html/success.html");
	
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
