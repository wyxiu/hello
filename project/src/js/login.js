require (["config"],function(){
	require(["jquery","cookie"],function($){
		$(function (){
			 $("#username").on("blur", function () {
            if (this.value==="") {
            	$(this).val("");
                $("#user").show();
            }
            else{
                $("#user").hide();
            }
        });
		$("#password").on("blur", function () {
			if (this.value==="") {
				$(this).val("");
				$("#mima").show();
			}
			else{
				$("#mima").hide();
			}
		});
		$("#login_context .left").on("click",function(){
			window.location.href="/html/register.html";
		});
		$(".btn").on("click",function(){
			console.log("---------------");
//			const user={
//				username:$("#username").val(),
//				password:$("#password").val()
//			}
//			const users=[];
//			users.push(user);
			$.post("http://localhost/api/login.php",$("#form_login").serialize(),function(d){
				if(d.res_code===1){
					location.href="/index.html";
//					$.cookie.json=true;
//					$.cookie("users",users,{expires:7,path:'/'});
				}
				else{
					$(".error").show();
				}
			},"json");
		});
		
		});
	});
});


