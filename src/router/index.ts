import {createRouter, createWebHistory} from 'vue-router'
import { Home } from '@/pages'

const routes = [
    {path: '/', name: 'Home', component: Home},
    // {path: '/:pathMatch(.*)*', name: 'NotFound', component: Home}
    {path: '/brazil', name: 'BrazilPage', component: ()=>import('@/pages/Brazil.vue')},
    {path: '/jamaica', name: 'JamaicaPage', component: ()=>import('@/pages/Jamaica.vue')},
    {path: '/panama', name: 'PanamaPage', component: ()=>import('@/pages/Panama.vue')},
    {path: '/hawaii', name: 'HawaiiPage', component: ()=>import('@/pages/Hawaii.vue')},
    {path: '/destination/:id', name: 'DestinationPage', component: ()=>import('@/pages/Destination.vue')},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router