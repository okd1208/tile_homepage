<template>
  <div class="introduction-contact">
    <div class="contact-explanatory-text">
      <h3>お問い合わせ</h3>
      <p>ご意見・ご質問など、お問い合わせは、<br> 下記フォームからお願いいたします。</p>
    </div>
    <div class="number-and-link">
      <h3><i class="fas fa-phone"></i>092-541-6034</h3>
      <div class="contact-btn"><router-link to="/contact">お問い合わせ</router-link></div>
      <p><router-link to="/questions">よくある質問はこちらから</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'requestErea'
}
</script>

<style scoped>
.introduction-contact {
  margin-top: 136px;
  display: flex;
  background-color: #F2F2F2;
  justify-content: center;
  gap: 16px;
  padding: 80px 0;
}
.contact-explanatory-text {
  background-color: white;
  max-width: 400px;
  width: 30%;
  padding: 56px 48px;
}
.contact-explanatory-text h3 {
  font-weight: 600;
  font-size: 24px;
}
.contact-explanatory-text p {
  font-size: 12px;
}
.number-and-link {
  background-color: white;
  padding: 32px 0;
  width: 40%;
  max-width: 600px;
}
.number-and-link p {
  display: inline-block;
  margin: 24px 0 0 0;
  border-bottom: 1px solid gray;
}
.number-and-link h3 i {
  line-height: 1.75rem;
  transform: scale(-1, 1);
  font-size: 22px;
  margin-right: 16px;
}
.number-and-link h3 {
  font-weight: 600;
  font-size: 32px;
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.contact-btn a {
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 52px;
  border-radius: 30px;
}

@media screen and (max-width: 520px) {
  .introduction-contact {
    margin-top: 72px;
    display: block;
    padding: 40px 0;
  }
  .contact-explanatory-text, .number-and-link{
    width: 80%;
    margin: 8px auto;
  }
  .contact-explanatory-text {
    padding: 24px 0px;
  }
  .contact-explanatory-text h3 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 8px;
  }
  .number-and-link h3 i {
    font-size: 18px;
    margin-right: 8px;
  }
  .number-and-link h3 {
    font-size: 24px;
  }
}
</style>
