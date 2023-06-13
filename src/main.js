import { createApp } from 'vue'
import './styles/style.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import './../node_modules/requirejs/require.js';
import App from './App.vue'

createApp(App).mount('#app')
