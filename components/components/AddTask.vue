<template>
 <form @submit="onSubmit" class="form">
    <div class="form-control">
        <label class="form-label">Product</label>
        <input type="text" name="text" v-model="text" class="form-input"/>
    </div>
    <div class="form-control">
        <label class="form-label">Date and Time</label>
        <input type="text" name="day" v-model="day" class="form-input"/>
    </div>
    <div class="form-control1">
        <label class="form-label">Set reminder</label>
        <input type="checkbox" name="reminder" v-model="reminder" />
    </div>
    <input class="btn-save" type="submit" value="Save"/>
 </form>
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      text: '',
      day: '',
      reminder: false
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      if (!this.text) {
        alert('Add a task')
      }
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      this.$emit('add-task', newTask)

      this.text = ''
      this.day = ''
      this.reminder = false
    }
  }
}
</script>

<style scoped>
.form{
    width:30%
}

.form-control {
    margin-right: 50px;
    margin-bottom: 10px
}

.form-control label{
    display: block;
}

.btn-save{
    width:100%
}
.form-input{
    width:100%;
    height: 20px;
    padding: 3px 7px
}
</style>
