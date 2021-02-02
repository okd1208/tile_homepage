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
  background-color: rgb(117, 185, 185);
  margin-left: 16px;
}
.btn--blue:hover,
a.btn--blue:hover {
  color: #fff;
  background: rgb(94, 148, 148);
}
</style>
