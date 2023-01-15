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
      <h2 class="green-title">タイルで街を華やかにして社会に貢献し、<br class="pc-only">人々を幸せにします。</h2>
      <p>
        弊社ではタイルの卸業から張り付つけまでタイルに関するすべての仕事に携わっています。<br class="pc-only">
        一般のお客様へは少数のタイルの販売から海外タイルの仕入れ販売まで対応いたします。<br class="pc-only">
        タイル張り施工は大型マンション、商業施設、 戸建住宅まで幅広く対応しております。<br class="pc-only">
        タイルに関してはお気軽にお問い合わせください。
      </p>
    </div>
    <div class="business-main-content">
      <div class="business-content-container">
        <img class="business-floot-img" src="@/assets/town.jpg">
        <div class="business-content">
          <h2 class="green-title">より幅広いお客様のために。</h2>
          <p>
            弊社では工事現場はもちろんのこと個人のお客様のご相談にも対応いたします。
            DIY、リフォーム、部分施工などお気軽にご相談ください。
            タイルの貼り付け方などもお教えいたします。
          </p>
        </div>
      </div>
      <div class="business-flow">
        <h2>タイル工事までの流れ</h2>
        <div>
          <div class="business-flow-step">
            <img src="@/assets/businessFlow/step1.png">
            <div>
              <h3>ヒアリング</h3>
              <p>お客様の声を聞きご希望のタイルを見本を交えて決めていただきます。<br>
                当社倉庫に現物のタイルも数多く取り揃えておりますので実際に見て触って決めることができます。</p>
            </div>
          </div>
          <div class="business-flow-step">
            <img src="@/assets/businessFlow/step2.png">
            <div>
              <h3>現地視察</h3>
              <p>現場を見て施工方法を考えます。 またここで工事日数などおおよその事を決めていきます。<br>
                 お客様にも立ち会っていただき施工後のイメージをより具体的にしていきます。</p>
            </div>
          </div>
          <div class="business-flow-step">
            <img src="@/assets/businessFlow/step3.png">
            <div>
              <h3>見積</h3>
              <p>タイル費用、職人への技術費用、 人件費、 などわかりやすくご説明します。 </p>
            </div>
          </div>
          <div class="business-flow-step">
            <img src="@/assets/businessFlow/step3.png">
            <div>
              <h3>施工</h3>
              <p>実際にタイル職人が現場へ向かい施工いたします。 確かな腕を持った職人ばかりなので安心してお待ちください。<br>
                また気さくな職人が多いので不安や質問等お気軽に声をかけてください。</p>
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
  margin-bottom: 32px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0 3px 6px #00000029;
}
.business-main-content {
  margin-top: 125px;
  padding: 96px 114px;
  background-color: #F2F2F2;
}
.business-content-container {
  width: clamp(100px, 100%, 1200px);
  margin: auto;
  background-color: white;
}
.business-floot-img {
  position: absolute;
  margin-left: 96px;
  width: clamp(100px, 40%, 540px);
  margin-top: -32px;
}
.business-content {
  width: 50%;
  padding: 76px 0 128px 67px;
  text-align: left;
}
.business-flow > h2 {
  font-weight: bold;
  font-size: 26px;
  display: inline-block;
  position: relative;
  margin: 96px 0 85px 0;
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
  margin: auto;
  width: clamp(100px, 100%, 1200px);
}
.business-flow-step {
  width: clamp(150px, 20%, 300px);
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
    margin-left: auto;
    top: 272px;
  }
  .business-content {
    width: auto;
    padding: 48px 16px 67px;
    text-align: center;
  }
  .business-content p {
    line-height: 26px;
    margin-top: 24px;
  }
  .business-flow > h2 {
    font-size: 22px;
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
