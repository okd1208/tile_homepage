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
            専門知識や技術は入社後に習得でき、人としてのたくさんの学びや刺激に溢れています。
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
      <!-- <p class="RecuritTableTitle">募集要項</p>
      <table class="RecruitTable">
        <tr v-for="content in contents" :key="content.title" class="RecruitTableTr">
          <td class="contentsTitle">{{ content.title }}</td>
          <td class="contentsText">{{ content.text }}</td>
        </tr>
      </table> -->
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
  height: 500px;
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
  font: normal normal normal 18px/40px Kozuka Gothic Pro;
  font-weight: 600;
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
</style>
