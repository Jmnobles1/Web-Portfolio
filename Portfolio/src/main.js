import { createApp } from 'vue';
import VueSelect from "vue-select";
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.component('v-select',VueSelect)
app.use(router)
app.mount('#app')

