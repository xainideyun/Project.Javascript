var vm = new Vue({
  el: "#app",
  data: {
    name: "孙小双",
    age: 29
  },
  methods: {
    getName: function(){
      return alert(this.name);
    }
  }
});

var list = new Vue({
  el: "#list",
  data: {
    arr: [
      {name: "孙小双", age: 29},
      {name: "李怡然", age: 28},
      {name: "李娟娟", age: 25},
      {name: "万星辉", age: 21}
    ],
    abc: '孙小双'
  },
  methods: {
    redirect: function(){
      // window.location.href = "http://www.baidu.com";
      console.log(this);
    }
  }
});
