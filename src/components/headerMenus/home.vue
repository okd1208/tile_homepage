<template>
 <div>
    <div :class="header">
      <h1 class="headerTitle">タイルの事なら、<br>富永タイル。</h1>
    </div>
    <div class="body">
      <new-topic display-count=3></new-topic>
      <div class="toppage-appealing-point1">
        <div>
          <h2>タイルで地域に貢献したい。</h2>
          <p>
            富永タイルはどこまでも一途にお客様のニーズに応え、<br>
            暮らしに寄り添ったサービスを提供します。<br>
            タイルのことはお任せ下さい。
          </p>
          <router-link to="/businessContents"><div class="breen-button">事業内容</div></router-link>
        </div>
      </div>
      <content-title>
        <template v-slot:mainTitle>建設事例</template>
        <template v-slot:subTitle>Works</template>
      </content-title>
      <div class="c-slick">
        <construction></construction>
      </div>
      <router-link to="/constructionExample"><div class="breen-button mt-4">建設事例一覧をみる</div></router-link>
      <!-- <construction-btn>タイルの使用例一覧をみる</construction-btn> -->
      <!-- <some-tiles></some-tiles>
      <tile-btn>タイル一覧をみる</tile-btn> -->
      <div class="toppage-appealing-point2">
        <div>
          <h2>タイルを仕事に。</h2>
          <p>
            タイルを１枚貼ると寿命が１年伸びるんだって。<br>
             あなたも寿命伸ばしてみない？
          </p>
          <router-link to="/constructionExample"><div class="white-button">採用情報</div></router-link>
        </div>
      </div>
      <request-erea></request-erea>
    </div>
 </div>
</template>

<script>
import newTopic from '@/components/newTopic.vue'
import construction from '@/components/widgets/constructionSlick.vue'
import someTiles from '@/components/someTiles.vue'
import constructionBtn from '@/components/constructionBtn.vue'
import tileBtn from '@/components/tileBtn'
import requestErea from '@/components/requestErea'
import contentTitle from '@/components/contentTitle'
export default {
  name: 'home',
  data: function () {
    return {
      header: 'header1',
      head: 'header',
      img: 1
    }
  },
  components: {
    newTopic,
    construction,
    constructionBtn,
    tileBtn,
    someTiles,
    requestErea,
    contentTitle
  },
  methods: {
    headerClass: function () {
      this.header = this.head + String(this.img)
    },
    changeImg: function () {
      this.headerClass()
      setInterval(() => {
        this.img += 1
        if (this.img === 6) {
          this.img = 1
        }
        this.headerClass()
      }, 3000)
    }
  },
  created () {
    this.changeImg()
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap'); */
.header1,.header2,.header3,.header4,.header5{
  transition: all 900ms 0s ease;
  background-size: cover;
  height: 60vh;
}
.header1{
  background-image: url('~@/assets/home/home1.jpg');
}
.header2{
  background-image: url('~@/assets/home/home2.jpg');
}
.header3{
  background-image: url('~@/assets/home/home3.jpeg');
}
.header4{
  background-image: url('~@/assets/home/home4.jpg');
}
.header5{
  background-image: url('~@/assets/home/home5.jpg');
}
.headerTitle{
  margin-left: 10vw;
  font-size: 40px;
  text-align: left;
  position: relative;
  top: 40vh;
  color: white;
}
.toppage-appealing-point1 {
  margin-top: 112px;
  background-image: url("~@/assets/home2.jpeg");
  background-position: left;
  background-size: 60%;
  background-repeat: no-repeat;
  height: 500px;
  overflow: hidden;
}
.toppage-appealing-point1 > div {
  margin-left: 50%;
  text-align: left;
  margin-top: 128px;
}
.toppage-appealing-point1 h2 {
  margin-bottom: 32px;
  background-color: #068274d7;
  color: white;
  padding: 12px 0 8px 88px;
}
.toppage-appealing-point1 p {
  margin-left: 88px;
  font-weight: 500;
  font-size: 18px;
}
.toppage-appealing-point1 .breen-button {
  position: relative;
  top: 48px;
  left: 50%;
}

.toppage-appealing-point2 {
  margin-top: 112px;
  background-image: url("~@/assets/home2.jpeg");
  background-position: right;
  background-size: 60%;
  background-repeat: no-repeat;
  height: 500px;
  overflow: hidden;
}
.toppage-appealing-point2 > div {
  margin-right: 50%;
  padding: 32px 0 32px 184px;
  text-align: left;
  color: white;
  background-color: #068274d7;
  margin-top: 48px;
}
.toppage-appealing-point2 h2 {
  margin-bottom: 32px;
}
.toppage-appealing-point2 p {
  font-weight: 500;
  font-size: 18px;
}
.toppage-appealing-point2 .wthite-button {
  position: relative;
  margin: 48px 0;
}

.c-slick {
  background-color: #F2F2F2;
}

@media screen and (max-width:520px) {
  .header1,.header2,.header3,.header4,.header5{
    transition: all 900ms 0s ease;
    margin-top: -60px;
    background-size: cover;
    height: 350px;
  }
  .headerbody,.headerTitle {
    margin-left: 46px;
    /* margin-top: 16px; */
    font-size: 20px;
    text-align: left;
    position: relative;
    top: 180px;
    /* line-height: 600px; */
    /* color: white; */
    font-family: monospace;
  }
  .toppage-appealing-point1, .toppage-appealing-point2 {
    margin-top: 72px;
    background-size: 100%;
    background-position: top;
    height: auto;
    overflow: visible;
  }
  .toppage-appealing-point1 > div {
    margin-left: 48px;
    text-align: left;
    margin-top: auto;
    margin-bottom: 300px;
    position: relative;
    top: 220px;
    text-align: left;
  }
  .toppage-appealing-point1 h2 {
    padding: 18px 20px;
    font-size: 22px;
  }
  .toppage-appealing-point1 p {
    margin-left: 0px;
    font-size: 10px;
    padding: 0 32px;
    line-height: 24px;
  }
  .toppage-appealing-point1 .breen-button {
    position: static;
    margin: auto;
    font-size: 12px;
  }
  .toppage-appealing-point2 > div {
    margin-right: 10%;
    padding: 32px 0 32px 32px;
    text-align: left;
    color: white;
    background-color: #068274d7;
    margin-top: 48px;
  }
  .toppage-appealing-point2 h2 {
    margin-bottom: 22px;
  }
  .toppage-appealing-point2 p {
    font-size: 10px;
    line-height: 24px;
  }
}
</style>
