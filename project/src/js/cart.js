require(["config"], function() {
	require(["jquery", "template", "cookie", "load"], function($, template) {
		$(function() {

			/*********************************************************/
			/* //从数据库渲染到页面读取并渲染购物车 */
			/*********************************************************/
			function getCartGoods() {

				$.cookie.json = true;
				const users = $.cookie("users");

				console.log(users);
				if (users == undefined || users.length == 0) {
					window.location.href = "/html/login.html";
				} else {
					$.get("http://localhost/api/select.php", "userID=" + users[0].username, function(cartgoods) {
						if (cartgoods.length === 0) {
							$(".products").html("<tr><td colspan='7'>购物车为空</td></tr>");
						}
						//有选购的商品就渲染模板，，显示
						const html = template("cart_template", {
							cartgoods
						});
						$(".products").html(html);

						/*********************************************************/
						/* 部分选中 */
						/*********************************************************/
						$(".ck_single").click(function() {
							const len = $(".ck_single:checked").length;

							$(".ck_all").prop("checked", len === cartgoods.length);
							getTotal();

						});
					}, "json");
				}

			}
			getCartGoods();

			/*********************************************************/
			/* 删除购物车 */
			/*********************************************************/
			$(".cart-shop table .products").on("click", ".del", function() {
				const bianhao = $(this).parents("tr").attr("data-id");
				$.post("http://localhost/api/delete.php", "cart_form_bianhao=" + bianhao, function(d) {
					if (d.res_code === 1) {
						//console.log("successful----------------");
						getCartGoods();
						getTotal();
					} else {
						console.log("失败" + d.res_message);
					}

				}, "json");
				//	

			});

			/*********************************************************/
			/* 全选 */
			/*********************************************************/
			$(".ck_all").click(function() {
				const status = $(this).prop("checked");
				$(".ck_single").prop("checked", status);
				//				console.log(status);
				getTotal();
			});

			/*********************************************************/
			/* 修改数量 */
			/*********************************************************/
			$(".cart-shop table .products").on("click", ".add, .minus", function() {
				const bianhao = $(this).parents("tr").attr("data-id");
				var amount = $(this).parents("tr").find(".amount").val();
				var price = $(this).parents("tr").find(".single_price").text().split(1);
				if ($(this).is(".minus")) {
					console.log("+------------")
					if (amount < 1) {
						return;
					} else {
						amount--;
					}
				} else {
					amount++;
				}
				//console.log(bianhao + "----" + amount);
				$.post("http://localhost/api/update.php", "cart_form_bianhao=" + bianhao + "&cart_form_amount=" + amount, function(d) {
					if (d.res_code === 1) {
						$(this).siblings(".amount").val(amount);
						$(this).parents("tr").children(".sub_total").text("￥" + (price * amount).toFixed(2));
						getCartGoods();
						getTotal();
					} else {
						console.log("失败" + d.res_message);
					}

				}, "json");

			});
			/*********************************************************/
			/* 手动修改数量 */
			/*********************************************************/
			$(".cart-shop table .products").on("blur", ".amount", function() {
				const bianhao = $(this).parents("tr").attr("data-id");
				var amount = $(this).parents("tr").find(".amount").val();
				var price = $(this).parents("tr").find(".single_price").text().split(1);
				const val = $(this).val()
				if (!/^[1-9]\d*$/.test(amount)) {
					$(this).val(val);
					getCartGoods();
					return;
				}
				amount = val;
				$.post("http://localhost/api/update.php", "cart_form_bianhao=" + bianhao + "&cart_form_amount=" + amount, function(d) {
					if (d.res_code === 1) {
						$(this).siblings(".amount").val(amount);
						$(this).parents("tr").children(".sub_total").text("￥" + (price * amount).toFixed(2));
						getCartGoods();
						getTotal();
					} else {
						console.log("失败" + d.res_message);
					}

				}, "json");
			});

			/*********************************************************/
			/* 计算合计 */
			/*********************************************************/
			function getTotal() {
				let sum = 0,
					count = 0;
				$(".ck_single:checked").each(function(index, element) {
					//console.log(Number($(element).parents("tr").children(".sub_total").text()));

					sum += Number($(element).parents("tr").find(".sub_total").text().replace("￥", ""));
					count += Number($(element).parents("tr").find(".amount").val());
					//console.log(sum);
				});

				$(".total").text(sum.toFixed(2));
				$(".count").text(count);

			}

		});

	});

});