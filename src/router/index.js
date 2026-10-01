import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectView from '../views/ProjectView.vue'
import ReflectionView from '../views/ReflectionView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: HomeView 
    },

    { 
      path: '/about', 
      name: 'about', 
      component: AboutView 
    },

    { 
      path: '/skills', 
      name: 'skills', 
      component: SkillsView 
    },

    { 
      path: '/projects', 
      name: 'projects', 
      component: ProjectView 
    },

    { 
      path: '/reflection', 
      name: 'reflection', 
      component: ReflectionView 
    },

    { 
      path: '/contact', 
      name: 'contact', 
      component: ContactView 
    },
  ],
})

export default router