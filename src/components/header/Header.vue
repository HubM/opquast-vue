<template>
  <header class="contained">
    <router-link to='/' class="logo">
      <img src="~assets/logo.svg" alt="Logo Opquast">
    </router-link>

    <div class="is-hidden-tablet burger">
      <span class="icon-menu-burger" ></span>
    </div>

    <nav class="is-hidden-mobile">
      <ul class="main-items">
        <mainItem v-for="(item,key) in menu.mainItems" :item="item" :key="key" />
      </ul>
      <ul class="main-links">
        <router-link tag='li' :to='item.link' v-for="(item, key) in menu.links" :key="key">

          <p>{{ item.name }}</p>
          <span v-if="item.notified === true" class="notifs">
            <img src="~assets/header/notification.svg" alt="">
          </span>
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