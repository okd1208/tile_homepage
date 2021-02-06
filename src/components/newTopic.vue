<template>
  <div class="newTopic">
    <h2 class="text-canter title">お知らせ</h2>
    <ul class="topics">
     <li v-for="message in messages" :key="message.text" class="topic">
       <!-- <span class="topicType" :class="message.color">{{ message.type }}</span> -->
       <span class="topicType">{{ message.type }}</span>
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
  width: 800px;
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
.topic:hover {
  cursor : pointer;
  color:  rgb(117, 185, 185);
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
  background-color: rgb(223, 223, 223);
}
</style>
