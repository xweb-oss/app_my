import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'
import Home from '@/components/home.vue'
// import Guide from '@/components/guide/guide.vue'
import Login from '@/components/login/index.vue'
import Register from '@/components/register/index.vue'

Vue.use(Router)

import { router_ } from './router'

const router = new Router({
    routes: [
        // {
        //     path:"/",
        //     component:Guide,
        //     name:"guide"
        // },
        {
            path: "/",
            component: Login,
            name: "login"
        },
        {
            path: "/register",
            component: Register,
            name: "register"
        },
        {
            path: "/home",
            component: Home,
            name: "home",
            children: router_
        },
        {
            path: "/detail",
            // meta:{title:'detail'},   因为是只有一个router-views ,不再home页面下的，就必须与其同级
            component: () => import('@/views/house/detail.vue'),
            name: "detail",
        },
        {
            path: "/result",
            component: () => import('@/views/house/result.vue'),
            name: "result",
        },
        {
            path: "/type_detail",
            component: () => import('@/views/type/type_detail.vue'),
            name: "type_detail",
        },
        {
            path: "/menu_detail",
            component: () => import('@/views/house/menu_detail.vue'),
            name: "menu_detail",
        },
        {
            path: "/type_common",
            component: () => import('@/views/type/type_common.vue'),
            name: "type_common",
        },
        {
            path: "/scorll_test",
            component: () => import('@/views/type/scorll_test.vue'),
            name: "scorll_test",
        },
        {
            path: "/scorll_img",
            component: () => import('@/views/type/scorll_img.vue'),
            name: "scorll_img",
        },
        {
            path: "/better-scroll",
            component: () => import('@/views/type/better-scroll.vue'),
            name: "better-scroll",
        },
        {
            path: "/mall_echart",
            component: () => import('@/views/mall/mall_echart.vue'),
            name: "mall_echart",
        },
        {
            path: "/my_solt",
            component: () => import('@/views/my/my_solt.vue'),
            name: "my_solt",
        }

    ]
})

// 路由变化之前
router.beforeEach((to, from, next) => {
    let _path = to.path
    if (_path == "/") {   // 当路由为 '/'  时，直接方行
        next()
    } else if (to.meta.title) {
        store.commit("GETTITLE", to.meta.title)   // 改变themTitle
        next()
    } else {
        next()
    }

})


export default router;

