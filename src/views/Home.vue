<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    welcome
    <el-button @click="onLogout">登出</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  methods: {
    onLogout() {
      this.$store.commit("logout");
      this.$router.replace("/login");
    }
  }
};
</script>
