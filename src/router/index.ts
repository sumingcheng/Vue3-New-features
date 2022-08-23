import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import index from '@/views/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
