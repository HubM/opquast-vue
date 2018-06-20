<template>
  <div>
    <div class="contained before-table">
      <div class="icon" v-html="category.icon"></div>
      <div class="content">
        <h2>{{ category.title }}</h2>
        <p>{{ category.nbCriteres }} critères. La checklist de référence pour la qualité des sites !</p>
        <b>version 3</b>
      </div>
    </div>
    <article class="contained header-list-rules">
      <div>
        <p><abbr title="Numéro">N°</abbr></p>
        <Select :rubriques="category.rubriques" />
        <p>Description</p>
      </div>
      <Search />
    </article>
    <aside class="contained list-rules">
      <ul v-if="category.rules">
        <SingleRule v-for="(rule, index) in category.rules" :key="index" :rule="rule" />
      </ul>
      <p v-else class="has-text-centered">Pas de règles pour cette catégorie</p>
    </aside>
  </div>
</template>

<script>
import Search from '../../elements/Search';
import Select from '../../elements/Select';
import SingleRule from './SingleRule';

export default {
  name: "rules",
  props: ['category', 'checklists'],
  methods: {
  },
  components: {
    Search,
    Select,
    SingleRule
  }
}
</script>
