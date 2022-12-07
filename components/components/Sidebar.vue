<template>
  <aside>
    <div class="Cart">
  <h1 class="CartH1">
   <span class="CartIcon">
    Cart
    <i class="icofont-cart-alt icofont-1x"></i>
   </span>
   <button @click="toggle"> &times; </button>
  </h1>
  <div class="table">
    <table class="tables" >
     <thead>
       <tr>
        <th><span>Product image</span></th>
        <th>Products</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total</th>
       </tr>
     </thead>
     <tbody>
      <tr v-for="(quantity, key, i) in cart" :key="i">
       <td><i class="icofont-carrot icofont-3x"></i></td>
       <td>{{ key}} </td>
       <td >${{getPrice(key)}}</td>
       <td class="center">{{quantity}}</td>
       <td>${{quantity * getPrice(key)}}</td>
       <td>
        <button @click="remove(key)">
          &times;
        </button>
       </td>
      </tr>
     </tbody>
    </table>
    <p v-if="!Object.keys(cart).length">No items in cart</p>
    <div class="Items">
     <span><strong>Total:${{calculateTotal()}}</strong></span>
     <button > Checkout</button>
    </div>
   </div>
  </div>
</aside>
</template>

<script>
export default {
  name: 'myBar',
  props: [
    'toggle',
    'inventory',
    'cart',
    'value',
    'remove'
  ],
  methods: {
    getPrice (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price.USD
    },
    calculateTotal () {
      const total = Object.entries(this.cart).reduce((acc, curr) => {
        return acc + (curr[1] * this.getPrice(curr[0]))
      }, 0)
      return total
    }
  },
  emits: ['add-total']
}
</script>
