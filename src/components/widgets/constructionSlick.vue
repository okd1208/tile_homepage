<template>
  <div class="construction">
    <Slick v-if="showSlide && consData" ref="slick" :options="slickOptions" class="slick-outer mt-4">
      <div ref="item" class="item-card" v-for="(construction, key) in getConstructions" :key="key">
        <item-card :itemData="construction" :itemId="key"></item-card>
      </div>
    </Slick>
  </div>
</template>

<script>
import someImgs from '@/components/someImgs.vue'
import itemCard from '@/components/parts/itemCard.vue'
import Slick from 'vue-slick'
import Mixin from '../../mixin'
export default {
  name: 'construction',
  components: {
    someImgs,
    itemCard,
    Slick
  },
  mixins: [Mixin],
  data: function () {
    return {
      showSlide: true,
      isSlickUpdated: false,
      displayCount: 12,
      slickOptions: {
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnFocus: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '15%'
            }
          }
        ]
      }
    }
  },
  methods: {
    reInit () {
      this.showSlide = false
      this.$nextTick(() => (this.showSlide = true))
    }
  },
  updated () {
    if (this.$refs.item && !this.isSlickUpdated) {
      this.isSlickUpdated = true
      this.reInit()
    }
  },
  computed: {
    getConstructions () {
      const constructions = this.consData.constructions
      const constructionsObj = {}
      for (const key in constructions) {
        constructionsObj[key] = constructions[key]
        if (Object.keys(constructionsObj).length === this.displayCount) {
          break
        }
      }
      return constructionsObj
    }
  }
}
</script>

<style scoped>
.item-card {
  text-align: left;
  width: 90% !important;
  margin: auto;
  padding: 52px 0;
}

.slick-outer {
  width: 75%;
  margin: auto;
}

.construction{
  margin-top: 64px;
}
@media screen and (max-width: 520px) {
  .construction{
    margin-top: 0px;
  }
  .slick-outer {
    width: 100%;
  }
  .slick-prev {
      left: 0;
  }
  .slick-next {
      right: 0;
  }
  .item-card {
    padding: 32px 0 52px;
  }
}
</style>
