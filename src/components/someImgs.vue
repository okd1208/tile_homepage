<template>
  <div class="imgWrap">
    <!-- <img :src="example.img" width="100%"> -->
    <slot name="img"></slot>
    <div class="text">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'someImgs'
}
</script>

<style scoped>
.text {
  opacity: 0;
  color: white;
  position: absolute;
  top: 100px;
  left: 10px;
  -webkit-transform: rotateX(-180deg);
  transform: rotateX(-180deg);
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.imgWrap{
  /* border: 1px solid #ddd; */
  position: relative;
  /* z-index: 1; */
  margin: 0 auto;
  overflow: hidden;
  background: #000;
  /* -webkit-transform: rotateX(-180deg);
  transform: rotateX(-180deg);
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease; */
}
.imgWrap .signup-link{
  width: 100%;
  cursor: pointer;
  transition-duration: 0.6s;
}
.imgWrap:hover .signup-link{
  opacity: 0.6;
  transition-duration: 0.6s;
}
.imgWrap:hover .text{
  opacity: 1;
  transition-duration: 0.6s;
  -webkit-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
</style>
