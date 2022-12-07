<template>
 <div v-for="task in tasks" :key="task.id"  >
  <Task  @delete-task="$emit('delete-task' ,task.id)" @toggle-reminder="$emit('toggle-reminder' , task.id)" :task="task"/>
</div>
</template>

<script>
import Task from './Task.vue'

export default ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tasks',
  props: {
    tasks: Array
  },
  components: {
    Task
  },
  emits: ['toggle-reminder', 'delete-task']
})
</script>

<style scoped>

</style>
