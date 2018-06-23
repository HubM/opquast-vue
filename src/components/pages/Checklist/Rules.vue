<template>
  <div>
    <div class="contained before-table">
      <div class="icon" v-html="category.icon"></div>
      <div class="content">
        <h2>{{ category.title }}</h2>
        <p v-if="category.rules.length > 0">{{ category.rules.length }} critères. <span>  La checklist de référence pour la qualité des sites ! </span></p>
        <p v-else>Pas de règles pour cette catégorie</p>
        <b>version 3</b>
      </div>
    </div>
    <article class="contained header-list-rules" v-if="category.rules.length > 0">
      <div>
        <p><abbr title="Numéro">N°</abbr></p>
        <Select :rubriques="category.rubriques" v-on:activeRubrique="setActiveCategory"/>
        <p>Description</p>
      </div>
      <div class="input-search" @keypress.enter="searchRules">
        <input type="text" placeholder="Rechercher" v-model="search">
        <span class="icon-search"><span class="path1"></span><span class="path2"></span></span>
      </div>
    </article>
    <aside class="contained list-rules">
      <ul v-if="this.filteredRules && this.filteredRules.length > 0">
        <SingleRule v-for="(rule, index) in this.filteredRules" :key="index" :rule="rule" />
      </ul>
      <p v-else class="has-text-centered">Pas de règles pour cette catégorie</p>
    </aside>
  </div>
</template>

<script>
import Select from '../../elements/Select';
import SingleRule from './SingleRule';

export default {
  name: "rules",
  props: ['category', 'checklists', "rules"],
  data() {
    return {
      search: ''
    }
  },
  computed: {
    filteredRules() {
      if(this.rules !== undefined) {
        return this.rules.filter(rule => rule.title.toLowerCase().includes(this.search.toLowerCase()));
      }
    }
  },
  methods: {
    setActiveCategory(rubrique) {
      this.$emit('filterRules', rubrique);
    },
  },
  components: {
    Select,
    SingleRule
  }
}
</script>
