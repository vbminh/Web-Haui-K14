/**
 * 
 */
//Bài 1 phiếu 1

function Focus(x) {
	var x = document.getElementById("box");
	x = window.open("","my Windows","height = 200px, width = 400px");
	x.moveTo(500,0);
	x.document.write("<h2><br>focus</h2>");
}

function Change() {
	var x = document.getElementById("box");
	x = window.open("","my Windows","height = 200px, width = 400px");
	x.value = x.document.write("<h2><br>change</h2>");
}

//Bài 2 phiếu 1
function Changecolor() {
		var x = window.prompt("Nhập màu", "");
        var a = document.getElementsByTagName("body");
        a[0].style.backgroundColor = x;
}

//Bài 3 phiếu 1

var check = true;
function OnOff() {
	if(check){
		document.getElementById("img1").style.zIndex = -1;
        document.getElementById("img2").style.zIndex = 1;
        check = false;
	}else if(!check){
        document.getElementById("img1").style.zIndex = 1;
        document.getElementById("img2").style.zIndex = -1;
        check = true;
    }
}
//Bài 4 phiếu 1;
function cong() {
var x = document.querySelector('#s1').value;
var y = document.querySelector('#s2').value;
	
	if( x === "" || y === "")
		alert("Không được để giá trị rỗng");
	else {
		x = parseFloat(x);
   		y = parseFloat(y);
		var tong = x+y;
    
		document.querySelector('#kq').value = tong;
	}
}

function tru() {
var x = document.querySelector('#s1').value;
var y = document.querySelector('#s2').value;
	
	if( x === "" || y === "")
		alert("Không được để giá trị rỗng");
	else {
		x = parseFloat(x);
   		y = parseFloat(y);
		var hieu = x-y;
    
		document.querySelector('#kq').value = hieu;
	}
}

function nhan() {
var x = document.querySelector('#s1').value;
var y = document.querySelector('#s2').value;
	
	if( x === "" || y === "")
		alert("Không được để giá trị rỗng");
	else {
		x = parseFloat(x);
   		y = parseFloat(y);
		var tich = x*y;
    
		document.querySelector('#kq').value = tich;
	}
}

function chia() {
var x = document.querySelector('#s1').value;
var y = document.querySelector('#s2').value;
    	
	if( x === "" || y === "")
		alert("Không được để giá trị rỗng");
	if( y == 0)
		alert("Số thứ hai phải khác 0");
	else {
		x = parseFloat(x);
   		y = parseFloat(y);
    	var thuong = x/y;
    
		document.querySelector('#kq').value = thuong;
	}
}

function mu() {
var x = document.querySelector('#s1').value;
var y = document.querySelector('#s2').value;
    
	if( x === "" || y === "")
		alert("Không được để giá trị rỗng");
	else {
		x = parseFloat(x);
    	y = parseFloat(y);
		var mu = Math.pow(x,y);
    
		document.querySelector('#kq').value = mu;
	}
}

function C() {
	document.querySelector('#s1').value = "";
	document.querySelector('#s2').value = "";
	document.querySelector('#kq').value = null;
}