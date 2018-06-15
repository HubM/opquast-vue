<template>
  <header>
    <router-link to='/'>
    <img src="~assets/logo.svg" alt="Logo Opquast" class="logo">
    </router-link>
    <nav>
      <ul class="columns main-items">
        <mainItem v-for="(item,key) in menu.mainItems" :item="item" :key="key" class="column" />
      </ul>
    </nav>
    <ul class="columns main-links">
      <li class="column" v-for="(item, key) in menu.links" :key="key">
        {{ item.name }}
      </li>
    </ul>
  </header>
</template>

<script>
import menu from "../../datas/menu.js";
import mainItem from "./MainItem";

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