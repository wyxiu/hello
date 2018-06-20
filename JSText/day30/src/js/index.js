$(function(){
	//console.log("success");
	$.getJSON("mock/hotsale.json",function(data){
		const html = template("hot_sale",{list:data.res_body.list});
		$(".grid_2").html(html);
		
	});
	
	
	$(".grid_2").on("click","a",function(e){
		e.preventDefault();
		//拿出商品信息
		const cart ={
			id:$(this).find(".id").text(),
			img:$(this).find("img").attr("src"),
			title:$(this).find("p").text(),
			price:$(this).find(".btn5").text().slice(1),
			amount:1
			
		};
		
		//保存到cookie中,cookie插件第一步就是陪住cookie
		$.cookie.json = true;
		const cartshop = $.cookie("products") || [];
		
		//判断商品是否存在，可以遍历数组
		
		const index = exist(cart.id,cartshop);
		if(index === -1){
			cartshop.push(cart);
		}else{
			cartshop[index].amount++;
		}
		
//		
//		cartshop.forEach(function(curr){
//			if(curr.id === cart.id){
//				curr.amount = curr.amount +1;
//				cart.amount = 0;
//			}
//		});
//		if(cart.amount>0){
//			cartshop.push(cartshop);
//		}
//		
		//保存在cookie中;
		$.cookie("products",cartshop,{expires:1,path:"/"});
	
	});
	
	//写一个函数判断商品是否存在
	function exist(id,array){
		for(let i =0;i<array.length;i++){
			if(id===array[i].id){
				return i;
			}
		}
				
		return -1;
	}
	
});
















