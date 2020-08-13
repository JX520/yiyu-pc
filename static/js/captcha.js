// var num = [];
// drawCode(num);
// $("#canvas").on('click', function () {
// 	drawCode(num);
// })
//图片验证码
function drawCode(num) {
	var canvasHight = $('#canvas').height();
	var canvasWidth = $('#canvas').width();
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	canvas.height = canvasHight;
	canvas.width = canvasWidth;

	//定义画的范围
	var Code = ("A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0").split(',');
	//console.log(Code);

	//定义4位验证码
	for (var i = 0; i < 4; i++) {
		var j = Math.floor(Math.random() * Code.length);
		var deg = Math.random() * 30 * Math.PI / 180; //字母的随机弧度（0~30）
		var text = Code[j]; // 随机字母或数字
		num[i] = text.toLowerCase();
		var x = 10 + i * 20;
		var y = 20 + Math.random() * 8;
		context.font = "bold 23px 微软雅黑";
		context.translate(x, y);
		context.rotate(deg);

		context.fillStyle = Color();
		context.fillText(text, 0, 0);


		context.rotate(-deg);
		context.translate(-x, -y);
	}

	//定义验证码随机干扰线条
	for (var i = 0; i < 6; i++) {
		context.strokeStyle = Color();
		context.beginPath();
		context.moveTo(Math.random() * canvasWidth, Math.random() * canvasHight);
		context.lineTo(Math.random() * canvasWidth, Math.random() * canvasHight);
		context.stroke();
	}

	//定义验证码随机干扰点
	for (var i = 0; i < 30; i++) {
		context.beginPath();
		context.arc(randNum(0, 120), randNum(0, 30), 1, 0, Math.PI * 2);
		context.fillStyle = Color();
		context.fill();
	}

}

function randNum(min, max) {
	return parseInt(Math.random() * (max - min + 1) + min);
}

//随机颜色
function Color() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}


function checkCode(num) {

	var val = $("#LAY-user-login-vercode").val().toLowerCase();
	var numCode = num.join("");
	if (val == '') {

		alert('请输入验证码！');

		return false;
	} else if (val == numCode) {
		isCheck = 1;
		//alert('提交成功！');
		//$(".input-val").val('');
		//draw(show_num);
		return true;
	} else {

		alert('验证码错误！请重新输入！');
		$("#LAY-user-login-vercode").val('');
		drawCode(num);
		return false;
	}
};

