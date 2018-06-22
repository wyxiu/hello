$(function(){
	$(".header_temp").load("/项目/work/shop/include/header.html",function(){
		//跨域
		$(".search :text").on("keyup",function(){
			const txt = $(this).val();
			const url = `https://suggest.taobao.com/sug?code=utf-8&q=${txt}&callback=?`;
			$.getJSON(url,function(data){
				let html="";
				data.result.forEach(function(curr){
					html += `<div>${curr[0]}</div><br/>`;
				});
				$(".suggest").show().html(html);
			});
		});
		$(".suggest").on("click","div",function(){
			const txt = $(this).text();
			$(".search :text").val(txt);
			$(".suggest").hide();
		});
		
		
		
	});
	
	
	
	
	
	$(".footer_temp").load("/项目/work/shop/include/footer.html");
		
});