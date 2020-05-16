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
  width: 100%;
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  color: #666;
  line-height: 1.5;
  background-color: #f6f6f6;
}
</style>