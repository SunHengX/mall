<template>
  <div class="swiper">
    <cube-slide :data="banners">
      <cube-slide-item v-for="(item, index) in banners" :key="index">
        <a @click="showPopup('myPopup')">
          <img :src="item.image" @load="isLoading" />
        </a>
      </cube-slide-item>
    </cube-slide>
    <cube-popup type="my-popup" ref="myPopup" content="<i>My Popup Content 3</i>">My Popup Content 1</cube-popup>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    isLoading() {
      if (!this.isLoad) {
        this.$emit("isLoad");
        this.isLoad = true;
      }
    },
    showImagePreview(index) {
      console.log(index);
    },
    showPopup(refId) {
      const component = this.$refs[refId];
      component.show();
      setTimeout(() => {
        component.hide();
      }, 1000);
      console.log(component);
    }
  }
};
</script>

<style scoped>
.cube-slide-item > a > img {
  width: 100%;
}
.text {
  color: red;
  font-size: 16px;
  text-align: center;
}
</style>