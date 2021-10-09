import Vue from 'vue'
import VueRouter from 'vue-router'
import Estudiante from '../views/Estudiante.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Estudiante',
    component: Estudiante
  },
  {
    path: '/materia',
    name: 'Materia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Materia.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
