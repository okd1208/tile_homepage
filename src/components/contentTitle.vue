<template>
  <div>
    <h2 class="main-title"><slot name="mainTitle"></slot></h2>
    <p class="sub-title"><slot name="subTitle"></slot></p>
  </div>
</template>

<script>
export default {
  name: 'headerText'
}
</script>

<style scoped>
.main-title {
  font-size: 26px;
  font-weight: bold;
  margin-top: 96px;
  margin-bottom: 4px;
}
.sub-title {
  color: #068273;
  font-size: 18px;
  margin-bottom: 40px;
}
</style>
