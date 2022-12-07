<template>
   <transition name="slide-in">
    <div class="carousel-item" >
    <img  class="png"  :src="slide.image" v-show="currentSlide === index"  />
   </div>
   </transition>
</template>

<script>
export default ({
  name: 'CarouselItem',
  props: ['slide', 'index', 'currentSlide', 'direction']
})
</script>
