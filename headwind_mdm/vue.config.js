const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/rest": {
        target: "https://mdm.tilon.com",
        changeOrigin: true,
      },
    },
    client: {
      overlay: false,
    },
  },
});
