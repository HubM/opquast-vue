<template>
  <div>
    <section class="checklists-page">
      <header>
        <div class="contained columns">
          <div class="column is-11 is-offset-1 is-8-fullhd is-offset-3-fullhd">
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
        <Filters :checklists="checklists" 
                v-on:activeCategory="setActiveCategory"
        />
        <Rules :category="activatedCategory" 
              :checklists="checklists" 
              v-on:filterRules="setFilteredRules" 
              :rules="activatedCategoryAllRules" 
        />
        <div class="contained join_us">
          <h2>Vous souhaitez participer à la définition de nos checklists ?</h2>
          <p>Venez vous inscrire et réfléchissez, construisez de nouvelles recommandations et bonnes pratiques pour le web à nos côtés.</p>
          <a href="http://community.opquast.com/questions/" class="btn btn-primary">
            Rejoindre la communauté
            <span class="icon-arrow--right"></span>
          </a>
        </div>
      </article>
    </section>
    <Footer />
  </div>
</template>

<script>
import Filters from './FilterChecklists';
import Rules from './Rules';
import checklists from '../../../datas/checklists.js';
import Footer from '../../footer/Footer';

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
    },
  },
  components: {
    Filters,
    Rules,
    Footer
  }
}
</script>

