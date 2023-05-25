import axios from "axios";
import md5 from "md5";
import { params } from "../parameter/paramsDevice";

const config = {
  publicUrl: "https://mdm.tilon.com/rest/public/",
  privateUrl: "https://mdm.tilon.com/rest/private/",
};

// API 함수들
// login api
function loginApi(userId, userPwd) {
  //   const hashedPwd = CryptoJS.MD5(userPwd).toString(); // password를 MD5로 변환
  const hashedPwd = md5(userPwd).toUpperCase(); // password를 MD5로 변환
  return axios.post(
    `${config.publicUrl}jwt/login`,
    {
      login: userId,
      password: hashedPwd,
    },
    {
      headers: { "Content-Type": "application/json;" },
    }
  );
}

// 메인화면 api
// 그룹 찾기
function searchGroupApi(userToken) {
  return axios.get(`/rest/private/groups/search`, {
    headers: {
      Authorization: "Bearer " + userToken,
      "Content-Type": "application/json;",
    },
  });
}
// 구성 찾기
function searchConfigApi(userToken) {
  return axios.get(`/rest/private/configurations/search`, {
    headers: {
      Authorization: "Bearer " + userToken,
      "Content-Type": "application/json;",
    },
  });
}
// 장치 찾기
function searchDeviceApi(userToken) {
  return axios.post(`/rest/private/devices/search`, params, {
    headers: {
      Authorization: "Bearer " + userToken,
      "Content-Type": "application/json;",
    },
  });
}

// export
export { loginApi, searchGroupApi, searchConfigApi, searchDeviceApi };
