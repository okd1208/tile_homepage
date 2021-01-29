<template>
  <router-link to="/tiles"><a class="btn btn--orange"><slot></slot></a></router-link>
</template>

<script>
export default {
  name: 'tileBtn'
}
</script>

<style scoped>
.btn--orange,
a.btn--orange {
  margin-top: 32px;
  color: #fff;
  background-color: #216b46;
}
.btn--orange:hover,
a.btn--orange:hover {
  color: #fff;
  background: #24794e;
}
</style>
