//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '@/views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '@/views/auth/Register.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "dashboard" */ '@/views/dashboard/Index.vue')
    },
    {
        path: '/warga',
        name: 'warga.index',
        component: () => import( /* webpackChunkName: "warga.index" */ '@/views/warga/Index.vue')
    },
    {
        path: '/create',
        name: 'warga.create',
        component: () => import( /* webpackChunkName: "warga.create" */ '@/views/warga/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'warga.edit',
        component: () => import( /* webpackChunkName: "warga.edit" */ '@/views/warga/Edit.vue')
    },

    {
        path: '/kk',
        name: 'kk.index',
        component: () => import( /* webpackChunkName: "warga.index" */ '@/views/kk/Index.vue')
    },
    {
        path: '/create',
        name: 'kk.create',
        component: () => import( /* webpackChunkName: "warga.create" */ '@/views/kk/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'kk.edit',
        component: () => import( /* webpackChunkName: "warga.edit" */ '@/views/kk/Edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router