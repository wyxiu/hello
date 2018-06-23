/*
 * 根据选择器条件，查找元素，选择器可以使用: #id   .class   element
 * @param selector 选择器字符串参数，如："#box",".text","div"
 * @param context 查找上下文，可选，默认取 document
 * @return 根据选择器查找到的元素
 */
function $(selector, context) {
	context = context || document;

	if (selector.indexOf("#") === 0) // id
		return document.getElementById(selector.slice(1));
	if (selector.indexOf(".") === 0) // className
		return byClass(selector.slice(1));
	// element
	return context.getElementsByTagName(selector);
}

/*
 * 根据类名查找元素（兼容）
 * @param className 待查找的类名
 * @param context 可选，查询上下文对象，默认为 document
 * @return 根据类名查找到的元素
 */
function byClass(className, context) {
	// 如果未传递 context 参数，则默认为 document
	context = context || document;

	// 如果浏览器支持使用 getElementsByClassName，则直接使用
	if (context.getElementsByClassName) 
		return context.getElementsByClassName(className);
	// 不支持使用 getElementsByClassName，则解决兼容
	// 定义数组，保存查找结果
	var result = [];
	// 获取所有元素
	var elements = context.getElementsByTagName("*");
	// 遍历每个元素，处理类名
	for (var i = 0, l = elements.length; i < l; i++) {
		// 获取当前遍历到元素的所有类名
		var classNames = elements[i].className.split(" ");
		// 遍历每个类名，判断是否有待查找的类名
		for (var j = 0, len = classNames.length; j < len; j++) {
			if (classNames[j] === className) { // 说明当前遍历到元素的类名中存在待查找的类名
				result.push(elements[i]);
				break;
			}
		}
	}
	// 返回查找到的结果数组
	return result;
}

/* 
 * 获取/设置CSS样式
 * @param element 元素
 * @param attr 如果传递的是字符串，则表示获取，传递的是对象，则表示设置
 */
function css(element, attr) {
	// 获取 CSS
	if (typeof attr === "string")
		return window.getComputedStyle 
								? getComputedStyle(element)[attr]
								: element.currentStyle[attr];
		/*if (window.getComputedStyle) // 支持使用 getComputedStyle 方法
			return window.getComputedStyle(element)[attr];
		else // 不支持使用，通常是 IE9 之前浏览器
			return element.currentStyle[attr];*/
	// 设置 css
	if (typeof attr === "object") {
		for (var attrName in attr) {
			// attrName 表示对象属性名
			// attr[attrName] 表示对应 attrName 的属性值
			element.style[attrName] = attr[attrName];
		}
	}
}

/*
 * 添加事件监听
 * @param element 事件源元素
 * @param type 事件类型字符串
 * @param callback 事件处理程序
 */
function on(element, type, callback) {
	if (element.addEventListener) { // 支持使用 addEventListener
		// 判断类型是否以 "on" 作为前缀
		if (type.indexOf("on") === 0) // 去掉"on"前缀
			type = type.slice(2);
		element.addEventListener(type, callback);
	} else {
		// 判断类型是否以 "on" 作为前缀
		if (type.indexOf("on") !== 0) // 添加 "on" 前缀
			type = "on" + type;
		element.attachEvent(type, callback);
	}
}

/*
 * 保存/获取 cookie
 * @param key cookie名称
 * @param value 待保存的cookie值，可选，不传递该参数，表示获取 cookie
 * @param options 可配置选项 {expires: 7, path: "/", domain: "", secure: true}
 */
function cookie(key, value, options) {

	/*******************************************************/
	/* writing：传递 value 参数，则表示保存 cookie */
	/*******************************************************/
	if (typeof value !== "undefined") {
		// 未传递 options 参数时，默认为{}
		options = options || {};

		// 串连保存cookie的字符串
		var cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value); // key=value
		// 判断失效时间
		if (options.expires) { // 表示天数的数字
			var datetime = new Date();
			datetime.setDate(datetime.getDate() + options.expires);
			cookie += ";expires=" + datetime.toUTCString();
		}
		// 路径
		if (options.path)
			cookie += ";path=" + options.path;
		// 域
		if (options.domain)
			cookie += ";domain=" + options.domain;
		// 安全连接
		if (options.secure)
			cookie += ";secure";

		// 保存 cookie
		document.cookie = cookie;
		// 结束函数调用 
		return;
	}

	/*******************************************************/
	/* reading：未传递 value 参数，则根据 key(cookie名) 读取对应 cookie值 */
	/*******************************************************/
	// 获取所有cookie
	var cookies = document.cookie.split("; ");
	// 遍历 cookies 数组中每条 cookie 信息
	for (var i = 0, len = cookies.length; i < len; i++) {
		// 将当前遍历到的这条 cookie ("key=value"结构) 使用 "=" 分割
		var parts = cookies[i].split("=");
		// parts 数组中第一个元素为 cookie 名，因为保存时做过编码，所以读取时需要解码
		var name = decodeURIComponent(parts.shift());
		// 判断 name 中所存 cookie名是否为待查找的 cookie名
		if (name === key) // 存在，则返回对应的 cookie 值
			// parts 数组中剩下元素以 "=" 串联后的内容是 cookie 值
			return decodeURIComponent(parts.join("="));
	}

	// 未查找到，则显式返回 undefined
	return undefined;
}

