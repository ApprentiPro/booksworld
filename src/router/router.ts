import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/pages/home/index.vue'
import WelcomeView from '../views/pages/welcome/index.vue'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'welcome',
        component: WelcomeView, 
        meta:{
            layout:'Default'
        }
    },
    {
        path: '/home',
        name: 'home', 
        component: HomeView,
        meta: {
            layout: 'Default',
          },
    }
]

export default routes