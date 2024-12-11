import FriendsView from '@/views/FriendsView.vue'
import SearchView from '@/views/SearchView.vue'
import UserView from '@/views/UserView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: SearchView
    },
    {
      path: '/user/:username',
      component: UserView
    },
    {
      path: '/friends/:username',
      component: FriendsView
    }
  ],
})

export default router
