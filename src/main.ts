import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles/app.scss'
import i18n from './locales/i18n'
import { registerLayouts } from './layouts/register'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)
registerLayouts(app)
app.use(vuetify)

app.mount('#app')
