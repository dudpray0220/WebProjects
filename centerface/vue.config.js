const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 개발 서버 설정
  devServer: {
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      "/Centerface/Centerface.php": {
        // 프록시 요청을 보낼 서버의 주소
        target: "https://www.centerface.co.kr",
        changeOrigin: true,
      },
    },
    client: {
      overlay: false,
    },
  },
});
