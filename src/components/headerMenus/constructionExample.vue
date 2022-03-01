<template>
<div>
  <header-img class="constraction-img">
    <template v-slot:Title>Tiles</template>
    <template v-slot:Text>タイル使用建設例</template>
  </header-img>
  <content-title>
    <template v-slot:mainTitle>Tiles</template>
    <template v-slot:subTitle>タイル使用建設例</template>
  </content-title>
  <construction></construction>
  <request-erea></request-erea>
</div>
</template>

<script>
import contentTitle from '@/components/contentTitle'
import construction from '@/components/construction.vue'
import RequestErea from '@/components/requestErea'
import headerImg from '@/components/headerImg.vue'
export default {
  name: 'constructionExample',
  components: {
    contentTitle,
    construction,
    RequestErea,
    headerImg
  }
}
</script>

<style scoped>
</style>
