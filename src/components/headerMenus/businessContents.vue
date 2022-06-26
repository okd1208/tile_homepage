<template>
 <div>
   <div class="body">
    <header-img className="businessContents">
      <template v-slot:Title>BUSINESS</template>
      <template v-slot:Text>事業内容</template>
    </header-img>
    <content-title>
      <template v-slot:mainTitle>経営理念</template>
      <template v-slot:subTitle>Philosophy</template>
    </content-title>
    <div class="business-appeal-content">
      <h2 class="green-title">誰よりも何処よりも早く、丁寧に、をもっとウニ。</h2>
      <p>
        弊社では、主にタイルをメインとした取引を行っております。<br>
        弊社では、主にタイルをメインとした取引を行っております。弊社では、主にタイルをメインとした取引を行っており<br>
        ます。弊社では、主にタイルをメインとした取引を行っております。
      </p>
    </div>
    <div class="business-main-content">
      <div class="business-content-container">
        <img class="business-floot-img" src="@/assets/town.jpg">
        <div class="business-content">
          <h2 class="green-title">誰よりも何処よりも早く、丁寧に。</h2>
          <p>
            弊社では、主にタイルをメインとした取引を行っております。
            弊社では、主にタイルをメインとした取引を行っております。メインとした取引を行っております。<br>
            弊社では、主にタイルをメインとした取引を行っております。
          </p>
        </div>
      </div>
      <div class="business-flow">
        <h2>タイル工事までの流れ</h2>
        <div>
          <div class="business-flow-step">
            <img src="@/assets/town.jpg">
            <div>
              <h3>ヒアリング</h3>
              <p>ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。</p>
            </div>
          </div>
          <div class="business-flow-step">
            <img src="@/assets/town.jpg">
            <div>
              <h3>見積もり</h3>
              <p>ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。</p>
            </div>
          </div>
          <div class="business-flow-step">
            <img src="@/assets/town.jpg">
            <div>
              <h3>工事</h3>
              <p>ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。ここにテキストが入る。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
 </div>
</template>

<script>
import headerImg from '@/components/headerImg'
import contentTitle from '@/components/contentTitle'
export default {
  name: 'Contents',
  components: {
    headerImg,
    contentTitle
  }
}
</script>

<style scoped>
.green-title {
  color: #068273;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0 3px 6px #00000029;
}
.business-main-content {
  margin-top: 125px;
  padding: 94px 114px 0;
  background-color: #F2F2F2;
}
.business-content-container {
  background-color: white;
}
.business-floot-img {
  position: absolute;
  right: 0;
  width: 40%;
  margin-top: -32px;
}
.business-content {
  width: 50%;
  padding: 76px 0 32px 67px;
  text-align: left;
}
.business-content p {
  margin-top: 70px;
}
.business-flow > h2 {
  font-weight: bold;
  font-size: 26px;
  display: inline-block;
  position: relative;
  margin:164px 0 85px 0;
}
.business-flow > h2::after {
  content: "";
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: -16px;
  border-bottom: 3px solid #068273;
}
.business-flow > div {
  display: flex;
   justify-content: space-around;
}
.business-flow-step {
  width: 25%;
}
.business-flow-step img{
  width: 100%;
}

.business-flow-step h3 {
  font-weight: normal;
  font-size: 26px;
  display: inline-block;
  position: relative;
  margin:16px 0 25px 0;
}
.business-flow-step h3::after {
  content: "";
  position: absolute;
  left: 15px;
  right: 15px;
  bottom: -9px;
  border-bottom: 3px solid #068273;
}

@media screen and (max-width: 520px) {
  .business-appeal-content p {
    font-size: 12px;
    line-height: 26px;
    width: 80%;
    margin: auto;
  }
  .green-title {
    font-size: 16px;
    width: 12em;
    margin: 0 auto 24px;
  }
  .business-main-content {
    margin-top: 64px;
    padding: 24px 16px 40px;
    position: relative;
  }
  .business-floot-img {
    position: absolute;
    right: 8px;
    width: 55%;
    margin-top: 0;
    top: 272px;
  }
  .business-content {
    width: auto;
    padding: 32px 16px 67px;
    text-align: center;
  }
  .business-content p {
    line-height: 26px;
    margin-top: 24px;
  }
  .business-flow > h2 {
    margin:136px 0 48px 0;
  }
  .business-flow > h2::after {
    left: 32px;
    right: 32px;
    bottom: -8px;
    border-bottom: 2px solid #068273;
  }
  .business-flow > div {
    display: block;
  }
  .business-flow-step {
    text-align: left;
    display: flex;
    justify-content: center;
    margin: 0 auto 40px;
    width: 90%;
  }
  .business-flow-step img{
    width: 50%;
  }
  .business-flow-step > div{
    padding: 12px 0 0 12px;
  }
  .business-flow-step h3 {
    font-weight: bold;
    font-size: 16px;
    position: relative;
    margin:0 0 16px 0;
  }
  .business-flow-step h3::after {
    left: 4px;
    right: 4px;
    bottom: -4px;
    border-bottom: 2px solid #068273;
  }
  .business-flow-step p {
    font-size: 10px;
    line-height: 2em;
  }
}
</style>
