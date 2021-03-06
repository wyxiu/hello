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
		console.log("addEventListener")
		// 判断类型是否以 "on" 作为前缀
		if (type.indexOf("on") === 0) // 去掉"on"前缀
			type = type.slice(2);
		element.addEventListener(type, callback);
	} else {
		console.log("attachEvent")
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