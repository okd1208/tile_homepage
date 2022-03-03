<template>
  <div class="headerImg" :class="className">
      <div class="headerImgBack">
        <h2 class="headerImgTitle"><slot name="Title"></slot></h2>
        <p class="headerImgText"><slot name="Text"></slot></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'headerImg',
  props: [
    'className'
  ]
}
</script>

<style scoped>
.OverView {
  background-image: url('~@/assets/OverView.jpeg');
}
.recruitImg {
  background-image: url('~@/assets/recruit/recruit5.jpeg');
}
.businessContents {
  background-image: url('~@/assets/businessContents.jpeg');
}
.headerImg {
  background-color: rgb(238, 238, 238);
  height: 450px;
  margin-top: 100px;
  text-align: center;
  /* 1800:600 */
  background-size: cover;
}
.headerImgBack {
  height: 450px;
  padding-top: 160px;
  font-size: 46px;
  background-color: rgba(78, 77, 77, 0.548);
  color: white;
}
.headerImgTitle {
  font-size: 52px;
  letter-spacing: 2px;
}
.headerImgText {
  font-family: serif;
  font-size: 32px;
}
</style>
