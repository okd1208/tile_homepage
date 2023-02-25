<template>
  <div>
     <header-img className="businessContents">
      <template v-slot:Title>Works</template>
      <template v-slot:Text>建設事例</template>
    </header-img>
    <div v-if="targetCons" class="cons-detail">
      <h2 class="detailTitle">
        <!-- <span class="detailCategory">{{ targetCons.category }}</span> -->
        {{ targetCons.name }}
      </h2>
      <img class="detailImg" :src="targetCons.fotoURL">
      <!-- <p class="detailDate"><span class="detail-item">施工日</span>：{{ targetCons.date }}</p> -->
      <p class="detailText"><span v-if="targetCons.text" class="detail-item">説明：</span>{{ targetCons.text }}</p>
    </div>
    <div class="round-gr-btn back-list-btn">
      <router-link to="/constructionExample">一覧に戻る</router-link>
    </div>
  </div>
</template>

<script>
import Mixin from '../mixin'
import headerImg from './headerImg'
export default {
  name: 'detailTile',
  watch: {
    'consData.constructions': function (value) {
      if (value) {
        this.targetCons = this.consData.constructions[this.$route.params.id]
      }
    }
  },
  mixins: [Mixin],
  components: {
    headerImg
  },
  data: function () {
    return {
      targetCons: null
    }
  }
}
</script>

<style scoped>
.cons-detail {
  background-color: #F2F2F2;
  text-align: left;
  padding: 92px;
  width: 60%;
  margin: 96px auto 46px;
}
.detailCategory {
  font-size: 26px;
  color: #068273;
  background-color: white;
  border-radius: 32px;
  padding: 8px 24px;
}
.detailTitle {
  font-size: 28px;
  margin: 0 0 40px 0;
}
.detailImg {
  width: 100%;
}
.detailDate {
  border-bottom: 1px solid darkgray;
}
.detailDate,.detailText{
  padding: 16px 0;
  font-size: 16px;
}
.detail-item {
  color: #12887A;
}
.back-list-btn a{
  font-size: 22px;
  padding: 12px 40px;
  border-radius: 28px;
}

@media screen and (max-width: 960px) {
  .cons-detail {
    padding: 80px;
    width: 80%;
  }
  .detailCategory {
    font-size: 24px;
    border-radius: 32px;
    padding: 8px 24px;
  }
  .detailTitle {
    font-size: 26px;
  }
  .back-list-btn a{
    font-size: 20px;
  }
}

@media screen and (max-width: 520px) {
  .cons-detail {
    padding: 32px;
    width: 100%;
    margin: 32px auto 46px;
  }
  .detailCategory {
    font-size: 14px;
    border-radius: 16px;
    padding: 4px 16px;
    margin-right: 8px;
  }
  .detailTitle {
    font-size: 14px;
    margin: 0 0 16px 0;
    font-weight: 600;
  }
  .detailDate,.detailText{
    padding: 16px 0;
    font-size: 14px;
  }
  .back-list-btn a{
    font-size: 16px;
    padding: 8px 16px;
  }
}
</style>
