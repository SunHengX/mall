<template>
  <div class="recommon">
    <div v-for="(iteam,index) in recommends " :key="index" class="recommon-iteam">
      <a>
        <img :src="iteam.image" />
        <p>{{iteam.title}}</p>
      </a>
      <cube-popup
        type="my-popup"
        ref="myPopup"
        content="<i>My Popup Content 3</i>"
      >My Popup Content 1</cube-popup>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    showPopup(refId) {
      const component = this.$refs[refId];
      component.show();
      setTimeout(() => {
        component.hide();
      }, 1000);
    }
  }
};
</script>

<style>
.recommon {
  display: flex;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  padding: 0 0 40px 0;
  border-bottom: 10px solid #f3f3f3;
}
.recommon-iteam {
  flex: 1;
}
.recommon-iteam img {
  width: 90px;
  height: 90px;
}
</style>