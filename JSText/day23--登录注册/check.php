<?php
	$username = $_GET["username"];
	$password = $_GET["password"];
	$nickname = $_GET["nickname"];
	mysql_connect("localhost:3306","root","");
	mysql_select_db("h5-1803");
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	$sql = "select * from user where username='$username'";
	$result = mysql_query($sql);
	$row = mysql_fetch_array($result);
	//处理结果集
	if($row){
		$arr = array("res_code"=>1,"res_message"=>"用户名已被创建请重新输入");
		echo json_encode($arr);
	}else{
		$arr = array("res_code"=>0,"res_message"=>"用户名正确");
		echo json_encode($arr);
	}
	mysql_close();
?>