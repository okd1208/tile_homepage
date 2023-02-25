<template>
<div>
  <header-img class="constraction-img">
    <template v-slot:Title>Works</template>
    <template v-slot:Text>建設事例</template>
  </header-img>
  <div class="construction">
    <h2 class="green-underbar">現場のプロフェッショナルな仕事</h2>
    <div class="description">
      発注者や関係機関との打ち合わせから始まり、協力会社の作業員を統括し、指揮・管理を<br>
      行いつつ日々の工程や原価管理などを行なっています。
    </div>
    <div class="item-cards">
      <div class="item-card" v-for="(construction, key) in consData.constructions" :key="key">
        <item-card :itemData="construction" :itemId="key"></item-card>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import headerImg from '@/components/headerImg.vue'
import someImgs from '@/components/someImgs.vue'
import itemCard from '@/components/parts/itemCard.vue'
import Mixin from '../../mixin'
export default {
  name: 'constructionExample',
  components: {
    headerImg,
    someImgs,
    itemCard
  },
  mixins: [Mixin]
}
</script>

<style scoped>
.construction{
  margin-top: 96px;
}
.description {
  text-align: 1.5rem;
  margin: 48px 0 72px;
}
.item-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  padding: 32px 10%;
  background-color: #F2F2F2;
}
.item-card {
  text-align: left;
  width: 90% !important;
  margin: auto;
  padding: 32px 0;
}
@media screen and (max-width: 960px) {
  .construction{
    margin-top: 72px;
  }
  .description {
    margin: 32px 32px 64px;
  }
  .item-cards {
    padding: 24px 16px;
    grid-template-columns: repeat(2, 1fr);
  }
  .item-card {
    padding: 8px 0;
  }
}
</style>
