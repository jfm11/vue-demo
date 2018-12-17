<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">客户端模拟</el-menu-item>
      </el-submenu>
      <el-menu-item index="/logout">登出</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import LoginUtil from "@/plugins/login-util";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key) {
      if (key === "/logout") {
        LoginUtil.logout();
        this.$router.replace("/login");
      }
    }
  }
};
</script>
