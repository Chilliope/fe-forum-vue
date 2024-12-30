import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Registration from '../views/auth/Registration.vue'
import Index from '../views/Index.vue'
import Forum from '../views/forum/Index.vue'
import Post from '../views/post/Index.vue'
import Circle from '../views/circle/Index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            redirect: { 
                path: '/beranda/forum/1' 
            },
            component: Index,
            meta: {
                authRequired: true
            },
            children: [
                {
                    path: '/beranda/forum/:page',
                    name: 'Beranda',
                    component: Forum
                },
                {
                    path: '/post/:forumId',
                    name: 'Post',
                    component: Post
                },
                {
                    path: '/circle',
                    name: 'Circle',
                    component: Circle
                }
            ]
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