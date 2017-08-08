/**
 * 面向对象程序设计
 * @authors Your Name (you@example.org)
 * @date    2017-07-11 22:37:40
 * @version $Id$
 */
var obj = {};
Object.defineProperties(obj, {
	_year: {
		value: 2010
	},
	_name: {
		value: "孙小双"
	},
	year: {
		get: function(){
			return this._year;
		},
		set: function(newYear){
			this._year = newYear;
		}
	}
});


function Person(){}
Person.prototype.name = "孙小双";

var p1 = new Person();

console.log(p1);

Person.prototype = {
	age: "介绍介绍",
	construction: Person
};

console.log(p1);

var p2 = new Person();
console.log(p2);

function PrototypeType(){}
PrototypeType.prototype.abc = "孙小双";
function SubPrototypeType(){};
SubPrototypeType.prototype = new PrototypeType();
var d = new SubPrototypeType();
console.log(d instanceof PrototypeType)