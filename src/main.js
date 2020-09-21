import { createApp } from 'vue'
import Vant from 'vant'

import App from './App.vue'

import router from './router'
import store from './store'
import axios from './axios'

import 'vant/lib/index.css'
import './scss/style.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(Vant)

app.mount('#app')

app.config.globalProperties.$axios = axios
