import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/home/index.vue'
import WelcomeView from '../views/pages/welcome/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
   
  ]
})

export default router
