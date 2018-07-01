<?php
	header("Access-Control-Allow-Origin:*");
	$bianhao = $_POST["cart_form_bianhao"];
	mysql_connect("localhost:3306","root","");
	mysql_select_db("jishihui");
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	$sql = "DELETE FROM goods_shop WHERE bianhao='$bianhao'";
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
