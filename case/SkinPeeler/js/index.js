// close Ad
var topAd = document.getElementById("top");

setTimeout(function(){
    topAd.style.display = "none";
},30000);

document.getElementById("btnAd").onclick = function(){
    topAd.style.display = "none";
}

// skin
var link = document.getElementById("link");
var aBtn = document.getElementsByTagName("button");
for (var i = 0; i < aBtn.length; i++) {
	aBtn[i].onclick = function(){
		link.href = this.data;
	}
}

// goback
window.onscroll = function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if (scrollTop >= 800) {
		goBack.style.display = "block";
	}else{
		goBack.style.display = "none";
	}
}
document.getElementById("goBack").onclick = function(){
	if (document.body.scrollTop) {
		document.body.scrollTop = 0;
	}else{
		document.documentElement.scrollTop = 0;
	}
}

// 隔行变色
var row = document.getElementsByTagName("td");
var rowArr = [].slice.call(row);
//console.log(row);
document.getElementsByTagName("th")[0].onclick = function(){
	for (var i = 0; i < rowArr.length; i++) {
		// if (i % 2) {
		// 	rowArr[i].style.background = getRandomColor();
		// 	rowArr[i].style.color = getRandomColor();
		// }else{
		// 	rowArr[i].style.background = getRandomColor();
		// 	rowArr[i].style.color = getRandomColor();
		// }
		rowArr[i].style.background = getRandomColor();
		rowArr[i].style.color = getRandomColor();
	}
}

function getRandomColor(){
	var color = "#";
	var str = "0123456789abcdef"
	for (var i = 0; i < 6; i++) {
		color += str[Math.floor(Math.random() * 16)];
	}
	console.log(color);
	return color;
}

