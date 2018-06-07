//正则验证
//用户名只能由中文、英文、数字及“_”、“-”组成且不能为全数字,长度应在6到40的字符之间
var uemail = /^\w+@[a-z0-9]+\.[a-z]{2,3}$/;//邮箱
var uphone = /^1[0-9]{10}$/;//手机号
var user = /^[\u4e00-\u9fa5]{2,4}$|^[a-zA-Z]{6,40}$/;//用户名
//密码位6-20个字符,不能输入空格
var pwd = /^\w{6,20}$/;

var oUser = $('user');
var oUser1 = $('user1');
var oPwd = $('pwd');
var oPwd1 = $('pwd1');
var oPwdagain = $('pwdagain');
var oPwdagain1 = $('pwdagain1');
var oCode = $('code');
var oCodema = $('codema');
var oCode= $('code');
var oCode1 = $('code1');

//账号
oUser.onfocus = function(){
	oUser1.style.display = 'block';
	oUser1.innerHTML = "请输入用户名/邮箱/手机号。";
	oUser1.style.border = "1px solid #ccc";
	oUser1.style.background = "#f7f7f7";
	oUser1.style.color = "#999";
}
var usera;
oUser.onblur = function(){
	
	if(user.test(oUser.value) || uphone.test(oUser.value) || uemail.test(oUser.value)){
		oUser1.style.display = 'none';
		oUser.style.background = "url(../img_logon/sucess.png) no-repeat 246px center";
		usera = true;
	}else{
		oUser1.innerHTML = "请输入正确的账号名";
		oUser1.style.display = 'block';
		oUser1.style.border = "1px solid #ffbdbe";
		oUser1.style.background = "#ffebeb";
		oUser1.style.color = "#e4393c";
		usera = false;
	}
}
//密码
oPwd.onfocus = function(){
	oPwd1.style.display = 'block';
	oPwd1.innerHTML = '6-20个字符。';
	oPwd1.style.border = "1px solid #ccc";
	oPwd1.style.background = "#f7f7f7";
	oPwd1.style.color = "#999";
}
var pwda;
oPwd.onblur = function(){
	
	if(pwd.test(oPwd.value)){
		oPwd.style.background = "url(../img_logon/sucess.png) no-repeat 246px center";
		oPwd1.style.display = 'none';
		pwda = true;
	}else{
		oPwd1.innerHTML = '密码格式不正确';
		oPwd1.style.display = 'block';
		oPwd1.style.border = "1px solid #ffbdbe";
		oPwd1.style.background = "#ffebeb";
		oPwd1.style.color = "#e4393c";
		pwda = false;
	}
}
//确认密码
oPwdagain.onfocus = function(){
	oPwdagain1.style.display = 'block';
	oPwdagain1.innerHTML = '再输入一次密码。';
	oPwdagain1.style.border = "1px solid #ccc";
	oPwdagain1.style.background = "#f7f7f7";
	oPwdagain1.style.color = "#999";
}
var pwdb;
oPwdagain.onblur = function(){
	
	if(oPwdagain.value === oPwd.value && oPwdagain.value !== ""){
		oPwdagain.style.background = "url(../img_logon/sucess.png) no-repeat 246px center";
		oPwdagain1.style.display = 'none';
		pwdb = true;
	}else{
		oPwdagain1.innerHTML = '两次输入不一致！';
		oPwdagain1.style.display = 'block';
		oPwdagain1.style.border = "1px solid #ffbdbe";
		oPwdagain1.style.background = "#ffebeb";
		oPwdagain1.style.color = "#e4393c";
		pwdb = false;
	}
}
//验证码（随机字母数字）
var oCodema = $('codema');
var oRandom_code = $('random_code');
var str = "abcdefghijkmlnopqrstuvwxyz0123456789";
random();
function random(){
	var rand = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
	oCodema.innerHTML = rand;
}
oRandom_code.onclick = random();
//判断验证码
var codea;
oCode.onblur = function(){
	
	if(oCode.value === oCodema.innerHTML){
		codea = true;
	}else{
		oCode1.innerHTML = '您输入的验证码不匹配，请重新输入。！';
		oCode1.style.display = 'block';
		oCode1.style.border = "1px solid #ffbdbe";
		oCode1.style.background = "#ffebeb";
		oCode1.style.color = "#e4393c";
		codea = false;
	}
}
//提交
var oSubmit = $('submit');
oSubmit.onclick = function(){
	if(usera && pwda && pwdb && codea){
		$.get('../php/logon.php',{"user":oUser.value,"pwd":oPwd.value},function(data){
			if(data){
				location.href = "../html/login.html";			
			}else{
				alert("注册失败！");
			}
		});
	}else{
		oUser.focus();
	}
}




//tools
function $(id){
	return document.getElementById(id);
}