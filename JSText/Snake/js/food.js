
//创建实物
class Food{
	constructor({width = 20,height = 20, x=0,y=0,background = "#0f0"} ={}) {
		this.width = width;
		this.height =height;
		this.x=x;
		this.y = y;
		this.background = background;
		this.dom = null;
		//this.createDom();
		this.map = null; // 当前食物所关联的地图对象
	}
	
	createDom(){
		this.dom = document.createElement("div");
		Tools.css(this.dom,{
			width : this.width + "px",
			height : this.height +"px",
			background:this.background,
			position : "absolute",
			left : this.x * this.width +"px",
			top: this.y * this.height + "px"
		});
		this.map.addRole(this.dom);
	}
	changePosition(){
		const rows = this.map.height/this.height,
			  cols = this.map.width/this.width;
		
		this.x = Math.floor(Math.random()*cols);
		this.y =Math.floor(Math.random()*rows);
		Tools.css(this.dom,{
			left : this.x * this.width +"px",
			top: this.y * this.height + "px"
		});
	}
}


















