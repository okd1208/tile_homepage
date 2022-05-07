<template>
  <div class="construction">
    <Slick v-if="showSlide" ref="slick" :options="slickOptions" class="slick-outer mt-4">
      <div ref="item" v-for="construction in consData.constructions" :key="construction.name">
        <router-link :to="{name: 'detail', params: {id: construction.name, tilesOrConstructions: 'construction'}}" class="signup-link">
          <img :src="construction.fotoURL" width="90%" class="slick-img slick-three-img">
        </router-link>
      </div>
    </Slick>
    <!-- <h2 class="title s-fontsize-15rem">建設事例一覧</h2>
    <div>
      <ul class="constructionParent">
        <li v-for="construction in consData.constructions" :key="construction.name" class="constructionList">
          <some-imgs>
            <template v-slot:img>
              <router-link :to="{name: 'detail', params: {id: construction.name, tilesOrConstructions: 'construction'}}" class="signup-link">
                <img :src="construction.fotoURL" width="100%">
              </router-link>
            </template>
            <template v-slot:title>
              {{ construction.name }}
            </template>
          </some-imgs>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import someImgs from '@/components/someImgs.vue'
import Slick from 'vue-slick'
import Mixin from '../mixin'
export default {
  name: 'construction',
  components: {
    someImgs,
    Slick
  },
  mixins: [Mixin],
  data: function () {
    return {
      showSlide: true,
      isSlickUpdated: false,
      slickOptions: {
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnFocus: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
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
    if (this.$refs.item.length > 0 && !this.isSlickUpdated) {
      this.isSlickUpdated = true
      this.reInit()
    }
  }
}
</script>

<style>
@import "../css/slick-theme.css";
@import "../css/slick.css";
.slick-three-img {
  margin: auto;
}
.slick-outer {
  width: 80%;
  margin: auto;
}

.construction{
  margin-top: 64px;
}
.title {
  margin-bottom: 32px;
  font-family: 'Sawarabi Mincho', sans-serif;
}
.constructionList {
  text-align: center;
  list-style: none;
  width: 300px;
  height: 200px;
  background-color: rgb(0, 0, 0);
  margin: 2px;
  color: white;
}
.constructionParent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0px;
}
@media screen and (max-width:300px) {
  .constructionList {
    width: 210px;
    height: 140px;
  }
}
</style>
