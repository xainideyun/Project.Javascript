
Vue.component("my-sunxsh", {
  template: `#sunxsh`,
  props: ["item"],
  data(){
    return {
      name: this.item.name,
      quantity: this.item.quantity
    }
  },
  methods: {
    change(){
      vm.list.forEach(obj => obj.selected = false);
      this.item.selected = true;
    }
  }
});
var vm = new Vue({
  el: "#app",
  data: {
    list: [
      {id: 1, name: "苹果", quantity: 3, selected: false},
      {id: 2, name: "香蕉", quantity: 32, selected: true},
      {id: 3, name: "香梨", quantity: 12, selected: false},
      {id: 4, name: "猕猴桃", quantity: 45, selected: false}
    ]
  }
});
