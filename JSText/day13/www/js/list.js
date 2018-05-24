//用一个数组存贮商品
var products = [{
	id: 1,
	desc: "联想(Lenovo)拯救者R720 15.6英寸大屏游戏笔记本电脑(i5-7300HQ 8G 1T+128G SSD GTX1050Ti 4G IPS 黑金)",
	price: 5799,
	img: "images/1.jpg"
}, {
	id: 2,
	desc: "荣耀MagicBook 14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 256G MX150 2G独显 FHD IPS 正版Office）冰河银",
	price: 4999,
	img: "images/2.jpg"
}, {
	id: 3,
	desc: "戴尔DELL游匣G3 15.6英寸游戏笔记本电脑(i5-8300H 8G 128GSSD+1T GTX1050Ti 4G独显 IPS)冰火版",
	price: 6099,
	img: "images/3.jpg"
}, {
	id: 4,
	desc: "小米(MI)Pro 15.6英寸金属轻薄笔记本(i5-8250U 8G 256GSSD MX150 2G独显 FHD 指纹识别 预装office)深空灰",
	price: 5298,
	img: "images/4.jpg"
}, {
	id: 5,
	desc: "微软（Microsoft）新Surface Pro 二合一平板电脑 12.3英寸（Intel Core i5 8G内存 128G存储 ）",
	price: 7388,
	img: "images/5.jpg"
}, {
	id: 6,
	desc: "华为(HUAWEI) MateBook X Pro 13.9英寸超轻薄全面屏笔记本(i5-8250U 8G 256G 3K 指纹 触控 office)灰",
	price: 7988,
	img: "images/6.jpg"
}];

products.forEach(function(prod) {

	var copy = $(".template")[0].cloneNode(true);
	copy.className = "product";
	copy.style.display = "inline-block";
	//添加到container里
	copy.setAttribute("data-id", prod.id);
	//显示信息
	copy.children[0].src = prod.img;
	copy.children[1].firstChild.innerHTML = prod.desc;
	copy.children[2].lastChild.innerHTML = prod.price.toFixed(2);
	$(".container")[0].appendChild(copy);
});

//为加入购物车添加点击事件

$(".container")[0].onclick=function (e) {
	e = e || event ;
	var src = e.target || e.srcElement ; 
	if(src.className === "addToCart"){
		var _box = src.parentNode;
		var  car ={ id:_box.dataset.id,
					img :_box.children[0].src,
					desc : _box.children[1].firstChild.innerHTML,
					price : _box.children[2].lastChild.innerHTML,
					amount: 1
			};
			var carPro = cookie("products");
			if(carPro){
				carPro = JSON.parse(carPro);
			}
			else{
				carPro = [];
			}
			carPro.forEach(function(curr){
				if(curr.id == car.id){
					
				}
				
				curr.amount = curr.amount+1;
				carPro.splice(curr);
				
				
			});
				carPro.push(car);
				cookie("products",JSON.stringify(carPro), {expires:10, path:"/"});
				console.log("添加成功");
			
	}

}

/*
var count = 0;
var list = new Array();
$(".container")[0].onclick = function(e) {	
	e = e || event;
	var src = e.target || e.srcElement;
	if(src.className === "addToCart"){
	var _box = src.parentNode;
	var id = _box.dataset.id,
		img = _box.children[0].src,
		desc = _box.children[1].firstChild.innerHTML,
		price = _box.children[2].lastChild.innerHTML;

	for (var i = 0; i < list.length; i++) {
		if (list[i] === img) {
			var _child = $("tbody")[0].children[i].children;
			var n = _child[0].innerHTML;
			//console.log(n);
			_child[0].innerHTML = parseInt(n + 1);
			return;
		}
	}
	var copy = $(".cart_body")[0].cloneNode(true);
	//console.log(img, desc, price);
	copy.className = "cart";
	copy.style.display = "table-row";
	var _child = copy.children;
	_child[0].firstElementChild.src = img;
	_child[1].innerText = desc;
	_child[2].innerHTML = price;
	_child[4].firstElementChild.onclick = function(e) {
		$("tbody")[0].removeChild(copy);
	};
	$("tbody")[0].appendChild(copy);

	//console.log($("table")[0].innerHTML);
	list[count] = img;
	count++;

}
*/
