new Vue({
  el: "#app",
  data: {
    list: [
      {name: "孙小双", age: 29},
      {name: "李怡然", age: 22},
      {name: "李娟娟", age: 19}
    ]
  },
  methods: {
    event1: function(){
      console.log(this);
    },
    event2: function(item, e){
      console.log(item);
      console.log(e);
    },
    event3: function(){
      console.log(this);
    }
  },
  handler: {
  }
});
