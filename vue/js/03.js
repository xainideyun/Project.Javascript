/**
 * @authors Your Name (you@example.org)
 * @date    2018-07-19 08:36:33
 * @version $Id$
 */

Vue.component("row", {
	data: function(){
		return {
			list: [{name: "孙小双", quantity: 1}, {name: "李怡然", quantity: 2}, {name: "李娟娟", quantity: 3}]
		};
	},
	template: `
	<ul class="list-group">
		<li class="list-group-item" v-for='item in list'>
			<slot :item='item.quantity'></slot>
			{{item.name}}
		</li>
	</ul>
	`,
});

new Vue({
	el: "#app"
});