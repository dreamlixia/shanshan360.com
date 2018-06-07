//鼠标划过.place（发货地）时
$(".mess .place").mouseenter(function(){
	$(".mess .place ul").css("display","block");
})
$(".mess .place").mouseleave(function(){
	$(".mess .place ul").css("display","none");
})
//鼠标划过.sort（默认顺序）时
$(".mess .sort").mouseenter(function(){
	$(".mess .sort ol").css("display","block");
})
$(".mess .sort").mouseleave(function(){
	$(".mess .sort ol").css("display","none");
})

//侧边栏效果
//鼠标移入第一个按钮
$(".vivo .vivo_show").mouseenter(function(){
	$(".vivo_head").css("display","block");
	$(".vivo_show").css("background","url(../img_second/20130325_backTop.png) no-repeat -56px 0px");
	
	$(this).animate({"opacity":0.3})
	$('.vivo_menu').animate({"left":-208,"opacity":1},500,function(){
		$(".vivo_show").animate({"opacity":1});
	});
})
//鼠标移出第一个按钮
$(".vivo .vivo_show").mouseleave(function(){
	$(".vivo .vivo_show").css("background","url(../img_second/20130325_backTop.png) no-repeat");
	$(".vivo .vivo_head").css("display","none");
	$('.vivo_menu').animate({"left":55,"opacity":0});
})
//鼠标移入第二个按钮
$(".vivo .vivo_gotop").mouseenter(function(){
	$(".vivo .vivo_gotop").css("background","url(../img_second/20130325_backTop.png) no-repeat -56px -41px");
})
//鼠标点击第二个按钮，回到顶部
$(".vivo .vivo_gotop").click(function(){
	$("html,body").animate({scrollTop:0},500);
});
//鼠标移出第二个按钮
$(".vivo .vivo_gotop").mouseleave(function(){
	$(".vivo .vivo_gotop").css("background","url(../img_second/20130325_backTop.png) no-repeat 0px -41px");
})
