<!-- eslint-disable vue/multi-word-component-names -->
<template>
<button  @click="$emit('toggle-add-task')" class="btn"> Add </button>
</template>

<script>
export default {
  name: 'myButton',
  props: {
    color: String,
    text: String
  }
}
</script>

<style>
.btn{
  background-color: green;
  height: 15%;
  color: white;
  font-size: medium;
}
</style>
