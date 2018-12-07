<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    welcome
    <SideBar />
    <el-button @click="onLogout">登出</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar";
export default {
  name: "home",
  methods: {
    onLogout() {
      this.$store.commit("logout");
      this.$router.replace("/login");
    }
  },
  components: { SideBar }
};
</script>
