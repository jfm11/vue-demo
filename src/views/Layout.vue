<template>
  <div
    v-loading.fullscreen="menuList.length === 0"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SideBar />
    <router-view v-if="menuList.length > 0" />
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("menu", ["menuList"])
  },
  methods: {},
  components: { SideBar }
};
</script>
