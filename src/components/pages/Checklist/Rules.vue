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
    <table class="contained table list-rules">
      <thead>
        <tr>
          <th><abbr title="Numéro">N°</abbr></th>
          <th>
            <Select :rubriques="category.rubriques" />
          </th>
          <th>Description</th>
          <Search />
        </tr>
      </thead>
      <tbody>
        <SingleRule />
      </tbody>
    </table>
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
