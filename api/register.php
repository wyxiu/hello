<?php
header("Access-Control-Allow-Origin:*");
$username = $_POST["username"];
$password = $_POST["password"];
//连接数据库
$conn = mysql_connect("localhost:3306", "root", "");
//读写数据库编码，防止乱码
mysql_query("set character set utf8");
mysql_query("set names utf8");
if (!conn){
	$arr = array("res_code" => 0, "res_message" => "falied");
	echo json_encode($arr);
}
	
//选择数据库
$connTable = mysql_select_db("jishihui");
if (!conn) {
	$arr = array("res_code" => 0, "res_message" => "select table failed");
	echo json_encode($arr);
}
//编写sql语句
$sql = "INSERT INTO user (username,password) VALUES('$username','$password')";
//执行sql语句
$result = mysql_query($sql);

//处理执行结果，跳转页面
if ($result) {
	$arr = array("res_code" => 1, "res_message" => "注册成功");
	echo json_encode($arr);
} else {
	$arr = array("res_code" => 0, "res_message" => mysql_error());
	echo json_encode($arr);
}

//关闭连接
mysql_close();
?>