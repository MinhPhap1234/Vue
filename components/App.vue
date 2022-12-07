<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable eqeqeq -->
<template>
  <div class="containers">
    <i src="./assets/logo.png" />
    <div class="navbar">
         <ul class="ul">
            <li>Seller center</li>
            <li>Download</li>
            <li><button>Follow us on</button></li>
         </ul>
        </div>
        <img src="./assets/logo.png"/>
        <div class="navbar">
         <ul class="ul">
            <li>Home</li>
            <li>Login/Sign up</li>
            <li><button  @click="showNavbar = !showNavbar">Cart{{totalQuantity}}</button></li>
         </ul>
        </div>
  </div>
<Navbar/>
<Carousel :slides="slides"></Carousel>
<div class="container" >
 <ProductCard class="card"
 v-for="(product , index) in inventory.slice(0, 6)" :key="product.id"
 :index="index"
 :addToCart="addToCart"
 :product="product"
 ></ProductCard>
 <ProductCard class="card"
 v-for="(product , index) in inventory.slice(7, 9)" :key="product.id"
 :index="index"
 :addToCart="addToCart"
 :product="product"
 ></ProductCard>
</div>
<div class="main-tasks">
<Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder" @add-task="addTask" ></Tasks>
</div>
   <myBar
   v-if="showNavbar"
   :toggle="toggleNavbar"
   :cart="cart"
   :inventory="inventory"
   @add-total="addNewTodo"
   :remove="deleteT"
/>
<div class="addTask" >
<AddTask @add-task="$emit('add-task')" v-show="showAddTask" />
</div>
<myButton
@toggle-add-task="toggleAddTask"
/>
</template>

<script>

import myBar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'
import myButton from './components/Button.vue'
import ProductCard from './components/ProductCard.vue'
import Carousel from './components/Carousel.vue'

export default ({
  name: 'App',
  components: { myBar, Navbar, Tasks, AddTask, myButton, ProductCard, Carousel },
  emits: ['add-task'],
  data () {
    return {
      showNavbar: false,
      inventory: [],
      cart: {},
      newTodoText: '',
      count: 0,
      tasks: [],
      showAddTask: false,
      slides: [
        { image: require('@/assets/Shopping1.png') },
        { image: require('@/assets/Shopping2.png') },
        { image: require('@/assets/Shopping3.png') }
      ]
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    toggleNavbar () {
      this.showNavbar = !this.showNavbar
    },
    toggleAddTask () {
      this.showAddTask = !this.showAddTask
    },
    addToCart (name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
      console.log(this.cart)
    },
    addTask (task) {
      this.tasks = [...this.tasks, task]
    },
    deleteTask (id) {
      if (confirm('Are you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    deleteT (name) {
      delete this.cart[name]
    },
    toggleReminder (id) {
      this.tasks = this.tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    },
    async fetchTask () {
      const res = await fetch('api/task')
      const data = await res.json()
      return data
    },
    async fetchTasks (id) {
      const res = await fetch(`api/task/${id}`)
      const data = await res.json()
      return data
    }
  },
  async created () {
    this.inventory = await this.fetchTask()
    this.tasks = [
      {
        id: 1,
        product: 'Carrot',
        day: 'March 3',
        reminder: true
      },
      {
        id: 2,
        product: 'Cherries',
        day: 'May 3',
        reminder: true
      }
    ]
  }
})
</script>
