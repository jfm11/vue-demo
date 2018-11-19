const localStorage = window.localStorage;

export default {
  isLogin() {
    const token = localStorage.getItem("token");
    // if (token === null) console.log("hehe");
    // else console.log(token);
    return token !== null;
  },
  setToken(token) {
    localStorage.setItem("token", token);
  }
};
