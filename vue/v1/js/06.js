Vue.component('my-component', {
  template: '\
    <li class="list-group-item">\
      {{item.text}}\
      <button class="btn btn-primary" v-on:click="$emit(\'remove\')">&times;</button>\
    </li>\
  ',
  props: ["item"]
});

new Vue({
  el: "#todo-list",
  data: {
    list: [
      {id: 1, text: '李怡然'},
      {id: 2, text: '孙小双'},
      {id: 3, text: '李娟娟'}
    ],
    newObj: '',
    next: 4
  },
  methods: {
    add: function(){
      this.newObj && this.list.push({id: ++this.next, text: this.newObj});
      this.newObj = '';
    },
  }
});
