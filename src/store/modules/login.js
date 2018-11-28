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
    isLogin: state => {
      const token = getToken();
      return token !== null && token !== "no-login";
    }
  },
  mutations: {
    login: (state, token) => {
      setToken(token);
    },
    logout: state => {
      setToken("no-login");
    }
  }
};
