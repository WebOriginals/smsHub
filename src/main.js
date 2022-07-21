import 'vue-select/dist/vue-select.css';

import { createApp } from 'vue'
import i18n from './i18n';
import App from './App.vue'
import './assets/scss/style.scss';
import  "./assets/js/libs/function_class_add_active.js";

i18n(createApp(App)).mount('#app')
