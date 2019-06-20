import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Colors from './views/Colors.vue'
import Navigation from './views/Navigation.vue'
import Transitions from './views/Transitions.vue'
import Form from './views/Form.vue'
import Progress from './views/Progress.vue'
import Wizard from './views/Wizard.vue'

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
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/transitions',
      name: 'transitions',
      component: Transitions
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
    {
      path: '/wizard',
      name: 'wizard',
      component: Wizard,
    },
  ]
})
