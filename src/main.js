import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../src/script/globals/api-endpoint.js'
import { createApp } from 'vue'
import store from './Vuex'
import router from '../src/script/router'

import App from './App.vue'
import './styles/main.css'

createApp(App).use(store).use(router).mount('#app')
