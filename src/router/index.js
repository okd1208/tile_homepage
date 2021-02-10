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

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)
export default new Router({
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
      path: '/:tilesOrConstructions/:id',
      name: 'detail',
      component: detail
    }
  ]
})
