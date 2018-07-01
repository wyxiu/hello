require (["config"],function(){
	require(["jquery"],function($,template){
		$(function () {
			var a=0,b=0,c=0,d=0,e=0,f=0; 
		$("#username").on("blur", function (){
            if (this.value==="") {
                $("#usernames").show();
				a=0;
				$(this).val("");
            } else{
            	a=1;
            	 $("#usernames").hide();
            }
         });
		$("#phone_txt").on("blur", function () {
			const phone_val = $(this).val()
			if (phone_val==="" || !/^\d{11}$/.test(phone_val)) {
				  $("#phone").show();
				b=0;
				$(this).val("");
			}else{
            	b=1;
            	$("#phone").hide();
            }
		});
		$("#form_title_right a").on("click",function(){
			window.location.href="/html/login.html";
		});
		
		
		$("#password").on("blur", function () {
			const password_val = $(this).val()
			if (password_val==="" || !/^.{6,20}$/.test(password_val)) {
				  $("#passwords").show();
				d=0;
				$(this).val("");
			}else{
            	d=1;
            	 $("#passwords").hide();
            }
		});
		$("#password_conform").on("blur", function () {
			const password_val = $(this).val()
			if (password_val !== $("#password").val()){
				  $("#comfirm").show();
				e=0;
				$(this).val("");
			}else{
            	e=1;
            	 $("#comfirm").hide();
            }
		});
		
		
			const code_txt = $("#code_txt").val();
				const t =$(".get_code").text();
				if(code_txt.toLowerCase()!== t.toLowerCase() ) {
					$(".get_code").text(random(4));
					$("#code").show();
					c=0;
					$(this).val("");
				}else{
					c=1;
					$("#code").hide();
				}
			
			$(".get_code").text(random(4));
			$("next").on("click",function(){
				
				$(".get_code").text(random(4));
			});
		
		const status = $(".checked").prop("checked");
		if(!status){
			f = 0;
		}else{
			f = 1;
		}
		
		
		$(".btn").on("click",function(){
			console.log("aaaaaaaaaaaaaaaa"+$("#form_regist").serialize());
			if(a+b+c+d+e===5){
				$.post("http://localhost/api/register.php",$("#form_regist").serialize(),function(data){
					console.log("aaaaaaaaaaaaaaaa"+data.res_message);
					if(data.res_code===1){
						location.href="/html/login.html";
					}
					else{
						$("#error").html("用户名已存在");
					}
				},"json");
			}
		});		
		
		//随机字符串封装函数
		function random(n) {
				var rand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
				var checkCode = "";
				for(var i = 0; i < n; i++) {
					checkCode += rand[Math.floor(Math.random() * 56)];
				}
				return checkCode;
			}
       });
			
	});
});
	




	
	
	
	
	

		
		
		