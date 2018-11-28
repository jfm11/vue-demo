import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    // 登录界面，不用控制
    next();
    return;
  }
  if (store.getters.isLogin) {
    next();
    // 已经登录处理
    return;
  }
  router.push("/login");
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
