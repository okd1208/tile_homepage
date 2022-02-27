<template>
  <div>
    <header-img class="OverView">
      <template v-slot:Title>ABOUT</template>
      <template v-slot:Text>会社情報</template>
    </header-img>
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
export default {
  name: 'OverView',
  components: {
    headerImg
  },
  data: function () {
    return {
      contents: [
        {title: '会社名', text: '富永タイル株式会社'},
        {title: '創業', text: '1891年（明治24年）10月30日'},
        {title: '設立', text: '1918年（大正07年）09月'},
        {title: '資本金', text: '344億3,372万円（2019年12月31日現在）'},
        {title: '本社所在地', text: '〒130-8644 東京都墨田区本所1-3-7　TEL：03-3621-6211'},
        {title: '代表者', text: '田中圭'},
        {title: '事業内容', text: 'タイル、れんが'},
        {title: '売上', text: '連結：3,475億円［IFRS］　個別：2,694億円（2019年12月期）'}
      ]
    }
  }
}
</script>

<style scoped>
.OverViewTable {
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  width: 1000px;
  /* border-top: 2px solid rgba(255, 255, 255, 0.966); */
}
.OverViewTableTr {
  height: 46px;
  border-bottom: 4px solid rgba(255, 255, 255, 0.966);
  /* margin-bottom: 100px; */
}
.contentsTitle {
  width: 300px;
  color: white;
  background-color: rgb(117, 185, 185);
}
.contentsText {
  text-align: left;
  padding: 24px;
}
</style>
