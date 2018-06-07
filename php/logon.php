<?php
	//引入公共样式
	include'public.php';
	//4.接收客户端数据
	$uname = $_GET['user'];
	$upwd = $_GET['pwd'];
//	echo "$uname";
//	echo "$upwd";
	//5.编写sql语句
	$sql = "INSERT INTO `user`( `username`, `password`) VALUES ('$uname','$upwd')";
	//6.执行sql语句
	$row = mysql_query($sql);
	echo "$row";
	
?>