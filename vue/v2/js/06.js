/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-07-18 10:54:47
 * @version $Id$
 */

(function () {


	new Vue({
		el: "#app",
		data: {
			num: 0,
			tweenedNum: 0
		},
		computed: {
			animatedNum: function(){
				return this.tweenedNum.toFixed(0);
			}
		},
		watch: {
			num: function(newNum){
				TweenLite.to(this.$data, 1, { tweenedNum: newNum });
			}
		}
	});

})();
