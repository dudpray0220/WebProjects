import axios from "axios";

const config = {
  baseUrl: "/Centerface/Centerface.php",
  //   baseUrl: "https://localhost/Centerface/centerface.php",
};

// API 함수들
// loginAPIs
function encryptionApi(userId) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "ECRYPTION",
      USERID: userId,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
function encryptionTestApi(key, userPwd) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "ECRYPTION_TEST",
      KEY: key,
      USERPWD: userPwd,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}

function loginApi(userId, userPwd) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "C_LOGIN",
      USERID: userId,
      USERPWD: userPwd,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}

// roomAPIs
function getRoomApi(userToken, userId) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "R_GETROOMLIST",
      TOKEN: userToken,
      USERID: userId,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
function getInviteRoomApi(userToken, userId) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "R_GETINVITEROOMLIST",
      TOKEN: userToken,
      USERID: userId,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
function removeRoomApi(userToken, userId, roomName, roomUid) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "R_REMOVEROOM",
      TOKEN: userToken,
      USERID: userId,
      ROOMNAME: roomName,
      ROOMUID: roomUid,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
function isExistUserApi(userId) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "C_EXISTUSERID",
      USERID: userId,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
function inviteUserApi(
  roomId,
  roomName,
  roomTitle,
  userToken,
  userId,
  userList
) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "R_INVITEUSER",
      ROOMID: roomId,
      ROOMNAME: roomName,
      ROOMTITLE: roomTitle,
      TOKEN: userToken,
      USERID: userId,
      USERLIST: userList,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}

// export
export {
  encryptionApi,
  encryptionTestApi,
  loginApi,
  getRoomApi,
  getInviteRoomApi,
  removeRoomApi,
  isExistUserApi,
  inviteUserApi,
};
