<template>
  <header>
    <div class="company-logo">
      <div>
        <router-link to="/">
          <img src="@/assets/logo/company_logo.png" width="88px">
          <h2>富永タイル株式会社</h2>
        </router-link>
      </div>
    </div>
    <nav>
      <ul class="header-menubar">
        <li><router-link :class="{'active-menu':$route.name === 'home'}" to="/">ホーム</router-link></li>
        <li><router-link :class="{'active-menu':$route.name === 'OverView'}" to="/OverView">会社情報</router-link></li>
        <li><router-link :class="{'active-menu':$route.name === 'businessContents'}" to="/businessContents">事業内容</router-link></li>
        <li><router-link :class="{'active-menu':$route.name === 'recruit'}" to="/recruit">採用情報</router-link></li>
        <li><router-link :class="{'active-menu':$route.name === 'constructionExample'}" to="/constructionExample">施工例</router-link></li>
        <li class="contact-btn"><router-link to="/contact">お問い合わせ</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerMenu',
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.company-logo {
  background-color: white;
  position: absolute;
  width: 352px;
}
.company-logo a {
  text-decoration: none;
  color: black;
}
.company-logo div {
  margin: 24px 56px 32px 80px;
}
.company-logo h2 {
  font-size: 24px;
  font-weight: 500;
  margin-top: 8px;
}
.header-menubar {
  display: flex;
  justify-content: flex-end;
  padding: 40px 0;
  list-style: none;
  margin-bottom: 0;
}
.header-menubar li {
  padding: 0 32px;
  line-height: 20px;
}
.header-menubar a {
  color: #12887A;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}
.header-menubar li:not(:last-child) {
  height: 20px;
  border-right: 1px solid #A3A3A3;
}
.contact-btn a {
  background-color: #12887A;
  padding: 8px 24px;
  border-radius: 20px;
  color: white;
}
.active-menu {
  color: rgb(184, 168, 77) !important;
}
</style>
