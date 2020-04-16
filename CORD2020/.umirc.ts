import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/answer', component: '@/pages/Answer/index' },
  ],
});
