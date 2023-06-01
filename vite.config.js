import { defineConfig } from 'vite';
import router from 'unplugin-vue-router/vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    router(),
    vue(),
    components()
  ],
});
