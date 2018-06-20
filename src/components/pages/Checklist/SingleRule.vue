<template>
  <li>
    <div class="head_infos_rule">
      <div>
        <span>{{ rule.index }}</span>
        <p class="rubrique">
          {{ rule.rubrique }}
        </p>
        <p class="description">
          {{ rule.title }}
        </p>
      </div>
      <span class="icon-chevron--bottom" :class="{ active: isOpened }" @click="openRule" v-if="rule.content"></span>
    </div>
    <hr>
    <div class="content_infos_rule" :class="{ opened: isOpened }">
      <h3>Objectifs</h3>
      <div class="objectifs" v-html="rule.content.objectif"></div>
      <h3>Solution technique</h3>
      <div class="solution_technique" v-html="rule.content.solution_technique"></div>
      <h3>Moyen contrôle</h3> 
      <div class="moyen_controle" v-html="rule.content.moyen_controle"></div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SingleRule",
  data() {
    return {
      isOpened: false
    }
  },
  props: ['rule'],
  methods: {
    openRule() {
      this.isOpened = !this.isOpened;
    }
  }
}
</script>
