const localStorage = window.localStorage;

function getToken() {
  return localStorage.getItem("token");
}

function setToken(token) {
  localStorage.setItem("token", token);
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
