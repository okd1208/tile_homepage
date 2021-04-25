// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: 'AIzaSyCdnAo7rx6C7E_kSTLidCuKqceIK4cxeZQ',
  authDomain: 'tile-homepage.firebaseapp.com',
  projectId: 'tile-homepage',
  storageBucket: 'tile-homepage.appspot.com',
  messagingSenderId: '811890093632',
  appId: '1:811890093632:web:f296f04c04f5b432aa79a5'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
