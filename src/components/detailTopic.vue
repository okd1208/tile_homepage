<template>
  <div>
     <header-img className="businessContents">
      <template v-slot:Title>お知らせ</template>
      <template v-slot:Text>NEWS</template>
    </header-img>
    <div class="topic-detail">
      <div v-if="targetTopic">
        <p class="topic-detail-date">投稿日： {{ getDate(targetTopic.created) }}</p>
        <p class="topicTitle"><span class="topicDetailType" :class="targetTopic.category">{{ targetTopic.category }}</span>{{ targetTopic.name }}</p>
        <img :src="targetTopic.fotoURL">
        <p class="topicDetalText">{{ targetTopic.text }}</p>
      </div>
    </div>
    <div class="topic-list-btn round-gr-btn">
      <router-link to="/topicsList">ニュース一覧</router-link>
    </div>
  </div>
</template>

<script>
import contentTitle from '@/components/contentTitle'
import Mixin from '../mixin'
import headerImg from '../components/headerImg.vue'
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
    headerImg
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
  margin: 96px auto;
  width: 60%;
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
}
.topicTitle {
  font-size: 24px;
  margin: 24px 0 40px;
}
.topic-detail-date {
  margin-right: 42px;
  font-size: 16px;
}
.topicDetalText {
  margin-top: 48px;
  white-space: pre-line;
}
.topic-list-btn a {
  font-size: 22px;
  padding: 12px 40px;
}
.topic-detail img{
  width: 90%;
}
@media screen and (max-width: 960px) {
  .topic-detail {
    width: 80%;
  }
  .topic-detail img{
    width: 100%;
  }
}
@media screen and (max-width: 520px) {
  .topic-detail {
    margin: 72px auto 36px;
    width: 90%;
  }
  .topic-detail-date {
    font-size: 12px;
  }
  .topicTitle {
    font-size: 14px;
    margin: 8px 0 24px;
  }
  .topicDetailType {
    font-size: 10px;
    padding: 2px 4px;
  }
  .topicDetalText {
    margin-top: 32px;
  }
  .topic-list-btn a {
    font-size: 14px;
    padding: 8px 20px;
  }
}
</style>
