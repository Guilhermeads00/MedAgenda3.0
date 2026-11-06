import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../views/InicioView.vue'
import MedicosView from '../views/MedicosView.vue'
import AgendarView from '../views/AgendarView.vue'
import ConsultasView from '../views/ConsultasView.vue'

const routes = [
  {
    path: '/',
    component: InicioView
  },
  {
    path: '/medicos',
    component: MedicosView
  },
  {
    path: '/agendar',
    component: AgendarView
  },
  {
    path: '/consultas',
    component: ConsultasView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
