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
  roomUid,
  roomName,
  roomContents,
  userToken,
  userId,
  userList
) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "R_INVITEUSER",
      ROOMID: roomUid,
      ROOMNAME: roomName,
      ROOMTITLE: roomContents,
      TOKEN: userToken,
      USERID: userId,
      USERLIST: userList,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
function createRoomApi(
  userId,
  userToken,
  startDate,
  endDate,
  roomName,
  roomOption,
  roomPwd,
  roomContents
) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "R_CREATEROOM",
      USERID: userId,
      TOKEN: userToken,
      STARTDATE: startDate,
      ENDDATE: endDate,
      ROOMNAME: roomName,
      ROOMPWD: roomPwd,
      ROOMTITLE: roomContents,
      ROOMOPTION: roomOption,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
// mypage function
function getUserApi(userToken, userId) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "C_GETUSERINFO",
      TOKEN: userToken,
      USERID: userId,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
function userVerifyApi(userToken, userId, userPwd) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "C_VERIFYUSERINFO",
      TOKEN: userToken,
      USERID: userId,
      USERPWD: userPwd,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
function updateUserApi(userToken, userId, userPwd, userEmail, userName) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "C_UPDATEUSER",
      TOKEN: userToken,
      USERID: userId,
      USERPWD: userPwd,
      USEREMAIL: userEmail,
      USERNAME: userName,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
function removeUserApi(userToken, userId) {
  return axios.post(
    config.baseUrl,
    {
      RequestType: "C_REMOVEUSER",
      TOKEN: userToken,
      USERID: userId,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
//signup function
function signupUserApi(userCoupon, userEmail, userId, userName, userPwd) {
  return axios.post(
    config.baseUrl,
    {
      COUPON: userCoupon,
      RequestType: "C_REGUSER",
      USEREMAIL: userEmail,
      USERID: userId,
      USERNAME: userName,
      USERPWD: userPwd,
    },
    {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }
  );
}
// export
export {
  // login
  encryptionApi,
  encryptionTestApi,
  loginApi,
  // room
  getRoomApi,
  getInviteRoomApi,
  removeRoomApi,
  isExistUserApi,
  inviteUserApi,
  createRoomApi,
  // myPage
  getUserApi,
  userVerifyApi,
  updateUserApi,
  // 탈퇴
  removeUserApi,
  // 회원가입
  signupUserApi,
};
