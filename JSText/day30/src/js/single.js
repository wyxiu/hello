$(function(){
	$(".btn_form input").on("click",function(e){
		const end = $(".bag_left").offset();
			// 动态创建运动图片
			const flyer = $("<img src='../images/m1.jpg' style='width:40px;'>");
			// 运动
			flyer.fly({
				start : {
					left : e.pageX - $(window).scrollLeft(),
					top : e.pageY - $(window).scrollTop()
				},
				end : {
					left : end.left - $(window).scrollLeft(),
					top : end.top - $(window).scrollTop()
				}
			});
		
	});
		
});