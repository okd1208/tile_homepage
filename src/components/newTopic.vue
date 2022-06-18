<template>
  <div class="new-topic">
    <content-title>
      <template v-slot:mainTitle>お知らせ</template>
      <template v-slot:subTitle>News</template>
    </content-title>
    <ul class="topics">
     <li v-for="(topic,key) in getTopics" :key="key" class="topic">
      <router-link :to="{name: 'topicDetail', params: {id: key}}" class="signup-link topicLink">
       <!-- <span class="topicType" :class="topic.color">{{ topic.type }}</span> -->
       <span class="topic-date">{{ getDate(topic.created) }}</span>
       <span class="topic-type">{{ topic.category }}</span>
       <span class="topic-title">{{ topic.name }}</span>
      </router-link>
     </li>
    </ul>
    <div class="news-page-guide">
      <p>
        <i class="fas fa-arrow-circle-right fa-lg"></i>
        <router-link to="/topicsList">一覧はこちら</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import contentTitle from '@/components/contentTitle'
import Mixin from '../mixin'
export default {
  name: 'newTopic',
  components: {
    contentTitle
  },
  mixins: [Mixin],
  data: function () {
    return {
    }
  },
  props: {
    displayCount: {
      type: String,
      default: null,
      required: false
    }
  },
  computed: {
    getTopics () {
      if (this.displayCount && this.topicData.topics) {
        var array = {}
        for (let key in this.topicData.topics) {
          array[key] = this.topicData.topics[key]
          if (Object.keys(array).length === Number(this.displayCount)) {
            break
          }
        }
        return array
      } else {
        return this.topicData.topics
      }
    }
  }
}
</script>

<style>
.new-topic {
  min-width: 600px;
  margin: auto;
  width: 60%;
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

@media screen and (max-width:534px) {
  .new-topic {
    min-width: auto;
    width: 80%;
  }
}
</style>
