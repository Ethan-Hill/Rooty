import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/index.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import notFound from '../pages/notFound.vue'
import Settings from '../pages/Settings.vue'
import Store from '~/store/user'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Signup
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '*',
    component: notFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
