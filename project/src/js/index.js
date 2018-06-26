require(["config"], function() {
	require(["jquery", "template", "load", "xm_carousel"], function($, template) {
		//banner轮播图

		$(".bann_imgs").carousel({
			duration: 3000,
			imgs: [{
				href: "#",
				src: "/img/bann1.jpg"
			}, {
				href: "#",
				src: "/img/bann2.jpg"
			}, {
				href: "#",
				src: "/img/bann3.jpg"
			}],
			width: "100%",
			height: "100%",
			showBtn: true
		});
		//二级菜单
		$('.banner').on('mouseenter', function() {
			$(".kinds_list_des").removeClass('hide');
		}).on('mouseleave', function() {
			$(".kinds_list_des").addClass('hide');
		})
	

		//console.log("success");
		//animate动画

		$(".slider_list").on("mouseenter", "li", function() {
			if ($(this).attr('class') === 'active') {
				return;
			}
			$("li").find("img").stop(false, true);
			$(".active").find("img").animate({
				left: "0px"
			}, 500);
			$(".active").removeClass("active");
			$(this).addClass("active");
			$(this).find("img").animate({
				left: "-200px"
			}, 500);
		});

		$(".hotAddNew_nav").on("mouseenter", "li", function() {
			$(".hot_current").removeClass("hot_current");
			$(this).addClass("hot_current");
			var idStr = $(this).attr("id");
			$(".hotAddNew_hot").html("");
			if (idStr == "hot_show1") {
				getHotData();
			} else if (idStr == "hot_show2") {
				getNewData();
			} else {
				getBrandData();
			}
		});

		$(".hot_show2").mouseenter(function() {
			$("#hot-new").css("display", "block");
			$(".hotAddNew_hot").css("display", "none");

		});

		//		function getFoodTypes() {
		//			console.log("---getFoodTypes");
		//			$.getJSON("/mock/menue.json", function(data) {
		//				console.log(data.res_body.list);
		//				const html = template("food_type_item", {
		//					foodtypes: data.res_body.list
		//				});
		//				
		//				$(".kinds_list").html(html);
		//			});
		//		}s

		function getHotData() {
			console.log("---getHotData");
			$.getJSON("/mock/hotsale.json", function(data) {
				const html = template("hotsale_template", {
					list: data.res_body.list
				});
				$(".hotAddNew_hot").html(html);
			});
		}
		//渲染模板hotsale		
		function getNewData() {
			console.log("---getNewData");
			$.getJSON("/mock/hotsale.json", function(data) {
				const hotsnews = template("hotsale_template_new", {
					list_new: data.res_body.list_new
				});
				$(".hotAddNew_hot").html(hotsnews);
			});
		}

		function getBrandData() {
			console.log("---getBrandData");
			$.getJSON("/mock/hotsale.json", function(data) {
				const hotsbrands = template("hotsale_template_brand", {
					list_brand: data.res_body.list_brand
				});
				$(".hotAddNew_hot").html(hotsbrands);
			});
		}

		//		getFoodTypes();
		getHotData();

		$.getJSON("/mock/hotsale.json", function(data) {
			const vegetables = template("vegetable_template", {
				list_vege: data.res_body.list_vege
			});
			$(".vgtrb_lists").html(vegetables);
		});

	});
});