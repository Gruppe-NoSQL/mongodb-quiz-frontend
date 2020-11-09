import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'
import About from '../views/About.vue'
import Layout from '../views/Layout.vue'
import Feedback from '../views/Feedback.vue'
import axios from 'axios';

const backendServer = require("./../store/index").default.state.backendServer;

Vue.use(Router);
const router = new Router({
  routes: [
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
          component: Quiz
        },
        {
          path: '/result',
          name: 'Result',
          component: Result
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/feedback',
          name: 'Feedback',
          component: Feedback
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  let deviceId = window.localStorage.getItem("deviceId");


  if (!deviceId) {
    if (to.path != '/home') {
      next('/home');
    } else {
      next();
    }
  } else {
    axios.get(backendServer + '/user/' + deviceId)
      .then((response) => {
        if(response.data.isFinished) {
          if(to.path != '/result' && to.path != '/feedback') {
            next('/result');
          }  else {
            next();
          }
        } else {
          if(to.path != '/quiz') {
            next('/quiz');
          } else {
            next();
          }
        }
      })
      .catch((err) => {
        console.log(err);
        next();
      });
  }
});

export default router