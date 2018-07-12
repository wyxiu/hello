function LoginModel() {
	this.createDom();
	this.addListener();
}
LoginModel.template = `<div class="modal fade" id="login_model">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" ><span>&times;</span></button>
						<h4 class="modal-title" id="myModalLabel-login">用户登录</h4>
					</div>
					<div class="modal-body">
					<div class="alert alert-danger hide login_error" role="alert">用户登录失败，用户名或密码错误...</div>
						<form class="login_form">
							<div class="form-group">
								<label for="username">用户名</label>
								<input type="text" class="form-control" name="username"  placeholder="用户名">
							</div>
							<div class="form-group">
								<label for="password">密码</label>
								<input type="password" class="form-control" name="password" placeholder="密码">
							</div>
							</form>
					</div>
					<div class="modal-footer">
			        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
			        <button type="button" class="btn btn-primary btn_login">登录</button>
			      </div>
				</div>
			</div>
		</div>`;
$.extend(LoginModel.prototype, {
	createDom: function() {
		$(LoginModel.template).appendTo("body");
	},
	addListener:function(){
		$(".btn_login").on("click",this.handleLogin);
	},
	handleLogin:function(){
		$.post("/api/users/login",$(".login_form").serialize(),function(data){
			if(data.res_code === 0){
				$("#login_success").removeClass("hide").prev("ul").hide();
				$("#login_success a:first").text(data.res_body.username);
				$("#login_model").modal("hide");				
			}else{
				$(".login_error").removeClass("hide");
			}
		},"json");
	}
	
});