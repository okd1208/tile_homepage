<template>
<div>
  <body-header>よくあるご質問</body-header>
  <div class="Qcategory">
    <h3 class="Qtitle">カテゴリー</h3>
    <ul>
      <li class="Qlist">営業時間は何時までですか？</li>
      <li class="Qlist">営業時間は何時までですか？</li>
      <li class="Qlist">営業時間は何時までですか？</li>
      <li class="Qlist">営業時間は何時までですか？</li>
    </ul>
  </div>
</div>
</template>

<script>
import bodyHeader from '@/components/header'
export default {
  name: 'questions',
  components: {
    bodyHeader
  }
}
</script>

<style scoped>
.Qcategory {
  width: 80%;
  text-align: left;
  margin-left: auto;
  /* margin-right: auto; */
  margin-top: 32px;
}
.Qlist {
  margin-top: 12px;
}
</style>
