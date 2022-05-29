<template>
  <div>
    <content-title>
      <template v-slot:mainTitle>お知らせ</template>
      <template v-slot:subTitle>NEWS</template>
    </content-title>
    <div class="topic-detail">
      <div v-if="targetTopic">
        <p class="topic-detail-date">投稿日： {{ getDate(targetTopic.created) }}</p>
        <p class="topicTitle"><span class="topicDetailType" :class="targetTopic.category">{{ targetTopic.category }}</span>{{ targetTopic.name }}</p>
        <img :src="targetTopic.fotoURL" width="90%">
        <p class="topicDetalText">{{ targetTopic.text }}</p>
      </div>
    </div>
    <div>
      <router-link to="/topicsList"><div class="topic-list-btn">ニュース一覧</div></router-link>
    </div>
  </div>
</template>

<script>
import contentTitle from '@/components/contentTitle'
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
    contentTitle
  },
  data: function () {
    return {
      targetTopic: null
    }
  }
}
</script>

<style scoped>
.topic-detail {
  margin-bottom: 100px;
  width: 60%;
  margin: auto;
  text-align: left;
}
.topicDetailType {
  font-size: 16px;
  padding: 4px 8px;
  display: inline-block;
  color: #12887A;
  margin-right: 16px;
  border-radius: 20px;
  border: 2px solid #12887A;
  /* border: 2px solid rgb(117, 185, 185); */
}
.topicTitle {
  font-size: 24px;
  /* margin: 32px 0; */
  margin-top: 32px;
}
.topic-detail-date {
  margin-right: 42px;
  font-size: 16px;
}
.topicDetalText {
  margin-top: 16px;
  white-space: pre-line;
}
.topic-list-btn {
  display: inline-block;
  font-size: 16px;
  padding: 8px 32px;
  border-radius: 28px;
  background-color: #12887A;
  color: white;
}
</style>
