/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-07-18 10:54:47
 * @version $Id$
 */

(function() {

  new Vue({
    el: "#app",
    data: {
      show: false
    },
    methods: {
      toggle() {
        this.show = !this.show;
      },
      beforeEnter: function(el) {
        el.style.color = "red";
      },
      enter(el, done) {
        setTimeout(a => {
          el.style.color = "blue";
        }, 2000);

        setTimeout(a => {
					done();
        }, 4000);
      },
      afterEnter(el) {
				el.style.color = "orange";
      }
    }
  });

})();
