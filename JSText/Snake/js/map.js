
//赋值表示初始化赋值
function Map({width =600,height=600,background ="#ccc"}={}){
	this.width = width;
	this.height = height;
	this.background = background;
	this.dom = null;//就相当于css中的div，这里用js动态创建
	this.createDom();
}
Map.prototype = {
	constructor : Map,
	//设置属性
	createDom :　function(){
		this.dom = document.createElement("div");
		Tools.css(this.dom,{
			width : this.width + "px",
			height : this.height +"px",
			background:this.background,
			position : "relative",
			margin : "10px auto"
		});
		//把map添加到body中显示
		document.body.appendChild(this.dom);
	},	
		//添加角色在map中
		addRole:function(role){
			this.dom.appendChild(role);
		}
};




















