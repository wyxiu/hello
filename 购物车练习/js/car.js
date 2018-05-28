function refresh(){
var carShop = cookie("products");
if(carShop){
	carShop = JSON.parse(carShop);	
}else{
	carShop = [];
}
if(carShop.length === 0){
	$("#car_shop").innerHTML = "<tr><td colspan='7'>购物车为空</td></tr>"
}
else{
	var content = "";
	carShop.forEach(function(curr){
		content  += `<tr>
					<td>${curr.id}</td>
					<td><img src = "${curr.img}"</td>
					<td>${curr.desc}</td>
					<td>${curr.price}</td>
					<td><div>${curr.amount}</div></td>
					<td>${curr.price*curr.amount}</td>
					<td><a href="javascript:void(0)">删除</a></td>
				</tr>`;
				
	});
	$("#car_shop").innerHTML =content;
}
}
refresh();
$("#car_shop").onclick = function(e) {
	e = e || event;
	var src = e.target || e.srcElement;
	if(src.nodeName === "A"){
		var _tr = src.parentNode.parentNode;
		var _id =_tr.children[0].innerHTML;
		var carShop = cookie("products");
	if(carShop){
		carShop = JSON.parse(carShop);	
	}else{
		carShop = [];
	}
		carShop.forEach(function(curr,i){
			if(curr.id == _id){
				carShop.splice(i,1);
			}
		});
	cookie("products", JSON.stringify(carShop), {expires:10, path:"/"});
		refresh();
		_tr.parentNode.removeChild(_tr);
	}
	else if(src.nodeName === "DIV"){
		var _tr1 = src.parentNode.parentNode;
		var _id1 =_tr1.children[0].innerHTML;
		var carShop = cookie("products");
	if(carShop){
		carShop = JSON.parse(carShop);	
	}else{
		carShop = [];
	}
		carShop.forEach(function(cur){
			if(cur.id == _id1){
				cur.amount++;
			}
		});	
		cookie("products", JSON.stringify(carShop), {expires:10, path:"/"});
		refresh();
	}
	
	
	
}



















