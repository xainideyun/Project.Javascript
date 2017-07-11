/**
 * 
 * @authors ${author} (${email})
 * @date    2017-06-27
 * @version $Id$
 */

var sunxsh = "sunxiaoshuang";

function abc(){
	var name = "孙小双";
	console.log(this);
}

var box = {age: 29, number: 2071714117};
abc.call(box);
console.log(box);

var arr = [2,92,4,5,7,5,4,4]
var result = arr.reduce(function(a,b,c,d){
	console.log(a)
	return a + b;
}, 100);

console.log(result)