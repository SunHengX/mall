<template>
  <div class="recommon">
    <div v-for="(iteam,index) in recommends " :key="index" class="recommon-iteam">
      <a @click="showToastTxtOnly">
        <img :src="iteam.image" />
        <p>{{iteam.title}}</p>
      </a>
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
    showToastTxtOnly() {
      this.toast = this.$createToast({
        txt: "还点！",
        type: "txt"
      });
      this.toast.show();
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
  width: 100%;
  /* height: 90%; */
}
</style>