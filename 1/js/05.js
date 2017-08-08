/**
 * 函数表达式
 * @authors Your Name (you@example.org)
 * @date    2017-07-18 07:33:48
 * @version $Id$
 */

// 递归
// var fun = (function f(num){
// 	if(num <= 0){
// 		return 1;
// 	} else {
// 		return num * f(num - 1);
// 	}
// });

// console.log(fun(5));

// 静态私有变量
(function(){
	var name = "孙小双", age;
	MyObject = function(){

	};
	MyObject.prototype.getName = function(){
		return name;
	};
	MyObject.prototype.setName = function(value){
		name = value;
	};
})();


var a = new MyObject();
console.log(a.getName());
var b = new MyObject();
b.setName("李怡然");
console.log(a.getName());
