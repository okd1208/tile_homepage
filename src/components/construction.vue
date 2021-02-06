<template>
  <div class="construction">
    <h2 class="title">建設事例一覧</h2>
    <div>
      <ul class="constructionParent">
        <li v-for="example in examples" :key="example.title" class="example">
          <some-imgs>
            <template v-slot:img>
              <img :src="example.img" width="100%">
            </template>
            <template v-slot:title>
              {{ example.title }}
            </template>
          </some-imgs>
        </li>
      </ul>
      <construction-btn>タイルの使用例一覧をみる<br>click!</construction-btn>
    </div>
  </div>
</template>

<script>
import constructionBtn from '@/components/constructionBtn.vue'
import someImgs from '@/components/someImgs.vue'
export default {
  name: 'construction',
  components: {
    constructionBtn,
    someImgs
  },
  data: function () {
    return {
      examples: [
        {title: 'FFG外壁工事', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test1.jpeg')},
        {title: 'FFG外壁工事a', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test2.jpg')},
        {title: 'FFG外壁工事b', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test3.jpg')},
        {title: 'FFG外壁工事c', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test4.jpg')},
        {title: 'FFG外壁工事d', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test5.jpeg')},
        {title: 'FFG外壁工事e', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test6.jpg')},
        {title: 'FFG外壁工事f', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test7.jpg')},
        {title: 'FFG外壁工事g', text: 'mmタイル３００枚で完成', img: require('@/assets/home2.jpeg')},
        {title: 'FFG外壁工事h', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test3.jpg')},
        {title: 'FFG外壁工事i', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test4.jpg')},
        {title: 'FFG外壁工事j', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test5.jpeg')},
        {title: 'FFG外壁工事k', text: 'mmタイル３００枚で完成', img: require('@/assets/constructions/test6.jpg')}
      ]
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
.example {
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
}
</style>
