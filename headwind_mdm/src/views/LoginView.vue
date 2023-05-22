<template>
    <main>
        <div class="login-entire-div">
            <div class="login-panel-div">
                <div class="login-img-div">
                    <img src="../assets/logo.png" alt="tilonLogo">
                </div>

                <div class="login-div">
                    <form>
                        <div class="input-id-div">
                            <label for="user-id">아이디</label>
                            <input v-model="userId" type="text" placeholder="아이디를 입력하세요" id="user-id">
                        </div>
                        <div>
                            <label for="user-pwd">비밀번호</label>
                            <input v-model="userPwd" type="password" id="user-pwd" placeholder="비밀번호를 입력하세요">
                        </div>
                        <button>로그인</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            userId: '',
            userPwd: '',
        }
    }
}
</script>

<style>
.login-entire-div {
    width: 100%;
    height: 100%;
    padding: 3rem 0;
}

.login-panel-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

.login-img-div img {
    width: 50%;
}
</style>