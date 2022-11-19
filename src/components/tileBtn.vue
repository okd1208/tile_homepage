<template>
  <router-link to="/tiles"><a class="btn btn--orange sinpleBtn"><slot></slot></a></router-link>
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
  background-color: rgb(184, 168, 77);
}
.btn--orange:hover,
a.btn--orange:hover {
  color: #fff;
  background:rgb(146, 133, 61);
}
</style>
