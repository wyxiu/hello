<?php
	$username = $_POST["username"];
	$password = $_POST["password"];
	$nickname = $_POST["nickname"];
	//连接数据库
	$conn=mysql_connect("localhost:3306","root","");
	//读写数据库编码，防止乱码
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	if(!conn)
		echo"falied";
	//选择数据库
	mysql_select_db("h5-1803");
	//编写sql语句
	$sql = "INSERT INTO user (username,password,nickname) VALUES 			('$username','$password','$nickname')";
	//执行sql语句
	$result = mysql_query($sql);
	
	//处理执行结果，跳转页面
	if($result)
		echo "<script>location.href = 'sucess.html';</script>";
		
	else
		echo "<meta charset='utf-8'><script>alert('注册失败');location.href = 'regist.html';</script>";
	//关闭连接
	mysql_close();
?>