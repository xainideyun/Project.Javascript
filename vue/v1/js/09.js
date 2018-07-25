Vue.component("my-sunxsh", {
  template: "<button class='btn' @click.prevent='add()'>\
                <span>{{ item.age }}</span>\
              </button>",
  props: ["item"],
  methods: {
    add: function(){
      this.item.age++;
    }
  }
});
Vue.component("my-sunxsh-2", {
  template: "<button ref='aaa' @click.prevent='addChild()' class='btn btn-warning'>添加 {{total}}</button>",
  data: function(){
    return { total: 0 };
  },
  methods: {
    addChild: function(){
      this.total++;
      this.$emit("add");
    }
  }
});

new Vue({
  el: "#app",
  data: {
    obj: {
      id: "#input",
      value: "孙小双"
    },
    name: "李怡然",
    total: 1,
    list:[
      {name: '华天晓', age: 22, cls: "btn-danger"},
      {name: '李娟娟', age: 21, cls: "btn-success"}
    ]
  },
  methods: {
    addParent: function(){
      this.total++;
    },
    alert: function(){
      console.log(this.total);
    }
  }
});
