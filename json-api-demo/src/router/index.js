import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataList from '../views/DataList.vue'
import Details from '../views/Details.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/items', name: 'DataList', component: DataList },
  { path: '/items/:id', name: 'Details', component: Details, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
