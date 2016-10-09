	window.onload=function(){
	var box=getClass('banner')[0];
	var imgbox=getClass('bannerimg')[0];
	var imgs=imgbox.getElementsByTagName('a');
	imgs[0].style.left=0;
	var w=parseInt(getStyle(imgs[0],"width"))
	var index=0;
	var next=0;
	var btnbox=getClass('bannerbtn')[0];
	var btns=btnbox.getElementsByTagName('li');
	btns[0].style.background="#e5004f";	
	var left=getClass('left')[0];
	var right=getClass('right')[0];

	function move(){
		next++;
		if(next==imgs.length){next=0}
		imgs[next].style.left=w+"px";
		animate(imgs[index],{left:-w},1000)
		animate(imgs[next],{left:0},1000)						
		for (var i = 0; i < imgs.length; i++) {
			btns[i].style.background="#333"
		};
		btns[next].style.background="#e5004f"
		index=next;
	}
	var t=setInterval(move,2000)
	   //轮播


	box.onmouseover=function(){
		clearInterval(t)
		animate(left,{opacity:0.8})
		animate(right,{opacity:0.8})
	}
	box.onmouseout=function(){
		t=setInterval(move,2000)
		animate(left,{opacity:0})
		animate(right,{opacity:0})
	}




	right.onclick=function(){
		move()
	}
	left.onclick=function(){
		next--;
		if(next==-1){next=imgs.length-1};
		imgs[next].style.left=-w+"px";
		for (var i = 0; i < btns.length; i++) {
			btns[i].style.background="#333"
		};
		btns[next].style.background="#e5004f";
		animate(imgs[index],{left:w},500)
		animate(imgs[next],{left:0},500)
		index=next;
	}




	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;
		
		btns[i].onclick=function(){
			if(index==this.index){
				return
			}
			imgs[this.index].style.left=w+"px";
			for (var i = 0; i < btns.length; i++) {
				btns[i].style.background="#333"
			};	
			btns[this.index].style.background="#e5004f"		
			animate(imgs[index],{left:-w},500)
			animate(imgs[this.index],{left:0},500)
			index=this.index;
		}		
	};						//对应选项卡


	// banner结束


	// 超值特卖

	var temaifontbox=getClass('temaileftmeta')[0];
	var temaifont=temaifontbox.getElementsByTagName('a');
	var temaiimgbox=getClass('temaileftimgbox')[0];
	var temaiimg=temaiimgbox.getElementsByTagName('ul');
	temaiimg[0].style.display="block";

	var temaidiv=$("div",$('.temaileftmeta')[0]);

	for (var i = 0; i < temaifont.length; i++) {
		temaifont[i].index=i;
		temaifont[i].onmouseover=function(){
			for (var i = 0; i < temaiimg.length; i++) {
				temaiimg[i].style.display="none"
				temaidiv[i].style.display="none"
			};
			temaiimg[this.index].style.display="block";
			temaidiv[this.index].style.display="block"
		}
		temaifont[i].onmouseout=function(){
			temaidiv[this.index].style.display="none"
		}
	};


