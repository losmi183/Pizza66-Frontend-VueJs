import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/Home'
import PizzaMenu from '../components/pages/PizzaMenu'
import BbqMenu from '../components/pages/BbqMenu'
import About from '../components/pages/About'
import Product from '../components/pages/Product'
import Cart from '../components/pages/Cart'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pizza',
    name: 'PizzaMenu',
    component: PizzaMenu
  },
  {
    path: '/bbq',
    name: 'BbqMenu',
    component: BbqMenu
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/product/:slug',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
