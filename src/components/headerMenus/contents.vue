<template>
 <div>
   <!-- <body-header>事業内容</body-header> -->
   <div class="body">
     <header-img className="contents">
      <template v-slot:Title>BUSINESS</template>
      <template v-slot:Text>事業内容</template>
    </header-img>
    <div class="businessContents">
      <div class="divContainer">
        <h2 class="contentsTitle">主な事業・サービス</h2>
        <p class="keyPhrase">誰よりも何処よりも早く、丁寧に、をもっとウニ。</p>
        <p class="contentsText">弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っております。</p>
      </div>
      <div class="flow divContainer">
        <h2 class="contentsTitle">タイル工事までの流れ</h2>
        <p class="keyPhrase">誰よりも何処よりも早く、丁寧に、をもっとウニ。</p>
        <p class="contentsText">冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。冨永タイルではお客様に満足して頂けるように、以下の流れにそって行います。</p>
      </div>
    </div>
    <h2 class="tileStep">タイル工事までの4STEP</h2>
     <div class="step">
      <div class="stepElement stepText">
       <h2 class="stepTitle">STEP1.ヒアリング</h2>
       <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p>
      </div>
      <div class="stepElement stepImg">
        <!-- 写真の比率は2:3 -->
       <img src='@/assets/step/step1.jpg' width="80%">
      </div>
      <div class="stepElement stepText">
       <h2 class="stepTitle">STEP2.見積もり</h2>
       <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p>
      </div>
      <div class="stepElement stepImg">
       <img src='@/assets/step/step2.jpg' width="80%" class="imgRight">
      </div>
      <div class="stepElement stepText">
       <h2 class="stepTitle">STEP3.工事</h2>
       <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p>
      </div>
      <div class="stepElement stepImg">
       <img src='@/assets/step/step3.jpg' width="80%" class="imgRight">
      </div>
      <div class="stepElement stepText">
       <h2 class="stepTitle">STEP4.完成</h2>
       <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p>
      </div>
      <div class="stepElement stepImg">
       <img src='@/assets/step/step4.jpg' width="80%" class="imgRight">
      </div>
     </div>
   </div>
 </div>
</template>

<script>
import constructionBtn from '@/components/constructionBtn.vue'
import tileBtn from '@/components//tileBtn.vue'
import headerImg from '@/components/headerImg.vue'
export default {
  name: 'Contents',
  components: {
    constructionBtn,
    tileBtn,
    headerImg
  }
}
</script>

<style scoped>
.tileStep {
  font-family: serif;
  margin-bottom: 32px;
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
  padding-top: 32px;
  font-family: 'Noto Serif JP', serif;
}
.stepText {
  text-align: left;
  margin-left: 160px;
  margin-right: 0;
}
.businessContents {
  font-family: serif;
}
.contentsTitle {
  margin-bottom: 24px;
}
.keyPhrase {
  font-weight: bold;
  font-size: 20px;
  color: rgba(75, 137, 218, 0.884);
}
.divContainer {
  width: 60%;
  margin: 100px auto;
}
.contentsText{
  line-height: 26px;
  text-align: left;
}
</style>
