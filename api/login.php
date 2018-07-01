<?php
	header("Access-Control-Allow-Origin:*");
	$username = $_POST["username"];
	$password = $_POST["password"];
	//连接数据库
	$conn=mysql_connect("localhost:3306","root","");
	//读写数据库编码，防止乱码
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	if(!conn)
		echo"falied";
	//选择数据库
	mysql_select_db("jishihui");
	//编写sql语句
	$sql = "SELECT id,username FROM user WHERE username='$username'AND password='$password'";
	//执行sql语句
	$result = mysql_query($sql);
	$row = mysql_fetch_array($result,MYSQL_ASSOC);
	//处理执行结果，跳转页面
	if($row){
		$arr = array("res_code"=>1,"res_message"=>"注册成功");
		echo json_encode($arr);
	}
		
	else{
		$arr = array("res_code"=>0,"res_message"=>"注册失败");
		echo json_encode($arr);
	}
		
	//关闭连接
	mysql_close();
?>
