<template>
  <div class="input-search" @keypress.enter="searchable">
    <input type="search" placeholder="Rechercher">
    <span class="icon-search"><span class="path1"></span><span class="path2"></span></span>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    searchable() {
      alert('ok');
    }
  }
}
</script>
