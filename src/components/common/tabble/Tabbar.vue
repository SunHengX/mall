<template>
  <div class="tabbar" @click="change">
    <slot name="iteam-pic" v-if="!Active"></slot>
    <slot name="iteam-selection" v-else></slot>
    <slot name="iteam-text"></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    Active() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    change() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.tabbar {
  text-align: center;
  flex: 1;
  font-size: 12px;
  width: 100%;
}
.tabbar img {
  height: 30px;
  width: 33px;
  vertical-align: middle;
}
</style>