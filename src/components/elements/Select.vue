<template>
  <select name="rubrique" id="rubrique" v-on:change="changeRubrique" v-model="selectedRubrique">
    <option v-for="(rubrique,index) in rubriques" :key="index" :value="rubrique" :v-model="selectedRubrique" >{{ rubrique }}</option>
  </select>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      selectedRubrique: 'tous',
    }
  },
  methods: {
    changeRubrique(e) {
      this.$emit('activeRubrique',this.selectedRubrique)
    }
  },
  props: ['rubriques']
}
</script>
