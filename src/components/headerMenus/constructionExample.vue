<template>
<div>
  <header-img class="constraction-img">
    <template v-slot:Title>Tiles</template>
    <template v-slot:Text>タイル使用建設例</template>
  </header-img>
  <body-header>タイル使用建設例</body-header>
  <construction></construction>
  <request-erea></request-erea>
</div>
</template>

<script>
import bodyHeader from '@/components/header.vue'
import construction from '@/components/construction.vue'
import RequestErea from '@/components/requestErea'
import headerImg from '@/components/headerImg.vue'
export default {
  name: 'constructionExample',
  components: {
    bodyHeader,
    construction,
    RequestErea,
    headerImg
  }
}
</script>

<style scoped>
</style>
