import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import home from '@/components/headerMenus/home'
import recruit from '@/components/headerMenus/recruit'
import OverView from '@/components/headerMenus/OverView'
import constructionExample from '@/components/headerMenus/constructionExample'
import tiles from '@/components/headerMenus/tiles'
import contents from '@/components/headerMenus/contents'
import contact from '@/components/headerMenus/contact'
import detail from '@/components/detail'
import topicDetail from '@/components/topicDetail'
import questions from '@/components/questions'
import adminHome from '@/components/admin/home'
import editTile from '@/components/admin/editTiles'
import editConstruction from '@/components/admin/editConstruction'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

let router = new Router({
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
      path: '/contents',
      name: 'contents',
      component: contents
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
      path: '/questions',
      name: 'questions',
      component: questions
    },
    {
      path: '/admin',
      name: 'adminHome',
      component: adminHome,
      meta: { requiresAuth: false },
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
        }
      ]
    },
    {
      path: '/:tilesOrConstructions/:id',
      name: 'detail',
      component: detail
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

export default router
