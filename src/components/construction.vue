<template>
  <div class="construction">
    <h2 class="title">建設事例一覧</h2>
    <div>
      <ul class="constructionParent">
        <li v-for="construction in constructions" :key="construction.id" class="constructionList">
          <some-imgs>
            <template v-slot:img>
              <router-link :to="{name: 'detail', params: {id: construction.id, tilesOrConstructions: 'construction'}}" class="signup-link">
                <img :src="construction.img" width="100%">
              </router-link>
            </template>
            <template v-slot:title>
              {{ construction.title }}
            </template>
          </some-imgs>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import someImgs from '@/components/someImgs.vue'
export default {
  name: 'construction',
  components: {
    someImgs
  },
  data: function () {
    return {
    }
  },
  computed: {
    constructions () {
      return this.$store.state.constructions
    }
  }
}
</script>

<style>
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
