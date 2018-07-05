// 引入模块
const qs = require("querystring");

// 解析
/*const str = "username:abc|password:123|age:18|address:cd"
const obj = qs.parse(str, "|", ":", {maxKeys:1});
console.log(obj);*/

// 将对象转换为查找字符串
const obj = {
	username : "xiaoming",
	password: "abc",
	age : "18",
	address : "成都",
	phone : "13100998877"
};
const str = qs.stringify(obj);
console.log(str);

// username=xiaoming&password=abc&age=18&address=成都&phone=13100998877