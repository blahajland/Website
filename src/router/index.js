import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RulesView from '@/views/RulesView.vue'
import SignUpView from '@/views/SignUpView.vue'
import NewSiteView from '@/views/NewSiteView.vue'

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
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/newsite',
      name: 'new site',
      component: NewSiteView
    }
  ]
})

export default router
