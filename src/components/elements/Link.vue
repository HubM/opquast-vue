<template>
  <router-link :to="path">
      {{ message }}
    <span class="icon-arrow--right"></span>
  </router-link>
</template>

<script>
export default {
  name: 'link',
  props: [
    'message',
    'path'
  ],
}
</script>
