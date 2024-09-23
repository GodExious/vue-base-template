import { createRouter, createWebHashHistory } from 'vue-router'

let routes = [
	{
		path: '/',
		name: 'test',
		component: () => import('./pages/test.vue')
	},
]

const router = createRouter({
    history: createWebHashHistory(),  // hash模式
    routes,  // 路由配置
})

export default router
