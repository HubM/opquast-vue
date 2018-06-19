<template>
  <ul class="contained category-list">
    <li v-for="(category,index) in checklists.category" :key="index" @click="activeFilter(index)">
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
  props: ['checklists'],
  data() {
    return {
      isActive: false,
      active_el: 0,
    }
  },
  methods: {
    activeFilter(el) {
      this.active_el = el;
    }
  }
}
</script>
