<template>
  <div class="Navbar">
    <div class="iteam-left">
      <slot name="iteam-left"></slot>
    </div>
    <div class="iteam-center">
      <slot name="iteam-center"></slot>
    </div>
    <div class="iteam-right">
      <slot name="iteam-right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Navbar {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  vertical-align: middle;
}
.Navbar .iteam-left {
  flex: 1;
}
.Navbar .iteam-center {
  flex: 8;
}
.Navbar .iteam-right {
  flex: 1;
}
</style>