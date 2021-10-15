import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wall from'../views/Wall.vue'
import Profil from '../views/Profil.vue'
import Community from '../views/Community.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wall',
    name: 'Wall',
    component: Wall
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router