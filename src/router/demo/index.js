import Axios from '../../views/demo/Axios.vue'
import Vant from '../../views/demo/Vant.vue'

const demoAxios =
    {
        path: '/demo/axios',
        name: 'Axios',
        component: Axios,
    }

const demoVant =
    {
        path: '/demo/vant',
        name: 'Vant',
        component: Vant,
    }

export {
    demoAxios,
    demoVant
}
