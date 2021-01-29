<template>
  <div class="newTopic">
    <h2 class="text-canter">最新情報</h2>
    <ul class="topics">
     <li v-for="message in messages" :key="message.text" class="topic">
       <span class="topicType" :class="message.color">{{ message.type }}</span>
     <span class="topicDate">{{ message.date }}</span>
     {{ message.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'newTopic',
  data: function () {
    return {
      messages: [
        {text: 'mmタイル１０００枚入荷！', type: 'news', color: 'bg-danger', date: '2021/01/12'},
        {text: '本日会社の改装工事を行いました。', type: 'blog', color: 'bg-warning', date: '2021/01/12'},
        {text: 'mmタイル１9０００枚入荷！', type: 'news', color: 'bg-danger', date: '2021/01/12'},
        {text: '2021年新卒採用募集事項', type: '採用', color: 'bg-primary', date: '2021/01/12'},
        {text: '本日会社の改装工事を行いました,', type: 'blog', color: 'bg-warning', date: '2021/01/12'},
        {text: '2021年新卒採用募集事項。', type: '採用', color: 'bg-primary', date: '2021/01/12'},
        {text: 'mmタイル１０００枚入荷！?', type: 'news', color: 'bg-danger', date: '2021/01/12'},
        {text: '本日会社の改装工事を行いました..。', type: 'blog', color: 'bg-warning', date: '2021/01/12'},
        {text: 'mmタイル１9０００枚入荷?！', type: 'news', color: 'bg-danger', date: '2021/01/12'},
        {text: '2021年新卒採用募集事項?', type: '採用', color: 'bg-primary', date: '2021/01/12'},
        {text: '本日会社の改装工事を行いました!!', type: '採用', color: 'bg-primary', date: '2021/01/12'}
      ]
    }
  }
}
</script>

<style>
.newTopic {
  margin-top: 64px;
  /* height: 280px; */
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  /* background-color: wheat;
  border-radius: 10%; */
}
.topic {
  /* background-color: gold; */
  list-style: none;
  text-align: left;
  margin: 12px 4px;
}
.topicType {
  margin-right: 32px;
  /* border: 1px solid black; */
  border-radius: 25%;
  padding: 0 2px;
  color: white;
}
.topicDate {
  opacity: 0.5;
  margin-right: 16px;
  font-size: 14px;
}
.topics {
  height: 200px;
  overflow: scroll;
  background-color: wheat;
}
</style>
