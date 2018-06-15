<template>
  <router-link :to="path">
      {{ message }}
    <svg viewBox="0 0 28 11">
      <defs>
        <path id="a" d="M16.5 6.914l-4 4L11.086 9.5l3-3H.5v-2h13.586l-3-3L12.5.086 17.914 5.5 16.5 6.914z"/>
      </defs>
      <mask id="b" fill="#fff">
        <use xlink:href="#a"/>
      </mask>
      <g  class="arrow" mask="url(#b)">
        <path d="M0 0h18v11H0z"/>
      </g>
    </svg> 
  </router-link>
</template>

<script>
export default {
  name: 'link',
  props: [
    'message',
    'path'
  ],
}
</script>
