<template>
  <div id="app">
    <h1>h1 text style</h1>
    <h2>h2 -- Titles text style</h2>  
    <h3>h3 - Subtitles text style</h3> 
    <p>Je suis un paragraphe</p>
    <Button class="btn btn-primary" message="Button style 1" />
    <Button class="btn btn-primary-outline" message="Button style 2" />
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
