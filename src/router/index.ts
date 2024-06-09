import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreditsView from '@/views/CreditsView.vue'
import KofiView from '@/views/KofiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/kofi',
      name: 'kofi',
      component: KofiView
    },
    {
      path: '/credits',
      name: 'credits',
      component: CreditsView
    }
  ]
})

export default router
