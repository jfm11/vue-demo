// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/login": {
        target: "http://localhost:8081"
      },
      "/menu/fetch": {
        target: "http://localhost:8081"
      }
    }
  }
};
