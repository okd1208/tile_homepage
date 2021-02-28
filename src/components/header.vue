<template>
  <header>
    <h2><slot></slot></h2>
  </header>
</template>

<script>
export default {
  name: 'headerText'
}
</script>

<style scoped>
header {
  margin-top: 100px;
  padding: 20px;
  background-color: rgba(241, 236, 236, 0.966);
  font-family: 'HiraMinPro-W6';
}
</style>
