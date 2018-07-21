require(["config"], function() {
	require(["jquery", "template", "load", "xm_carousel", "fly", "cookie"], function($, template) {
		$(function() {
			//banner轮播图
			$(".banner_imgs").carousel({
				duration: 3000,
				imgs: [{
					href: "#",
					src: "/img/banner1.jpg"
				}, {
					href: "#",
					src: "/img/banner2.jpg"
				}, {
					href: "#",
					src: "/img/banner3.jpg"

				}, {
					href: "#",
					src: "/img/banner11.jpg"

				}, {
					href: "#",
					src: "/img/banner8.jpg"

				}, {
					href: "#",
					src: "/img/banner5.jpg"

				}, {
					href: "#",
					src: "/img/banner6.jpg"

				}, {
					href: "#",
					src: "/img/banner7.jpg"

				}],
				width: "1023px",
				height: "400px",
				showBtn: true
			});

			$(".menus").on("mouseenter", "li", function() {
				$(".second_menu").show();
				var idsStr = $(this).attr("id");
				getSecondMenu(idsStr);
			});

			$(".banner").on("mouseleave", function() {
				$(".second_menu").hide();
			});

			function getSecondMenu(id) {
				$(".second_menu_left").html("");
				$.getJSON("/mock/second_menu.json", function(data) {
					for (var i = 0; i < data.res_body.length; i++) {
						if (data.res_body[i].id === id) {
							const html = template("second_menu_arttemplate", {
								list: data.res_body[i]
							});
							$(".second_menu_left").html(html);
							return;
						}
					}

				});
			}

			function getTypes() {
				$.getJSON("/mock/second_menu.json", function(data) {
					const html = template("type_menu_arttemplate", {
						list: data.res_body
					});
					$(".menus").html(html);
					
				});
			}

			getTypes();

			$(window).on('scroll', function() {
				var $scroll = $(this).scrollTop();

				if ($scroll >= 400) {
					$(".louceng").show();
				} else {
					$(".louceng").hide();
				}

				$(".floor").each(function() {
					var index = $(this).index()-1;
					var v_top = $(".floor").eq(index).offset().top;
					if (v_top > $scroll) { //楼层的top大于滚动条的距离
						$('.louceng_box li').removeClass('louceng_active');
						$('.louceng_box li').eq(index).addClass('louceng_active');
						return false; //中断循环
					}
				});

			});

			$(".louceng").on("click", "li", function() {
				var index = $(this).index();
				console.log("----click--" + $(this).index());
				$(this).eq(index+1).addClass("louceng_active").siblings("li").removeClass("louceng_active");
				var _top = $(".floor").eq(index-1).offset().top;
				console.log(_top);
				$("html,body").animate({
					scrollTop: _top
				})
			});

		});

	});
});