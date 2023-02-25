<template>
  <router-link :to="{name: 'detail', params: {id: itemId, tilesOrConstructions: 'construction'}}" class="signup-link">
    <!-- <span class="c-type">{{ itemData.category }}</span> -->
    <!-- <img :src="itemData.fotoURL" width="100%"> -->
    <some-imgs>
      <template v-slot:img>
        <router-link :to="{name: 'detail', params: {id: itemId, tilesOrConstructions: 'construction'}}" class="signup-link">
          <img class="cardImg" ref="cardImg" :src="itemData.fotoURL" width="100%" :height="cardImgheight" @error="replaceDefaultImage">
        </router-link>
      </template>
      <template v-slot:title>
        View more
      </template>
    </some-imgs>
    <!-- <p class="c-date">{{ itemData.date }}</p> -->
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
      cardImgheight: 300
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
  },
  mounted () {
    const cardWidth = this.$refs.cardImg.clientWidth
    this.cardImgheight = cardWidth * 2 / 3
  },
  methods: {
    replaceDefaultImage () {
      this.itemData.fotoURL = require('@/assets/no-image.png')
    }
  }
}
</script>

<style>
@media screen and (max-width: 520px) {
  .item-card .c-date {
    margin: 8px 0 4px;
    font-size: 8px;
  }
}
.c-name {
  margin-top: 16px;
}
.cardImg {
  object-fit: cover;
}
</style>
