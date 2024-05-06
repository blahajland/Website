import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RulesView from '@/views/RulesView.vue'
import LegacyDonationsView from '@/views/DonationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView
    },
    {
      path: '/kofi',
      name: 'kofi',
      component: LegacyDonationsView
    }
  ]
})

export default router
