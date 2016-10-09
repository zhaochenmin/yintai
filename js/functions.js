//兼容的获取标签。
		//type:选择器(.box  #box   div),range:选择范围;
function $(type,range){
	var range=range||document;
	if(typeof type=="string"){//检测输入的类型：字符串
		if(type.charAt(0)=="#"){//charAt:检索字符串第一位的字符是"#"
			return document.getElementById(type.substr(1))
		}else if(type.charAt(0)=="."){//charAt:检索字符串第一位的字符是"."
			return getClass(type.substr(1),range)
		}else{
			return range.getElementsByTagName(type)
		}
	}else if(typeof type=="function"){//检测输入的类型：函数。
		return window.onload=type;
	}
}

//兼容的获取类名。	     //作用的范围
function getClass (classname,range) {
	range=range||document;
	if(document.getElementByClassName){//判断条件.为true:现代浏览器;为false:IE6-8.
		return range.getElementByClassName(classname);
		//条件为真，在现代浏览器。直接运行。
	}else{//条件为假，在IE6-8执行。		
		var all=range.getElementsByTagName('*');//先获取到所有标签。
		var arr=[];
		for (var i = 0; i < all.length; i++) {//遍历所有标签
			// all[i].className==classname
			if(checkClass(all[i].className,classname)){//将类名为指定类名的标签拿到。
				arr.push(all[i])//放到新数组中
			}
		}		
	}return arr;	
}
				 //循环得到的类名，要进行对比的类名
function checkClass (getclassname,checkclassname) {
	var arr=getclassname.split(" ")//将循环得到的类名以空格的方式分割成字符串。
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]==checkclassname){
			return true;
		}		
	}
	return false;
}


//兼容的获取并修改对象中的文本信息
function getText(obj,value){
	if(value==undefined){
		if(obj.textContent!=undefined){
			return obj.textContent;
		}else{
			return obj.innerText;
		}
	}else{
		if(obj.textContent!=undefined){
			 obj.textContent=value;
		}else{
			 obj.innerText=value;
		}
	}
}

//兼容的获得对象的样式
function getStyle(obj,val){
	if (obj.currentStyle) {
		return obj.currentStyle[val];
	}else{
		return getComputedStyle(obj,null)[val];
	};
}

//正确的获取子节点
function getChild(obj){
	var child=obj.childNodes;
	var arr=[];
	for (var i = 0; i < child.length; i++) {
		if ((child[i].nodeType!=8)&&(child[i].nodeType!=3||attr(child[i].nodeValue)!="")) {
			arr.push(child[i])
		}
	};
	return arr;	
}
function attr(str){
	return str.replace(/^\s+|\s+$/g,"")
}

//获取父元素的第一个子节点
function getfirst(obj){
	return obj.getChild[0]
}

//获取最后一个子节点
function getLast(obj){
	var child=getChild(obj);
	return child[child.length-1]
}

//获取父元素的任意一个子节点。
function getIndex(obj,i){
	return obj.getChild(i)
}

//获取下一个兄弟元素。

//插入到指定元素的后面
function insertNext(obj,endobj){
	var parent=endobj.parentNode;
	var next=getNext(endobj);	
	if (next){
		return parent.insertBefore(obj,next);
	}else{
		return parent.appendChild(obj)
	};
}