<template>
  <div>
    <body-header>お知らせ詳細</body-header>
    <div v-for="topic in topics" :key="topic.id" class="topicDetail">
      <div v-if="topic.id===$route.params.id">
        <p class="topicTitle"><span class="topicDetailType" :class="topic.type">{{ topic.type }}</span>{{ topic.title }}</p>
        <p class="topicDetailDate topicDate">投稿日： {{ topic.date }}</p>
        <img :src="topic.img" width="40%">
        <p class="topicDetalText">{{ topic.text }}</p>
      </div>
    </div>
    <new-topic>その他の最新情報</new-topic>
    <div>
      <h2>カテゴリー別でみる</h2>
      <span class="topicDetailType news">news</span>
      <span class="topicDetailType reqruit">採用</span>
      <span class="topicDetailType blog">blog</span>
    </div>
  </div>
</template>

<script>
import bodyHeader from '@/components/header'
import newTopic from '@/components/newTopic.vue'
export default {
  name: 'topicDetail',
  components: {
    bodyHeader,
    newTopic
  },
  computed: {
    topics () {
      return this.$store.state.topics
    }
  }
}
</script>

<style scoped>
.topicDetail {
  margin-bottom: 100px;
}
.topicDetailType {
  /* font-size: 20px; */
  display: inline-block;
  color: rgb(255, 255, 255);
  margin-right: 16px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  /* border: 2px solid rgb(117, 185, 185); */
  background-color: rgb(240, 193, 122);
}
.news {
  background-color: rgb(117, 185, 185);
}
.blog {
  background-color: rgb(172, 185, 117);
}
.topicTitle {
  font-size: 32px;
  /* margin: 32px 0; */
  margin-top: 32px;
}
.topicDetailDate {
  text-align: right;
  margin-right: 42px;
  font-size: 16px;
}
.topicDetalText {
  margin-top: 16px;
}
</style>
