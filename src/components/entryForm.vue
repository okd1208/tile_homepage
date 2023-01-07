<template>
  <div>
    <header-img class="recruit-contact-img">
      <template v-slot:Text>採用応募</template>
      <template v-slot:Title>Entory</template>
    </header-img>
    <div class="header">
      <p>事業に関することや、サービスに関することなど<br>お気軽にお問い合わせください。</p>
    </div>
    <div v-if="errorMessage != []" id="error-massage">
      <p v-for="m in errorMessage" :key="m">{{m}}</p>
    </div>
    <div>
        <form ref="recruitForm" class="contactpage-form">
            <div>
                <label>名前</label>
                <input v-model="fullName" type="text" name="name" value="">
            </div>
            <div>
                <label>フリガナ(空白なし)</label>
                <input v-model="ruby" type="text" name="furigana" value="">
            </div>
            <div>
                <label>メールアドレス</label>
                <input v-model="email" type="text" name="email" value="">
            </div>
            <div>
                <label>電話番号(ハイフンあり)</label>
                <input v-model="tel" type="text" name="tel" placeholder="例）080-1234-5678" value="">
            </div>
            <div>
                <label>希望内容</label>
                <select v-model="contactType" name="contact_type">
                    <option value="">希望内容を選択してください</option>
                    <option value="話を聞きたい">話を聞きたい</option>
                    <option value="選考に進みたい">選考に進みたい</option>
                </select>
            </div>
            <div>
                <label for="content">質問事項等あればご記載ください</label>
                <textarea v-model="contactContent" name="content" style="color:000000;vertical-align:top" rows="5"></textarea>
            </div>
            <p @click="submitContactForm" class="contact-submit-btn" type="submit">確認画面へ</p>
        </form>
    </div>
  </div>
</template>

<script>
import headerImg from '@/components/headerImg.vue'
import emailjs from '@emailjs/browser'
export default {
  name: 'contact',
  data: function () {
    return {
      fullName: null,
      ruby: null,
      tel: null,
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
      if (!this.tel || !this.tel.match(/\d{2,4}-\d{2,4}-\d{4}/)) {
        this.errorMessage.push('電話番号を正しい形式で入力してください。')
      }
      if (!this.contactType) {
        this.errorMessage.push('お問い合わせ項目を選択してください。')
      }
      if (this.contactContent.length > 1000) {
        this.errorMessage.push('お問い合わせ内容を1000文字以内に変更してください。')
      }

      if (this.errorMessage.length === 0) {
        this.submit()
      } else {
        this.scrollErrorMessage()
      }
    },
    submit () {
      emailjs.sendForm('service_xfjlq3q', 'template_b9uvozr', this.$refs.recruitForm, 'qAzLeH0J2l1FfJgXj')
        .then((result) => {
          this.$router.push({ path: '/contact/complete' })
        }, (error) => {
          this.errorMessage.push('メールが正しく送信されませんでした。しばらく時間を置いてお試しください。')
          this.errorMessage.push(error)
          this.scrollErrorMessage()
        })
    },
    scrollErrorMessage () {
      const targetElem = document.getElementById('error-massage')
      targetElem.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
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
  margin: 1px auto 60px;
}
.contactpage-form label {
  width: 30%;
}
.contactpage-form input::before{
   content: "→";
   margin-right: 0;
}
.contactpage-form input, .contactpage-form select, .contactpage-form textarea {
  margin-left: 1px;
  font-family: Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  width: 60%;
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
#error-massage {
  color: red;
  font-weight: bold;
  margin-bottom: 32px;
}

@media screen and (max-width: 960px) {
  .contactpage-form > div {
    width: 90%;
  }
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
    width: 40%;
  }
  .contactpage-form input, .contactpage-form select, .contactpage-form textarea {
    width: 57%;
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
