<template>
<div>
  <content-title>
    <template v-slot:mainTitle>取り扱いタイル</template>
    <template v-slot:subTitle>tiles</template>
  </content-title>
  <some-tiles></some-tiles>
  <request-erea></request-erea>
</div>
</template>

<script>
import contentTitle from '@/components/contentTitle'
import someTiles from '@/components/someTiles.vue'
import RequestErea from '@/components/requestErea'
export default {
  name: 'tiles',
  components: {
    contentTitle,
    someTiles,
    RequestErea
  }
}
</script>

<style scoped>
</style>
