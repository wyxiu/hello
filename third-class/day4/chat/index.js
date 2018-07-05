//创建express的应用
var app = require('express')();
//提供创建服务器的方法，基于express的应用创建http服务器
var http = require('http').Server(app);
//引入socket.io模块，创建socket服务器
var io = require('socket.io')(http);

//处理一些客户端的请求，就是路由：当以get请求方式对"/"资源请求时的处理
app.get('/', function(req, res){
	//向客户端发送文本字符串数据
  //res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html');
});

//当socket服务器监听到客户端连接，会触发connection事件
io.on('connection', function(socket){
	//绑定chat message事件
	socket.on('chat message', function(msg){
    //console.log('message: ' + msg);
     io.emit('broad', msg);
  });
	
});

  


//服务器在3000端口监听客户端的请求
http.listen(3000, function(){
	//在控制台上打印监听成功消息
  console.log('listening on *:3000');
});
   
























































