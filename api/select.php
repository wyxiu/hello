<?php
	header("Access-Control-Allow-Origin:*");
	mysql_connect("localhost:3306","root","");
	mysql_select_db("jishihui");
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	$sql = "SELECT * FROM goods_shop";
	$result = mysql_query($sql);
	$arr=array();
	while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
		$arr[] = $row;
	}
		echo json_encode($arr);
		mysql_close();
?>

