require(["config"], function() {
	require(["jquery", "template", "load", "xm_carousel", "fly", "cookie"], function($, template) {
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
		//		$('.banner').on('mouseenter', function() {
		//			$(".kinds_list_des").removeClass('hide');
		//		}).on('mouseleave', function() {
		//			$(".kinds_list_des").addClass('hide');
		//		})

		//console.log("---getHotData");
		//			$.getJSON("/mock/menu.json", function(data) {
		//				const html = template("secondMenu_template", {
		//					list: data.res_body.list
		//				});
		//				$(".kinds_list_des").html(html);
		//			});

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

		function getSecondMenu() {
			console.log("---getSecondMenu");
			$.getJSON("/mock/menu.json", function(data) {
				
				const html = template("secondMenu_template", {
					typeItem: data.res_body.type_one
				});

				$(".kinds_list_des").html(html);
				console.log(html);
			});
		}
		getSecondMenu();

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
					goods: data.res_body.list
				});
				$(".hotAddNew_hot").html(html);
			});
		}
		//渲染模板hotsale		
		function getNewData() {
			console.log("---getNewData");
			$.getJSON("/mock/hotsale.json", function(data) {
				const hotsnews = template("hotsale_template", {
					goods: data.res_body.list_new
				});
				$(".hotAddNew_hot").html(hotsnews);
			});
		}

		function getBrandData() {
			console.log("---getBrandData");
			$.getJSON("/mock/hotsale.json", function(data) {
				const hotsbrands = template("hotsale_template", {
					goods: data.res_body.list_brand
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

		//抛物线

		$(".hotAddNew_hot").on("click", ".hottocart", function(e) {
			console.log("success-----");

			const end = $(".addcart").offset();
			console.log($(this).parent().html());
			var imgUrl = $(this).parent().children("a").children("img").attr("src");
			const flyer = $("<img src='" + imgUrl + "' style='width:40px;'>");
			flyer.css("z-index", "1000");
			// 运动
			flyer.fly({
				start: {
					left: e.pageX - $(window).scrollLeft(),
					top: e.pageY - $(window).scrollTop()
				},
				end: {
					left: end.left - $(window).scrollLeft(),
					top: end.top - $(window).scrollTop()
				},
				onEnd: function() { // 运动结束，销毁资源
					this.destroy();
				}
			});

		});

		//点击加入购物车
		$(".hotAddNew_hot").on("click", ".hottocart", function() {
			//console.log($(this));
			//拿出商品信息
			const shop = {
				id: $(this).parents("li").children(".goods_id").text(),
				img: $(this).parents("li").children("a").children("img").attr("src"),
				title: $(this).parents("li").children(".p1").text(),
				price: $(this).parents("li").children(".p2").children(".goods_price").text(),
				amount: 1
			};
			console.log(shop);
			//保存到cookie中
			$.cookie.json = true;
			const cartshop = $.cookie("products") || [];
			//判断商品是否存在
			const index = exist(shop.id, cartshop);
			if (index === -1) {
				cartshop.push(shop);
			} else {
				cartshop[index].amount++;
			}
			console.log(cartshop);
			$.cookie("products", cartshop, {
				expires: 1,
				path: "/"
			});

			return false;
		});

		function exist(id, array) {
			for (let i = 0; i < array.length; i++) {
				if (id === array[i].id) {
					return i;
				}
			}

			return -1;
		}

	});
});