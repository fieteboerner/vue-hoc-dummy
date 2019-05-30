import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Colors from './views/Colors.vue'
import Form from './views/Form.vue'
import Progress from './views/Progress.vue'

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
      path: '/colors',
      name: 'colors',
      component: Colors
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
  ]
})
