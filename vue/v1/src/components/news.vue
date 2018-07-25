<template lang="html">
  <div class="news">
    <ul>
      <li v-for="item in list"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: [
        {title: "巴西vs德国", detail: "dddsdsad"},
        {title: "法国vs日本", detail: "dddsdsad"},
        {title: "中国没进世界杯", detail: "dddsdsad"},
        {title: "C罗", detail: "dddsdsad"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
