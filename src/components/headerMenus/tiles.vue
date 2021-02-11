<template>
<div>
  <body-header>取り扱いタイル一覧</body-header>
  <some-tiles></some-tiles>
  <request-erea></request-erea>
</div>
</template>

<script>
import bodyHeader from '@/components/header.vue'
import someTiles from '@/components/someTiles.vue'
import RequestErea from '@/components/requestErea'
export default {
  name: 'tiles',
  components: {
    bodyHeader,
    someTiles,
    RequestErea
  }
}
</script>

<style scoped>
</style>
