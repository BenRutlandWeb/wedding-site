import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router/auto';
import './style.css';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
});

router.afterEach((to, from) => {
    document.title = to.fullPath != '/' ? `${to.meta.title} | Old, New, Borrowed, Boop` : to.meta.title;
});

const app = createApp(App);

app.use(router);

app.mount('#app');
