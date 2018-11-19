import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Auth from "./plugins/auth";
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
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next();
    return;
  }
  if (Auth.isLogin()) {
    next();
    return;
  }
  const date = new Date();
  console.log(
    date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds() +
      "-" +
      "还未登录"
  );
  router.push("login");
  next();
});

export default router;
