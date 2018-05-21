function $(selector,context){
				context = context || document;
				if(selector.indexOf("#")===0){
					return document.getElementById(selector.slice(1));
				}
				else if(selector.indexOf(".")===0){
					return byClass(selector.slice(1));
				}
				else{
					return context.getElementsByTagName(selector);
				}
			}
		
		
		
		
			function byClass(className,context){
				context = context || document;
				if(context.getElementsByClassName){
					return context.getElementsByClassName(className);
				}
				else{
					//查找所有类名
					var elements= context.getElementsByTagName("*");
					//遍历所有类名
					var result=[];
					for(var i=0;i<elements.length;i++){
						
						var classNames = elements[i].className.split(" ");//如果是class="a text b的话就必须分割"
						
						//查找类名等于ClassName的
						for(var j=0;j<classNames.length;j++){
							
							if(classNames[j]===className){
								result.push(elements[i]);
								break;
							}
						}
				
					}
				}
				
				return result;
			}
			
			//用函数设置css属性
			function css(element, attr){
				//获取css属性
				if(typeof  attr === "string"){
					return document.getComputedStyle 
									? document.getComputedStyle(element)[attr]
									:element.currentStyle[attr];
				}
				//设置css属性
				if(typeof attr ==="object"){
					
					for(var attrName in attr ){	
						element.style[attrName]=attr[attrName];
				}
				
			}
		}