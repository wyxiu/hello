/***********************/
/********添加数据到数据库******/
/***********************/
on($("#added"), "click", function() {
	var _question = $("#addQuestion").value;
	var _addwhere = $("#addWheres").value;
	var _how = $("#addHow").value;
	ajax({
		type: "post",
		url: "php/add.php",
		data: {
			question:_question,
			addwhere:_addwhere,
			how:_how
		},
		dataType: "json",
		success: function(data) {
			if(data.res_code === 1) {
				location.reload();
			} else {
				$("#form_info").display = "block";
				$("#form_info").innerHTML = "失败" + data.res_message;
			}
		}
	});
});

/***********************/
/********从数据库得到数据******/
/***********************/
function load(currPage) {
	currPage = currPage || 1;
	ajax({
		type: "get",
		url: "php/select.php",
		data: {
			page:currPage
		},
		dataType: "json",
		success: function(data) {
			console.log(data);
			var html = "";
			data.forEach(function(curr) {
				html += `
				<tr>
			  		<td>${curr.id}</td>
			  		<td>${curr.question}</td>
			  		<td>${curr.addwhere}</td>
			  		<td>${curr.how}</td>
			  		<td><a href="javascript:void(0);"class = "modify" data-id="${curr.id}">修改</a></td>
			  		<td><a href="javascript:void(0);"class= "del" data-id="${curr.id}">删除</a></td>
			  	</tr>	
				`;
			});
			$("#add_questions").innerHTML = html;
		}
	});

}
window.onload = function() {
	load();
}

/**********************/
/*******动态获取页码******/
/***********************/
function pagenation() {
	ajax({
		type: "get",
		url: "php/page.php",
		dataType: "json",
		success: function(data) {
			var pagelist = "";
			var index = Math.ceil(data.length / 5);
			for(var i = 0; i < index; i++) {
				pagelist += ` <li><a href="javascript:void(0)">${i+1}</a></li>`;
			}
			$("#page").innerHTML = pagelist;
		}

	});
}
pagenation();
/***********************/
/*******位页码添加active属性******/
/***********************/
on($("#page"), "click", function(e) {
	var src = e.target;
	if(src.nodeName === "A") {
		var _page = src.innerText;
	  		load(_page);
		var lis = $("li", $("#page"));
		for(var i = 0; i < lis.length; i++) {
			lis[i].className = "";
		}
		src.parentNode.className = "active";
	}

});

/***********************/
/*******点击修改修改页面弹出修改框框******/
/***********************/

on($("#add_questions"), "click", function(e) {
	var src = e.target;
	if(src.className === "modify") {
		jQuery("#modifyModel").modal("show");
		var _id = src.dataset.id;
		ajax({
			type: "get",
			url: "php/modifyId.php",
			data: {
				id:_id
			},
			dataType: "json",
			success: function(data) {
				if(data.res_code === 1) {
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

/***********************/
/******点击修改修改内容******/
/***********************/

on($("#modifyadded"), "click", function() {
	var mdquestion = $("#modifyQuestion").value;
	var mdwhere = $("#modifydWheres").value;
	var mdhow = $("#modifyHow").value;
	var _id = $("#modifyId").value;
	ajax({
		type: "post",
		url: "php/update.php",
		data: {
			question:mdquestion,
			addwhere:mdwhere,
			how:mdhow,
			id:_id
		},
		dataType: "json",
		success: function(data) {
			if(data.res_code === 1) {
				location.reload();
			}else {
					$("#modify_form_info").display = "block";
					$("#modify_form_info").innerHTML = "失败" + data.res_message;
				}
		}
	});
});




/***********************/
/******点击修改删除******/
/***********************/

on($("#add_questions"), "click", function(e) {
	var src = e.target;
	if(src.className === "del"){
		var _id = src.dataset.id;
		ajax({
		type: "get",
		url: "php/delete.php",
		data: {
			id:_id
		},
		dataType: "json",
		success: function(data) {
			if(data.res_code === 1) {
				location.reload();
			}
		}
	});
	}
	
});











