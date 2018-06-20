$(function(){
	console.log("success");
	//判断cookie是否存在
	$.cookie.json = true;
	const cartshop = $.cookie("products")||[];
	if(cartshop.length === 0){
		$(".cart_empty").removeClass("hide");
		return;
	}
	//如果有
	$(".cartshop").removeClass("hide");
	//渲染模板
	const html = template("cart_template",{cartshop});
	//显示
	$(".cartshop table tbody").html(html);
});