const sessionStorage = window.sessionStorage;

const origCurMenu = sessionStorage.getItem("curMenu");

export default {
  namespaced: true,
  state: {
    menuList: [],
    curMenu: origCurMenu,
    loading: false
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
      sessionStorage.setItem("curMenu", curMenu);
    },
    clean: state => {
      state.menuList = [];
      state.curMenu = "/";
    },
    loading: (state, loading) => {
      state.loading = loading;
    }
  },
  actions: {
    fetch: ({ commit }) => {
      commit("loading", true);
      const data = [
        {
          index: "/",
          name: "首页"
        },
        {
          index: "",
          name: "我的工作台",
          children: [{ index: "/mock-client", name: "模拟客户端" }]
        }
      ];
      new Promise(resolve => {
        setTimeout(() => {
          commit("setMenuList", data);
          commit("loading", false);
          resolve();
        }, 1000);
      });
    }
  }
};
