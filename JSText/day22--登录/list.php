<?php
	//连接数据库
	mysql_connect("localhost:3306","root","");
	//查找数据库
	mysql_select_db("h5-1803");
	//编码
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	//sql语句
	$sql = "select * from user";
	//执行sql语句
	$result = mysql_query($sql);
	//处理查询结果集
	$arr=array();
	while($row =mysql_fetch_array($result,MYSQL_ASSOC)){
		$arr[]=$row;
	}
	echo json_encode($arr);
	mysql_close();
	
?>