<template>
  <tr>
    <th>1</th>
    <td>alternatives</td>
    <td>
        <p>
        Chaque image décorative est dotée d'une alternative textuelle appropriée.
      </p>
    </td>  
    <span class="icon-chevron--bottom" @click="openRule"></span>
  </tr>
</template>

<script>
export default {
  name: "SingleRule",
  methods: {
    openRule() {
      alert('OPEN IT BRO');
    }
  }
}
</script>
