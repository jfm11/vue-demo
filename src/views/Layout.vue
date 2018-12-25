<template>
  <div
    v-loading.fullscreen="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SideBar
      :curMenu="curMenu"
      :menuList="menuList"
    />
    <router-view v-if="!loading" />
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("menu", ["curMenu", "menuList", "loading"])
  },
  components: { SideBar }
};
</script>
