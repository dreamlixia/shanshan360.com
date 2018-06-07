<?php
	//设置字符集
	header('content-type:text/html;charset=utf-8');
	//1.连接数据库__________"本地地址","登录数据库的用户名","登录数据库的密码"
	$scoretab = mysql_connect("localhost","root","root");
	//2.选择数据库_____'数据库名称','数据库所在位置'
	mysql_select_db('shanshan360',$scoretab);
	//3.设置数据库字符集
	mysql_query("set names utf-8");
?>