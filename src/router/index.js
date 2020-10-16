import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'
import About from '../views/About.vue'
import Feedback from '../views/Feedback.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz,
    meta: { requiresId: true }
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
    meta: { requiresId: true }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { requiresId: true }
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
    meta: { requiresId: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiresId) {
    let deviceId = localStorage.getItem('deviceId');

    if(!deviceId) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router