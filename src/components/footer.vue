<template>
  <footer>
    <div class="footer">
      <div class="footer-company-info">
        <h1><img src="@/assets/logo/company_logo.png"><span>富永タイル株式会社</span></h1>
        <p>
          〒825-0075<br>
          福岡県福岡市南区長丘5丁目1-26<br>
          TEL:0120-331-3433
        </p>
      </div>
      <div class="footer-menu">
        <ul>
          <li><i class="fas fa-angle-right"></i><router-link to="/">ホーム</router-link></li>
          <li><i class="fas fa-angle-right"></i><router-link to="/OverView">会社情報</router-link></li>
          <li><i class="fas fa-angle-right"></i><router-link to="/businessContents">事業内容</router-link></li>
        </ul>
        <ul>
          <li><i class="fas fa-angle-right"></i><router-link to="/recruit">採用情報</router-link></li>
          <li><i class="fas fa-angle-right"></i><router-link to="/constructionExample">建設事例</router-link></li>
          <li><i class="fas fa-angle-right"></i><router-link to="/tiles">タイル一覧</router-link></li>
        </ul>
        <ul>
          <li><i class="fas fa-angle-right"></i><router-link to="/contact">お問い合わせ</router-link></li>
          <li><i class="fas fa-angle-right"></i><router-link to="/questions">よくある質問</router-link></li>
        </ul>
      </div>
    </div>
    <p class="copy-right">Copyright &copy; 2022 tominagatileu All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'footerArea'
}
</script>

<style scope>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 64px 184px;
}
.footer-company-info img {
  width: 50px;
  margin-right: 16px;
}
.footer-company-info h1 span{
  font-size: 26px;
  font-weight: 400;
  line-height: 50px;
  display: inline-block;
}
.footer-company-info p {
  margin: 0;
  font-size: 16px;
}
.footer-company-info {
  text-align: left;
}
.footer-menu {
  display: flex;
  justify-content: center;
}
.footer-menu li {
  list-style: none;
  text-align: left;
  margin-bottom: 26px;
}
.footer-menu i {
  color: #12887A;
  margin-right: 10px;
  transition: 0.7s;
}
.footer-menu li:hover i {
  transform: rotateY(180deg);
  transition: 0.7s;
}
.footer-menu a {
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s;
}
.footer-menu a:hover {
  color: rgb(184, 168, 77);
  transition: 0.3s;
}

@media screen and (max-width:520px) {
  .footer {
    display: block;
    padding: 16px;
  }
  .footer-company-info h1 span{
    font-size: 22px;
  }
  .footer-company-info p {
    line-height: 1.8em;
    font-size: 14px;
  }
  .footer-menu a {
    font-size: 12px;
  }
  .footer-menu li {
    margin: 8px 0;
  }
  .footer-menu ul {
    padding-left: 0;
    width: 30%;
  }
}
</style>
