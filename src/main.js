import '@/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)
router.afterEach((to) => {
  if (window.gtag) {
    window.gtag('config', 'G-ZXPSZL2ZT7', {
      page_path: to.fullPath,
      page_title: to.name || document.title,
    });
  }
});

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
