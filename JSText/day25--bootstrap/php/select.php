<?php
//	$id = $_[id];
	$page = $_GET["page"];
	$pagesize = 5;
	//多少页
	$index = ($page-1)* $pagesize;   
	mysql_connect("localhost:3306","root","");
	mysql_select_db("h5-1803");
	mysql_query("set character set uff8");
	mysql_query("set names utf8");
	$sql = "SELECT * FROM addquestions ORDER BY addtime DESC LIMIT $index,$pagesize";
	$result = mysql_query($sql);
	$arr=array();
	while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
		$arr[] = $row;
	}
		echo json_encode($arr);
		mysql_close();
?>

