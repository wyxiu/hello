const url = require("url");

/* 将URL字符串解析为URL对象 */
const str = "https://localhost:3000/html/include/header.html?username=abc#test";
const obj = url.parse(str, true);
console.log(obj);

/* 将对象格式化为URL字符串 */
// const obj = {
// 	hostname : "localhost",
// 	port : "3000",
// 	pathname : "/html/include/header.html",
// 	search : "?username=abc",
// 	protocol : "https"
// };

// const str = url.format(obj)
// console.log(str);


// http://localhost:3000/html/login.html
// 相对路径：<a href="register.html">注册</a>
//					http://localhost:3000/html/register.html
// 绝对路径：<a href="/index.html">首页</a>
//					http://localhost:3000/index.html