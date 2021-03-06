//定义方向
const Direction = {
	LEFT: Symbol(),
	RIGHT: Symbol(),
	UP: Symbol(),
	DOWN: Symbol()
}

class Snake {
		constructor({
			body = [],
			width = 20,
			height = 20,
			direction = Direction.RIGHT
		} = {}) {
			this.body = body;
			this.width = width;
			this.height = height;
			this.direction = direction;
			this.map = null; //关联的地图
			this.init(); //初始化

		}

		//初始化蛇身体
		init() {
			if(this.body.length === 0) {
				this.body = [{
					x: 2,
					y: 2,
					dom: null,
					background: Tools.randomColor()
				}, {
					x: 3,
					y: 2,
					dom: null,
					background: Tools.randomColor()
				}, {
					x: 4,
					y: 2,
					dom: null,
					background: Tools.randomColor()
				}, {
					x: 5,
					y: 2,
					dom: null,
					background: Tools.randomColor()
				}, {
					x: 6,
					y: 2,
					dom: null,
					background: Tools.randomColor()
				}, {
					x: 7,
					y: 2,
					dom: null,
					background: "#f00"
				}];
			}
		}

		//创建对象
		createDom() {
			this.body.forEach((bd) => {
				if(bd.dom === null) {
					bd.dom = document.createElement("div");
					Tools.css(bd.dom, {
						width: this.width + "px",
						height: this.height + "px",
						position: "absolute",
						background: bd.background,
					});

					this.map.addRole(bd.dom);

				}
				Tools.css(bd.dom, {
					left: bd.x * this.width + "px",
					top: bd.y * this.height + "px"
				});

			});
		}

		move() {
			let len = this.body.length;
			//移动身体
			for(let i = 0; i < len - 1; i++) {
				this.body[i].x = this.body[i + 1].x;
				this.body[i].y = this.body[i + 1].y;
			}
			//移动脑袋
			if(this.direction == Direction.RIGHT) {
				this.body[len - 1].x++;
			} else if(this.direction == Direction.LEFT) {
				this.body[len - 1].x--;
			} else if(this.direction == Direction.UP) {
				this.body[len - 1].y--;
			} else if(this.direction == Direction.DOWN) {
				this.body[len - 1].y++;
			}
				this.createDom();	
		}

		setDirection(code) {

			if(code === 37) {
				if(this.direction != Direction.RIGHT) {
					this.direction = Direction.LEFT;
				}
			} else if(code === 38) {
				if(this.direction != Direction.DOWN) {
					this.direction = Direction.UP;
				}
			} else if(code === 39) {
				if(this.direction != Direction.LEFT) {
					this.direction = Direction.RIGHT;
				}
			} else if(code === 40) {
				if(this.direction != Direction.UP) {
					this.direction = Direction.DOWN;
				}

			}
		}
	}
