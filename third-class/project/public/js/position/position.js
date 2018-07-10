function Position(){
	this.loadHeader();
	this.addListener();
	this.modify();
	this.findList(1);
	this.findPage();
}

$.extend(Position.prototype,{
	loadHeader:function(){
		new Header();
		$("#position-nav ul:first li:last").addClass("active").siblings().removeClass("active");
	},
	addListener:function(){
		$(".btn_position").on("click",this.handlePosition);
		const that =this;
		$(".pagination").on("click","li",function(){
			const pageList = $(this).find("a").text();
			$(".active").removeClass("active");
			$(this).addClass("active");
			that.findList(pageList);
		});
	},
	handlePosition:function(){
//			$.post("/api/position/add",$(".position_form").serialize(),function(data){
//				if(data.res_code === 0){
//				console.log("success");
//					$("#position_model").modal("hide");
//				}else{
//					$(".reg_error").removeClass("hide");
//				}
//				
//			},"json");

//客户端：FormData + ajax
		// 创建FormData对象
		var formData = new FormData($(".position_form").get(0));
		// 利用ajax向服务器传递数据，包括图像资源
		$.ajax({
			type : "post", // 要上传资源，必须使用 post 请求
			url : "/api/position/add",
			data : formData, // 向服务器传递的数据
			processData : false, // 不需要将data转换为查询字符串
			contentType : false, // 不设置content-type头
			dataType : "json",
			success : function(data) {
				console.log(data);
				if(data.res_code === 0){
				//console.log("success");
					$("#position_model").modal("hide");
					location.reload();
				}else{
					$(".reg_error").removeClass("hide");
				}
			}
		});
		

},

	findList:function(currentPage){
		currentPage = currentPage || 1;
		$.get("/api/position/list",{pageIndex:currentPage},function(data){
			if(data.res_code===0){
				const html = template("position_list_template",{list:data.res_body});
				$(".pos_tab tbody").html(html);
			}
		});
		
	},
	
	findPage:function(){
		
		$.get("/api/position/page",function(data){
			//console.log(data);
			if(data.res_code===0){
				var index = Math.ceil(6/5);
				console.log(index);
				var pagelist = "";
				for(var i=0;i<index;i++){
					pagelist +=`<li ><a href="javascript:void(0)">${i+1}</a>`;
				}
				$("#page").html(pagelist);
			}
		},"json");
	},
	
	
	
	modify:function(){
		$(".table").on("click",".modify",function(){
			$("#modify_model").modal("show");
				 
		});
		
	}
});

new Position();