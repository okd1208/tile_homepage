<template>
 <div>
    <new-topic></new-topic>
 </div>
</template>

<script>
import newTopic from '@/components/newTopic.vue'
export default {
  name: 'home',
  data: function () {
    return {
    }
  },
  components: {
    newTopic
  }
}
</script>

<style scoped>
</style>
