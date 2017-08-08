/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-17 07:28:06
 * @version $Id$
 */

// function SuperType(name){
// 	this.name = name;
// 	this.code = "2071714117";
// }
// SuperType.prototype.getSuperType = function(){return true};
// function SubType(name, age){
// 	SuperType.call(this, name);
// 	this.age = age;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.getAge = function(){
// 	return this.age;
// }

// var a = new SubType("孙小双", 29);


function SuperType(name){
	this.name = name;
	this.code = "2071714117";
}

SuperType.prototype.getCode = function(){
	return this.code;
}

function SubType(name, age){
	SuperType.call(name);
	this.name = name;
	this.age = age;
}

function inheritPrototype(superType, subType){
	var prototype = Object.create(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}

inheritPrototype(SuperType, SubType);

var a = new SubType("孙小双", 29);
console.log(a)
