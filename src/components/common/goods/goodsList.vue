<template>
  <div class="goodslist">
    <goods-bar v-for="(iteam,index) in goods" :key="index" :goodsiteam="iteam"></goods-bar>
  </div>
</template>

<script>
import GoodsBar from "./goodsBar";
export default {
  components: {
    GoodsBar
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5px;
}
</style>