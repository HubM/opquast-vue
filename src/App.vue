<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/header/Header';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Header,
  }
}
</script>

<style lang="scss">
  @import '~styles';
</style>
