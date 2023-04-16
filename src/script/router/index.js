import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import LandingPage from '../pages/LandingPage.vue'
import ForgetPassPage from '../pages/ForgetPassPage.vue'
import NotFound from '../components/NotFound.vue'

const guest = (to, from, next) => {
  if (!sessionStorage.getItem("token")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (sessionStorage.getItem("token")) {
    return next();
  } else {
    return next("/login");
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: NotFound,
      component: NotFound,
      redirect: '/'
    },
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
     {
      path: '/forget',
      name: 'ForgetPassPage',
      component: ForgetPassPage,
      beforeEnter: guest
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      beforeEnter: guest
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
      beforeEnter: guest
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: DashboardPage,
      beforeEnter: auth
    }
  ]
})

export default router
