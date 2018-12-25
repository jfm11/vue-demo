<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SideBar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar";
export default {
  name: "home",
  methods: {},
  components: { SideBar }
};
</script>