// 超值特卖结束


	var baihuotitle=getClass("baihuotype")[0];
	var baihuo=baihuotitle.getElementsByTagName('li');
	baihuo[0].style.borderColor="#e5004f"
	var baihuoicon=baihuotitle.getElementsByTagName('img');
	baihuoicon[0].style.display="block";
	var baihuolist=getClass("rightbtm")[0];
	var baihuo1=baihuolist.getElementsByTagName('div')[0];
	var baihuo2=baihuolist.getElementsByTagName('ul')[0];

	baihuo[0].onmouseover=function(){
		baihuo1.style.display="block";
		baihuoicon[0].style.display="block"
		baihuo2.style.display="none"
		baihuo[0].style.borderColor="#e5004f"
	};
	baihuo[1].onmouseover=function(){
		baihuo2.style.display="block";
		baihuo1.style.display="none"
		baihuoicon[0].style.display="none"
		baihuoicon[1].style.display="block"
	};
	baihuo[0].onmouseout=function(){
		baihuo1.style.display="block";
		baihuoicon[0].style.display="none"
		baihuo[0].style.borderColor="#333"
	};
	baihuo[1].onmouseout=function(){
		baihuo2.style.display="block";
		baihuo1.style.display="none"
		baihuoicon[1].style.display="none"
		baihuo[0].style.borderColor="#333"
	};






	var btm2imgbox=getClass("type-brands-btm2");
	for(var i=0;i<btm2imgbox.length;i++){
		wheel(btm2imgbox[i]);
		function wheel(btm2imgbox){
			var btm2img=btm2imgbox.getElementsByTagName('a')

			var btm2btnbox=getClass("btm2-btn",btm2imgbox)[0];
			var btm2btn=btm2btnbox.getElementsByTagName('div')
			btm2btn[0].style.background="#e5004f"
			var index=0;
			var btm2goto=getClass("btm2-goto",btm2imgbox)[0];
			var btm2toleft=getClass("to-btm2left",btm2goto)[0];
			var btm2toright=getClass("to-btm2right",btm2goto)[0];

			btm2imgbox.onmouseover=function(){
				for (var i = 0; i < btm2img.length; i++) {
					btm2img[i].style.opacity=0.9;
					animate(btm2toleft,{marginLeft:0},200)
					animate(btm2toright,{marginRight:0},200)
				};
			}

			btm2imgbox.onmouseout=function(){
				for (var i = 0; i < btm2img.length; i++) {
					btm2img[i].style.opacity=1;
					animate(btm2toleft,{marginLeft:-30},200)
					animate(btm2toright,{marginRight:-31},200)
				};
			}
			
			btm2toright.onclick=function(){
				index++;		
				if(index==btm2img.length){index=btm2img.length-1};
				for (var i = 0; i < btm2img.length; i++) {
					btm2img[i].style.display="none";
					btm2btn[i].style.background="#6e6e6e";
				};
				btm2img[index].style.display="block";
				btm2btn[index].style.background="#e5004f"
			}


			btm2toleft.onclick=function(){
				index--;
				if(index==-1){index=0}
				for (var i = 0; i < btm2img.length; i++) {
					btm2img[i].style.display="none";
					btm2btn[i].style.background="#6e6e6e"
				};
				btm2img[index].style.display="block";
				btm2btn[index].style.background="#e5004f"
			}

			for (var i = 0; i < btm2btn.length; i++) {
				btm2btn[i].index=i;
				btm2btn[i].onclick=function(){
					for (var j = 0; j < btm2img.length; j++) {
						btm2img[j].style.display="none";
						btm2btn[j].style.background="#6e6e6e";
					};
					this.style.background="#e5004f"
					btm2img[this.index].style.display="block";
				}
			};
		}
	}






	//logo滚动

	var btm1Box=getClass('btm1-btm');
	for (var i = 0; i < btm1Box.length; i++) {
		check(btm1Box[i]);
		function check(btm1Box){
			var btm1box=getClass('btm1logo',btm1Box)[0];
			var btm1img=btm1box.getElementsByTagName('div');
			btm1img[0].style.left=0;

			var w2=parseInt(getStyle(btm1img[0],"width"))
			var index2=0;
			var next2=0;	
			var toleft=getClass('to-left',btm1Box)[0];
			var toright=getClass('to-right',btm1Box)[0];

			toright.onclick=function(){
				next2++;
				if(next2==btm1img.length){next2=0};
				btm1img[next2].style.left=w2+"px";
				animate(btm1img[index2],{left:-w2},500)
				animate(btm1img[next2],{left:0},500)
				index2=next2;
			}
			toleft.onclick=function(){
				next2--;
				if(next2==-1){next2=btm1img.length-1};
				btm1img[next2].style.left=-w2+"px";
				animate(btm1img[index2],{left:w2},500)
				animate(btm1img[next2],{left:0},500)
				index2=next2;
			}
		}
	};
	



	// 边框效果
	var brand3=$('.type-brands-btm3');
	for (var i = 0; i < brand3.length; i++) {
		brand(brand3[i])
		function brand(brand3){
			var imgBox=$('.btm3img',brand3);
			for(var i=0;i<imgBox.length;i++){
				border(imgBox[i])
				function border(imgBox){
					var bt=$(".bt",imgBox)[0];
					var bl=$(".bl",imgBox)[0];
					var br=$(".br",imgBox)[0];
					var bb=$(".bb",imgBox)[0];
					var iiw=imgBox.clientWidth;
					var iih=imgBox.clientHeight;
					imgBox.onmouseover=function(){			
						animate(bt,{width:iiw})
						animate(bb,{width:iiw})
						animate(br,{height:iih})
						animate(bl,{height:iih})
					}
					imgBox.onmouseout=function(){
						animate(bt,{width:0})
						animate(bb,{width:0})
						animate(br,{height:0})
						animate(bl,{height:0})
					}
				}
			}
		}
	};
	




	// banner推荐左移
	




	
