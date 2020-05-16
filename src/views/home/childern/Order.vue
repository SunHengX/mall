<template>
  <div class="order" @click="showToastTxtOnly">
    <img src="../../../assets/home-img/recommend.jpg" style="width:100%" />
  </div>
</template>

<script>
export default {
  methods: {
    showToastTxtOnly() {
      this.toast = this.$createToast({
        txt: "怎么不听话呢",
        type: "txt"
      });
      this.toast.show();
    }
  }
};
</script>

<style>
</style>