import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/Contador',
      name: 'Contador',
      component: () => import('../Modules/Contador/components/Contador.vue'),
    },
    {
    path: '/ListaDeTareas',
    name: 'ListaDeTareas',
    component: () => import('../Modules/ListaDeTareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: () => import('../Modules/Registro/views/RegistroView.vue')
    },
    {
      path: '/calcular',
      name: 'calcular',
      component: () => import('../Modules/calcular/views/CalcularView.vue')
    }    
  ]
})

export default router
