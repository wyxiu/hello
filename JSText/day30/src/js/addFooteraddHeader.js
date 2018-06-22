$(function(){
	$(".header").load("/day30/src/include/header.html",function(){
		$(".search :text").on("keyup",function(){
			const txt = $(this).val();
			const url =`https://suggest.taobao.com/sug?code=utf-8&q=${txt}&callback=?`;
			$.getJSON(url,function(data){
				let html = "";
				data.result.forEach(function(curr){
					html += `<div>${curr[0]}</div>`;
				});
				$(".suggest").show().html(html);
			});
			
		});
		
		$(".suggest").on("click","div",function(){
			const txt = $(this).text();
			$(".search :text").val(txt);
			$(".suggest").hide();
		});
		
		//显示二级菜单
		let timer = 0
		$(".menu").mouseenter(function(){
			$(this).children(".megapanel").show();
		});
		
		$(".menu").mouseleave(function(){
			timer=setTimeout(()=>{
				$(this).children(".megapanel").hide();
			},300);
			
		$(".megapanel").hover(function(){
			clearTimeout(timer);
			$(this).show();
		},function(){
	        		
	        	});
			
		});
		
	});
	$(".footer").load("/day30/src/include/footer.html");
});


















