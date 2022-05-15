<template>
  <div>
    <content-title>
      <template v-slot:mainTitle>お知らせ</template>
      <template v-slot:subTitle>NEWS</template>
    </content-title>
    <div v-if="targetTopic" class="topicDetail">
      <p class="topicTitle"><span class="topicDetailType" :class="targetTopic.category">{{ targetTopic.category }}</span>{{ targetTopic.name }}</p>
      <p class="topicDetailDate topicDate">投稿日： {{ getDate(targetTopic.created) }}</p>
      <img :src="targetTopic.fotoURL" width="40%">
      <p class="topicDetalText">{{ targetTopic.text }}</p>
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
import contentTitle from '@/components/contentTitle'
import newTopic from '@/components/newTopic.vue'
import Mixin from '../mixin'
export default {
  name: 'topicDetail',
  watch: {
    'topicData.topics': function (value) {
      if (value) {
        this.targetTopic = this.topicData.topics[this.$route.params.id]
      }
    }
  },
  mixins: [Mixin],
  components: {
    contentTitle,
    newTopic
  },
  data: function () {
    return {
      targetTopic: null
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
