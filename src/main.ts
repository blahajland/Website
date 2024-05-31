//CSS imports
import './assets/css/main.sass'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { assets } from '@/library/ts/static-tools'

const app = createApp(App)

app.use(router)

app.mount('#app')
