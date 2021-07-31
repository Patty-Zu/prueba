import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Formulario from '../views/Formulario.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
  path: '/formulario',
  name: 'Formulario',
  component: () => import(/* webpackChunkName: "about" */ '../views/Formulario.vue')  
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
