<template>
  <div class="carousel-inner">
    <CarouselItem   v-for="(slide,index) in slides" :key="`item-${index}`" :current-slide="currentSlide" :index="index" :slide="slide"></CarouselItem>
    <CarouselControl @prev="prev" @next="next" ></CarouselControl>
    <CarouselIndicator :total="slides.length" :currentIndex="currentSlide"></CarouselIndicator>
  </div>
</template>
<script>
import CarouselItem from './CarouselItem.vue'
import CarouselControl from './CarouselControl.vue'
import CarouselIndicator from './CarouselIndicator.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Carousel',
  components: { CarouselItem, CarouselControl, CarouselIndicator },
  props: ['slides'],
  emits: ['mouseenter', 'mouseout'],
  data () {
    return {
      currentSlide: 2,
      slideInterval: null,
      direction: 'right'
    }
  },
  methods: {
    setCurrentSlide (index) {
      this.currentSlide = index
    },
    prev () {
      const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1
      this.setCurrentSlide(index)
    },
    _next () {
      const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0
      this.setCurrentSlide(index)
    },
    next () {
      this._next()
    }
  },
  mounted () {
    this.slideInterval = setInterval(() => {
      this.next()
    }, 2000)
  },
  beforeUnmount () {
    clearInterval(this.slideInterval)
  }
}
</script>
