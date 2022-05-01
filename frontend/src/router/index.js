import { createRouter, createWebHistory } from 'vue-router'
import CustomersView from '../views/CustomersView.vue'
import CustomerView from '../views/CustomerView.vue'

const routes = [
  {
    path: '/',
    name: 'CustomersView',
    component: CustomersView
  },
  {
    path: '/customers/:customerId',
    name: 'CustomerView',
    component: CustomerView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
