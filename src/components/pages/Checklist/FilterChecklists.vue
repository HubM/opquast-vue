<template>
  <ul class="contained category-list">
    <li v-for="(category,index) in checklists.category" :key="index">
      <div class="category-list__content">
        <div v-if='category.icon' v-html='category.icon' class="icon-category"></div>
        <p>{{ category.title }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Filters',
  props: ['checklists'],
  data() {
    return {
      checklists: checklists
    }
  }
}
</script>
