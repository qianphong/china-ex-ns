import { createApp } from 'vue'
import App from './App.vue'

import '@/echarts'

import '@unocss/reset/tailwind.css'
import '@/styles/main.scss'
import 'uno.css'

const app = createApp(App)

app.mount('#app')
