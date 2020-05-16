<template>
  <div class="car">
    <div class="nav">
      <nav-bar>
        <div slot="iteam-center">购物车({{carLength}})</div>
      </nav-bar>
    </div>

    <div class="scroll-list-wrap">
      <cube-scroll ref="scroll" :data="didi">
        <car-list />
      </cube-scroll>
    </div>
    <check-all />
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/Navbar";
import { mapGetters } from "vuex";
import carList from "./iteam/carList";
import checkAll from "./iteam/checkall";
export default {
  name: "Car",
  components: {
    NavBar,
    carList,
    checkAll
  },
  computed: {
    ...mapGetters(["carLength"])
  },
  data() {
    return {
      didi: []
    };
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.car {
  height: 100vh;
}
.car .scroll-list-wrap {
  height: calc(100% - 95px - 35px);
  overflow: hidden;
}

.car .nav {
  background: pink;
  height: 45px;
  line-height: 45px;
  color: #fff;
}
.car .carList {
  width: 100%;
  height: 100%;
  background: white;
}
</style>