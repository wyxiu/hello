function Position() {
	this.loadHeader();
	this.addListener();
	this.findList(1);
	this.findPage();
	this.checkPositon();
}

$.extend(Position.prototype, {
	loadHeader: function() {
		new Header();
		$("#position-nav ul:first li:last").addClass("active").siblings().removeClass("active");
	},

	checkPositon: function() {
		$.get("/api/users/check", (data) => {
			if(data.res_code === -1) {
				location = "/index.html";
			} else {
				this.findList(1);
				this.findPage();
			}

		}, "json");
	},

	addListener: function() {
		$(".btn_position").on("click", this.handlePosition);
		const that = this;
		$(".pagination").on("click", "li", function() {
			const pageList = $(this).find("a").text();
			$(".active").removeClass("active");
			$(this).addClass("active");
			that.findList(pageList);
		});
		$("table tbody").on("click", ".delete", function() {
			const curr_id = $(this).parents("tr").find(".posId").text();
			$(this).parents("tr").remove();
			that.handleDelete(curr_id);

		});
		$(".table").on("click", ".modify", function() {
			$("#modify_model").modal("show");
			const curr_id = $(this).parents("tr").find(".posId").text();
			console.log(curr_id);
			$(".modifyId").val(curr_id);
			//console.log($(".modifyId").val())
			$("#logo_md").val($(this).parents("tr").find(".md_logo").text());
			$("#position_name_md").val($(this).parents("tr").find(".md_pos").text());
			$("#company_name_md").val($(this).parents("tr").find(".md_cop").text());
			$("#expirance_md").val($(this).parents("tr").find(".md_exp").text());
			$("#position_type_md").val($(this).parents("tr").find(".md_type").text());
			$("#address_md").val($(this).parents("tr").find(".md_addr").text());
			$("#salary_md").val($(this).parents("tr").find(".md_sal").text());
		});

		$("#md_update").on("click", function() {
			$("#modify_model").modal("hide");
			that.handleModify();
			location.reload("/html/position.html");
		});

	},

	handlePosition: function() {
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
			success: function(data) {
				console.log(data);
				if(data.res_code === 0) {
					$("#position_model").modal("hide");
						location.reload("/html/position.html");
				} else {
					$(".reg_error").removeClass("hide");
				}
			}
		});

	},

	findList: function(currentPage) {
		currentPage = currentPage || 1;
		var username =  $("#login_success a:first").text();
		$.get("/api/position/list", {
			pageIndex: currentPage,
			username:username
		}, function(data) {
			console.log(data);
			if(data.res_code === 0) {
				const html = template("position_list_template", {
					list: data.res_body
				});
				$(".pos_tab tbody").html(html);
			}
		});

	},

	
		findPage: function() {
			var username = $("#login_success a:first").text();
			$.get("/api/position/page",{username:username}, function(data) {
				console.log(data.res_body);
				if(data.res_code === 0) {
					var index = Math.ceil(data.res_body.length / 5);
					//console.log(index);
					var pagelist = "";
					for(var i = 0; i < index; i++) {
						pagelist += `<li ><a href="javascript:void(0)">${i+1}</a>`;
					}
					$("#page").html(pagelist);
				}
			}, "json");
		},
		

	handleModify: function() {
		var formData = new FormData($(".modify_form").get(0)); //这个写法不行
		console.log(formData);
		$.ajax({
			type: "post", // 要上传资源，必须使用 post 请求
			url: "/api/position/modify",
			data: formData, // 向服务器传递的数据
			processData: false, // 不需要将data转换为查询字符串
			contentType: false, // 不设置content-type头
			dataType: "json",
			success: function(data) {
				console.log(data);
				if(data.res_code === 0) {
					console.log("success");
				} else {
					$(".reg_error").removeClass("hide");
				}
			}
		});
	},
	handleDelete: function(curr_id) {
		$.get("/api/position/deletes", {
			id: curr_id
		}, function(data) {

			if(data.res_code === 0) {
				location.reload("/html/position.html");
			} else {
				console.log("fail");
			}

		}, "json");

	}
});

new Position();