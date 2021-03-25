<template>
  <footer>
    <div class="footer">
      <div class="parent">
        <ul class="container">
          <p class="containerTitle">知りたい</p>
          <li class="footerList"><router-link to="/Overview" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>会社概要</p></router-link></li>
          <li class="footerList"><router-link to="/Contents" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>事業内容</p></router-link></li>
          <li class="footerList"><router-link to="/Recruit" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>採用情報</p></router-link></li>
        </ul>
        <ul class="container">
          <p class="containerTitle">見たい</p>
          <li class="footerList"><router-link to="/tiles" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>タイル一覧</p></router-link></li>
          <li class="footerList"><router-link to="/ConstructionExample" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>建設事例一覧</p></router-link></li>
        </ul>
        <ul class="container">
          <p class="containerTitle">入りたい</p>
          <li class="footerList"><router-link to="/Recruit" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>採用情報</p></router-link></li>
          <li class="footerList"><router-link to="/Recruit" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>技術職</p></router-link></li>
          <li class="footerList"><router-link to="/Recruit" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>総合職</p></router-link></li>
        </ul>
        <ul class="container">
          <p class="containerTitle">聞きたい</p>
          <li class="footerList"><router-link to="/Contact" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>お問い合わせ</p></router-link></li>
          <li class="footerList"><router-link to="/questions" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>よくある質問</p></router-link></li>
        </ul>
        <ul class="container">
          <p class="containerTitle">買いたい</p>
          <li class="footerList"><router-link to="/tiles" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>タイル一覧</p></router-link></li>
          <li class="footerList"><router-link to="/" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>タイル入荷情報</p></router-link></li>
          <li class="footerList"><router-link to="/" class="text-dark"><p class="containerText"><i class="fas fa-angle-right arrow"></i>検索</p></router-link></li>
        </ul>
      </div>
      <div class="imformation">
        <div class="company">
          <h4 class="companyTitle">冨永タイル株式会社</h4>
        </div>
        <div class="companyImfo">
          <p class="companyInfoText">福岡県福岡市長尾区</p>
          <p class="companyInfoText">TEL. 0120-331-3433</p>
          <p class="companyInfoText">営業時間: 平日,8時〜20時 土日祝,8時〜20時</p>
        </div>
        <div class="lastText"><p class="fooderText">@TOMINAGA TALE CO..,LTD ALL GOOD</p></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerArea'
}
</script>

<style>
.footer {
  /* height: 400px; */
  background-color: rgba(197, 190, 190, 0.5);
  margin-top: 32px;
}
.fooderText {
  text-align: right;
  /* opacity: 0.5; */
  margin-top:  100px;
  font-size: 14px;
}
.parent {
  display: flex;
  padding-top: 32px;
  text-align: left;
}
.footerList {
  list-style: none;
}
.container {
  height: 130px;
  width: 200px;
}
.containerTitle {
  font-weight: bold;
  border-bottom: 1px solid rgb(119, 114, 114);
}
.containerText:hover {
  cursor: pointer;
  /* border-bottom: 1px solid rgb(119, 114, 114); */
  color:rgb(118, 146, 77);
}
.arrow {
  color: rgb(118, 146, 77);
  margin-right: 16px;
}
.imformation {
  display: flex;
  margin: 100px 36px 0 36px;
  border-top: 1px solid rgb(119, 114, 114);
}
.companyTitle {
  margin-top: 55px;
  margin-right: 50px;
}
.companyImfo {
  /* padding-left: 50px; */
  margin-top: 16px;
  text-align: left;
}
.lastText {
  width: 60%;
}

@media screen and (max-width:800px) {
  .container {
    height: 30px;
    width: 14%;
  }
  .containerText {
    display: none;
  }
  .containerTitle:active .containerText{
    display: inline-block;
  }
  .containerText:hover {
    cursor: pointer;
    /* border-bottom: 1px solid rgb(119, 114, 114); */
    color:rgb(118, 146, 77);
  }
}
</style>
