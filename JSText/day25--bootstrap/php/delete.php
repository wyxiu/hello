<?php
	$id = $_GET["id"];
	include "conn.php";
	$sql = "DELETE FROM addquestions WHERE id=$id";
	$result = mysql_query($sql);
	if($result){
		$arr = array("res_code"=>1, "res_message"=>"success");
		echo json_encode($arr);
	}else{
		$arr = array("res_code"=>0, "res_message"=>mysql_error());
		echo json_encode($arr);
	}
	mysql_close();
?>
