<template>
  <div>
    <header-img class="contact-img">
      <template v-slot:Text>お問い合わせ</template>
      <template v-slot:Title>CONTACT</template>
    </header-img>
    <div class="header">
      <p>事業に関することや、サービスに関することなど<br>お気軽にお問い合わせください。</p>
    </div>
    <div v-if="errorMessage != []" class="error-massage">
      <p v-for="m in errorMessage" :key="m">{{m}}</p>
    </div>
    <div>
        <form class="contactpage-form">
            <div>
                <label>名前</label><span>必須</span>
                <input v-model="fullName" type="text" name="name" value="">
            </div>
            <div>
                <label>フリガナ(空白なし)</label><span>必須</span>
                <input v-model="ruby" type="text" name="furigana" value="">
            </div>
            <div>
                <label>メールアドレス</label><span>必須</span>
                <input v-model="email" type="text" name="email" value="">
            </div>
            <div>
                <label>電話番号(ハイフンあり)</label><span>必須</span>
                <input v-model="phoneNumber" type="text" name="tel" placeholder="例）080-1234-5678" value="">
            </div>
            <div>
                <label>お問い合わせ項目</label><span>必須</span>
                <select v-model="contactType" name="item">
                    <option value="">お問い合わせ項目を選択してください</option>
                    <option value="ご質問・お問い合わせ">ご質問・お問い合わせ</option>
                    <option value="ご意見・ご感想">ご意見・ご感想</option>
                </select>
            </div>
            <div>
                <label for="content">お問い合わせ内容</label><span>必須</span>
                <textarea v-model="contactContent" name="content" style="color:000000;vertical-align:top" rows="5"></textarea>
            </div>
            <p @click="submitContactForm" class="contact-submit-btn" type="submit">確認画面へ</p>
        </form>
    </div>
  </div>
</template>

<script>
import headerImg from '@/components/headerImg.vue'
export default {
  name: 'contact',
  data: function () {
    return {
      fullName: null,
      ruby: null,
      phoneNumber: null,
      email: null,
      contactType: '',
      contactContent: null,
      errorMessage: []
    }
  },
  components: {
    headerImg
  },
  methods: {
    submitContactForm () {
      this.errorMessage = []
      if (!this.fullName || !this.fullName.match(/\S/g)) {
        this.errorMessage.push('名前を入力してください。')
      }
      if (!this.ruby || !this.ruby.match(/^[ァ-ン]*$/)) {
        this.errorMessage.push('カタカナでふりがなを入力してください。')
      }
      if (!this.email || !this.email.match(/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) {
        this.errorMessage.push('メールアドレスを正しい形式で入力してください。')
      }
      if (!this.phoneNumber || !this.phoneNumber.match(/\d{2,4}-\d{2,4}-\d{4}/)) {
        this.errorMessage.push('電話番号を正しい形式で入力してください。')
      }
      if (!this.contactType) {
        this.errorMessage.push('お問い合わせ項目を選択してください。')
      }
      if (!this.contactContent) {
        this.errorMessage.push('お問い合わせ内容を入力してください。')
      } else if (this.contactContent.length > 1000) {
        this.errorMessage.push('お問い合わせ内容を1000文字以内に変更してください。')
      }
    }
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
.error-massage {
  color: red;
  font-weight: bold;
  margin-bottom: 32px;
}

@media screen and (max-width: 520px) {
  .header{
    margin: 48px 0;
  }
  .contactpage-form > div {
    width: 90%;
    text-align: left;
    margin-bottom: 32px;
  }
  .contactpage-form label {
    width: 37%;
  }
  .contactpage-form input, .contactpage-form select, .contactpage-form textarea {
    width: 50%;
  }
  .contactpage-form span {
    font-size: 10px;
  }
  .contactpage-form > .contact-submit-btn {
    padding: 16px 52px;
    border-radius: 32px;
    margin-top: 32px;
    font-size: 18px;
  }
}
</style>
