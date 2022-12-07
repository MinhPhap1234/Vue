import { createApp } from 'vue'
import App from './App.vue'
import './assets/logo.png'
import './assets/Shopping1.png'
import './assets/Shopping2.png'
import './assets/Shopping3.png'
import router from './router'
import './assets/style/main.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

createApp(App).use(router).use(autoAnimatePlugin).mount('#app')
