<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Button from './components/Button';
import Header from './components/header/Header';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Button,
    Header
  }
}
</script>

<style lang="scss">
  @import '~styles';
</style>
