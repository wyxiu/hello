function RegisterModel() {
	this.createDom();
	this.addListner();
	this.addPassword();
	this.addEmail();
	this.addRePassword();
}
RegisterModel.template = `<div class="modal fade" id="register_model">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel-register">用户注册</h4>
					</div>
					<div class="modal-body">
					<div class="alert alert-danger hide reg_error" role="alert">用户注册失败，请稍后重试...</div>
						<form class="register_form">
							<div class="form-group">
								<label for="re_username">用户名</label>
								<input type="text" class="form-control"name="username" id="re_username" placeholder="输入用户名">
							</div>
							<div class="form-group">
								<label for="re_password">密码</label><span style="color:red;margin-left:10px;display:none" class="mima">密码错误</span>
								<input type="password" class="form-control" name="password" id="re_password" placeholder="输入密码">
							</div>
							<div class="form-group">
								<label for="re_password_again">确认密码</label>
								<span style="color:red;margin-left:10px;display:none" class="queren">两次密码错误</span>
								<input type="re_password" class="form-control" id="re_password_again" placeholder="请确认密码">
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<span style="color:red;margin-left:10px;display:none" class="youxiang">邮箱格式错误</span>
								<input type="email" class="form-control" name="email" id="pos_Email1" placeholder="Email">
							</div>
					</div>
					<div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary btn_register">注册</button>
        </form>
      </div>		
				</div>
			</div>
		</div>`;
$.extend(RegisterModel.prototype, {
	createDom: function() {
		$(RegisterModel.template).appendTo("body");
	},
	//密码判断
	var a=0,b=0,c=0;
	addPassword: function() {
		$("#re_password").on("blur", function() {
			var val = $(this).val();
			if(val === "" || !/^.{6,20}$/.test(val)) {
				$(this).val("");
				$(".mima").show();
				a = 0;
			} else {
				$(".mima").hide();
				a = 1;
			}
		});
	},
	//email判断
	addEmail: function() {
		$("#pos_Email1").on("blur", function() {
			var val = $(this).val();
			var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			if(val === "" || !reg.test(val)) {
				$(this).val("");
				$(".youxiang").show();
				b = 0;
			} else {
				$(".youxiang").hide();
				b = 1;
			}
		});
	},

	addRePassword: function() {
		$("#re_password_again").on("blur", function() {
			var rePass = $(this).val();
			var pass = $("#re_password").val();
			if(rePass !== pass) {
				$(this).val("");
				$(".queren").show();
				c = 0;
			} else {
				$(".queren").hide();
				c = 1;
			}
		});

	},

	addListner: function() {
		$(".btn_register").on("click", $.proxy(this.handleRegister, this));
		//console.log("success");
	},
	//处理注册事件的方法
	handleRegister: function() {
		if(a + b + c === 3) {
			$.post("/api/users/register", $(".register_form").serialize(), function(data) {
				if(data.res_code === 0) {
					//					console.log("success");
					$("#register_model").modal("hide");
				} else {
					$(".reg_error").removeClass("hide");
				}

			}, "json");

		}

	}
});