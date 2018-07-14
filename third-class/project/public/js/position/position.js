function Position() {
	this.loadHeader();
	this.addListener();
	// this.findList(1);
	// this.findPage();
	this.checkPositon();
}

$.extend(Position.prototype, {
	loadHeader: function () {
		new Header();
		$("#position-nav ul:first li:last").addClass("active").siblings().removeClass("active");
	},

	checkPositon: function () {
		$.get("/api/users/check", (data) => {
			if (data.res_code === -1) {
				location = "/index.html";
			} else {
				this.findList(1);
				this.findPage();
			}

		}, "json");
	},

	addListener: function () {
		//添加职位
		$(".btn_position").on("click", this.handlePosition);
		 const that = this;
		//删除
		$("table tbody").on("click", ".delete", function () {
			const curr_id = $(this).parents("tr").find(".posId").text();
			$(this).parents("tr").remove();
			that.handleDelete(curr_id);

		});
		//修改
		$(".table").on("click", ".modify", function () {
			$("#modify_model").modal("show");
			const curr_id = $(this).parents("tr").find(".posId").text();
			//console.log(curr_id);
			$(".modifyId").val(curr_id);
			//console.log($(".modifyId").val())
			//$("#logo_md").val($(this).parents("tr").find(".md_logo").test());
			//console.log($(this).parents("tr").find(".md_logo").test());
			$("#position_name_md").val($(this).parents("tr").find(".md_pos").text());
			$("#company_name_md").val($(this).parents("tr").find(".md_cop").text());
			$("#expirance_md").val($(this).parents("tr").find(".md_exp").text());
			$("#position_type_md").val($(this).parents("tr").find(".md_type").text());
			$("#address_md").val($(this).parents("tr").find(".md_addr").text());
			$("#salary_md").val($(this).parents("tr").find(".md_sal").text());
		});

		$("#md_update").on("click", function () {
			$("#modify_model").modal("hide");
			that.handleModify();
			location.reload("/html/position.html");
		});

		//前后翻页
		$("#page").on("click",".next,.back,li",function(e){
			let currentPage = 1;
			const curr_Page = $(this).siblings(".active").find("a").text(),
				 all_Page = $(this).siblings(".page:last").find("a").text(),
				 fuhao = $(e.target).html();
			if(fuhao === "»"){
				if(curr_Page<all_Page){
					currentPage = parseInt(curr_Page)+1;
				}else if(curr_Page == all_Page){
					currentPage = curr_Page;
				}
			}
			else if(fuhao === "«"){
				if(curr_Page >1){
				 currentPage = curr_Page-1;
				}
			}
			else{
				currentPage = $(this).find("a").text();	
			}
			// console.log("当前页"+currentPage);
			// console.log("所有页"+all_Page);
			// console.log(fuhao);
			$("#page li").eq(currentPage).addClass("active").siblings("li").removeClass("active");
			
			that.findList(currentPage);
			
	})
},

	//添加
	handlePosition:function () {
		//客户端：FormData + ajax
		// 创建FormData对象
		//$("#post_username").val($("#login_success a:first").text());
		var formData = new FormData($(".position_form").get(0));
		formData.append('username', $("#login_success a:first").text());//这个函数有问题
		console.log(formData);
		// 利用ajax向服务器传递数据，包括图像资源
		$.ajax({
			type: "post", // 要上传资源，必须使用 post 请求
			url: "/api/position/add",
			data: formData, // 向服务器传递的数据
			processData: false, // 不需要将data转换为查询字符串
			contentType: false, // 不设置content-type头
			dataType: "json",
			success: function (data) {
				console.log(data);
				if (data.res_code === 0) {
					$("#position_model").modal("hide");
					location.reload("/html/position.html");
				} else {
					$(".reg_error").removeClass("hide");
				}
			}
		});

	},

	//渲染页面
	findList: function (currentPage) {
		currentPage = currentPage || 1;
		const pageSize = 5;
		const currIndex = (currentPage-1)*pageSize;
		var username = $("#login_success a:first").text();
		$.get("/api/position/list", {
			pageIndex: currentPage,
			username: username
		}, function (data) {
			if (data.res_code === 0) {
				const html = template("position_list_template", {
					list: data.res_body
				});
				$(".pos_tab tbody").html(html);
			}
			let tr = $(".pos_tab tbody tr");
            $.each(tr,function(index,curr){
                let num = parseInt($(this).children("td").first().text());
                num += currIndex;
                //console.log(num);
                $(this).children("td").first().text(num);
            });
		});
	},

	//动态加载页码
	findPage: function () {
		var username = $("#login_success a:first").text();
		$.get("/api/position/page", { username: username }, function (data) {
			//console.log(data.res_body);
			if (data.res_code === 0) {
				var index = Math.ceil(data.res_body.length / 5);
				//console.log(index);
				var pagelist = "";
				for (var i = 1; i < index; i++) {
					pagelist += `<li class="page"><a href="javascript:void(0)">${i + 1}</a>`;
				}
				$(pagelist).insertBefore(".next");
			}
		}, "json");
	},

	//修改
	handleModify: function () {
		var formData = new FormData($(".modify_form").get(0)); //这个写法不行
		console.log(formData);
		$.ajax({
			type: "post", // 要上传资源，必须使用 post 请求
			url: "/api/position/modify",
			data: formData, // 向服务器传递的数据
			processData: false, // 不需要将data转换为查询字符串
			contentType: false, // 不设置content-type头
			dataType: "json",
			success: function (data) {
				console.log(data);
				if (data.res_code === 0) {
					console.log("success");
				} else {
					$(".reg_error").removeClass("hide");
				}
			}
		});
	},

	//删除
	handleDelete: function (curr_id) {
		$.get("/api/position/deletes", {
			id: curr_id
		}, function (data) {

			if (data.res_code === 0) {
				location.reload("/html/position.html");
			} else {
				console.log("fail");
			}

		}, "json");

	}
});

new Position();