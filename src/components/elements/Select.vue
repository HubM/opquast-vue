<template>
  <div class="select">
    <select name="rubrique" id="rubrique" v-on:change="changeRubrique" v-model="selectedRubrique" :disabled="rubriques.length <= 1">
      <option v-for="(rubrique,index) in rubriques" :key="index" :value="rubrique" :v-model="selectedRubrique" >{{ rubrique }}</option>
    </select>
    <span class="icon-select"></span>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: ['rubriques'],
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
}
</script>
