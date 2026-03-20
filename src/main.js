import { createApp } from 'vue'
import App from './App.vue'
import { provideI18n } from './i18n/index'

const app = createApp(App)
provideI18n(app)
app.mount('#app')
