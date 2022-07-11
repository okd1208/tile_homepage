<template>
  <header>
    <div class="company-logo" :class="{'bg-white' :!headerToPenetrate || isOpenMenu, 'bg-transparent' :headerToPenetrate && !isOpenMenu}">
      <div>
        <router-link to="/">
          <img src="@/assets/logo/company_logo.png">
          <h2>富永タイル株式会社</h2>
        </router-link>
      </div>
    </div>
    <div class="hamburger-menu sm-only">
      <input type="checkbox" class="menu-btn" id="menu-btn" v-model="isOpenMenu">
      <label for="menu-btn" class="menu-icon"><span class="navicon"></span></label>
      <ul class="menu" :class="{'d-none': isClosing}">
        <li @click="headerMenuToggle"><router-link :class="{'active-menu':$route.name === 'home'}" to="/">ホーム</router-link></li>
        <li @click="headerMenuToggle"><router-link :class="{'active-menu':$route.name === 'OverView'}" to="/OverView">会社情報</router-link></li>
        <li @click="headerMenuToggle"><router-link :class="{'active-menu':$route.name === 'businessContents'}" to="/businessContents">事業内容</router-link></li>
        <li @click="headerMenuToggle"><router-link :class="{'active-menu':$route.name === 'recruit'}" to="/recruit">採用情報</router-link></li>
        <li @click="headerMenuToggle"><router-link :class="{'active-menu':$route.name === 'constructionExample'}" to="/constructionExample">施工例</router-link></li>
        <li @click="headerMenuToggle"><router-link :class="{'active-menu':$route.name === 'contact'}" to="/contact">お問い合わせ</router-link></li>
      </ul>
    </div>
    <nav>
      <ul class="header-menubar sm-none">
        <li><router-link :class="{'active-menu':$route.name === 'home'}" to="/">ホーム</router-link></li>
        <li><router-link :class="{'active-menu':$route.name === 'OverView'}" to="/OverView">会社情報</router-link></li>
        <li><router-link :class="{'active-menu':$route.name === 'businessContents'}" to="/businessContents">事業内容</router-link></li>
        <li><router-link :class="{'active-menu':$route.name === 'recruit'}" to="/recruit">採用情報</router-link></li>
        <li><router-link :class="{'active-menu':$route.name === 'constructionExample'}" to="/constructionExample">施工例</router-link></li>
        <li class="round-gr-btn"><router-link to="/contact">お問い合わせ</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerMenu',
  data: function () {
    return {
      isOpenMenu: false,
      isClosing: false,
      scrollY: 0
    }
  },
  methods: {
    headerMenuToggle () {
      this.isClosing = true
      this.isOpenMenu = false
      setTimeout(() => {
        this.isClosing = false
      }, 100)
    },
    getScrollY () {
      this.scrollY = window.pageYOffset
    }
  },
  computed: {
    headerToPenetrate () {
      if (this.$route.name === 'home' && this.scrollY <= 0) {
        return true
      }
      return false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getScrollY)
  }
}
</script>

<style scoped>
.company-logo {
  position: absolute;
  width: 352px;
}
.bg-transparent {
  background-color: rgba(0, 0, 0, 0);
  transition: 0.5s ease-in 0.1ms;
}
.bg-white {
  background-color: white;
  transition: 0.2s;
}
.company-logo a {
  text-decoration: none;
  color: black;
}
.company-logo div {
  margin: 24px 56px 32px 80px;
}
.company-logo img {
  width: 88px;
}
.company-logo h2 {
  font-size: 24px;
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
.active-menu {
  color: rgb(184, 168, 77) !important;
}

@media screen and (max-width:520px) {
  .company-logo {
    width: 100%;
  }
  .company-logo div {
    margin: 12px;
    text-align: left;
  }
  .company-logo img {
    width: 40px;
  }
  .company-logo h2 {
    font-size: 12px;

    margin-top: 8px;
    display: inline;
  }

  .hamburger-menu {
    text-align: right;
  }
  .hamburger-menu * {
    text-align: center;
  }

  /* Nav items */
  .menu {
    list-style: none;
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    margin-top: 52px;
    padding: 0 0 10px 0;
    clear: both;
    background-color: white;
    transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
    transform: scale(1, 0);
    transform-origin: top;
    z-index: 999;
  }

  /* Hamburger menu button */
  .menu-btn:checked ~ .menu {
    transform: scale(1, 1);
    transform-origin: top;
    transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
  }

  /* Hamburger menbu text */
  .menu a {
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 16px;
    text-transform: capitalize;
    color: #a19f9f;;
    opacity: 0;
    transition: 0.5s;
  }

  .menu li {
    padding: 15px 0;
    margin: 0 54px;
    opacity: 0;
    transition: 0.5s;
  }

  .menu-btn:checked ~ .menu a,
  .menu-btn:checked ~ .menu li {
    opacity: 1;
    transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.2s;
  }

  .menu-btn {
    display: none;
  }

  .menu-icon {
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding: 24px 14px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .navicon {
    background: #ddd;
    display: block;
    height: 3px;
    width: 26px;
    position: relative;
    transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
  }

  .navicon:before,
  .navicon:after {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    background: #ddd;
    transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
  }

  .navicon:before {
    top: 9px;
  }

  .navicon:after {
    bottom: 9px;
  }

  /* Hamburger Menu Animation Start */
  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before {
    top: 0;
  }
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    bottom: 0;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: rgba(0, 0, 0, 0);
    transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
  }
  /* Hamburger Menu Animation End */
}
</style>
