<template>
  <router-link :to="{name: 'detail', params: {id: itemId, tilesOrConstructions: 'construction'}}" class="signup-link">
    <span class="c-type">{{ itemData.category }}</span>
    <!-- <img :src="itemData.fotoURL" width="100%"> -->
    <some-imgs>
      <template v-slot:img>
        <router-link :to="{name: 'detail', params: {id: itemId, tilesOrConstructions: 'construction'}}" class="signup-link">
          <img :src="itemData.fotoURL" width="100%">
        </router-link>
      </template>
      <template v-slot:title>
        View more
      </template>
    </some-imgs>
    <p class="c-date">{{ itemData.date }}</p>
    <p class="c-name">{{ itemData.name }}</p>
  </router-link>
</template>

<script>
import someImgs from '@/components/someImgs.vue'
import Mixin from '../../mixin'
export default {
  name: 'construction',
  components: {
    someImgs
  },
  mixins: [Mixin],
  data: function () {
    return {
    }
  },
  props: {
    itemData: {
      type: Object,
      default: null,
      required: true
    },
    itemId: {
      type: String,
      default: null,
      required: true
    }
  }
}
</script>

<style>
</style>
