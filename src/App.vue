<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <Tabble>
      <Tabbar path="/home">
        <img src="./assets/tabbar-img/zhuye.png" slot="iteam-pic" />
        <img src="./assets/tabbar-img/bindzhuye.png" slot="iteam-selection" />
        <div slot="iteam-text">主页</div>
      </Tabbar>
      <Tabbar path="/category">
        <img src="./assets/tabbar-img/category.png" slot="iteam-pic" />
        <img src="./assets/tabbar-img/categoryr.png" slot="iteam-selection" />
        <div slot="iteam-text">精品分类</div>
      </Tabbar>
      <Tabbar path="/car">
        <img src="./assets/tabbar-img/car.png" slot="iteam-pic" />
        <img src="./assets/tabbar-img/carr.png" slot="iteam-selection" />
        <div slot="iteam-text">购物车</div>
      </Tabbar>
      <Tabbar path="/profile">
        <img src="./assets/tabbar-img/profile.png" slot="iteam-pic" />
        <img src="./assets/tabbar-img/profiler.png" slot="iteam-selection" />
        <div slot="iteam-text">我的</div>
      </Tabbar>
    </Tabble>
  </div>
</template>

<script>
import Tabble from "./components/common/tabble/Tabbel";
import Tabbar from "./components/common/tabble/Tabbar";
export default {
  components: {
    Tabble,
    Tabbar
  }
};
</script>
<style>
@import "./assets/css/normal.css";
body {
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
