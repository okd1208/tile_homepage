<template>
 <div>
    <div class="header">
      <h1 class="test">タイルの事なら冨永タイル</h1>
    </div>
    <div class="body">
      <new-topic></new-topic>
      <construction></construction>
      <some-tiles></some-tiles>
      <!-- <v-icon>mdi-send-check</v-icon> -->
      <div class="bodyFooter">
        <div class="contact">
          <h2 class="footerTitle">お問い合わせ</h2>
        </div>
        <div class="question">
          <h2 class="footerTitle">よくある質問</h2>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import newTopic from '@/components/newTopic.vue'
import construction from '@/components/construction.vue'
import someTiles from '@/components/someTiles.vue'
export default {
  name: 'home',
  components: {
    newTopic,
    construction,
    someTiles
  }
}
</script>

<style scoped>
.header{
  margin-top: -60px;
  background-image: url('~@/assets/home.jpg');
  background-size: cover;
  height: 600px;
}
.test{
  line-height: 600px;
}
.bodyFooter {
  display: flex;
}
.contact,.question{
  width: 50%;
  height: 200px;
}
.contact {
  background-color: rgb(231, 206, 231);
}
.question {
  background-color: rgb(208, 206, 231);
}
.footerTitle {
  line-height: 200px;
}
</style>
