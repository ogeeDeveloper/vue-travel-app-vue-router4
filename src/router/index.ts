import {createRouter, createWebHistory} from 'vue-router'
import {About, Home, Brazil, Jamaica, Panama, Hawaii} from '@/pages'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    // {path: '/:pathMatch(.*)*', name: 'NotFound', component: Home}
    {path: '/brazil', name: 'BrazilPage', component: Brazil},
    {path: '/jamaica', name: 'JamaicaPage', component: Jamaica},
    {path: '/panama', name: 'PanamaPage', component: Panama},
    {path: '/hawaii', name: 'HawaiiPage', component: Hawaii}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router