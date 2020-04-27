<template>
  <div class="tabble">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabble {
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 49px;
  z-index: 3;
  background: rgba(250, 250, 250, 250);
}
</style>