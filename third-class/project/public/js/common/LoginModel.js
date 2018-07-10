function LoginModel() {
	this.createDom();
}
LoginModel.template = `<div class="modal fade" id="login_model">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" ><span>&times;</span></button>
						<h4 class="modal-title" id="myModalLabel-login">用户登录</h4>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label for="username">用户名</label>
								<input type="text" class="form-control"  placeholder="用户名">
							</div>
							<div class="form-group">
								<label for="password">密码</label>
								<input type="password" class="form-control" placeholder="密码">
							</div>
							</form>
					</div>
					<div class="modal-footer">
			        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
			        <button type="button" class="btn btn-primary">注册</button>
			      </div>
				</div>
			</div>
		</div>`;
$.extend(LoginModel.prototype, {
	createDom: function() {
		$(LoginModel.template).appendTo("body");
	}
});