<style scoped>
.wrapper{
  margin:60px;
  /* 声明一个容器 */
  display:grid;
  /* 声明列的宽度 */
  /* grid-template-columns: repeat(3,200px); */
  /* grid-template-columns:200px 100px 200px; */
  /* grid-template-columns: repeat(auto-fill,200px); */
  grid-template-columns: 300px 200px auto;
  /* grid-template-columns: 1fr 1fr minmax(300px,2fr); */
  /* grid-template-columns: repeat(3,1fr); */
  /* 声明行间距和列间距 */
  grid-gap:30px;
  /* 声明行高度 */
  /* grid-template-rows: 50px 50px; */
  grid-template-rows: repeat(2,50px);

  
}
.one {
  background: #19CAAD;
}
.two { 
  background: #8CC7B5;
}
.three {
  background: #D1BA74;
}
.four {
  background: #BEE7E9;
}
.five {
  background: #E6CEAC;
}
.six {
  background: #ECAD9E;
}
.item {
  text-align: center;
  font-size: 200%;
  color: #fff;
}

</style>
<template>
  <div class="home">
    <!-- <div>{{ title }}</div>
    <div>{{ changePeople }}</div>
    <button @click="change">mutations点我</button>
    <button @click="btnSync">actions点我</button>
    <button @click="btnPromise">promise点我</button> -->
    <!-- 玩玩grid -->
    <div class="wrapper">
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    changePeople() {
      return this.$store.getters.changePeople;
    },
  },
  methods: {
    change() {
      // this.$store.commit('getParam','hello')
      this.$store.commit("user/getParam", "helloB");
    },
    btnSync() {
      this.$store.dispatch("getParamSync", "nb");
    },
    async btnPromise() {
      const res = await this.$store.dispatch("getParamSync", "pormise");
      console.log(res);
    },
  },
};
</script>
