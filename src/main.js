import { createApp } from 'vue'
import App from './App.vue'
import 'vue-select/dist/vue-select.css';
import './assets/scss/style.scss';
import en from './components/i18n/en.json';
import de from './components/i18n/de.json';
import {createI18n} from 'vue-i18n';

const i18n = createI18n({
    messages:{
        en: en,
        de: de
    },
    fallbackLocale: 'en'
});


import  "./assets/js/libs/function_class_add_active.js";
const app = createApp(App);
app.use(i18n);
app.mount('#app');
