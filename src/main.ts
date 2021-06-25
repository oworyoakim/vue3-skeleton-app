import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/app.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

createApp(App).use(store).use(router).mount('#app')
