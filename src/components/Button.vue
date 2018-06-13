<template>
  <button class="btn">
    {{ message }}
  </button>
</template>

<script>
export default {
  name: 'button',
  props: [
    'message'
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
