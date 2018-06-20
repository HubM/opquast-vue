<template>
  <section class="checklists-page">
    <header>
      <div class="contained columns">
        <div class="column is-8 is-offset-3">
          <h1>Les check-lists des professionnels du web</h1>
          <p>
            La checklist de référence pour comprendre, contrôler et appliquer 
            les standards de la qualité web.
          </p>
        </div>
      </div>
        <img 
          src="~assets/checklists/illustration_checklists.svg" 
          alt="Illustration abstraite pour la page checklist"
        >
    </header>
    <article>
      <Filters :checklists="checklists" v-on:activeCategory="setActiveCategory"/>
      <Rules :category="activatedCategory" :checklists="checklists" v-on:filterRules="setFilteredRules" :rules="activatedCategoryAllRules" />
    </article>
  </section>
</template>

<script>
import Filters from './FilterChecklists';
import Rules from './Rules';
import checklists from '../../../datas/checklists.js';

export default {
  name: 'Checklist',
  data() {
    return {
      checklists: checklists,
      activatedCategory: checklists.category[0],
      activatedCategoryAllRules:  checklists.category[0].rules,
    }
  },
  methods: {
    setActiveCategory(category) {
      this.activatedCategory = category;
      this.activatedCategoryAllRules = category.rules;
    },
    setFilteredRules(subcategory) {
      if(this.activatedCategoryAllRules !== undefined) {
        if(subcategory === 'tous') {
          return this.activatedCategoryAllRules = this.activatedCategory.rules;
        } 
        const self = this;
        return this.activatedCategoryAllRules = self.activatedCategory.rules.filter(rule => rule.rubrique === subcategory)
      }
    }
  },
  components: {
    Filters,
    Rules
  }
}
</script>

