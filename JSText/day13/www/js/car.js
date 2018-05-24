var carPro = cookie("products");
if(carPro){
	carPro=JSON.parse(carPro);
}
else{
	carPro = [];
}
if(carPro.length === 0){
	$("#car_shop").innerHTML = "<tr><td colspan='7'>购物车为空</td></tr>"
}
else{
	var htm = "";
	carPro.forEach(function(curr) {
		htm+= `
			<tr>
					<td>${curr.id}</td>
					<td><img src="${curr.img}"/></td>
					<td>${curr.desc}</td>
					<td>${curr.price}</td>
					<td>${curr.amount}</td>
					<td>${curr.price*curr.amount}</td>
					<td><a href="javasrcipt:void(0);">删除</a></td>
				</tr>`;
	});
	$("#car_shop").innerHTML = htm;
	
}
/* 
 * 删除：
 * a. 找出“删除”链接所在行中商品的编号
 * b. 查找该编号的商品在 products 数组中是第几个元素
 * c. 从 products 数组中删除对应的元素
 * d. 将删除元素后的 products 数组覆盖保存回 cookie 中
 * e. 将DOM中"删除"所在的行从DOM结构移除
 * 暂不考虑兼容
 */
	$("#car_shop").onclick = function(e){
		e = e || event ;
		var src = e.target || e.srcElement ; 
		if(src.nodeName === "A"){
			var _tr = src.parentNode.parentNode;
			var _id = _tr.children[0].innerHTML;
			var _index = search(_id, carPro);
				carPro.splice(_index,1);
			cookie("products", JSON.stringify(carPro), {expires:10, path:"/"});
			_tr.parentNode.removeChild(_tr);
			
		}
	}


	function search(id, array){
		for (var i=0;i<array.length;i++){
			if(array[i].id == id)
			return i;
		}
		return -1;
	}























