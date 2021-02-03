<template>
<div>
  <body-header>取り扱いタイル一覧</body-header>
  <some-tiles></some-tiles>
</div>
</template>

<script>
import bodyHeader from '@/components/header.vue'
import someTiles from '@/components/someTiles.vue'
export default {
  name: 'tiles',
  components: {
    bodyHeader,
    someTiles
  }
}
</script>

<style scoped>
</style>
