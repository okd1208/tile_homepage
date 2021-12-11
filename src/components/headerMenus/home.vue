<template>
 <div>
    <div :class="header">
      <h1 class="headerTitle">タイルの事を任せるなら、冨永タイル</h1>
      <h1 class="headerbody">Welcome to tileWorld!</h1>
    </div>
    <div class="body">
      <new-topic>お知らせ</new-topic>
      <construction></construction>
      <construction-btn>タイルの使用例一覧をみる</construction-btn>
      <some-tiles></some-tiles>
      <tile-btn>タイル一覧を見てみる</tile-btn>
      <!-- <div class="bodyFooter">
        <div class="contact">
          <h2 class="footerTitle"><span class="icon"><i class="far fa-envelope"></i></span>お問い合わせ</h2>
        </div>
        <div class="question">
          <h2 class="footerTitle"><span class="icon"><i class="far fa-question-circle"></i></span>よくある質問</h2>
        </div>
      </div> -->
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
    requestErea
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
  margin-top: -60px;
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
  margin-top: -60px;
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
.bodyFooter {
  display: flex;
  margin-top: 64px;
}
.contact,.question{
  width: 50%;
  height: 200px;
}
.contact {
  background-color:rgb(192, 228, 228);
}
.question {
  background-color:rgb(189, 210, 238);
}
.footerTitle {
  line-height: 120px;
  margin-top: 40px;
}
.icon {
  /* display: inline-block;
  width: 100px; */
  /* height: 100px; */
  /* background-color: white; */
  /* border-radius: 50%; */
  /* text-align: left; */
  margin-right: 8px;
  /* padding-top: -32px; */
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
