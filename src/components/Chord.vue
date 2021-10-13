<template>
  <div>
    <ul>{{ chord.degree }}: {{ chord.triad }}</ul>
  </div>
</template>

<script>
export default {
  name: "Chord",
  props: ['chord']
}
</script>

<style scoped>

</style>