import Axios from '../../views/demo/Axios.vue'

const demoRoutes =
    {
        path: '/demo/axios',
        name: 'Axios',
        component: Axios,
        meta: {
            isLogin: false,
            useFrame: { //  是否使用框架
                aside: false, // 左侧栏是否显示
                header: false, // 头部栏是否显示
                footer: true, // 脚部栏是否显示
            },
        }
    }

export default demoRoutes
