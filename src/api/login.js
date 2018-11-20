import Axios from "axios";

export default data => {
  Axios.post("/login", data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
