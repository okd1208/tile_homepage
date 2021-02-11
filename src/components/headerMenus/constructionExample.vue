<template>
<div>
  <body-header>タイル使用建設例</body-header>
  <construction></construction>
  <request-erea></request-erea>
</div>
</template>

<script>
import bodyHeader from '@/components/header.vue'
import construction from '@/components/construction.vue'
import RequestErea from '@/components/requestErea'
export default {
  name: 'constructionExample',
  components: {
    bodyHeader,
    construction,
    RequestErea
  }
}
</script>

<style scoped>
</style>
