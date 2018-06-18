<template>
  <header class="contained">
    <router-link to='/' class="logo">
      <img src="~assets/logo.svg" alt="Logo Opquast">
    </router-link>

    <img src="~assets/menu/burger.svg" alt="Icône menu burger" class="is-hidden-tablet burger">

    <nav class="is-hidden-mobile">
      <ul class="main-items">
        <mainItem v-for="(item,key) in menu.mainItems" :item="item" :key="key" />
      </ul>
      <ul class="main-links">
        <router-link tag='li' :to='item.link' v-for="(item, key) in menu.links" :key="key">
          {{ item.name }}
        </router-link>
      </ul>
    </nav>
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