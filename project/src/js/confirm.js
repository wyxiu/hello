require(["config"], function () {
	require(["jquery", "template", "load"], function ($, template) {

		$(function () {

			/*********************************************************/
			/* //从数据库渲染到页面读取并渲染购物车 */
			/*********************************************************/
			function getCartGoods() {
				$.get("http://localhost/api/select.php", function (cartgoods) {
					if (cartgoods.length === 0) {
						$(".list_prods").html("没有商品信息");
					}
					//有选购的商品就渲染模板，，显示
					const html = template("confirm_template", {
						cartgoods
					});
					$(".list_prods").html(html);
					// var number = 0,money = 0,dest=0;
					//  number += Number($(".desc_amount").text()); 
					//  money +=Number($(".desc_total").text().replace("￥",""));
					// $(".list_pay_amont").text(number) 					
					// $(".list_pay_total").text("￥"+money);
					// dest += Number($(".desc_discount").text().replace("￥",""));
					// $(".list_pay_dist").text("￥"+dest);
					// $(".allPay").text($(".list_pay_total").text());


				}, "json");
			}
			getCartGoods();

				
				
					//$(".allPay").text() = $(".list_pay_total").text().slice(1) - $(".list_pay_dist").text().slice(1);

			/*
			function loadProvince() {
				const url1 = "http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&level=1&page=1",
					url2 = "http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&level=1&page=2";
				// 读取两页省份数据
				$.when($.ajax(url1, {
						dataType: "json"
					}), $.ajax(url2, {
						dataType: "json"
					}))
					.then(function(data1, data2) {
						// html 字符串
						let html = "<option value='-1'>请选择省份</option>";
						// 将省份数组遍历，每个省份信息添加到下拉列表项中
						data1[0].showapi_res_body.data.concat(data2[0].showapi_res_body.data)
						.forEach(function(curr) {
							html += `<option value="${curr.id}">${curr.areaName}</option>`;
						});
						// 显示省份信息
						$("#province").html(html);
					});
			}

			// 加载城市
			function loadCity() {
				// 获取所选中的省份id
				const prov_id = $("#province").val();
				// 根据省份id查询城市信息
				const url = `http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&parentId=${prov_id}`;
				$.getJSON(url, function(data) {
					let html = "<option value='-1'>请选择城市</option>";
					data.showapi_res_body.data.forEach(function(curr) {
						html += `<option value="${curr.id}">${curr.areaName}</option>`;
					});
					$("#city").html(html);
				});
			}

			// 加载区县
			function loadDistrict() {
				// 获取所选中的城市id
				const city_id = $("#city").val();
				// 根据城市id查询区县信息
				const url = `http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&parentId=${city_id}`;
				$.getJSON(url, function(data) {
					let html = "<option value='-1'>请选择区县</option>";
					data.showapi_res_body.data.forEach(function(curr) {
						html += `<option value="${curr.id}">${curr.areaName}</option>`;
					});
					$("#district").html(html);
				});
			}

			loadProvince();
			// 省份选择发生改变，则加载城市
			$("#province").on("change", loadCity);
			// 城市选择发生改变，加载区县
			$("#city").on("change", loadDistrict);

			//			var res = $("province").html() + $("city").html()+$("district").html();
			//			$("addnot").html(res);
*/
		});


	});
});