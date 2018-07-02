require(["config", "login"], function() {
	require(["jquery", "template", "load", "xm_carousel", "fly", "cookie"], function($, template) {
		$(function() {

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

			//滑动图
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

			//动态加载热搜数据
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

			function getHotData() {
				console.log("---getHotData");
				$.getJSON("/mock/hotsale.json", function(data) {
					const html = template("hotsale_template", {
						goods: data.res_body.list
					});
					$("#hotAddNew_hot").html(html);
				});
			}
			//渲染模板hotsale		
			function getNewData() {
				console.log("---getNewData");
				$.getJSON("/mock/hotsale.json", function(data) {
					const hotsnews = template("hotsale_template", {
						goods: data.res_body.list_new
					});
					$("#hotAddNew_hot").html(hotsnews);
				});
			}

			function getBrandData() {
				console.log("---getBrandData");
				$.getJSON("/mock/hotsale.json", function(data) {
					const hotsbrands = template("hotsale_template", {
						goods: data.res_body.list_brand
					});
					$("#hotAddNew_hot").html(hotsbrands);
				});
			}

			//		getFoodTypes();
			getHotData();

			$(".kinds_list").on("mouseenter", "li", function() {
				$(this).stop(false, true);
				$(this).children("i").stop(false, true);
				$(this).animate({
					paddingLeft: "58px"
				}, 300);
				$(this).children("i").animate({
					left: "24px"
				}, 300);
				$(".kinds_list_des").show();
				var idStr = $(this).attr("id");

				if (idStr == "type_1") {
					getSecondMenu(0);
				} else if (idStr == "type_2") {
					getSecondMenu(1);
				} else if (idStr == "type_3") {
					getSecondMenu(2);
				} else if (idStr == "type_4") {
					getSecondMenu(3);
				} else if (idStr == "type_5") {
					getSecondMenu(4);
				}
			});
			$(".kinds_list").on("mouseleave", "li", function() {
				$(this).stop();
				$(this).children("i").stop();
				$(this).animate({
					paddingLeft: "48px"
				}, 300);
				$(this).children("i").animate({
					left: "14px"
				}, 300);
			});

			$(".kinds_list_des").on("mouseenter", function() {
				$(".kinds_list_des").show();
			});
			$(".kinds_list_des").on("mouseleave", function() {
				$(".kinds_list_des").hide();
			});
			$(".kinds_list").on("mouseleave", function() {
				$(".kinds_list_des").hide();
			});

			function getSecondMenu(i) {
				//console.log("---getSecondMenu");
				$.getJSON("/mock/menu.json", function(data) {
					const html = template("secondMenu_template", {
						typeItem: data.res_body[i]
					});
					$(".kinds_list_des").html(html);
				});
			}
			getSecondMenu(0);

			//动态加载楼层菜单

			$(".vgtrb_lists").on("mouseenter", "li", function() {
				//console.log("============");
				$(this).addClass("vege_current");

				$(".vege_current").removeClass("vege_current");
			});

			//			//集食惠公告
			//			(function($) {
			//				$.fn.scrollTop = function(options) {
			//
			//					var defaults = {
			//						speed: 30
			//					}
			//					var opts = $.extend(defaults, options);
			//					this.each(function() {
			//						var $timer;
			//						var scroll_top = 0;
			//						var obj = $(this);
			//						console.log("-------scrollTop");
			//						var $height = obj.find("ul").height();
			//						obj.find("ul").clone().appendTo(obj);
			//
			//						obj.hover(function() {
			//							clearInterval($timer);
			//						}, function() {
			//							$timer = setInterval(function() {
			//								scroll_top++;
			//								if (scroll_top > $height) {
			//									scroll_top = 0;
			//								}
			//								obj.find("ul").first().css("margin-top", -scroll_top);
			//
			//							}, opts.speed);
			//						}).trigger("mouseleave");
			//					})
			//				}
			//			})(jQuery)
			//
			//			$(".bann_tell").scrollTop({
			//				speed: 35 //数值越大 速度越慢
			//			});

			function newsScrollTop(options) {
				var defaults = {
					speed: 30
				}
				var opts = $.extend(defaults, options);
				var $timer;
				var scroll_top = 0;
				var obj = $(".bann_tell");
				var $height = obj.find("ul").height();
				obj.find("ul").clone().appendTo(obj);

				obj.hover(function() {
					clearInterval($timer);
				}, function() {
					$timer = setInterval(function() {
						scroll_top++;
						if (scroll_top > $height) {
							scroll_top = 0;
						}
						obj.find("ul").first().css("margin-top", -scroll_top);

					}, opts.speed);
				}).trigger("mouseleave");
			}

			newsScrollTop(35);

			function getFloorMenu() {
				//console.log("getFloorMenu")
				$.getJSON("/mock/floor.json", function(data) {
					//console.log(data.res_body[i]);
					const vegetables = template("floor_template", {
						list: data.res_body
					});
					$(".floorcontent").html(vegetables);

					$('.vegetable_right_bottom').each(function() {
						var curTitle = $(this).parents(".vegetable").find("h3").text();
						for (var i = 0; i < data.res_body.length; i++) {
							if (data.res_body[i].title == curTitle) {
								const vegetables = template("floor_good_templates", {
									goods: data.res_body[i].items[0].goods
								});
								$(this).html(vegetables);
								break;
							}
						}
					});

					$('.vegetable_slide').each(function() {
						var images = [];
						//获取当前
						var curTitle = $(this).parent().children("h3").text();
						for (var i = 0; i < data.res_body.length; i++) {
							if (data.res_body[i].title == curTitle) {
								for (var j = 0; j < data.res_body[i].image.length; j++) {
									images.push({
										href: data.res_body[i].image[j].href,
										src: src = data.res_body[i].image[j].src
									});
								}
								break;
							}
						}
						$(this).carousel({
							duration: 3000,
							imgs: images,
							width: "295px",
							height: "418px",
							showBtn: false
						});
					});

					$('.goods_type_name').each(function() {
						$(this).click(function() {
							$(this).parent().children(".vege_current").removeClass("vege_current");
							$(this).addClass("vege_current");

							var curTitle = $(this).parents(".vegetable").find("h3").text();
							var curItem = $(this).children("a").text();
							//console.log(curTitle + "----" + curItem);
							for (var i = 0; i < data.res_body.length; i++) {
								if (data.res_body[i].title == curTitle) {
									for (var j = 0; i < data.res_body[i].items.length; j++) {
										//console.log("000items" + data.res_body[i].items[j].name);
										if (data.res_body[i].items[j].name == curItem) {
											//console.log(data.res_body[i].items[j].goods);
											const vegetables = template("floor_good_templates", {
												goods: data.res_body[i].items[j].goods
											});
											$(this).parents(".vegetable").find(".vegetable_right_bottom").html(vegetables);
											break;
										}
									}
								}
							}
						});
					});

					$(".vgtrb_lists").on("click", ".hottocart", function(e) {
						//console.log("success-----");

						const end = $(".addcart").offset();
						//console.log($(this).parent().html());
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

						const shop = {
							id: $(this).parents("li").children(".goods_id").text(),
							img: $(this).parents("li").children("a").children("img").attr("src"),
							title: $(this).parents("li").find(".p1").text(),
							price: $(this).parents("li").find(".goods_price").text(),
							amount: 1
						};
						console.log($(this).parents("li").find(".goods_price").text());
						//console.log(shop);
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
					});
				});

			}
			getFloorMenu();

			//传对象
			$(".hotAddNew_hot").on("click", ".good_img", function(e) {
				const shop = {
					id: $(this).parents("li").children(".goods_id").text(),
					img: $(this).parents("li").children("a").children("img").attr("src"),
					title: $(this).parents("li").children(".p1").text(),
					price: $(this).parents("li").find(".goods_price").text(),
					amount: 1
				};
				var params = "id=" + shop.id + "&img=" + shop.img + "&title=" +
					shop.title + "&price=" + shop.price + "&amount=" + shop.amount;
				console.log("/html/detail.html?" + params);
				window.location.href = "/html/detail.html?" + params;
				return true;
			});

			//抛物线
			$(".hotAddNew_hot").on("click", ".hottocart", function(e) {
				//console.log("success-----");

				const end = $(".addcart").offset();
				//console.log($(this).parent().html());
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

				const shop = {
					id: $(this).parents("li").children(".goods_id").text(),
					img: $(this).parents("li").children("a").children("img").attr("src"),
					title: $(this).parents("li").children(".p1").text(),
					price: $(this).parents("li").children(".p2").children(".goods_price").text(),
					amount: 1
				};
				//console.log(shop);
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
			});

			function exist(id, array) {
				for (let i = 0; i < array.length; i++) {
					if (id === array[i].id) {
						return i;
					}
				}

				return -1;
			}

			//侧边栏楼层导航

			var _index = 0;
			$(".fixed_floor_box").on("click", "li", function() {
				$(this).find(".active").removeClass("active");
				$(this).find("span").addClass("active");
				_index = $(this).index();
				//通过拼接字符串获取元素，再取得相对于文档的高度
				var _top = $(".vegetable").offset().top;
				$("body,html").animate({
					scrollTop: _top
				}, 500);
			});
			var nav = $(".fixed_floor"); //得到导航对象
			var win = $(window); //得到窗口对象
			var sc = $(document); //得到document文档对象。
			win.scroll(function() {

				if (sc.scrollTop() >= 700) {
					$(".fixed_floor").show();
					//获取滚动元素对应的索引!!!重难点
					var index = Math.floor(sc.scrollTop() / 700);

					$(".fixed_floor span").eq(index - 1).addClass("active").parent().siblings().find("span").removeClass("active");
				} else {
					$(".fixed_floor").hide();
				}
			});

			//吸顶效果
			$(window).scroll(function() {
				// 滚动条距离顶部的距离 大于 200px时
				if ($(window).scrollTop() >= 200) {
					$(".fixed_top").fadeIn(1000); // 开始淡入
				} else {
					$(".fixed_top").stop(true, true).fadeOut(1000); // 如果小于等于 200 淡出
				}
			});

			//倒计时
			const thatDay = new Date("2018/7/5")
			const timer = setInterval(function() {
				const nowDay = new Date().getTime();
				const seconds = Math.ceil((thatDay - nowDay) / 1000);
				const sec = seconds % 60,
					min = Math.floor(seconds / 60) % 60,
					hour = Math.floor(seconds / 3600) % 24,
					day = Math.floor(seconds / (3600 * 24));
				if (day < 10) {
					$("#days").html("0" + day);
				} else {
					$("#days").html(day);
				}
				if (hour < 10) {
					$("#houers").html("0" + hour);
				} else {
					$("#houers").html(hour);
				}
				$("#minuts").html(min);
				$("#seconds").html(sec);
			}, 1000);

			//数据到数据库
			$(".hotAddNew_hot").on("click", ".hottocart", function() {
				console.log("successful----------------");
				$.cookie.json = true;
				const users = $.cookie("users");

				console.log(users);
				if (users == undefined || users.length == 0) {
						window.location.href = "/html/login.html";
				} else {
					$("#cart_form_bianhao").val($(this).parents("li").children(".goods_id").text());
					$("#cart_form_userID").val(users[0].username);
					$("#cart_form_title").val($(this).parents("li").children(".p1").text());
					$("#cart_form_img").val($(this).parents("li").children("a").children("img").attr("src"));
					$("#cart_form_price").val($(this).parents("li").find(".goods_price").text());
					$("#cart_form_amount").val(1);
					console.log($("#cart_form").serialize());
					$.post("http://localhost/api/add.php", $("#cart_form").serialize(), function(d) {
						if (d.res_code === 1) {
							console.log("successful----------------");
						} else {
							console.log("失败" + d.res_message);
						}

					}, "json");
				}
			});

		});

	});
});