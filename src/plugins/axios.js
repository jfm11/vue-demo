import Axios from "axios";
Axios.interceptors.request.use(config => {
  config.headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
  };
  return config;
});
export default Axios;
