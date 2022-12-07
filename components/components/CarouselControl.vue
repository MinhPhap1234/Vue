<template>
    <button class="carousel-control left" @click="$emit('prev')">Prev</button>
    <button class="carousel-control right"  @click="$emit('next')">Next</button>
</template>

<script>
export default {
  name: 'CarouselControl',
  emits: ['next', 'prev']
}
</script>

<style>
 .carousel-control {
    position: absolute;
    display: inline-block;
    height:50px;
    width:70px;
    border: none;
    top: 225px;
    color: #111;
    cursor: pointer;
  }

  .left{
    left: 0;
  }

  .right{
right:0;
  }
</style>
