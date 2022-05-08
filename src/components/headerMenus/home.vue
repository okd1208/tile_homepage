<template>
 <div>
    <div :class="header">
      <h1 class="headerTitle">タイルの事を任せるなら、富永タイル</h1>
      <h1 class="headerbody">Welcome to tileWorld!</h1>
    </div>
    <div class="body">
      <new-topic></new-topic>
      <div class="toppage-appealing-point1">
        <div>
          <h2>タイルで地域に貢献したい。</h2>
          <p>
            富永タイルはどこまでも一途にお客様のニーズに応え、<br>
            暮らしに寄り添ったサービスを提供します。<br>
            タイルのことはお任せ下さい。
          </p>
          <div class="breen-button">事業内容</div>
        </div>
      </div>
      <content-title>
        <template v-slot:mainTitle>建設事例</template>
        <template v-slot:subTitle>Works</template>
      </content-title>
      <div class="c-slick">
        <construction></construction>
      </div>
      <construction-btn>タイルの使用例一覧をみる</construction-btn>
      <!-- <some-tiles></some-tiles>
      <tile-btn>タイル一覧をみる</tile-btn> -->
      <div class="toppage-appealing-point2">
        <div>
          <h2>タイルを仕事に。</h2>
          <p>
            タイルを１枚貼ると寿命が１年伸びるんだって。<br>
             あなたも寿命伸ばしてみない？
          </p>
          <div class="white-button">事業内容</div>
        </div>
      </div>
      <request-erea></request-erea>
    </div>
 </div>
</template>

<script>
import newTopic from '@/components/newTopic.vue'
import construction from '@/components/construction.vue'
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
  height: 800px;
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
  margin-left: 46px;
  width: 30%;
  font-size: 46px;
  text-align: left;
  position: relative;
  top: 400px;
  border-bottom: black 1px solid;
  /* line-height: 600px; */
  /* color: white; */
  /* font-family: monospace; */
  font-family: 'Yusei Magic', sans-serif;
}
.headerbody {
  margin-left: 46px;
  margin-top: 16px;
  font-size: 40px;
  text-align: left;
  position: relative;
  top: 400px;
  /* line-height: 600px; */
  /* color: white; */
  font-family: monospace;
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

@media screen and (max-width:534px) {
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
}
</style>
