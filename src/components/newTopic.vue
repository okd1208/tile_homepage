<template>
  <div class="newTopic">
    <h2 class="text-canter title s-fontsize-15rem"><slot></slot></h2>
    <ul class="topics">
     <li v-for="topic in topics" :key="topic.id" class="topic">
      <router-link :to="{name: 'topicDetail', params: {id: topic.id}}" class="signup-link topicLink">
       <!-- <span class="topicType" :class="topic.color">{{ topic.type }}</span> -->
       <span class="topicType">{{ topic.type }}</span>
     <span class="topicDate">{{ topic.date }}</span>
     {{ topic.title }}
      </router-link>
     </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'newTopic',
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
.newTopic {
  margin-top: 64px;
  /* height: 280px; */
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  /* background-color: wheat;
  border-radius: 10%; */
}
.topic {
  list-style: none;
  text-align: left;
  margin: 12px 4px;
}
.topicType {
  display: inline-block;
  text-align: center;
  margin-right: 32px;
  width: 70px;
  border: 1px solid  rgb(117, 185, 185);
  border-radius: 20px;
  padding: 0 2px;
  background-color: white;
  color: rgb(117, 185, 185);
  transition-duration: 0.6s;
}
.topic:hover .topicType {
  transition-duration: 0.6s;
  background-color: rgb(117, 185, 185);
  color: white;
}
.topic:hover .topicLink{
  cursor : pointer;
  color:  rgb(117, 185, 185);
  /* transition-duration: 0.3s; */
  /* font-weight: bold; */
  /* border-bottom: 1px solid  rgb(117, 185, 185); */
}
.topicDate {
  opacity: 0.5;
  margin-right: 16px;
  font-size: 14px;
}
.topics {
  height: 300px;
  overflow: auto;
  background-color: rgba(223, 223, 223, 0.322);
}
.topicLink {
  color: rgb(18, 29, 29);
}
@media screen and (max-width: 534px) {
  .newTopic {
    width: 90%;
  }
  .topics {
    height: 200px;
    font-size: 12px;
    padding-left: 16px;
  }
  .topic {
    margin: 12px 2px;
    /* font-size: 1px; */
  }
  .topicType {
    margin-right: 4px;
    width: 40px;
    border-radius: 20px;
    padding: 0 2px;
    background-color: white;
  }
  .topicDate {
    opacity: 0.5;
    margin-right: 0;
    font-size: 6px;
  }
}
</style>
