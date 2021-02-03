<template>
<div>
  <body-header>タイル使用建設例</body-header>
  <construction></construction>
</div>
</template>

<script>
import bodyHeader from '@/components/header.vue'
import construction from '@/components/construction.vue'
export default {
  name: 'constructionExample',
  components: {
    bodyHeader,
    construction
  }
}
</script>

<style scoped>
</style>
