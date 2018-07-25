/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-18 11:17:32
 * @version $Id$
 */

(function () {
	
	Vue.component("row", {
		props: {
			num: Number
		},
		data: function(){
			return {
				selfNum: this.num
			};
		},
		template: `<li class="list-group-item">
						<input type="number" class="form-control" :value="selfNum" @keyup.enter="change($event)" />
					</li>`,
		methods: {
			change: function(e){
				this.selfNum = +e.srcElement.value;
				this.$emit("change");
			}
		}
	});

	new Vue({
		el: "#app",
		data: { 
			list: [1,2,3,4,5],
			total: 0
		},
		methods: {
			calc: function(){
				var num = 0;
				for(var item in this.$refs) {
					console.log(typeof this.$refs[item][0].selfNum)
					num += this.$refs[item][0].selfNum;
				}
				this.total = num;
			}
		}

	});

})();