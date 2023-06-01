import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router/auto';
import './style.css';
import App from './App.vue';
import { env } from './helpers';

const router = createRouter({
    history: createWebHistory(),
});

router.afterEach((to) => {
    document.title = to.fullPath != '/' ? `${to.meta.title} | ${env('APP_NAME')}` : to.meta.title;
});

const app = createApp(App);

app.use(router);

app.mount('#app');
