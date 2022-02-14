<template>
  <header>
    <b-navbar toggleable="sm" type="light" class="header-nav">
        <b-navbar-brand href="/"><img src='@/assets/logo/company_logo.png' width="70px">富永タイル株式会社</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse class="mt-4 ml-lg-5" id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="ml-xl-3 mr-xl-3" @click="changeTopActive"><router-link to="/" class="nav-link text-dark">トップ<p class="subTitle" :class="{'activeSub':topActive}">Top</p></router-link></b-nav-item>
            <b-nav-item class="ml-xl-3 mr-xl-3" @click="changeOverViewActive"><router-link to="/OverView" class="nav-link text-dark">会社情報<p class="subTitle" :class="{'activeSub':OVActive}">About</p></router-link></b-nav-item>
            <b-nav-item class="ml-xl-3 mr-xl-3" @click="changeContentsActive"><router-link to="/contents" class="nav-link text-dark">事業内容<p class="subTitle" :class="{'activeSub':contentsActive}">Bisiness</p></router-link></b-nav-item>
            <b-nav-item class="ml-xl-3 mr-xl-3" @click="changeRecruitActive"><router-link to="/recruit" class="nav-link text-dark">採用情報<p class="subTitle" :class="{'activeSub':recruitActive}">Recruit</p></router-link></b-nav-item>
            <b-nav-item class="ml-xl-3 mr-xl-3" @click="changeTilesActive"><router-link to="/tiles" class="nav-link text-dark">タイル一覧<p class="subTitle" :class="{'activeSub':tilesActive}">tiles</p></router-link></b-nav-item>
            <b-nav-item class="ml-xl-3 mr-xl-3" @click="changeConstructionExampleActive"><router-link to="/constructionExample" class="nav-link text-dark">施工例<p class="subTitle" :class="{'activeSub':constructionExampleActive}">Example</p></router-link></b-nav-item>
            <b-nav-item class="ml-xl-3 mr-xl-3 d-sm-none"><router-link to="/contact" class="nav-link text-dark">お問い合わせ<p class="subTitle">Contact</p></router-link></b-nav-item>
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
        <ul class="navbar-nav d-none d-sm-block mt-5">
          <li class="nav-item">
            <router-link to="/contact" class="nav-link btn contactBtn"><span class="contactText">お問い合わせ</span>
            <!-- <p class="subTitle">Contact</p> -->
            </router-link>
          </li>
        </ul>
      </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'headerMenu',
  data: function () {
    return {
      topActive: false,
      OVActive: false,
      contentsActive: false,
      recruitActive: false,
      tilesActive: false,
      constructionExampleActive: false
    }
  },
  methods: {
    changeTopActive () {
      this.topActive = true
      this.OVActive = false
      this.contentsActive = false
      this.recruitActive = false
      this.tilesActive = false
      this.constructionExampleActive = false
    },
    changeOverViewActive () {
      this.topActive = false
      this.OVActive = true
      this.contentsActive = false
      this.recruitActive = false
      this.tilesActive = false
      this.constructionExampleActive = false
    },
    changeContentsActive () {
      this.topActive = false
      this.OVActive = false
      this.contentsActive = true
      this.recruitActive = false
      this.tilesActive = false
      this.constructionExampleActive = false
    },
    changeRecruitActive () {
      this.topActive = false
      this.OVActive = false
      this.contentsActive = false
      this.recruitActive = true
      this.tilesActive = false
      this.constructionExampleActive = false
    },
    changeTilesActive () {
      this.topActive = false
      this.OVActive = false
      this.contentsActive = false
      this.recruitActive = false
      this.tilesActive = true
      this.constructionExampleActive = false
    },
    changeConstructionExampleActive () {
      this.topActive = false
      this.OVActive = false
      this.contentsActive = false
      this.recruitActive = false
      this.tilesActive = false
      this.constructionExampleActive = true
    }
  }
}
</script>

<style scoped>
.header-nav{
  height: 80px;
  opacity: 0.9;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgb(255, 255, 255);
}
.subTitle {
  font-size: 14px;
  text-align: center;
  color: rgb(117, 185, 185);
}
.activeSub {
  color: rgb(184, 168, 77);
}
.header-nav-item {
  margin-left: 60px;
  margin-top: 40px;
}
.contactBtn {
  margin-bottom: 36px;
  background-color: rgb(117, 185, 185);
}
.contactBtn:hover {
  background-color: rgb(94, 150, 150);
}
.contactText {
  color: white;
}
header {
  position: absolute;
  /* z-index: 3; */
}
@media screen and (max-width:376px) {
  .header-nav {
    height: auto !important;
  }
  .header-nav > a {
    font-size: 16px !important;
  }
  .navbar-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
}
</style>
