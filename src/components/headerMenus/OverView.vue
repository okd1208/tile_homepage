<template>
  <div>
    <header-img class="OverView">
      <template v-slot:Title>ABOUT</template>
      <template v-slot:Text>会社情報</template>
    </header-img>
    <content-title>
      <template v-slot:mainTitle>会社情報</template>
      <template v-slot:subTitle>Company info</template>
    </content-title>
    <div class="body">
      <table class="OverViewTable">
        <tr v-for="content in contents" :key="content.title" class="OverViewTableTr">
          <td class="contentsTitle">{{ content.title }}</td>
          <td class="contentsText">{{ content.text }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import headerImg from '@/components/headerImg.vue'
import contentTitle from '@/components/contentTitle'
export default {
  name: 'OverView',
  components: {
    headerImg,
    contentTitle
  },
  data: function () {
    return {
      contents: [
        {title: '会社名', text: '富永タイル株式会社'},
        // {title: '創業', text: '1891年（明治24年）10月30日'},
        {title: '設立', text: '1969年（昭和44年）09月'},
        {title: '資本金', text: '1000万'},
        {title: '所在地', text: '〒815-0075 福岡県福岡市南区長丘5-1-26'},
        {title: '代表者', text: '岡田恵二'},
        {title: '事業内容', text: 'タイル、れんが、ブロック工事業'}
      ]
    }
  }
}
</script>

<style scoped>
.OverViewTable {
  margin-left: auto;
  margin-right: auto;
  min-width: 1000px;
}
.OverViewTable tr:first-child {
  border-top: 2px solid #D1D1D1;
}
.OverViewTableTr {
  border-bottom: 2px solid #D1D1D1;
}
.contentsTitle {
  padding: 24px 137px 24px 48px;
  font-weight: bold;
  width: 300px;
  color: #068273;
}
.contentsText {
  font-weight: bold;
  text-align: left;
}

@media screen and (max-width: 960px) {
  .OverViewTable {
    min-width: auto;
  }
}

@media screen and (max-width: 520px) {
  .OverViewTable {
    width: 80%;
  }
  .OverViewTable tr:first-child {
    border-top: 1px solid #D1D1D1;
  }
  .OverViewTableTr {
    border-bottom: 1px solid #D1D1D1;
  }
  .contentsTitle {
    padding: 16px;
    min-width: 4em;
    width: auto;
    box-sizing: content-box;
  }
}
</style>
