var vm = new Vue({
  el: "#form",
  data: {
    success: false,
    error: false,
    sign: "username"
  },
  methods: {
    change: function(){
      this.success = !this.success;
      this.error = !this.success;
    },
    loginChange: function(){
      this.sign = this.sign === "username" ? "" : "username";
    }
  }
});
