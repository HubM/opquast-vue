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
      <Filters :checklists="checklists"/>
    </article>
  </section>
</template>

<script>
import Filters from './FilterChecklists';
import checklists from '../../../datas/checklists.js';

export default {
  name: 'Checklist',
  data() {
    return {
      checklists: checklists
    }
  },
  components: {
    Filters
  }
}
</script>

