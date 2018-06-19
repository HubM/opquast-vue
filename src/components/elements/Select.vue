<template>
  <select name="rubrique" id="rubrique">
    <option v-for="(rubrique,index) in rubriques" :key="index" :value="index+1">{{ rubrique }}</option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: ['rubriques']
}
</script>
