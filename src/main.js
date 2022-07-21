import { createApp } from 'vue'
import i18n from './i18n';
import App from './App.vue'
import 'vue-select/dist/vue-select.css';
import './assets/scss/style.scss';

console.log(i18n)


import  "./assets/js/libs/function_class_add_active.js";
i18n(createApp(App)).mount('#app')
