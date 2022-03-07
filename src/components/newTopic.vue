<template>
  <div class="new-topic">
    <content-title>
      <template v-slot:mainTitle>お知らせ</template>
      <template v-slot:subTitle>News</template>
    </content-title>
    <ul class="topics">
     <li v-for="topic in topics" :key="topic.id" class="topic">
      <router-link :to="{name: 'topicDetail', params: {id: topic.id}}" class="signup-link topicLink">
       <!-- <span class="topicType" :class="topic.color">{{ topic.type }}</span> -->
       <span class="topic-date">{{ topic.date }}</span>
       <span class="topic-type">{{ topic.type }}</span>
       <span class="topic-title">{{ topic.title }}</span>
      </router-link>
     </li>
    </ul>
    <div class="news-page-guide">
      <p>
        <i class="fas fa-arrow-circle-right fa-lg"></i>
        <router-link to="/">一覧はこちら</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import contentTitle from '@/components/contentTitle'
export default {
  name: 'newTopic',
  components: {
    contentTitle
  },
  data: function () {
    return {
    }
  },
  computed: {
    topics () {
      return this.$store.state.topics
    }
  }
}
</script>

<style>
.new-topic {
  min-width: 1000px;
  margin: auto;
  padding: 0 183px;
}
.topics {
  list-style: none;
  padding: 0;
  text-align: left;
}
.topic {
  border-bottom: dotted #707070 1px;
  padding: 24px 0;
}
.topic:first-child {
  padding-top: 0;
}
.topic a {
  text-decoration: none;
  color: black;
}
.news-page-guide {
  text-align: right;
}
.topic-date {
  font-size: 16px;
}
.topic-type {
  color: #068273;
  font-size: 10px;
  border: solid #068273 1px;
  border-radius: 20px;
  padding: 4px 8px;
  margin: 0 32px 0 24px;
}
.topic-title {
  font-size: 14px;
  transition: 0.5s;
}
.topic-title:hover {
  color: #707070;
  transition: 0.3s;
}
.news-page-guide {
  margin-top: 32px;
}
.news-page-guide a {
  font-size: 14px;
  color: black;
  text-decoration: none;
  transition: 0.5s;
}
.news-page-guide a:hover {
  color: #707070;
  transition: 0.3s;
}
.news-page-guide i {
  color: #068273;
  margin-right: 16px;
}
</style>
