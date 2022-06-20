import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomersView from '../views/CustomersView.vue'
import CustomerView from '../views/CustomerView.vue'
import PharmaciesView from '../views/PharmaciesView.vue'
import PharmacyView from '../views/PharmacyView.vue'
import DrugsView from '../views/DrugsView.vue'
import DrugView from '../views/DrugView.vue'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import AboutView from '../views/AboutView'


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/customers',
    name: 'CustomersView',
    component: CustomersView
  },
  {
    path: '/customers/:customerId',
    name: 'CustomerView',
    component: CustomerView
  },
  {
    path: '/pharmacies',
    name: 'PharmaciesView',
    component: PharmaciesView
  },
  {
    path: '/pharmacies/:pharmacyId',
    name: 'PharmacyView',
    component: PharmacyView
  },
  {
    path: '/drugs',
    name: 'DrugsView',
    component: DrugsView
  },
  {
    path: '/drugs/:drugId',
    name: 'DrugView',
    component: DrugView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/signup',
    name: "RegisterView",
    component: RegisterView
  },
  {
    path: '/login',
    name: "LoginView",
    component: LoginView
  },
  // {
  //   path: '/dashboard',
  //   name: "DashboardView",
  //   component: () => import("../views/DashboardView.vue"),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
