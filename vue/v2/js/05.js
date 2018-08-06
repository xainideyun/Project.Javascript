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
			show: true
		},
		methods: {
			toggle(){
				this.show = !this.show;
			}
		}
	});

})();
