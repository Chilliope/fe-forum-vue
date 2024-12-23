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
            component: Home,
            meta: {
                authRequired: true
            },
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

router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('auth_token')

    if (to.matched.some((record) => record.meta.guestRequired)) {
        if (isLoggedIn == null) {
            next()
        } else {
            next('/')
        }
    } else if (to.matched.some((record) => record.meta.authRequired)) {
        if (isLoggedIn == null) {
            next('/masuk')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router