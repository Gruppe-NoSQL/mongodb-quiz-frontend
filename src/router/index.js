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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
