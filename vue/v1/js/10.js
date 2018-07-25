window.onload = function() {
  new Vue({
    el: "#app",
    data: {
      key: "",
      keys: [],
      nowIndex: -1
    },
    methods: {
      search: function() {
        var url = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su`;
        var self = this;
        this.$http.jsonp(url, {params: {wd: this.key}, jsonp: "cb"}).then(function(res){
          this.keys = res.data.s;
        }, function(res){

        })
      },
      down: function() {
        this.nowIndex++;
        if(this.nowIndex > this.keys.length)this.nowIndex = -1;
      },
      up: function() {
        this.nowIndex--;
        if(this.nowIndex === -1)this.nowIndex = this.keys.length;
      }
    }
  });
};
