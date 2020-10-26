import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'
import About from '../views/About.vue'
import Layout from '../views/Layout.vue'
import Feedback from '../views/Feedback.vue'

Vue.use(Router)

Vue.use(Router);
const router = new Router({
  routes:  [
  { path: "*", redirect: "/home" },
    {
      path: "/",
      component: Layout,
      name: "Layout",
      redirect: "/home",
      children: [
    {
      path: '/home',
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
      meta: { requiresId: true, requiresFinish: true }
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
      meta: { requiresId: true, requiresFinish: true }
    }
  ]
}
]
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiresId) {
    let deviceId = localStorage.getItem('deviceId');

    if(!deviceId) {
      next('/home');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router