//引入测试模块
const assert =require("assert");
const Calculator = require("../Calculator")

describe('测试计算器的方法',function(){
	it("测试两个数字相加结果",function(){
		//断定相加结果是12，如果不是则报错
		assert.equal(Calculator.add(5,7),12);
	});
	
	//测试异步
	it("模拟ajax异步测试",function(done){
		setTimeout(function(){
			done();//表示异步任务执行结束
			assert.equal(3+5,15);
		},1000);
	});
});





























