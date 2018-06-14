<template>
  <li>
    <span>{{ item.name }}</span>
  </li>
</template>

<script>
export default {
  name: 'mainItem',
  props: [
    "item"
  ],
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
  @import '~styles';
</style>
