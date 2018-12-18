<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <template v-for="menu in menus">
        <el-submenu
          :key="menu.index"
          :index="menu.index"
          v-if="menu.children && menu.children.length>0"
        ><template slot="title">{{menu.name}}</template>
          <template v-for="subMenu in menu.children">
            <el-menu-item
              :key="subMenu.index"
              :index="subMenu.index"
            >{{subMenu.name}}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item
          :key="menu.index"
          :index="menu.index"
          v-else
        >{{menu.name}}</el-menu-item>
      </template>
      <el-menu-item index="/logout">登出</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import LoginUtil from "@/plugins/login-util";
export default {
  data() {
    return {
      activeIndex: "/home",
      menus: [
        {
          index: "/home",
          name: "首页",
          hasChild: false
        },
        {
          index: "",
          name: "我的工作台",
          hasChild: true,
          children: [{ index: "/mock-client", name: "模拟客户端" }]
        }
      ]
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
