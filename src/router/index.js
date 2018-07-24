import Vue from 'vue'
import Router from 'vue-router'
// import BaseLayout from '@/components/layout/BaseLayout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('@/pages/Login')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/pages/index')
    }
  ]
})
