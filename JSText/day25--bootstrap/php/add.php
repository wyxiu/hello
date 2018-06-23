<?php
	$question = $_POST["question"];
	$addwhere = $_POST["addwhere"];
	$how = $_POST["how"];
	include "conn.php";
	$sql = "INSERT INTO addquestions (question,addwhere,how) VALUES('$question','$addwhere','$how')";
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