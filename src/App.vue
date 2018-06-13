<template>
  <div id="app">
    <h1>h1 text style</h1>
    <h2>h2 -- Titles text style</h2>  
    <p>Je suis un paragraphe</p>
    <Button class="btn primary" message="click" />
  </div>
</template>

<script>
import Button from './components/Button';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Button
  }
}
</script>

<style lang="scss">
  @import '~styles';
</style>
