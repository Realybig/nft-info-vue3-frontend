import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// 导入组件
import Home from './components/Home.vue'
import About from './components/About.vue'

// 定义路由
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

// 加载路由
const router = createRouter({
    // 路由模式为 History
    history: createWebHashHistory(),
    routes,
})

// 创建应用实例
const app = createApp(App)

// 使用路由实例
app.use(router)

// 挂载应用
app.mount('#app')
