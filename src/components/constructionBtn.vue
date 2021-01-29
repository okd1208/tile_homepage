<template>
  <router-link to="/constructionExample"><a href="" class="btn btn--blue"><slot></slot></a></router-link>
</template>

<script>
export default {
  name: 'constructionBtn'
}
</script>

<style scoped>
.btn--blue,
a.btn--blue {
  margin-top: 32px;
  color: #fff;
  background-color: #212c6b;
  margin-left: 16px;
}
.btn--blue:hover,
a.btn--blue:hover {
  color: #fff;
  background: #273d86;
}
</style>
