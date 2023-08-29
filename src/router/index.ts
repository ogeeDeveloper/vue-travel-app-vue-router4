import {createRouter, createWebHistory} from 'vue-router'
import { Home } from '@/pages'

const routes = [
    {path: '/', name: 'Home', component: Home},
    // {path: '/:pathMatch(.*)*', name: 'NotFound', component: Home}
    {path: '/destination/:id/:slug', name: 'DestinationPage', component: ()=>import('@/pages/Destination.vue')},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router