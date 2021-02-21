<template>
  <div>
    <h2 class="tileStep">タイル工事までの4STEP</h2>
    <div class="step">
      <div class="stepElement stepLeft">
        <img class="stepImg" src='@/assets/step/step1.jpeg' width="55%">
        <h2 class="stepTitle">STEP1.ヒアリング</h2>
        <!-- <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p> -->
      </div>
      <div class="stepElement stepRight">
        <img class="stepImg" src='@/assets/step/step2.jpeg' width="55%">
        <h2 class="stepTitle">STEP2.見積もり</h2>
        <!-- <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p> -->
      </div>
      <div class="stepElement stepLeft step3">
        <img class="stepImg" src='@/assets/step/step3.jpeg' width="55%">
        <h2 class="stepTitle">STEP3.工事</h2>
        <!-- <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p> -->
      </div>
      <div class="stepElement stepRight step4">
        <img class="stepImg" src='@/assets/step/step4.jpeg' width="55%">
        <h2 class="stepTitle">STEP4.完成</h2>
        <!-- <p>まずは、お客様がなにをどれだけ必要としているか、なにに使いたいのかを聞き、商品の提案をいたします。</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fowStep'
}
</script>

<style scoped>
.tileStep {
  font-family: serif;
  margin-bottom: 32px;
  font-size: 36px;
  margin-top: 160px;
}
.step {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
}
.stepImg {
  border-radius: 50%;
  /* margin-left: 100px; */
}
.stepElement {
  /* background-color: antiquewhite; */
  width: 38%;
  /* margin: 24px; */
  margin-left: auto;
  margin-right: auto;
}
.stepTitle {
  /* margin: 24px; */
  /* margin-left: 100px; */
  padding-top: 32px;
  font-family: 'Noto Serif JP', serif;
}
.stepLeft {
  margin-left: 140px;
  /* text-align: right; */
}
.stepRight {
  margin-top: 200px;
  /* margin-bottom: -250px; */
  margin-right: 140px;
  /* text-align: left; */
}
.step3{
  margin-top: -60px;
  /* background-color: rgb(165, 153, 138); */
}
.step4 {
  margin-top: 140px;
}
</style>
