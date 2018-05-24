function refreshCar() {
	var carPro = cookie("products");
	if (carPro) {
		carPro = JSON.parse(carPro);
	} else {
		carPro = [];
	}

	if (carPro.length === 0) {
		$("#car_shop").innerHTML = "<tr><td colspan='7'>购物车为空</td></tr>"
	} else {
		var html = "";
		carPro.forEach(function(curr) {
			html += `
				<tr>
					<td>${curr.id}</td>
					<td><img src="${curr.img}"/></td>
					<td>${curr.desc}</td>
					<td>${curr.price}</td>
					<td><div class="amount">${curr.amount}</div></td>
					<td>${curr.price*curr.amount}</td>
					<td><a href="javasript:void(0);">删除</a></td>
				</tr>
			`;

		});
		$("#car_shop").innerHTML = html;
	}
}
refreshCar();

$("#car_shop").onclick = function(e) {
	e = e || event;
	var src = e.target || e.srcElement;
	if (src.nodeName === "A") {
		var _tr = src.parentNode.parentNode;
		var _id = _tr.children[0].innerHTML;
		var carPro = cookie("products");
		if (carPro) {
			carPro = JSON.parse(carPro);
		} else {
			carPro = [];
		}
		carPro.forEach(function(cur, i) {
			if (cur.id == _id) {
				carPro.splice(i, 1);
			}
		});
		cookie("products", JSON.stringify(carPro), {
			expires: 10,
			path: "/"
		});
		//_tr.parentNode.removeChild(_tr);
		refreshCar();
	}else if(src.nodeName === "DIV"){
		var _tr = src.parentNode.parentNode;
		var _id = _tr.children[0].innerHTML;
		var carPro = cookie("products");
		if (carPro) {
			carPro = JSON.parse(carPro);
		} else {
			carPro = [];
		}
		carPro.forEach(function(cur, i) {
			if (cur.id == _id) {
				cur.amount++;
			}
		});
		cookie("products", JSON.stringify(carPro), {
			expires: 10,
			path: "/"
		});
		refreshCar();
	}

}