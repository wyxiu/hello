<?php
header("Access-Control-Allow-Origin:*");
$cart_form_bianhao = $_POST["cart_form_bianhao"];
$cart_form_img = $_POST["cart_form_img"];
$cart_form_title = $_POST["cart_form_title"];
$cart_form_price = $_POST["cart_form_price"];
$cart_form_amount = $_POST["cart_form_amount"];
mysql_connect("localhost:3306", "root", "");
mysql_select_db("jishihui");
mysql_query("set character set utf8");
mysql_query("set names utf8");
$sql = "SELECT * FROM goods_shop where bianhao=$cart_form_bianhao";
$result = mysql_query($sql);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
	$cart_form_amount = $row[0]['amount'] + 1;
	$sql = "UPDATE goods_shop SET amount='$cart_form_amount' WHERE bianhao=$cart_form_bianhao";
	$result = mysql_query($sql);
	if ($result) {
		$arr = array("res_code" => 1, "res_message" => "success");
		echo json_encode($arr);
	} else {
		$arr = array("res_code" => 0, "res_message" => mysql_error());
		echo json_encode($arr);
	}
	mysql_close();
	return;
}
$sql = "INSERT INTO goods_shop (bianhao,img,title,price,amount) VALUES('$cart_form_bianhao','$cart_form_img','$cart_form_title','$cart_form_price','$cart_form_amount')";
$result = mysql_query($sql);
if ($result) {
	$arr = array("res_code" => 1, "res_message" => "success");
	echo json_encode($arr);
} else {
	$arr = array("res_code" => 0, "res_message" => mysql_error());
	echo json_encode($arr);
}

mysql_close();
?>