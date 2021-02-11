<template>
<div>
  <body-header>採用情報</body-header>
  <div class="recruitMent">
    <div class="recruitMentTitle">
      <h2 class="recruitMentTitleText">募集要項</h2>
    </div>
    <table class="RecruitTable">
      <tr v-for="content in contents" :key="content.title" class="RecruitTableTr">
        <td class="contentsTitle">{{ content.title }}</td>
        <td class="contentsText">{{ content.text }}</td>
      </tr>
    </table>
    <div class="flow">
      <p class="Recruitflow">採用フロー</p>
      <div class="flowParent">
        <div class="step">
          step1
        </div>
        <div class="flowbox">
          <p class="stepTitle">書類提出</p>
          <p class="stepText">まずはこのホームページより書類を提出していただきます。</p>
        </div>
      </div>
      <h2 class="flowArrow">↓</h2>
        <!-- step -->
      <div class="flowParent">
        <div class="step">
          step2
        </div>
        <div class="flowbox">
          <p class="stepTitle">１次面接</p>
          <p class="stepText">まずはこのホームページより書類を提出していただきます。</p>
        </div>
      </div>
      <h2 class="flowArrow">↓</h2>
        <!-- step -->
      <div class="flowParent">
        <div class="step">
          step3
        </div>
        <div class="flowbox">
          <p class="stepTitle">２次面接</p>
          <p class="stepText">まずはこのホームページより書類を提出していただきます。</p>
        </div>
      </div>
      <h2 class="flowArrow">↓</h2>
        <!-- step -->
      <div class="flowParent">
        <div class="step">
          step4
        </div>
        <div class="flowbox">
          <p class="stepTitle">最終面接</p>
          <p class="stepText">まずはこのホームページより書類を提出していただきます。</p>
        </div>
      </div>
      <h2 class="flowArrow">↓</h2>
      <h2 class="finishStep">採用</h2>
    </div>
  </div>
  <div class="Btn">
    <div class="EntryBtn">
      <h4 class="Btntext">エントリーする</h4>
    </div>
    <div class="TryBtn">
      <h4 class="Btntext">まずは話を聞いてみる</h4>
    </div>
  </div>
</div>
</template>

<script>
import bodyHeader from '@/components/header.vue'
export default {
  name: 'recruit',
  data: function () {
    return {
      contents: [
        {title: '募集職種', text: '総合職、技術職、事務'},
        {title: '募集人数', text: '１５名'},
        {title: '募集対象', text: '２０２２年卒業の方'},
        {title: '提出書類', text: '履歴書、成績証明書、卒業見込証明書、健康診断書'},
        {title: '初任給', text: '大学卒・大学院卒　月給233,000円（2022年4月予定）'},
        {title: '賞与', text: '年3回（6・12・4月）　2019年度実績'},
        {title: '勤務時間', text: '午前8時30分～午後5時'},
        {title: '勤務地', text: '福岡'}
      ]
    }
  },
  components: {
    bodyHeader
  }
}
</script>

<style scoped>
.recruitMentTitle {
  background-color: rgb(238, 238, 238);
  height: 300px;
  margin-top: 32px;
  text-align: left;
  background-image: url('~@/assets/recruit/recruit1.jpg');
  background-size: cover;
}
.recruitMentTitleText {
  line-height: 300px;
  padding-left: 100px;
  font-size: 32ox;
  background-color: rgba(78, 77, 77, 0.548);
  color: white;
}
.recruitTable {
  margin:20px auto;
  background-color: whitesmoke;
  /* border: yellow 1px solid; */
}
.RecruitTable {
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  width: 1000px;
  border-top: 2px solid rgba(241, 236, 236, 0.966);
}
.RecruitTableTr {
  height: 46px;
  border-bottom: 2px solid rgba(241, 236, 236, 0.966);
}
.contentsTitle {
  width: 300px;
  background-color: rgba(224, 222, 222, 0.966);
}
.contentsText {
  text-align: left;
  padding: 24px;
}
.Recruitflow {
  font-size: 28px;
  margin-bottom: 28px;
}
.flow {
  margin-top: 64px;
  font-family: serif;
}
.flowParent {
 font-size: 20px;
 display: flex;
 margin: 0 auto;
 background-color: rgba(236, 240, 241, 0.699);
 width: 800px;
}
.step {
  display: inline-block;
  background-color: rgb(197, 132, 48);
  line-height: 130px;
  color: aliceblue;
  width: 150px;
  text-align: center;
}
.stepTitle {
  font-weight: bold;
  margin: 32px 0 16px 32px;
  font-size: 20px;
  text-align: left;
}
.stepText {
  margin-left: 32px;
  text-align: left;
  font-size: 16px;
}
.flowBox {
  background-color: rgba(236, 240, 241, 0.699);
}
.flowArrow {
  /* margin-top: 50px; */
}
.finishStep {
  font-weight: bold;
  color: rgb(197, 132, 48);
  margin-bottom: 100px;
}
.Btn {
  display: flex;
  /* margin: 10px auto; */
  margin-top: 36px;
}
.EntryBtn,.TryBtn {
  width: 700px;
  height: 200px;
  margin: 10px auto;
  /* border-radius: 16px; */
}
.EntryBtn {
  background-color: rgb(209, 212, 187);
  background-image: url('~@/assets/recruit/recruit2.jpeg');
  /* 7:2 */
  background-size: cover;
}
.EntryBtn:hover .Btntext{
  cursor: pointer;
  background-color: rgba(109, 108, 108, 0.541);
  transition-duration: 0.4s;
}
.TryBtn {
  background-color: rgb(187, 211, 212);
  background-image: url('~@/assets/recruit/recruit3.jpeg');
  background-size: cover;
}
.TryBtn:hover .Btntext{
  cursor: pointer;
  background-color: rgba(109, 108, 108, 0.541);
  transition-duration: 0.4s;
}
.Btntext {
  line-height: 200px;
  background-color: rgba(109, 108, 108, 0.753);
  color: aliceblue;
  transition-duration: 0.4s;
}
</style>
