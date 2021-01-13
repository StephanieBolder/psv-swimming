import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../pages/Welcome.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import ResetPassword from '../pages/ResetPassword.vue'
import Checkmail from '../pages/Checkmail.vue'
import Profile from '../pages/Profile.vue'
import Meets from '../pages/Meets.vue'
import MeetsRegister from '../pages/MeetsRegister.vue'

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
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/checkmail',
    name: 'CheckMail',
    component: Checkmail,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/meets',
    name: 'Meets',
    component: Meets,
  },
  {
    path: '/meetsregister',
    name: 'meetsregister',
    component: MeetsRegister,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