// 楼层跳转

	var floors=$('.type-brands');
	var box=$('.float-nav')[0];
	var fs=$('a',box);
	var floorArr=[];
	var kaiguan=true;
	var pH=document.documentElement.clientHeight;
	for(var i=0;i<floors.length;i++){
		floorArr.push(floors[i].offsetTop)
	}
	for(var i=0;i<fs.length-1;i++){
		fs[i].index=i;
		fs[i].onclick=function  () {
			kaiguan=false;
			animate(document.body,{scrollTop:floorArr[this.index]},function(){
				kaiguan=true;
			});
			animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){
				kaiguan=true;
			});
			for(var j=0;j<fs.length-1;j++){
				fs[j].classList.remove('f-active');
			}
			fs[this.index].classList.add('f-active');
		}
	}
	var ns=fs.length;
	fs[ns-1].onclick=function  () {
		var obj=document.body.scrollTop?document.body:document.documentElement;
    	animate(obj,{scrollTop:0});
	}
	var kg=true;
	var imgBox=$(".imgBox");
	var arr=[];
	var flags=[];
	for(var i=0;i<imgBox.length;i++){
		arr.push(imgBox[i].offsetTop);
		flags.push(true);
	}
	window.onscroll=function  () {
   		for(var i=0;i<arr.length;i++){
			if(arr[i]+200<stop+pH&&flags[i]){
				flags[i]=false;
				var imgs=$("img",imgBox[i]);
				for(var j=0;j<imgs.length;j++){
					imgs[j].src=imgs[j].getAttribute("impath");
				}
			}
		} 
		if(!kaiguan){
			return;
		}
		var obj=document.body.scrollTop?document.body:document.documentElement; 
    	var tops=obj.scrollTop; 
		for(var i=0;i<fs.length-1;i++){
			if(tops+pH>=floorArr[i]+300){
				for(var j=0;j<fs.length-1;j++){
					fs[j].classList.remove('f-active');
				}
				fs[i].classList.add('f-active');
			}
		}
		if(tops>floorArr[0]){
			box.style.display='block';
			kg=false;
		}else{
			box.style.display='none';
			kg=true;
		}
	}




	var weichatimg=$('.weichatimg')[0];
	var weichatimgbox=$('.top-nav-left2')[0];
	hover(weichatimgbox,function(){
		weichatimg.style.display="block"
	},function(){
		weichatimg.style.display="none"
	})

	var ytphone=$('.ytphoneimg')[0];
	var ytphonebox=$('.top-nav-left3')[0];
	hover(ytphonebox,function(){
		ytphone.style.display="block"
	},function(){
		ytphone.style.display="none"
	})



	var myyt=$('.right3list')[0];
	var ytphonebox=$('.top-nav-right3')[0];
	hover(ytphonebox,function(){
		myyt.style.display="block"
	},function(){
		myyt.style.display="none"
	})



	


	
}