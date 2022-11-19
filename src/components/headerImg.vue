<template>
  <div class="headerImg" :class="className">
      <div class="headerImgBack">
        <div>
          <h2 class="headerImgTitle"><slot name="Title"></slot></h2>
          <p class="headerImgText"><slot name="Text"></slot></p>
        </div>
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
  text-align: center;
  /* 1800:600 */
  background-size: cover;
}
.headerImgBack {
  text-shadow: 0px 3px 6px #00000029;
  height: 304px;
  background-color: rgba(206, 205, 205, 0.5);
  color: white;
}
.headerImgBack > div {
  padding-top: 98px;
}
.headerImgTitle {
  font-size: 46px;
  font-weight: 700;
  letter-spacing: 2px;
}
.headerImgText {
  font-size: 28px;
  font-weight: 400;
}
@media screen and (max-width: 960px) {
  .headerImg {
    margin-top: 100px;
  }
}
@media screen and (max-width: 520px) {
  .headerImg {
    margin-top: 60px;
  }
  .headerImgBack {
    height: 184px;
  }
  .headerImgBack > div {
    padding-top: 70px;
  }
  .headerImgTitle {
    font-size: 26px;
  }
  .headerImgText {
    font-size: 16px;
  }
}
</style>
