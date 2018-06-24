<template>
  <li @mouseover="() => this.isHover = true" @mouseout="() => this.isHover = false">
    <p class="main-items__title">
      {{ item.name }}
      <span class="icon-arrow-menu"></span>
    </p>
    <ul class="main-items__sublinks" :class="[ { active: isHover }, item.class ]">
      <subItem v-for="(link,key) in item.subLinks" :key="key" :subItem="link" :color="item.color" :lightenColor="item.lightenColor" />
    </ul>
  </li>
</template>

<script>
import subItem from './SubItem';
export default {
  name: 'mainItem',
  props: [
    "item"
  ],
  data () {
    return {
      isHover: false
    }
  },
  components: {
    subItem
  },
}
</script>