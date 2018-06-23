/*****************************/
/********增加数据**************/
/*****************************/
on($("#added"), "click", function() {
	var _question = $("#addQuestion").value;
	var _where = $("#addWheres").value;
	var _how = $("#addHow").value;
	ajax({
		type: "post",
		url: "php/add.php",
		data: {
			question: _question,
			addwhere: _where,
			how: _how
		},
		dataType: "json",
		success: function(data) {
			if(data.res_code === 1) {
				location.reload();
			} else {
				$("#form_info").style.display = "block";
				$("#form_info").innerHTML = "保存失败" + data.res_message;
			}
		}

	});
});

/*****************************/
/********数据库查询数据加载到页面**************/
/*****************************/

function load(currPage){
	currPage = currPage || 1;
	ajax({
		type:"get",
		url : "php/select.php",
		data:{page:currPage},
		dataType:"json",
		success :　function(data){
//			console.log(data);
			var html = "";	
			data.forEach(function(curr){
				html += `<tr>
				<td>${curr.id}</td>
				<td>${curr.question}</td>
				<td>${curr.addwhere}</td>
				<td>${curr.how}</td>
				<td><a href="javascript:void(0);" class="modify" data-id="${curr.id}">修改</a></td>
				<td><a href="javascript:void(0);" class="del" data-id="${curr.id}">删除</a></td>
				</tr>`;
			  		
			});            
			$("#add_questions").innerHTML = html;
		}
	});
}

window.onload = function(){
	load();
};

/*****************************/
/********点击翻页**************/
/*****************************/


function pagenation(){
	ajax({
	  		type:"get",
	  		url : "php/page.php",
	  		dataType:"json",
			success :　function(data){
//				console.log(data);
//				console.log(data.length);
				var index = Math.ceil(data.length/5);
//				console.log(index);
				var pagelist="";
				for(var i=0;i<index;i++){
					pagelist+=`<li><a href="javascript:void(0)">${i+1}</a></li>`;
				}
				$("#page").innerHTML = pagelist;
		}
	 });
}
pagenation();

  on($("#page"),"click",function(e){
  		e=e || event;
  		var src = e.target || e.srcElement;
			if(src.nodeName === "A"){
	  		var _page = src.innerText;
	  		load(_page);
	  		var lis = $("li",$("#page"));
		  	for(var i=0;i<lis.length;i++){
		  			lis[i].className = "";
			  		}
			  		src.parentNode.className = "active";
			}
  }); 	



/*****************************/
/********点击修改**************/
/*****************************/

on($("#add_questions"),"click",function(e){
  	e=e || event;
  	var src = e.target || e.srcElement;
  	if(src.className === "modify"){
  		jQuery("#modifyModel").modal("show");
  		var _id = src.dataset.id;
		ajax({
			type : "get",
			url : "php/modifyId.php",
			data:{id:_id},
			dataType : "json",
			success : function(data){
				if(data.res_code === 1){
					var q = data.res_body;
					$("#modifyQuestion").value = q.question;
					$("#modifydWheres").value = q.addwhere;
					 $("#modifyHow").value = q.how;
					 $("#modifyId").value = q.id;
				}
			}
		});
  	}

});
/*****************************/
/********点击修改修改**************/
/*****************************/

on($("#modifyadded"),"click",function(){
	var md_questions =	$("#modifyQuestion").value,
		md_where = $("#modifydWheres").value,
	    md_how = $("#modifyHow").value,
	    md_id  =  $("#modifyId").value;
	    ajax({
	    	type :"post",
	    	data : {question:md_questions,addwhere:md_where,how:md_how,id:md_id},
	    	url : "php/update.php",
	    	dataType :"json",
	    	success : function (data){
	    		if(data.res_code ===1 ){
	    			location.reload()
	    		}else{
	    			$("#modify_form_info").style.display = "block";
					$("#modify_form_info").innerHTML = "保存失败" + data.res_message;
	    		}
	    	}
	    });
					
});

/*****************************/
/********点击删除删除**************/
/*****************************/
on($("#add_questions"),"click",function(e){
		e=e || event;
  	var src = e.target || e.srcElement;
  	if(src.className === "del"){
		    var _id = src.dataset.id;
		    ajax({
	    	type :"get",
	    	data : {id:_id},
	    	url : "php/delete.php",
	    	dataType :"json",
	    	success : function (data){
	    		if(data.res_code ===1 ){
	    			location.reload();
	    		}
	    	}
	    });
  	}
	
});
















