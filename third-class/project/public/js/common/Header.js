function Header(){
	this.createDom();
}

Header.template=`<nav class="navbar navbar-inverse">
					<div class="container-fluid">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
							<a class="navbar-brand" href="#">拉勾网管理系统</a>
						</div>
						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul class="nav navbar-nav">
								<li class="active">
									<a href="/index.html">首页 <span class="sr-only">(current)</span></a>
								</li>
								<li>
									<a href="/html/position.html">职位管理</a>
								</li>
							</ul>
							<ul class="nav navbar-nav navbar-right" id="btn">
								<li data-toggle="modal" data-target="#login_model"><a href="#">登录</a></li>
								<li data-toggle="modal" data-target="#register_model"><a href="#">注册</a></li>
							</ul>
						</div>
					</div>
				</nav>`;


$.extend(Header.prototype,{
	createDom:function(){
		$(Header.template).appendTo(".header");
	},
	createDom:function(){
		$(LoginModel.template).appendTo(".header");
	},
	createDom:function(){
		$(RegisterModel.template).appendTo(".header");
	},
	//
	
});