/*
 * 删除 cookie
 * @param key cookie名
 * @param options 配置参数
 */
function removeCookie(key, options) {
	// 配置参数
	options = options || {};
	// 失效时间
	options.expires = -1;
	// 保存，过期自动删除
	cookie(key, "", options);
}

/*
 * 多属性运动框架
 * @param element 待添加运动动画效果的DOM元素
 * @param options 各属性运动终值对象
 * @param speed 总时间
 * @param fn 函数，运动动画结束后要继续执行的函数，可选
 */
function animate(element, options, speed, fn) {
	// 取消元素上已有的运动动画效果
	clearInterval(element.timer);
	// 定义对象，保存初值、范围值
	var start = {}, range = {};
	for (var attr in options) {
		start[attr] = parseFloat(css(element, attr));
		range[attr] = options[attr] - start[attr];
	}
	// 记录运动开始时间
	var startTime = +new Date();
	// 启动计时器，运动动画
	element.timer = setInterval(function(){
		// 运动耗时
		var elapsed = Math.min(+new Date() - startTime, speed);
		// 每个属性都计算当前值
		for (var attr in options) {
			// 公式
			var result = elapsed * range[attr] / speed + start[attr];
			// 设置css
			element.style[attr] = result + (attr === "opacity" ? "" : "px");
		}
		// 判断是否停止计时器
		if (elapsed === speed){ // 停止
			clearInterval(element.timer);
			// 判断是否存在运动结束后执行的函数，如果有，则调用
			fn && fn();
		}
	}, 1000/60);
}

/*
 * 淡入
 * @param element 待添加淡入运动动画效果的DOM元素
 * @param speed 总时间
 * @param fn 函数，运动动画结束后要继续执行的函数，可选
 */
function fadeIn(element, speed, fn) {
	element.style.display = "block";
	element.style.opacity = 0;
	animate(element, {opacity:1}, speed, fn);
}

/*
 * 淡出
 * @param element 待添加淡出运动动画效果的DOM元素
 * @param speed 总时间
 * @param fn 函数，运动动画结束后要继续执行的函数，可选
 */
function fadeOut(element, speed, fn) {
	element.style.opacity = 1;
	animate(element, {opacity:0}, speed, function(){
		element.style.display = "none";
		fn && fn();
	});
}

/* 
 * ajax
 * @param options 可配置参数 
 *	 {
 *		type : "get|post", // 请求方式，默认"get"请求
 *		url : "xxxx.php", // 请求资源的URL
 *		data : {username:"admin", password:"abc"}, // 向服务器传递的数据
 *		dataType : "json|text", // 预期从服务器返回的数据类型
 *		success : function(responseData){}, // 请求成功时执行的函数
 *		error : function(err){} // 请求失败时执行的函数
 *	 }
 */
function ajax(options){

	var type = (options.type || "get").toUpperCase(), // 请求方式，默认"GET" 请求
		url = options.url, // 请求资源的URL
		queryString = null; // 查询字符串

	if (options.data) { // 有向服务器传递数据，则构建查询字符串
		queryString = []; 
		for (var attr in options.data) {
			queryString.push(attr + "=" + options.data[attr]);
		}
		queryString = queryString.join("&");
	}

	// 判断请求方式，如果是GET请求，则向服务器传递的数据串联在URL后
	if (type === "GET" && queryString) {
		url += "?" + queryString;
		queryString = null;
	}

	// 创建核心对象
	var xhr = new XMLHttpRequest();
	// 准备建立连接
	xhr.open(type, url, true);
	// 发送请求
	if (type === "POST") // 需要像表单一样POST数据，则设置请求头
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send(queryString);
	// 处理响应
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) { // 请求处理完毕，响应就绪
			if (xhr.status === 200) { // 请求成功 
				// 获取响应文本
				var data = xhr.responseText;
				// 如果预期返回的数据格式是 json，则解析
				if (options.dataType === "json")
					data = JSON.parse(data);
				// 处理响应数据
				options.success && options.success(data);
			} else { // 请求失败
				options.error && options.error(xhr.status);
			}
		}
	}
}