import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/UI';
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

components.forEach(component => {
    app.component(component.name, component)
})