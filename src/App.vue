<template>
  <div id="app">
    <header-menu v-if="!$store.state.isAdminPage" id="headerMenu"></header-menu>
    <router-view class="top-index" />
    <request-erea v-if="!$store.state.isAdminPage"></request-erea>
    <footerMenu v-if="!$store.state.isAdminPage"></footerMenu>
  </div>
</template>

<script>
import headerMenu from '@/components/headerMenu'
import requestErea from '@/components/requestErea'
import footerMenu from '@/components/footer'
export default {
  name: 'App',
  components: {
    headerMenu,
    requestErea,
    footerMenu
  }
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
@import "./css/styles.css";
@import "./css/slick-theme.css";
@import "./css/slick.css";
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
.top-index {
  z-index: 1;
}
#headerMenu {
  z-index: 1001;
}
@media screen and (max-width:960px) {
  #app, #headerMenu {
    width: 100%;
  }
  #headerMenu {
    position: fixed;
    top: 0;
  }
}
</style>
