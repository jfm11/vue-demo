export default {
  namespaced: true,
  state: {
    menuList: [],
    curMenu: "/"
  },
  getters: {
    nonEmpty: state => {
      return state.menuList.length > 0;
    }
  },
  mutations: {
    setMenuList: (state, menuList) => {
      state.menuList = menuList;
    },
    setCurMenu: (state, curMenu) => {
      state.curMenu = curMenu;
    },
    clean: state => {
      state.menuList = [];
      state.curMenu = "/";
    }
  },
  actions: {
    fetch: async ({ commit }) => {
      const data = [
        {
          index: "/home",
          name: "首页"
        },
        {
          index: "",
          name: "我的工作台",
          children: [{ index: "/mock-client", name: "模拟客户端" }]
        }
      ];
      await setTimeout(() => {
        commit("setMenuList", data);
      }, 1000);
    }
  }
};
