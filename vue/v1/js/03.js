Vue.component("sunxsh-li", {
  props: ["item"],
  template: "<li class='list-group-item'>{{ item.text }}</li>"
});

var v1 = new Vue({
  el: "#body",
  data: {
    list: [{
        id: 1,
        text: '孙小双'
      },
      {
        id: 2,
        text: '李怡然'
      },
      {
        id: 3,
        text: '李娟娟'
      }
    ],
    firstName: "孙",
    lastName: "小双",
    question: "输入问题..."
  },
  watch: {
    question: function(newQuestion){
      console.log(newQuestion);
    }
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },
  created: function() {       // 钩子函数
    console.log(this);
  }
});
