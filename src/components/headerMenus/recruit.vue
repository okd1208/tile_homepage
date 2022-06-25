<template>
  <div>
    <div class="recruitMent">
      <header-img className="recruitImg">
        <template v-slot:Title>RECRUITMENT</template>
        <template v-slot:Text>採用情報</template>
      </header-img>
      <div>
        <div class="bg-green"></div>
        <div class="recruit-message">
          <h2>採用メッセージ</h2>
          <p>
            専門知識や技術は入社後に習得でき、人としてのたくさんの学びや刺激に溢れています。<br>
            ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？
            ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？
            ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？
            ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？
          </p>
        </div>
        <div class="recruite-three-image">
          <div><img src="@/assets/home2.jpeg"></div>
          <div><img src="@/assets/home2.jpeg"></div>
          <div><img src="@/assets/home2.jpeg"></div>
        </div>
      </div>
      <div class="business-content">
        <content-title>
          <template v-slot:mainTitle>業務内容</template>
          <template v-slot:subTitle>Business Content</template>
        </content-title>
        <div class="business-content-explanatory">
          <p>ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？ぜひ私たちと一緒に働きませんか？</p>
        </div>
      </div>
      <div>
        <content-title>
          <template v-slot:mainTitle>募集要項</template>
          <template v-slot:subTitle>Job Description</template>
        </content-title>
        <table class="job-description-table">
          <tr v-for="content in contents" :key="content.title">
            <th class="contentsTitle">{{ content.title }}</th>
            <td class="contentsText">{{ content.text }}</td>
          </tr>
        </table>
      </div>
      <div class="recruit-flow">
        <h2 class="green-underbar">採用フロー</h2>
        <div class="recruit-flow-step">
          <div>書 類 提 出</div>
          <i class="fas fa-play"></i>
          <div>１ 次 面 接</div>
          <i class="fas fa-play"></i>
          <div>２ 次 面 接</div>
          <i class="fas fa-play"></i>
          <div>最 終 面 接</div>
          <i class="fas fa-play"></i>
          <div>採 用</div>
        </div>
        <div class="entry-bottan">
          ENTRY
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerImg from '@/components/headerImg.vue'
import contentTitle from '@/components/contentTitle'
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
    contentTitle,
    headerImg
  }
}
</script>

<style scoped>
.bg-green {
  background-color: #068273;
  position: absolute;
  height: 450px;
  margin-top: 163px;
  left: 0;
  right: 0;
  opacity: 0.7;
}
.recruit-message {
  position: relative;
  background-color: white;
  width: 80%;
  margin: 76px auto 66px;
  padding: 59px 60px 54px;
}
.recruit-message h2 {
  font-size: 26px;
  font-weight: bold;
  border-bottom: 2px solid #068273;
  display: inline-block;
  padding-bottom: 16px;
  margin-bottom: 32px;
}
.recruit-message p {
  font-size: 18px;
  letter-spacing: var(--unnamed-character-spacing-0);
  line-height: 1.7em;
}
.recruite-three-image {
  display: flex;
  width: 70%;
  margin: auto;
}
.recruite-three-image img {
  width: 100%;
  position: relative;
}
.business-content {
  background-color: #F2F2F2;
  padding: 42px 183px;
  margin-top: 78px;
}
.business-content-explanatory {
  background-color: white;
  padding: 50px 50px 50px 350px;
}
.job-description-table {
  margin: auto;
  width: 60%;
  text-align: left;
}
.job-description-table tr {
  border-bottom: 2px solid #D1D1D1;
}
.job-description-table tr:first-child {
  border-top: 2px solid #D1D1D1;
}
.job-description-table th {
  padding: 36px 42px;
  color: #068273;
  font-weight: 300;
}
.recruit-flow {
  margin-top: 110px;
}
.recruit-flow h2 {
  font-size: 26px;
  margin-bottom: 80px;
}
.recruit-flow-step {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.recruit-flow-step div {
  font-family: -apple-system;
  font-weight: bold;
  font-size: 20px;
  text-orientation: upright;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
  border: 2px solid #068273;
  padding: 121px 22px;
}
.recruit-flow-step div:last-child {
  color: white;
  background-color: #068273;
}
.recruit-flow-step i {
  margin: auto 0;
  color: #068273;
}
.entry-bottan {
  color: white;
  background-color: #068273;
  width: 300px;
  padding: 24px 0;
  margin: 142px auto;
  font-size: 26px;
  letter-spacing: 5.2px;
  font-weight: 300;
  box-shadow: 0px 3px 6px #00000029;
  transition: 0.3s;
}
.entry-bottan:hover {
  cursor: pointer;
  background-color: #0682749d;
  transition: 0.3s;
  letter-spacing: 8.2px;
  font-size: 28px;
}
</style>

<style>
.business-content .main-title {
  margin-top: 0 !important;
}
</style>
