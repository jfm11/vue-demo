import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/Layout.vue";
import Login from "@/views/Login.vue";
import store from "@/store/index";
import LoginUtil from "@/plugins/login-util";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "",
      name: "",
      component: Layout,
      children: [
        {
          path: "/",
          component: () => import("@/views/home/index.vue")
        },
        {
          path: "/mock-client",
          component: () => import("@/views/mock-client/index.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.name === "login") {
    // 登录界面，不用控制
    next();
    return;
  }
  if (!LoginUtil.isLogin()) {
    // 还未登录
    next("/login");
    return;
  }
  if (store.state.menu.menuList.length === 0) {
    store.dispatch("menu/fetch").then(() => {
      next();
    });
    return;
  }
  // 保存目标地址，防止刷新后丢失。
  store.commit("menu/setCurMenu", to.path);
  next();
  // 已经登录处理
  return;
});

export default router;
