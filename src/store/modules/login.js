const localStorage = window.localStorage;

function getToken() {
  return localStorage.getItem("token");
}

function setToken(token) {
  localStorage.setItem("token", token);
}

export default {
  state: {},
  getters: {
    isLogin: () => {
      const token = getToken();
      return token !== null && token !== "no-login";
    }
  },
  mutations: {
    login: (_, token) => {
      setToken(token);
    },
    logout: () => {
      setToken("no-login");
    }
  }
};
