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
      <div class="divContainer">
        <h2 class="contentsTitle">タイル工事までの流れ</h2>
        <p class="keyPhrase">誰よりも何処よりも早く、丁寧に、をもっとウニ。</p>
        <p class="contentsText">富永タイルではお客様に満足して頂けるように、以下の流れにそって行います。富永タイルではお客様に満足して頂けるように、以下の流れにそって行います。富永タイルではお客様に満足して頂けるように、以下の流れにそって行います。富永タイルではお客様に満足して頂けるように、以下の流れにそって行います。富永タイルではお客様に満足して頂けるように、以下の流れにそって行います。富永タイルではお客様に満足して頂けるように、以下の流れにそって行います。</p>
      </div>
    </div>
    <flow-step></flow-step>
   </div>
 </div>
</template>

<script>
import constructionBtn from '@/components/constructionBtn.vue'
import tileBtn from '@/components//tileBtn.vue'
import headerImg from '@/components/headerImg.vue'
import flowStep from '@/components/flowStep.vue'
export default {
  name: 'Contents',
  components: {
    constructionBtn,
    tileBtn,
    headerImg,
    flowStep
  }
}
</script>

<style scoped>
.businessContents {
  font-family: serif;
}
.contentsTitle {
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 24px;
}
.keyPhrase {
  font-weight: bold;
  font-size: 23px;
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
