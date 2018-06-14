<template>
  <li>
    <p class="main-items__title" @mouseover="hovered">
      {{ item.name }}
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7">
        <path fill="#03061A" fill-rule="nonzero" d="M4.793 5.5l-4-4L1.5.793l4 4 4-4 .707.707L5.5 6.207 4.793 5.5z"/>
      </svg>
    </p>
    <ul class="main-items__sublinks" :class="{ active: isHover }">
      <subItem v-for="(link,key) in item.subLinks" :key="key" :subItem="link" :color="item.color" />
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
  methods: {
    hovered() {
      this.isHover = true;
    }
  }
}
</script>