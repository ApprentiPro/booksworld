import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/pages/home/index.vue'
import WelcomeView from '../views/pages/welcome/index.vue'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'welcome',
        component: WelcomeView
    },
    {
        path: '/home',
        name: 'home',
        meta:{
            layout:'Default'
        }, 
        component: HomeView
    }
]

export default routes