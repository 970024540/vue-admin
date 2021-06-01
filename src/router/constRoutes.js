
export default [
    {
        path: '/',
        redirect:'/admin/home' // 重定向
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import(/* webpackChunkName: "404" */ '@/pages/404')
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import(/* webpackChunkName: "login" */ '@/pages/Login')
    },
    // {
    //     path: "*",
    //     redirect: "/"
    // }
]