<template>
 <div class="carousel-indicator">
  <button class="carousel-indicator-item " :class="{active: currentIndex === index}" v-for="(item, index) in total" :key="index"></button>
 </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CarouselIndicator',
  props: ['total', 'currentIndex']
}
</script>

<style scoped>
.carousel-indicator{
    position:absolute;
    bottom: -30em;
    transform: translateX(-50%);
    left: 50%;
    z-index: 2
}

.carousel-indicator-item{
    width:50px;
    opacity: 0.5;
}

.active{
    opacity:1
}
</style>
