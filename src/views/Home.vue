<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    welcome
    <el-button @click="onLogout">登出</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    onLogout() {
      console.log("退出登录");
      this.$store.commit("logout");
      this.$router.replace("/");
    }
  }
};
</script>
