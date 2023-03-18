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
      <p v-for="m in errorMessage" :key="m">{{ m }}</p>
    </div>
    <div :class="{ hidden: isConfirm }">
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
        <p @click="confirmForm" class="contact-submit-btn" type="submit">確認画面へ</p>
      </form>
    </div>
    <div v-if="isConfirm">
      <table>
        <tr>
          <td>名前</td>
          <td>{{ fullName }}</td>
        </tr>
        <tr>
          <td>フリガナ(空白なし)</td>
          <td>{{ ruby }}</td>
        </tr>
        <tr>
          <td>メールアドレス</td>
          <td>{{ email }}</td>
        </tr>
        <tr>
          <td>電話番号(ハイフンあり)</td>
          <td>{{ tel }}</td>
        </tr>
        <tr>
          <td>希望内容</td>
          <td>{{ contactType }}</td>
        </tr>
        <tr>
          <td>質問事項等</td>
          <td>{{ contactContent }}</td>
        </tr>
      </table>
      <p @click="submitContactForm" class="contact-submit-btn" type="submit">送信する</p>
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
      errorMessage: [],
      isConfirm: false
    }
  },
  components: {
    headerImg
  },
  methods: {
    confirmForm () {
      if (!this.isFormErr()) {
        this.isConfirm = true
      }
    },
    isFormErr () {
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
        this.errorMessage.push('希望内容を選択してください。')
      }
      if (this.contactContent.length > 1000) {
        this.errorMessage.push('質問事項等の内容を1000文字以内に変更してください。')
      }

      if (this.errorMessage.length === 0) {
        return false
      } else {
        this.scrollErrorMessage()
        return true
      }
    },
    submitContactForm () {
      if (!this.isFormErr()) {
        this.submit()
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
.contact-submit-btn {
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

table {
  margin: 0 auto 80px;
  min-width: 960px;
}
tr:first-child {
    border-top: 2px solid #d1d1d1;
}
tr {
  border-bottom: 2px solid #d1d1d1;
}
tr td:first-child {
  padding: 24px 137px 24px 48px;
  font-weight: 700;
  width: 400px;
  color: #068273;
  text-align: left;
}
tr td:last-child {
  font-weight: 700;
  text-align: left;
}

.hidden {
  visibility: hidden;
  position: absolute;
}
@media screen and (max-width: 960px) {
  .contactpage-form > div {
    width: 90%;
  }
  table {
    min-width: auto;
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
  .contact-submit-btn {
    padding: 16px 52px;
    border-radius: 32px;
    margin-top: 32px;
    font-size: 18px;
  }
  table {
    margin: 0 auto;
  }
  tr:first-child {
      border-top: 1px solid #d1d1d1;
  }
  tr {
    border-bottom: 1px solid #d1d1d1;
  }
  tr td:first-child {
    padding: 16px;
    min-width: 4em;
    width: auto;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  tr td:last-child {
    min-width: 100px;
    padding-right: 8px;
  }
}
</style>
