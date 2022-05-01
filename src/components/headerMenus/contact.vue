<template>
  <div>
    <header-img class="contact-img">
      <template v-slot:Text>お問い合わせ</template>
      <template v-slot:Title>CONTACT</template>
    </header-img>
    <div class="header">
      <p>事業に関することや、サービスに関することなど<br>お気軽にお問い合わせください。</p>
    </div>
    <div>
        <form class="contactpage-form">
            <div>
                <label>お名前</label><span>必須</span>
                <input type="text" name="name" value="">
            </div>
            <div>
                <label>ふりがな</label><span>必須</span>
                <input type="text" name="furigana" value="">
            </div>
            <div>
                <label>メールアドレス</label><span>必須</span>
                <input type="text" name="email" value="">
            </div>
            <div>
                <label>電話番号</label><span>必須</span>
                <input type="text" name="tel" placeholder="例）08012345678" value="">
            </div>
            <div>
                <label>お問い合わせ項目</label><span>必須</span>
                <select name="item">
                    <option value="">お問い合わせ項目を選択してください</option>
                    <option value="ご質問・お問い合わせ">ご質問・お問い合わせ</option>
                    <option value="ご意見・ご感想">ご意見・ご感想</option>
                </select>
            </div>
            <div>
                <label for="content">お問い合わせ内容</label><span>必須</span>
                <textarea name="content" style="color:000000;vertical-align:middle" rows="5"></textarea>
            </div>
            <p class="contact-submit-btn" type="submit">確認画面へ</p>
        </form>
    </div>
  </div>
</template>

<script>
import headerImg from '@/components/headerImg.vue'
export default {
  name: 'contact',
  components: {
    headerImg
  }
}
</script>

<style scoped>
.header{
  margin: 100px 0 60px 0;
}
.contactpage-form > div {
  width: 50%;
  margin: auto;
  text-align: left;
  margin-bottom: 60px;
}
.contactpage-form label {
  width: 35%;
}
.contactpage-form input::before{
   content: "→";
   margin-right: 0;
}
.contactpage-form input, .contactpage-form select, .contactpage-form textarea {
  width: 55%;
}
.contactpage-form span {
  background-color: #068273;
  color: white;
  border-radius: 5px;
  font-size: 12px;
  /* line-height: 30px; */
  padding: 4px 8px;
  display: inline-block;
  position: relative;
  right: 0;
}
.contactpage-form > .contact-submit-btn {
  background-color: #068273;
  color: white;
  display: inline-block;
  padding: 21px 63px;
  font-size: 18px;
}
</style>
