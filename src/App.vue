<template>
  <div id="app">
    <Button message="click" />
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