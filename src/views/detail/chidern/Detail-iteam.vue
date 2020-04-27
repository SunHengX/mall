<template>
  <div class="detail-iteam">
    <nav-bar>
      <div slot="iteam-center" class="title">
        <div
          v-for="(iteam,index) in titles"
          :key="index"
          class="title-iteam"
          @click="change(index)"
          :class="{Active:index==currentIndex}"
        >{{iteam}}</div>
      </div>
      <div slot="iteam-left" @click="goback">
        <img src="../../../assets/detail/back.png" class="iteam-left" />
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/Navbar";
export default {
  data() {
    return {
      titles: ["商品详细信息"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    change(index) {
      this.currentIndex = index;
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}
.title .title-iteam {
  flex: 1;
}
.Active {
  color: pink;
}
.iteam-left {
  width: 25px;
  height: 25px;
  margin-top: 10px;
}
</style>