import { createApp } from 'vue'
import App from './App.vue'

import router from './router.js'

import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

// import axios from 'axios'
import axios from './axios.js'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)
app.use(ViewUIPlus)
app.use(VueAxios, axios)
app.mount('#app')
