<template>
 <div class="card">
    <ul class="price">
     <li class="header">{{product.name}}</li>
     <div class="class">
     <li class="grey">Price:<span>${{product.price.USD}}</span></li>
     <li style="align-items:center ;">
     <label>Quantity: </label>    <input v-model.number="quantity" type="number"></li>
     </div>
     <li class="grey"><a href="#" class="button" @click="addToCart(product.name , quantity)">Sign Up</a></li>
    </ul>
  </div>
</template>

<script>

export default ({
  name: 'ProductCart',
  props: ['inventory', 'index', 'product', 'addToCart'],
  data () {
    return {
      quantity: 0
    }
  }
})
</script>
