<template>
  <div class="dropdown" >
    <slot name="Product" ></slot>
    <slot name="Sale"></slot>
    <slot name="Transport"></slot>
    <slot name="Service"></slot>
    <slot name="Deal"></slot>
  </div>
</template>

<script>
export default ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dropdown',
  props: ['toggles', 'color']
})
</script>
