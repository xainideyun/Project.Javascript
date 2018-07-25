/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-18 10:54:47
 * @version $Id$
 */

(function () {
	Vue.prototype.bus = new Vue();
	Vue.component("row", {
		props: ["content"],
		template: "<li @click='handleClick()'>{{selfContent}}</li>",
		data: function(){
			return {
				selfContent: this.content
			}
		},
		methods: {
			handleClick: function(){
				console.log("aa");
				this.bus.$emit("change", this.selfContent);
			}
		},
		mounted: function(){
			var self = this;
			this.bus.$on("change", function(content){
				self.selfContent = content;
			});
		}

	});

	new Vue({
		el: "#app",
		data: {
			list: ["孙小双", "李怡然", "李娟娟"]
		}
	});

})();