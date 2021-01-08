import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../pages/Welcome.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
