define(["jquery","cookie"],function($){
	$(function(){
		$(".header").load("/html/include/header.html");
		$.cookie.json = true;
		const users = $.cookie("users");
		if(users.length===1){
			$(".ht_login").html("欢迎您："+users[0].username);
		}

		$(".footer").load("/html/include/footer.html");
	});	
});
