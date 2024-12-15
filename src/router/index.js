import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Beranda',
            component: Home
        },
    ]
})

export default router