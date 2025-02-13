import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ResumePage from './components/ResumePage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/resume', name: 'Resume', component: ResumePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.name === 'Resume') {
      return { top: 0, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
