import Vue from 'vue'
import Router from 'vue-router'
import Resume from './views/Resume.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Résumé',
      component: Resume
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.name || 'Résumé' 
  next() 
})

export default router
