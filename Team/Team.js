<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Team</title>
<link rel="stylesheet" href="./Team.css" >
<script type="text/javascript">
function test1(){
	path='./images/girl.png';
	document.getElementById("idtext").innerHTML='世紹<br><img src="'+path+'" />';
}
function test2(){
	path='./images/girl.png';
	document.getElementById("idtext").innerHTML='怡君<br><img src="'+path+'" />';
}
function test3(){
	path='./images/girl.png';
	document.getElementById("idtext").innerHTML='賢齊<br><img src="'+path+'" />';
}
function test4(){
	path='./images/girl.png';
	document.getElementById("idtext").innerHTML='俊翰<br><img src="'+path+'" />';
}
function test5(){
	path='./images/girl.png';
	document.getElementById("idtext").innerHTML='曉湉<br><img src="'+path+'" />';
}
function test6(){
	path='./images/girl.png';
	document.getElementById("idtext").innerHTML='之琪<br><img src="'+path+'" />';
}
</script>
</head>
<body>
	<div class="first">
		<div class="buttondiv">
			<div class="button-div">
				<input type="button" class="button1" onclick="test1()">
			</div>
			<div class="button-div">
				<input type="button" class="button2" onclick="test2()">
			</div>		
			<div class="button-div">
				<input type="button" class="button3" onclick="test3()">
			</div>
		</div>
		<div class="second">
			<span class="fonts">團隊介紹</span>
			<div class="third">
				<span id="idtext" class="fonts2">
				<br> S．E G1<br>
				<br>By&nbsp;&nbsp;IDS&nbsp;&nbsp;NTUB<br></span>
			</div>
		</div>
		<div class="buttondiv">
			<div class="button-div">
				<input type="button" class="button4" onclick="test4()">
			</div>
			<div class="button-div">
				<input type="button" class="button5" onclick="test5()">
			</div>		
			<div class="button-div">
				<input type="button" class="button6" onclick="test6()">
			</div>
		</div>
	</div>
</body>
</html>