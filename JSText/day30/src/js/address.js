$(function(){
	function loadProvince(){
		const url1 = "http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&level=1&page=1",
			url2 = "http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&level=1&page=2";
			$.when($.ajax(url1,{dataType:"json"}),$.ajax(url2,{dataType:"json"}))
			 .then(function(data1,data2){
			 	let html="<option value='-1'>请选择省份</option>";
			 	data1[0].showapi_res_body.data.concat(data2[0].showapi_res_body.data)
			 	.forEach(function(data){
			 		html += `<option value='${data.id}'>${data.areaName}</option>`;
			 	});
			 	
			 	$("#province").html(html);
			 });
		
	}
	
	function loadCity(){
		const prov_id = $("#province").val();
			const url = `http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&parentId=${prov_id}`;
			$.getJSON(url,function(data){
				let html="<option value='-1'>请选择城市</option>";
				data.showapi_res_body.data.forEach(function(curr){
					html += `<option value='${curr.id}'>${curr.areaName}</option>`;
				});
				$("#city").html(html);
			});
	}
	
	
	
	function loadDistrict(){
		const city_id = $("#city").val();
			const url = `http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&parentId=${city_id}`;
			$.getJSON(url,function(data){
				let html="<option value='-1'>请选择城市</option>";
				data.showapi_res_body.data.forEach(function(curr){
					html += `<option value='${curr.id}'>${curr.areaName}</option>`;
				});
				$("#district").html(html);
			});
	}
	loadProvince();
	$("#province").on("change",loadCity);
	$("#city").on("change",loadDistrict);
	
});























