import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyAccount from '../views/MyAccount.vue'
import Categories from '../views/Categories.vue'
import Stores from '../views/Stores.vue'
import Links from '../views/Stores/Links.vue'
import Instar from '../views/Stores/Instar.vue'
import Hgspot from '../views/Stores/Hgspot.vue'
import Chargers from '../views/Categories/Chargers.vue'
import Headphones from '../views/Categories/Headphones.vue'
import Keyboards from '../views/Categories/Keyboards.vue'
import Laptops from '../views/Categories/Laptops.vue'
import MobilePhones from '../views/Categories/MobilePhones.vue'
import Mouses from '../views/Categories/Mouses.vue'
import Printers from '../views/Categories/Printers.vue'
import VideoGames from '../views/Categories/VideoGames.vue'

Vue.use(VueRouter)

  const routes = [
  {
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
    name: 'Register',
    component: Register
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/stores',
    name: 'Stores',
    component: Stores
  },
  {
    path: '/links',
    name: 'Links',
    component: Links
  },
  {
    path: '/instar',
    name: 'Instar',
    component: Instar
  },
  {
    path: '/hgspot',
    name: 'Hgspot',
    component: Hgspot
  },
  {
    path: '/laptops',
    name: 'Laptops',
    component: Laptops
  },
  {
    path: '/keyboards',
    name: 'Keyboards',
    component: Keyboards
  },
  {
    path: '/mouses',
    name: 'Mouses',
    component: Mouses
  },
  {
    path: '/headphones',
    name: 'Headphones',
    component: Headphones
  },
  {
    path: '/chargers',
    name: 'Chargers',
    component: Chargers
  },
  {
    path: '/videogames',
    name: 'Videogames',
    component: VideoGames
  },
  {
    path: '/mobilephones',
    name: 'Mobilephones',
    component: MobilePhones
  },
  {
    path: '/printers',
    name: 'Printers',
    component: Printers
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
