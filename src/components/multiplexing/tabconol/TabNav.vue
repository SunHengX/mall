<template>
  <div class="tabconol">
    <div
      class="tabconol-iteam"
      v-for="(iteam,index) in tabconol"
      :key="index"
      @click="change(index)"
      :class="{active:index==initial}"
    >
      <span>{{iteam}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabconol: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      initial: 0
    };
  },
  methods: {
    change(index) {
      this.initial = index;
      this.$emit("getindex", index);
    }
  }
};
</script>

<style scoped>
.tabconol {
  display: flex;
  height: 40px;
  line-height: 40px;
  position: relative;
}
.tabconol-iteam {
  flex: 1;
  text-align: center;
}
span {
  /* padding: 5px; */
}
.active {
  color: pink;
}
.active span {
  border-bottom: 2px solid pink;
}
</style>