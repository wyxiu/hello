require(["config"], function() {
	require(["jquery", "template", "load", "zoom", "cookie"], function($, template) {
		$(function() {
			
			function getParams() {
				var url = location.search;
				if (url.indexOf("?") != -1) {
					const shop = {
						id: 0,
						img: "",
						title: "",
						price: 0,
						amount: 0
					};
					var str = url.substr(1);

					var strs = str.split("&");

					for (var i = 0; i < strs.length; i++) {
						var key = strs[i].split("=")[0];
						if (key == "id") {
							shop.id = strs[i].split("=")[1];
						} else if (key == "img") {
							shop.img = strs[i].split("=")[1];
						} else if (key == "title") {
							shop.title = decodeURIComponent(strs[i].split("=")[1]);
						} else if (key == "price") {
							shop.price = strs[i].split("=")[1];
						} else if (key == "amount") {
							shop.amount = strs[i].split("=")[1];
						}
					}
					const hotsbrands = template("good_detail", {
						good: shop
					});
					$(".products_detail").html(hotsbrands);
					$("#zoom_03").elevateZoom();

				}
				console.log(url);
			}

			getParams();
			
			
			$(".s_m_pictures_list").on("click", "li", function() {
				const smal_img = $(this).find("img").attr("src");
				console.log(smal_img);
				$("#zoom_03").attr("src", smal_img);
				$("#zoom_03").data('zoom-image', smal_img).elevateZoom();
			});

			$("#addtocart").on("click", function() {
				//console.log($(this));
				//拿出商品信息
				const shop = {
					id: $("#good_id").text(),
					img: $("#good_fisrt_image").attr("src"),
					title: $(".p_d_c_title").text(),
					price: $("#good_price").text().slice(1),
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

				return true;
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

});