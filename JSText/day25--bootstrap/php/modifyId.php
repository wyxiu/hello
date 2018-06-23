<?php
	
	$id = $_GET["id"];

	include "conn.php";
	// SQL
	$sql = "SELECT * FROM addquestions WHERE id=$id";
	$result = mysql_query($sql);
	// 将查询结果集中的数据以关联数组的形式读取放入数组变量中
	$row = mysql_fetch_array($result,MYSQL_ASSOC);
	if ($row)
		$arr = array("res_code"=>1, "res_message"=>"success", "res_body"=>$row);
	else
		$arr = array("res_code"=>0, "res_message"=>mysql_error());
	// 向前端返回JSON数据
	echo json_encode($arr);
	// 关闭
	mysql_close();

?>
	