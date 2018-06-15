<template>
  <router-link tag="li" :to='subItem.link'>
    <img :src="subItem.icon">
    <div class="main-items__sublink__content" :style="colorize">
      <p>{{ subItem.name }}</p>
      <span>{{ subItem.description }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'subItem',
  props: [
    "subItem",
    "color",
    "lightenColor"
  ],
  computed: {
    colorize() {
      return `color: ${ this.color }`;
    }
  }
}
</script>
