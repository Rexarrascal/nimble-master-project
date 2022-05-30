import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomersView from '../views/CustomersView.vue'
import CustomerView from '../views/CustomerView.vue'
import PharmaciesView from '../views/PharmaciesView.vue'
import PharmacyView from '../views/PharmacyView.vue'
import DrugsView from '../views/DrugsView.vue'
import DrugView from '../views/DrugView.vue'
import SignupView from '../views/SignupView'
import AboutView from '../views/AboutView'
import LoginView from '../views/LoginView'

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
    name: 'SignupView',
    component: SignupView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
