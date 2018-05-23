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