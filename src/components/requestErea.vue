<template>
<div>
  <h2 class="requestEriaTitle">Contact</h2>
  <div class="requestErea">
    <div class="requestBox">
      <router-link to="/questions" class="text-dark"><p class="BoxTest"><i class="far fa-question-circle"></i>よくある質問</p></router-link>
    </div>
    <div class="requestBox">
      <router-link to="/contact" class="text-dark"><p class="BoxTest"><i class="far fa-envelope"></i>お問い合わせ</p></router-link>
    </div>
    <div class="requestBox">
      <router-link to="/questions" class="text-dark"><p class="BoxTest"><i class="fas fa-info-circle"></i>サポート（資料請求）</p></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'requestErea'
}
</script>

<style scoped>
.requestEriaTitle {
  text-align: center;
  margin-top: 82px;
}
.requestErea {
  display: flex;
  margin-bottom: 82px;
  justify-content: center;
  transition-duration: 0.5s;
}
.requestBox {
  transition-duration: 0.5s;
  /* hover解除時のtaransitionができていない */
  width: 330px;
  /* background-color: antiquewhite; */
  margin: 32px;
  /* padding: 32px; */
  height: 70px;
  line-height: 70px;
  border: 2px solid rgba(196, 194, 194, 0.836);
  font-weight: bold;
  text-align: left;
}
.far, .fas{
  display: inline-block;
  margin-left: 32px;
  margin-right: 52px;
  text-align: left;
}
.requestBox :hover{
  background-color: rgba(90, 87, 87, 0.836);
  color: aliceblue;
  cursor: pointer;
  transition-duration: 0.5s;
}
</style>
