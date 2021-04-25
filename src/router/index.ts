import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/todolist',
    name: 'todoList',
    component: () => import('../views/todolist.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/game.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
