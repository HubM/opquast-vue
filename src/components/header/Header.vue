<template>
  <header class="contained">
    <router-link to='/'>
    <img src="~assets/logo.svg" alt="Logo Opquast" class="logo">
    </router-link>
    <nav>
      <ul class="columns main-items">
        <mainItem v-for="(item,key) in menu.mainItems" :item="item" :key="key" class="column" />
      </ul>
    </nav>
    <ul class="columns main-links">
      <router-link tag='li' :to='item.link' class="column" v-for="(item, key) in menu.links" :key="key">
        {{ item.name }}
      </router-link>
    </ul>
  </header>
</template>

<script>
import menu from "../../datas/main-menu.js";
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