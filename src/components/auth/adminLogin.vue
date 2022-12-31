<template>
  <div id="app" class="login-widget">
    <h2>ログイン</h2>
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    <div class="login-form">
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">メールアドレス:</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">パスワード:</label>
              <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-info">ログイン</button>
        </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      email: '',
      password: '',
      errorMessage: null
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential.user.email)
          this.$store.commit('updateUserId', userCredential.user)
          this.$store.commit('onUserLoginStatusChanged', true)
          this.$router.push('/admin')
        })
        .catch((error) => {
          console.log(`${error.code}: ${error.message}`)
          this.errorMessage = 'メールアドレスかパスワードが正しくありません。'
        })
    }
  }
}
</script>

<style>
.login-widget {
  width: 60%;
  margin: 120px auto 0;
}
.login-form {
  text-align: left;
  width: 80%;
  margin: 32px auto 0;
}
.error-message {
  color: red;
}
</style>
