const storage = window.sessionStorage;

function getToken() {
  return storage.getItem("token");
}

function setToken(token) {
  storage.setItem("token", token);
}
const LoginUtil = {
  isLogin: () => {
    const token = getToken();
    const login = token !== null && token !== "no-login";
    return login;
  },
  login: token => {
    setToken(token);
  },
  logout: () => {
    setToken("no-login");
  }
};
export default LoginUtil;
