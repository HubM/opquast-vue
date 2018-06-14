<template>
  <header class="columns">
    <img src="~assets/logo.svg" alt="Logo Opquast" class="column is-3 is-offset-1 logo">
    <nav class="column is-4">
      <ul class="columns main-items">
        <mainItem v-for="(item,key) in menu.mainItems" :item="item" :key="key" class="column"/>
      </ul>
    </nav>
    <div class="column is-2 is-offset-2">
      <ul class="columns">
        <li class="column" v-for="(item, key) in menu.links" :key="key">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import menu from "../../datas/menu.js";
import mainItem from "./MainItem";

console.log(menu);
export default {
  name: 'headerApp',
  data () {
    return {
      menu: menu
    }
  },
  components: {
    mainItem
  }
}
</script>

<style lang="scss">
  @import '~styles';
</style>
