<template>
 <div  @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
 <h3>
    <p>{{task.product}}</p>
    <i class="material-symbols-outlined" @click="$emit('delete-task',task.id)">
    </i>
 </h3>
 <p>{{task.day}}</p>
 </div>
</template>

<script>
export default ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Task',
  props: {
    task: Object
  }
})
</script>

<style scoped>

.task {
    margin: 5px;
    padding: 5px 10px;
    width: 25%
}

.task    h3{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

i:hover
  :focus {
  cursor: pointer;
}
</style>
