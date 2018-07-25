
new Vue({
  el: "#app",
  data: {
    hide: true
  },
  methods: {
    toggle(){
      this.hide = !this.hide;
    }
  },
  transitions: {
    switch: {
      enterClass: "zoomInLeft",
      leaveClass: "zoomOutRight"
    }
  }
});
