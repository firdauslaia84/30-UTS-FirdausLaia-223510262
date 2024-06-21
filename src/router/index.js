import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../Views/Todos.vue';
import Posts from '../Views/Posts.vue';
import Albums from '../Views/Albums.vue';
import AlbumDetail from '../Views/AlbumDetail.vue';

const routes = [
  { path: '/', redirect: '/todos' }, 
  { path: '/todos', component: Todos },
  { path: '/posts', component: Posts },
  { path: '/albums', component: Albums },
  { path: '/albums/:id', component: AlbumDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
