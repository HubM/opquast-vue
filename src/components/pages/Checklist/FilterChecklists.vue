<template>
  <ul class="contained category-list">
    <li v-for="(category,index) in checklists.category" :key="index" @click="activeFilter(index, category)">
      <div class="category-list__content" :class="{ active: active_el == index }">
        <div v-if='category.icon' v-html='category.icon' class="icon-category"></div>
        <p>{{ category.title }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Filters',
  props: ['checklists', 'activateCategory'],
  data() {
    return {
      active_el: 0,
      activeCategory: [],
    }
  },
  methods: {
    activeFilter(el, category) {
      this.active_el = el;
      this.activeCategory = category;
      this.$emit('activeCategory',this.activeCategory)
    }
  }
}
</script>
