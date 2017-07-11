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
})