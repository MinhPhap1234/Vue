<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="navbar-container">

<!-- Full-width images with number and caption text -->
<nav class="navbars">
 <div class="nav home" @click="dropdown=!dropdown">Home</div>
 <div class="nav" @click="dropdown1=!dropdown1">Sản phẩm
  <Dropdown
  v-show="dropdown1"
  :toggles="toggleDropdowns"
  >
 <template v-slot:Product>
    <ul class="dropdown-content">
      <li>Thời trang</li>
      <li>Dụng cụ</li>
      <li>Giải trí</li>
    </ul>
   </template>
</Dropdown></div>
 <div class="nav" @click="dropdown2=!dropdown2">Khung giờ săn sale
  <Dropdown
  v-if="dropdown2"
  :toggles="toggleDropdown"
  >
  <template v-slot:Sale>
    <ul class="dropdown-content">
      <li>Khung giờ sale</li>
      <li>Thông tin</li>
    </ul>
   </template>
</Dropdown>
</div>
 <div class="nav" @click="dropdown3=!dropdown3">Miễn phí vận chuyển
  <Dropdown
  v-if="dropdown3"
  :toggles="toggleDropdown"
  >
 <template v-slot:Transport>
  <ul class="dropdown-content">
      <li>Điều kiện miễn phí</li>
      <li>Thời gian </li>
  </ul>
 </template>
</Dropdown></div>
 <div class="nav" @click="dropdown4=!dropdown4">Nạp thẻ ,dịch vụ
  <Dropdown
  v-if="dropdown4"
  :toggles="toggleDropdown"
  >
 <template v-slot:Service>
  <ul class="dropdown-content">
      <li>Đăng kí</li>
      <li>Ưu đãi</li>
      </ul>
 </template>
</Dropdown></div>
 <div class="nav" @click="dropdown5=!dropdown5">Deal sốc từ 1k
  <Dropdown
  v-if="dropdown5"
  :toggles="toggleDropdown"
  >
 <template v-slot:Deal>
  <ul class="dropdown-content">
      <li>Discount</li>
      <li>Quà tặng</li>
      </ul>
 </template>
</Dropdown>
 </div>
</nav>

</div>
</template>

<script>
import Dropdown from './Dropdown.vue'

export default ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  components: { Dropdown },
  data () {
    return {
      dropdown: false,
      dropdown1: false,
      dropdown2: false,
      dropdown3: false,
      dropdown4: false,
      dropdown5: false
    }
  },
  methods: {
    toggleDropdown () {
      this.dropdown = !this.dropdown
    },
    toggleDropdowns () {
      this.dropdown1 = !this.dropdown1
    }
  },
  mounted: function () {
    if (this.source) { // is it empty
      this.image = this.source // replace placeholder
    }
  }
})
</script>
