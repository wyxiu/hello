$(function(){
	//console.log("success");
	//判断cookie是否存在
	$.cookie.json = true;
	const cartshop = $.cookie("products")||[];
	if(cartshop.length === 0){
		$(".cart_empty").removeClass("hide");
		return;
	}
	//如果有
	$(".cartshop").removeClass("hide");
	//渲染模板
	const html = template("cart_template",{cartshop});
	//显示
	$(".cartshop table tbody").html(html);
	
	
	
/************************************/
/************删除功能*****************/
/************************************/
$(".cartshop table tbody").on("click",".del",function(){
	const id = $(this).parents("tr").data("id");
	const index = exist(id,cartshop);
	cartshop.splice(index,1);
	$.cookie("products",cartshop,{expires:1,path:"/"});
	$(this).parents("tr").remove();
	subTotal();
	
});


/************************************/
/************全选功能*****************/
/************************************/
$(".cartshop table thead").on("click",".checkall",function(){
	const status = $(this).prop("checked");
	//console.log(status);
	$(".checksingle").prop("checked",status);
	subTotal();
  });
  
/************************************/
/************部分选中*****************/
/************************************/

$(".cartshop table tbody").on("click",".checksingle",function(){
	
	const len = $(".checksingle:checked").length;
	//console.log(len);
	$(".checkall").prop("checked",len === cartshop.length);
	subTotal();
	
  });

 /************************************/
/************按 + - 数量变化*****************/
/************************************/ 
$(".cartshop table tbody").on("click",".minus, .add",function(){
	const id = $(this).parents("tr").data("id");
	const index = exist(id,cartshop);
	const current = cartshop[index];
	if($(this).is(".minus")){
		if(current.amount <=0){
			return;	
		}else{
			current.amount--;
		}
	}else{
		current.amount++;
	}
	
	$.cookie("products",cartshop,{expires:1,path:"/"});
	//将输入框里的值修改
	$(this).siblings(".amount").val(current.amount);
	//金额也更新变化
	$(this).parents("tr").children(".sum").html((current.price*current.amount).toFixed(2));
	subTotal();
});

/************************************/
/**************验证输入数量************/
/************************************/ 
$(".cartshop table tbody").on("blur",".amount",function(){
	//验证输入的数据
	const id = $(this).parents("tr").data("id");
	const index = exist(id,cartshop);
	const current = cartshop[index];
	const val = $(this).val();
	if(!/^[1-9]\d*$/.test(val)){
		$(this).val(current.amount);
		return;
	} 
		current.amount = val;
	                       
	$.cookie("products",cartshop,{expires:1,path:"/"});
	$(this).parents("tr").children(".sum").html((current.price*current.amount).toFixed(2));
	subTotal();
	
});





/************************************/
/**************计算总金额************/
/************************************/ 

function subTotal(){
	let sum = 0;
	$(".checksingle:checked").each(function(index,element){
		sum += Number($(element).parents("tr").find(".sum").text());
	});
	$(".total").text(sum.toFixed(2));
	console.log(sum);
}



function exist(id, array) {
		for (let i = 0, len = array.length; i < len; i++) {
			if (array[i].id == id)
				return i;
		}
		return -1;
	}
	
	
});