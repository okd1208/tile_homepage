<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark test">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand text-dark" href="/">冨永タイル株式会社</a>
        <div class="collapse navbar-collapse justify-content-start test2">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ml-3 mr-3" @click="changeTopActive">
                    <router-link to="/" class="nav-link text-dark">トップ<p class="subTitle" :class="{'activeSub':topActive}">Top</p></router-link>
                </li>
                <li class="nav-item ml-3 mr-3" @click="changeOverViewActive">
                    <router-link to="/OverView" class="nav-link text-dark">会社情報<p class="subTitle" :class="{'activeSub':OVActive}">About</p></router-link>
                </li>
                <li class="nav-item ml-3 mr-3" @click="changeContentsActive">
                    <router-link to="/contents" class="nav-link text-dark">事業内容<p class="subTitle" :class="{'activeSub':contentsActive}">Bisiness</p></router-link>
                </li>
                <li class="nav-item ml-3 mr-3" @click="changeRecruitActive">
                    <router-link to="/recruit" class="nav-link text-dark">採用情報<p class="subTitle" :class="{'activeSub':recruitActive}">Recruit</p></router-link>
                </li>
                <li class="nav-item ml-3 mr-3" @click="changeTilesActive">
                    <router-link to="/tiles" class="nav-link text-dark">タイル一覧<p class="subTitle" :class="{'activeSub':tilesActive}">tiles</p></router-link>
                </li>
                <li class="nav-item ml-3 mr-3" @click="changeConstructionExampleActive">
                    <router-link to="/constructionExample" class="nav-link text-dark">施工例<p class="subTitle" :class="{'activeSub':constructionExampleActive}">Example</p></router-link>
                </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/contact" class="nav-link btn contactBtn"><span class="contactText">お問い合わせ</span>
                <!-- <p class="subTitle">Contact</p> -->
                </router-link>
              </li>
            </ul>
        </div>
    </nav>
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
.test{
  height: 80px;
  opacity: 0.8;
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
.test2 {
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
@media screen and (max-width:1070px) {
  /* .test2 {
    position: relative;
  }
  .test2{
    position: absolute;
    top: 40px;
    width: 100%;
    background: #072A24;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  } */
}
</style>
