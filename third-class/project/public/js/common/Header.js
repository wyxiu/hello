function Header(){
	this.createDom();
	this.createLoginModel();
	this.createRegisterModel();
	this.checkLogin();
	this.addLisener();
}

Header.template=`<nav class="navbar navbar-inverse">
					<div class="container-fluid">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
				<a class="navbar-brand" href="#">拉勾网管理系统</a>
						</div>
						<div class="collapse navbar-collapse" id="position-nav">
							<ul class="nav navbar-nav">
								<li class="active">
									<a href="/">首页 </a>
								</li>
								<li>
									<a href="/html/position.html">职位管理</a>
								</li>
							</ul>
							<ul class="nav navbar-nav navbar-right" id="btn">
								<li data-toggle="modal" data-target="#login_model"><a href="#">登录</a></li>
								<li data-toggle="modal" data-target="#register_model"><a href="#">注册</a></li>
							</ul>
							
							<ul class="nav navbar-nav navbar-right hide" id="login_success">
								<li><a href="#"></a></li>
								<li class="logout_link"><a href="#">退出</a></li>
							</ul>
						</div>
					</div>
				</nav>`;


$.extend(Header.prototype,{
	createDom:function(){
		//创建头部的DOM结构
		$(Header.template).appendTo(".header");
	},
	//创建登录模态框
	createLoginModel:function(){
		new LoginModel();
	},
	//创建注册模态框
	createRegisterModel:function(){
		new RegisterModel();
	},
	//判断用户是否有登录
	checkLogin:function(){
		$.get("/api/users/check",function(data){
			if(data.res_code=== 0 ){
				$("#login_success").removeClass("hide").prev("ul").hide();
				$("#login_success a:first").text(data.res_body.username);
			}
			
		},"json");
	},
	addLisener:function(){
		$(".logout_link").on("click",this.handlLogout);
	},
	
	handlLogout:function(){
		$.get("/api/users/logout",function(data){		
				location.reload();	
		},"json");
	}

	
});