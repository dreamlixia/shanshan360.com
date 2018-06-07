//侧边栏
var oButtonRight = $('button_right');
document.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var oGoTop = $("gotop");
	if(scrollTop < 10){
		oGoTop.style.opacity = 0;
		oGoTop.style.transition = "0.5s";
	}else{
		oGoTop.style.opacity = 1;
	}
}

//.main选项卡
var oHot = $('hot');
var oFree = $('free');
var oUp = $('up');
var oDown = $('down');
oHot.onmouseenter = function(){
	oUp.style.display = 'block';
	oDown.style.display = 'none';
	oHot.style.borderBottom = "none";
	oHot.style.fontSize = "16px";
	oHot.style.fontWeight = "bold";
	oHot.style.background = "#fff";
	oHot.style.color = '#666';
	oFree.style.fontSize = "14px";
	oFree.style.fontWeight = "normal";
	oFree.style.borderBottom = '1px solid #ccc';
	oHot.style.marginTop = '1px'; 
}
oFree.onmouseenter = function(){
	oUp.style.display = 'none';
	oDown.style.display = 'block';
	oFree.style.fontSize = "16px";
	oFree.style.fontWeight = "bold";
	oHot.style.fontWeight = "normal";
	oFree.style.background = "#fff";
	oFree.style.color = '#666';
	oHot.style.borderBottom = '1px solid #ccc';
	oHot.style.fontSize = "14px";
	oFree.style.borderBottom = "none";
}

//计时器
timer();
function timer(){
	var oDate = $('b');
	var oHours = $('strong');
	var oMinutes = $('min');
	var oSeconds = $('em');
	clearInterval(timers);
	var timers = setInterval(fn,1000);
	function fn(){
		var start = new Date();
		var end = new Date(2018,05,31,08,59,0);
		var d = parseInt((end.getTime() - start.getTime())/1000);//剩余总秒数
		var t = parseInt(d/3600/24);
		var h = parseInt((d-t*3600*24)/3600);
		var m = parseInt((d-t*3600*24-h*3600)/60);
		var s = parseInt(d-t*3600*24-h*3600-m*60);
		if(s < 10){
			oSeconds.innerHTML = '0' + s ;
		}else{
			oSeconds.innerHTML =  s ;
		}
		if(t < 10){
			oDate.innerHTML = '0' + t ;
		}else{
			oDate.innerHTML =  t ;
		}
		if(h < 10){
			oHours.innerHTML = '0' + h ;
		}else{
			oHours.innerHTML =  h ;
		}
		if(m < 10){
			oMinutes.innerHTML = '0' + m ;
		}else{
			oMinutes.innerHTML =  m ;
		}
	}
}





function $(id){
	return document.getElementById(id);
}

