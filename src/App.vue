<template>
  <div id="app">
    <header-menu id="headerMenu"></header-menu>
    <router-view class="aaaa" />
    <footerMenu></footerMenu>
  </div>
</template>

<script>
import headerMenu from '@/components/headerMenu'
import footerMenu from '@/components/footer'
export default {
  name: 'App',
  components: {
    headerMenu,
    footerMenu
  }
}
</script>

<style>
@import "./css/styles.css";
@font-face {
  font-family: 'Overpass';
  src: url('./fonts/Overpass-VariableFont_wght.ttf');
  unicode-range: U+0000-00FF;
}
#app {
  font-family: "Overpass", 'Noto Sans JP', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.aaaa {
  z-index: 1;
}
#headerMenu {
  z-index: 10;
}
@media screen and (max-width:534px) {
  #app, #headerMenu {
    width: 100%;
  }
}
</style>
