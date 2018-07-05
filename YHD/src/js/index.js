require(["config"], function() {
	require(["jquery", "template", "load", "xm_carousel", "fly", "cookie"], function($, template){
		$(function(){
			//banner轮播图
			$(".banner_imgs").carousel({
				duration: 3000,
				imgs: [{
					href: "#",
					src: "/img/banner1.jpg",
					id:"bann1"
				}, {
					href: "#",
					src: "/img/banner2.jpg",
					id:"bann2"
				}, {
					href: "#",
					src: "/img/banner3.jpg",
					id:"bann3"
				},{
					href: "#",
					src: "/img/banner11.jpg",
					id:"bann4"
				},{
					href: "#",
					src: "/img/banner8.jpg",
					id:"bann5"
				},{
					href: "#",
					src: "/img/banner5.jpg",
					id:"bann6"
				},{
					href: "#",
					src: "/img/banner6.jpg",
					id:"bann7"
				},{
					href: "#",
					src: "/img/banner7.jpg",
					id:"bann8"
				}],
				width: "1263px",
				height: "400px",
				showBtn: true
			});
			
	
			
			
			
			
		});
		
	});
});
