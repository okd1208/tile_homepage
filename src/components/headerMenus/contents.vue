<template>
 <div>
   <body-header>事業内容</body-header>
   <div class="body">
     <div class="top">
       <h2 class="topTitle">場面に応じて使いわける</h2>
       <p>冨永タイルでは、約1000種類の様々なタイルを取り扱っております。</p>
       <p>そのため、お客様のニーズに合ったタイルをご提案し、発注しております。</p>
       <p>冨永タイルでは、約1000種類の様々なタイルを取り扱っております。</p>
       <p>そのため、お客様のニーズに合ったタイルをご提案し、発注しております。</p>
       <tile-btn>タイル一覧をみる</tile-btn>
       <construction-btn>施工例一覧を見る</construction-btn>
     </div>
     <div class="business divContainer">
       <h2 class="contentsTitle">主な事業・サービス</h2>
       <p class="contentsText">弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っております。</p>
     </div>
     <div class="flow divContainer">
       <h2 class="contentsTitle">タイル工事までの流れ</h2>
       <p class="contentsText">冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。</p>
     </div>
    <h2>タイル工事までの4STEP</h2>
     <div class="step">
      <div class="stepElement stepText">
       <h2 class="stepTitle">STEP1.ヒアリング</h2>
       <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p>
      </div>
      <div class="stepElement stepImg">
       <img src='@/assets/hear.jpg' width="80%">
      </div>
      <div class="stepElement stepText">
       <h2 class="stepTitle">STEP2.ヒアリング</h2>
       <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p>
      </div>
      <div class="stepElement stepImg">
       <img src='@/assets/hear.jpg' width="80%" class="imgRight">
      </div>
      <div class="stepElement stepText">
       <h2 class="stepTitle">STEP3.ヒアリング</h2>
       <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p>
      </div>
      <div class="stepElement stepImg">
       <img src='@/assets/hear.jpg' width="80%" class="imgRight">
      </div>
      <div class="stepElement stepText">
       <h2 class="stepTitle">STEP4.ヒアリング</h2>
       <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p>
      </div>
      <div class="stepElement stepImg">
       <img src='@/assets/hear.jpg' width="80%" class="imgRight">
      </div>
     </div>
   </div>
 </div>
</template>

<script>
import constructionBtn from '@/components/constructionBtn.vue'
import bodyHeader from '@/components//header.vue'
import tileBtn from '@/components//tileBtn.vue'
export default {
  name: 'Contents',
  components: {
    constructionBtn,
    tileBtn,
    bodyHeader
  }
}
</script>

<style scoped>
header {
  margin-top: 100px;
  padding: 20px;
  background-color: rgba(241, 236, 236, 0.966);
  font-family: 'HiraMinPro-W6';
}
.top {
  margin-top: 32px;
  height: 400px;
  background-image: url('~@/assets/whiteTile.jpeg');
  background-size: contain;
  color: white;
}
.topTitle {
  padding: 16px;
  font-family: serif;
}
.step {
  display: flex;
  flex-wrap: wrap;
}
/* .stepImg {
  width: "80%";
} */
.stepElement {
  width: 40%;
  margin: 24px;
  margin-left: auto;
  margin-right: auto;
}
.stepTitle {
  margin: 24px;
  font-family: 'Noto Serif JP', serif;
}
.stepText {
  text-align: left;
  margin-left: 160px;
  margin-right: 0;
}
.contentsTitle {
  text-align: left;
  font-family: 'Sawarabi Mincho', sans-serif;
  border-bottom: black 1px solid;
}
.divContainer {
  width: 75%;
  margin: 64px auto;
  text-align: left;
}
.contentsText {
  font-family: 'Sawarabi Mincho', sans-serif;
}
</style>
