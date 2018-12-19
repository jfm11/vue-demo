import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import store from "@/store/index";
import LoginUtil from "@/plugins/login-util";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
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
  next();
  // 已经登录处理
  return;
});

export default router;
