<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <template v-for="menu in menuList">
        <!-- 子菜单加载 -->
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
        <!-- 普通菜单加载 -->
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
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex: "/",
      menus: [
        {
          index: "/",
          name: "首页"
        },
        {
          index: "",
          name: "我的工作台",
          children: [{ index: "/mock-client", name: "模拟客户端" }]
        }
      ]
    };
  },
  computed: {
    ...mapState("menu", ["menuList"])
  },
  methods: {
    handleSelect(key) {
      if (key === "/logout") {
        LoginUtil.logout();
        this.$store.commit("menu/clean");
        this.$router.replace("/login");
      } else {
        this.$router.push(key);
      }
    },
    ...mapMutations("menu", ["clean"])
  }
};
</script>
