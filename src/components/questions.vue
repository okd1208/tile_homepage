<template>
<div>
  <content-title>
    <template v-slot:mainTitle>よくある質問</template>
    <template v-slot:subTitle>questions</template>
  </content-title>
  <div class="Qcategory">
    <div class="qa-list mts">
      <dl v-for="question in questions" :key="question.q" class="qa" :class='{open: question.isOpen}'>
        <dt @click="question.isOpen = !question.isOpen">{{ question.q }}</dt>
        <dd class="d-none">
          <p>{{ question.a }}</p>
        </dd>
      </dl>
    </div>
  </div>
</div>
</template>

<script>
import contentTitle from '@/components/contentTitle'
export default {
  name: 'questions',
  data: function () {
    return {
      isActive: false,
      questions: [
        {q: '営業時間は何時までですか？', a: '20時です。', isOpen: false},
        {q: '質問3', a: 'アンサー3', isOpen: false},
        {q: '採用期間はいつからいつですか？', a: '通年で採用活動を行っていますので、いつでも応募可能です。', isOpen: false},
        {q: '質問', a: 'アンサー', isOpen: false}
      ]
    }
  },
  components: {
    contentTitle
  }
}
</script>

<style scoped>
.Qcategory {
  width: 60%;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
}
.qa-list dl {
    position: relative;
    margin: 32px 0 0;
    cursor: pointer;
    border: 1px solid #DDD;
}
.qa-list dl:first-child {
  margin-top: 0;
}
.qa-list dl::after {
    position: absolute;
    top: 27px;
    right: 26px;
    display: block;
    width: 7px;
    height: 7px;
    margin: auto;
    content: '';
    transform: rotate(135deg);
    border-top: 2px solid #000;
    border-right: 2px solid #000;
}
.qa-list .open::after {
    transform: rotate(-45deg);
}
.open .d-none {
  display: block !important;
}
.qa-list dl dt {
    position: relative;
    margin: 0;
    padding: 20px 20px 20px 60px;
    font-weight: bold;
    background: #DDD;
}
.qa-list dl dt::before {
    font-size: 22px;
    line-height: 1;
    position: absolute;
    top: 20px;
    left: 20px;
    display: block;
    content: 'Q.';
    color: #3285bf;
}
.qa-list dl dd::before {
    font-size: 22px;
    line-height: 1;
    position: absolute;
    left: 20px;
    display: block;
    content: 'A.';
    font-weight: bold;
    color: #3285bf;
}
.qa-list dl dd {
    position: relative;
    margin: 0;
    padding: 20px 20px 20px 60px;
}
.qa-list dl dd p {
    margin: 32px 0 0;
}
.qa-list dl dd p:first-child{
    margin-top: 0;
}

/* @media screen and (max-width: 960px) {
 .qa-list dl {
      margin: 10px 0 0;
  }
  .qa-list dl:after {
      top: 20px;
      right: 20px;
      width: 7px;
      height: 7px;
  }
  .qa-list dl dt {
      padding: 16px 16px 16px 50px;
      font-size: 14px;
  }
  .qa-list dl dt::before {
      font-size: 14px;
      top: 20px;
      left: 20px;
  }
  .qa-list dl dd::before {
      font-size: 14px;
      left: 20px;
      margin-top: 5px;
  }
  .qa-list dl dd {
      margin: 0;
      padding: 16px 16px 16px 50px;
      font-size: 14px;
  }
  .qa-list dl dd p {
      margin: 30px 0 0;
  }
  .qa-list dl dd p:first-child{
      margin-top: 0;
  }
} */

@media screen and (max-width: 520px) {
 .Qcategory {
      width: 90%;
      margin-top: 8px;
  }
  .qa-list dl, .qa-list dl dd p {
      margin: 12px 0 0;
  }
  .qa-list dl dt, .qa-list dl dd {
     padding: 12px 12px 12px 32px;
  }
  .qa-list dl dt::before, .qa-list dl dd::before {
      font-size: 16px;
      top: 12px;
      left: 12px;
  }
  .qa-list dl::after {
      top: 16px;
      right: 16px;
      width: 6px;
      height: 6px;
  }
}
</style>
