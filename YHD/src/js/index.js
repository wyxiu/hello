require(["config"], function () {
	require(["jquery", "template", "load", "xm_carousel", "fly", "cookie"], function ($, template) {
		$(function () {
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
				width: "1263px",
				height: "400px",
				showBtn: true
			});

			$(".menus").on("mouseenter", "li", function () {
				$(".second_menu").show();
				var idsStr = $(this).attr("id");
				getSecondMenu(idsStr);
			});

			$(".banner").on("mouseleave", function () {
				$(".second_menu").hide();
			});

			function getSecondMenu(id) {
				$(".second_menu_left").html("");
				$.getJSON("/mock/second_menu.json", function (data) {
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
				$.getJSON("/mock/second_menu.json", function (data) {
					const html = template("type_menu_arttemplate", {
						list: data.res_body
					});
					$(".menus").html(html);
				});
			}

			getTypes()

		});

	});
});