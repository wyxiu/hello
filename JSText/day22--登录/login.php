<?php
	$username = $_POST["username"];
	$password = $_POST["password"];
	//连接数据库
	mysql_connect("localhost:3306","root","");
	//
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	//选择数据库
	mysql_select_db("h5-1803");
	//sql语句，查询
	$sql = "SELECT * FROM user  WHERE username='$username'AND password='$password'";
	//执行sql语句
	$result = mysql_query($sql);
	//处理查询结果集
	$row =mysql_fetch_array($result,MYSQL_ASSOC);//select查询结果返回的是一行内容，虚拟表格
	//处理执行结果,
	if($row)
	echo "success : " . json_encode($row);
	else
	echo"<meta charset ='utf-8'><script>alert('登录失败');location.href='login.html'</script>";
	
	// 关闭连接
	mysql_close();
	

?>