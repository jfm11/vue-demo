const localStorage = window.localStorage;

export default {
  state: {
    token: {
      get: () => {
        return localStorage.getItem("token");
      },
      set: token => {
        console.log("set:" + token);
        localStorage.setItem("token", token);
      }
    }
  },
  getters: {
    isLogin: state => {
      const token = state.token.get();
      return token !== null && token !== "no-login";
    }
  },
  mutations: {
    login: (state, token) => {
      state.token = token;
    },
    logout: state => {
      //   Console.log(state.token);
      state.token.set("no-login");
    }
  }
};
