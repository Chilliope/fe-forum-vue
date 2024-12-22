import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Registration from '../views/auth/Registration.vue'
import Home from '../views/Index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Beranda',
            component: Home
        },
        {
            path: '/masuk',
            name: 'Masuk',
            component: Login
        },
        {
            path: '/daftar',
            name: 'Daftar',
            component: Registration
        }
    ]
})

export default router