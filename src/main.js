import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
AOS.init({
    duration: 1200,  // Animation duration in milliseconds
    easing: 'ease-in-out',  // Easing function for the animations
    once: true,  // Whether animation should happen only once
  });

createApp(App).use(store).use(router).mount('#app')
