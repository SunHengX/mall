<template>
  <div class="comment">
    <div class="demo">
      <h2>用户评价</h2>
    </div>
    <div class="user">
      <div class="userimg">
        <img :src="user.avatar" />
      </div>
      <div class="username">
        <span>{{user.uname}}</span>
      </div>
      <div class="comment">
        <p>{{content}}</p>
        <p class="style">{{style}}</p>
      </div>
      <div class="userinfo">
        <p></p>
      </div>
      <div class="explain">
        <p>{{explain}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetail } from "../../../network/detail";
export default {
  props: {
    iid: {
      type: String
    }
  },
  data() {
    return {
      rate: [],
      user: {},
      content: null,
      explain: null,
      style: null
    };
  },
  created() {
    getDetail(this.iid).then(res => {
      this.rate = res.result.rate.list[0];
      this.user = this.rate.user;
      this.content = this.rate.content;
      this.explain = this.rate.explain;
      this.style = this.rate.style;
      // console.log(this.rate);
    });
  }
};
</script>

<style scoped>
.demo {
  height: 30px;
  background: #f7f7f7;
  line-height: 30px;
}
.user {
  position: relative;
}
.userimg {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
  vertical-align: middle;
}
.userimg img {
  height: 100%;
}
.username {
  position: absolute;
  top: 20px;
  left: 60px;
}
.comment {
  margin-top: 10px;
}
.explain {
  margin: 15px;
  color: gray;
}
.style {
  font-size: 12px;
  color: grey;
  margin-left: 20px;
  margin-top: 5px;
}
</style>