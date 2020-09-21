import Axios from '../../views/demo/Axios.vue'
import Vant from '../../views/demo/Vant.vue'

const demoAxios =
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

const demoVant =
    {
        path: '/demo/vant',
        name: 'Vant',
        component: Vant,
        meta: {
            isLogin: false,
            useFrame: { //  是否使用框架
                aside: false, // 左侧栏是否显示
                header: false, // 头部栏是否显示
                footer: true, // 脚部栏是否显示
            },
        }
    }

export {
    demoAxios,
    demoVant
}
