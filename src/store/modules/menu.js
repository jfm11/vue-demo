import axios from "@/plugins/axios";
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
      axios
        .get("/menu/fetch")
        .then(response => {
          commit("setMenuList", response.data);
          commit("loading", false);
        })
        .catch(error => console.log(error));
    }
  }
};
