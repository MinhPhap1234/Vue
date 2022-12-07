import myBar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'
import myButton from '../components/Button.vue'
import Task from '../components/Task.vue'
import Dropdown from '../components/Dropdown.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/kin',
    name: 'myBar',
    component: myBar
  },
  {
    path: '/',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/',
    name: 'myButton',
    component: myButton
  },
  {
    path: '/',
    name: 'Task',
    component: Task
  },
  {
    path: '/',
    name: 'Dropdown',
    component: Dropdown
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
