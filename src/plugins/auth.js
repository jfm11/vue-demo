const localStorage = window.localStorage;

export default {
  /** 是否已经登录 */
  isLogin() {
    const token = localStorage.getItem("token");
    // if (token === null) console.log("hehe");
    // else console.log(token);
    return token !== null;
  },
  /** 设置登录成功toekn */
  setToken(token) {
    localStorage.setItem("token", token);
  },
  /** 获取登录成功token */
  getToken() {
    return localStorage.getItem("token");
  }
};
