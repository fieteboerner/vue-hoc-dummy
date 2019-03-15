import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Form from './views/Form.vue'
import ProgressBarDemo from './views/ProgressBarDemo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/progress-bar',
      name: 'progress-bar',
      component: ProgressBarDemo
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
  ]
})
