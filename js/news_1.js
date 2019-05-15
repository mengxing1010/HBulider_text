///怎么使用JS
//三种方式

/*alert('hello world!');
console.log("hello world");
var qiuqiu="miao";
console.log(qiuqiu);
*/

//function slogan(){
//	for(i=1;i<=10;i++){
//	console.log(i+"好好学习 天天向上")
//}
//}
//
//
//var time=7;
//slogan();
//var time=12;
//for (var i=1;i<=10;i++) {
//	console.log(i+"haohaoshuijiao");
//}
//var bcf=confirm("镗床");
//console.log("dianji:"+bcf)
//if (bcf) {
//	提交
//} else{
//	

//}

//var div1=document.getElementById("div1");
////var img1=document.getElementById("img1");
//
//
//function add(event){
//	console.log(event);
//}
//
//div1.addEventListener("click",add);
//
//var input1=document.getElementById("input1");
//input1.addEventListener("keydown",add);
var div1=document.getElementById("div1");
var  div2=document.getElementById("div2");

var head1=document.getElementsByTagName("head")[0];

//捕获阶段
div1.addEventListener("click",div1clickTure,true);
div2.addEventListener("click",div2clickTure,true);

function div1clickTure(){
	console.log("捕获阶段 div1");
}

function div2clickTure(){
	console.log("捕获阶段 div2");
}
//冒泡阶段
div1.addEventListener("click",div1click,false);
div2.addEventListener("click",div2click,false);

function div1click(){
	console.log("冒泡阶段 div1");
}

function div2click(e){
	e.stopPropagation();
	console.log("冒泡阶段  div2");
}

var ul1=document.getElementsByTagName("ul")[0];
ul1.addEventListener("click",ulclick);
function ulclick(e){
	console.log(e.target)
}
