import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import home from '@/components/headerMenus/home'
import recruit from '@/components/headerMenus/recruit'
import OverView from '@/components/headerMenus/OverView'
import constructionExample from '@/components/headerMenus/constructionExample'
import tiles from '@/components/headerMenus/tiles'
import businessContents from '@/components/headerMenus/businessContents'
import contact from '@/components/headerMenus/contact'
import entryForm from '@/components/entryForm'
import contactComplete from '@/components/contactForm/thanksPage'
import detail from '@/components/detail'
import topicDetail from '@/components/detailTopic'
import topicsList from '@/components/topicsList'
import questions from '@/components/questions'
import adminLogin from '@/components/auth/adminLogin'
import adminHome from '@/components/admin/home'
import editTile from '@/components/admin/editTiles'
import editConstruction from '@/components/admin/editConstruction'
import editTopic from '@/components/admin/editTopic'
import NotFoundComponent from '@/components/notFoundComponent'

Vue.use(BootstrapVue)
Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: recruit
    },
    {
      path: '/OverView',
      name: 'OverView',
      component: OverView
    },
    {
      path: '/constructionExample',
      name: 'constructionExample',
      component: constructionExample
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/entryForm',
      name: 'entryForm',
      component: entryForm
    },
    {
      path: '/contact/complete',
      name: 'contactComplete',
      component: contactComplete
    },
    {
      path: '/businessContents',
      name: 'businessContents',
      component: businessContents
    },
    {
      path: '/tiles',
      name: 'tiles',
      component: tiles
    },
    {
      path: '/topics/:id',
      name: 'topicDetail',
      component: topicDetail
    },
    {
      path: '/topicsList',
      name: 'topicsList',
      component: topicsList
    },
    {
      path: '/questions',
      name: 'questions',
      component: questions
    },
    {
      path: '/auth/admin/login',
      name: 'adminLogin',
      component: adminLogin
    },
    {
      path: '/admin',
      name: 'adminHome',
      component: adminHome,
      meta: { requiresAdminAuth: true },
      redirect: '/admin/tile',
      children: [
        {
          path: 'tile',
          name: 'tile',
          component: editTile
        },
        {
          path: 'construction',
          name: 'construction',
          component: editConstruction
        },
        {
          path: 'topic',
          name: 'topic',
          component: editTopic
        }
      ]
    },
    {
      path: '/detail/:tilesOrConstructions/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '*',
      name: 'NotFoundComponent',
      component: NotFoundComponent
    }
  ],
  // 画面遷移時にページスクロール状態を元に戻す
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdminAuth)) {
    if (!await getLoginUser()) {
      next({ path: '/auth/admin/login', query: { redirect: to.fullPath } })
    } else {
      store.state.isAdminPage = true
      next()
    }
  } else {
    store.state.isAdminPage = false
    next()
  }
})

async function getLoginUser () {
  if (firebase.auth().currentUser) {
    return firebase.auth().currentUser
  }
  var user = await initFirebaseAuth()
  if (user) {
    store.state.userEmail = user.email
  }
  return user
}

var initFirebaseAuth = () => {
  return new Promise((resolve) => {
    var unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      resolve(user)
      unsubscribe()
    })
  })
}

export default router
