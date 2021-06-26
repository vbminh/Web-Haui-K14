/**
 * 
 */
//bai1-phiếu 1
	var can = ["Canh", "Tân", "Nhâm", "Quí", "Giáp", "Ất", "Binh", "Đinh", "Mậu", "Kỷ"];
    var chi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

function result(){
    var tmp = document.getElementById("duong");
    var x = parseInt(tmp.value);
    var tmpCan = can[x % 10];
    var tmpChi = chi[parseInt((x % 60) % 12)];
    document.getElementById("am").innerHTML = tmpCan + " " + tmpChi;
}
//bài 2 phiếu 1
	var sum = 0;
	var temp = 0;
	
function bam(x) {
	temp = x;
}

function kq() {
	document.getElementById("kq").textContent = sum + temp;
	
	sum = 0;
	temp = 0;
}

function plus() {
	sum += temp;
}
//bài 2 phiếu 2
function tru() {
	sum += temp;
}

function kqt() {
	document.getElementById("kqt").textContent = sum - temp;
	
	sum = 0;
	temp = 0;
}
//bài 1-phiếu 2
function PTB2() {
	var a = document.getElementById("a");
	var b = document.getElementById("b");
	var c = document.getElementById("c");
	
	var tmpA = a.value;
	var tmpB = b.value;
	var tmpC = c.value;
	var x1, x2;
	
	var del = tmpB * tmpB - 4 * tmpA * tmpC;
	
	if(del < 0) {
		document.getElementById("kq").innerHTML ="Phương trình vô nghiệm";
		tmpA = tmpB = tmpC =0;
		}
	else {
		document.getElementById("kq").innerHTML ="Phương trình hai nghiệm: <br>x1 = " + ((-tmpB + Math.sqrt(del)) / (2 * tmpA)) + "<br>x2 = " + ((-tmpB - Math.sqrt(del)) / (2 * tmpA));
	 	tmpA = tmpB = tmpC =0;
	 	}
}

//bài 1 phiếu 3
function PTB1() {
	var a1 = document.getElementById("a1");
	var b1 = document.getElementById("b1");
	var c1 = document.getElementById("c1");
	var a2 = document.getElementById("a2");
	var b2 = document.getElementById("b2");
	var c2 = document.getElementById("c2");
	
	var tmpA1 = a1.value;
	var tmpB1 = b1.value;
	var tmpC1 = c1.value;
	var tmpA2 = a2.value;
	var tmpB2 = b2.value;
	var tmpC2 = c2.value;
	
	document.getElementById("Gptb1").innerHTML= "Nghiệm của phương trình là: <br>x = " + ((tmpC1 - tmpB1 * (tmpA2 * tmpC1 - tmpA1 * tmpC2)/(tmpA2 * tmpB1 - tmpA1*tmpB2))/tmpA1) + "<br>y = " + ((tmpA2 * tmpC1 - tmpA1 * tmpC2)/(tmpA2 * tmpB1 - tmpA1*tmpB2));
}

//bài 2 phiếu 3
function check() {
	var tmp = document.getElementById("number");
	if(tmp.value > 0 && tmp.value <= 10) {
		var kq = document.getElementById("check");
		kq.textContent="Dữ liệu đúng";
	}
	else {
		document.getElementById("check").textContent="Dữ liệu không đúng";
	}
}