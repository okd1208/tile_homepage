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
            誰かの「住まい」を快適、魅力的にしたり、<br>「街づくり」に関わるやりがいのある仕事、一生モノの技術をココで身につけよう。
          </p>
        </div>
        <!-- <div class="recruite-three-image">
          <div><img src="@/assets/home2.jpeg"></div>
          <div><img src="@/assets/home2.jpeg"></div>
          <div class="md-pc-only"><img src="@/assets/home2.jpeg"></div>
        </div> -->
      </div>
      <div class="business-content">
        <content-title>
          <template v-slot:mainTitle>業務内容</template>
          <template v-slot:subTitle>Business Content</template>
        </content-title>
        <div class="business-content-explanatory">
          <p>タイル張り技術士及び配送業務</p>
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
          <div>見学 <span style="color:gray">※任意</span></div>
          <i class="fas fa-play"></i>
          <div>面 接</div>
          <i class="fas fa-play"></i>
          <div>相談 <span style="color:gray">※任意</span></div>
          <i class="fas fa-play"></i>
          <div>採 用</div>
        </div>
        <router-link to="/entryForm">
          <div class="entry-bottan">ENTRY</div>
      </router-link>
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
        {title: '募集職種', text: 'タイル張り技術士見習い(未経験でも可)'},
        {title: '募集人数', text: '3名'},
        {title: '募集対象', text: '40歳以下'},
        {title: '提出書類', text: '身分証明書のみ(運転免許書、保険証など)'},
        {title: '給与', text: '月給22万円〜（研修期間あり）'},
        {title: '賞与', text: '年2回（7月・12月）'},
        {title: '勤務時間', text: '8:00～17:30'},
        {title: '勤務地', text: '福岡・佐賀 近隣'}
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
  height: 160px;
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
/* .recruite-three-image {
  display: flex;
  width: 70%;
  margin: auto;
}
.recruite-three-image img {
  width: 100%;
  position: relative;
} */
.business-content {
  background-color: #F2F2F2;
  padding: 42px 183px;
  margin-top: 78px;
}
.business-content-explanatory {
  background-color: white;
  padding: 50px;
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
  display: inline-block;
  padding: 24px 160px;
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

@media screen and (max-width: 960px) {
  .business-content {
    padding: 80px;
    margin-top: 48px;
  }
  .business-content-explanatory {
    padding: 48px;
  }
  .job-description-table, .recruit-flow-step {
    width: 80%;
  }
}

@media screen and (max-width: 520px) {
  .bg-green {
    height: 148px;
    margin-top: 80px;
  }
  .recruit-message {
    width: 90%;
    margin: 40px auto 32px;
    padding: 32px 8px;
  }
  .recruit-message h2 {
    border-bottom: 2px solid #068273;
    display: inline-block;
    padding-bottom: 2px;
    margin-bottom: 24px;
  }
  .recruit-message p {
    font-size: 12px;
    line-height: 2em;
  }
  .business-content {
    padding: 42px 16px;
    margin-top: 104px;
  }
  .business-content-explanatory {
    padding: 16px;
  }
  .business-content-explanatory p {
    line-height: 2em;
  }
  .job-description-table {
    width: 90%;
  }
  .job-description-table th {
    min-width: 80px;
    width: 20%;
    padding: 16px;
  }
  .recruit-flow {
    margin-top: 40px;
  }
  .recruit-flow h2 {
    margin-bottom: 36px;
  }
  .recruit-flow-step {
    width: 90%;
  }
  .recruit-flow-step div {
    font-size: 14px;
    border: 1px solid #068273;
    padding: 48px 8px;
  }
  .entry-bottan {
    padding: 16px 48px;
    margin: 56px auto 0;
    font-size: 22px;
    border-radius: 32px;
  }
}
</style>

<style>
.business-content .main-title {
  margin-top: 0 !important;
}
</style>
