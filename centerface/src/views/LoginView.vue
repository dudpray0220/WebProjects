<template>
    <main class="login-main">
        <div class="login-entire-div">
            <div class="login-panel">
                <!-- 좌측 그림 -->
                <div class="login-panel-left">
                    <h2 class="panel-title">CenterFace Login</h2>
                    <p class="panel-info">CenterFace와 함께 평범한 화상회의를<br> 특별하게 만나보세요</p>
                </div>
                <!-- 우측 form -->
                <form action="" class="login-panel-form">
                    <div class="panel-input-div">
                        <input class="panel-input" type="text" id="user-id" v-model="userId">
                        <label class="panel-input-label" for="user-id" :class="{ inputActive: userId }">아이디</label>
                    </div>
                    <div class="panel-input-div">
                        <input class="panel-input" type="password" id="user-pw" v-model="userPw">
                        <label class="panel-input-label" for="user-pw" :class="{ inputActive: userPw }">비밀번호</label>
                    </div>
                    <button class="cf-button-orange">로그인</button>
                    <div class="contained-checkbox-divs">
                        <div class="checkbox-div">
                            <input class="panel-checkbox" type="checkbox" name="" id="remember-id">
                            <label for="remember-id">아이디 저장</label>
                        </div>
                        <div class="checkbox-div">
                            <input class="panel-checkbox" type="checkbox" name="" id="remember-pw">
                            <label for="remember-pw">비밀번호 저장</label>
                        </div>
                    </div>
                    <button id="find-pw-btn" class="cf-button-white cf-button-black" @click="navigateToRoutePw">비밀번호
                        찾기</button>
                    <button class="cf-button-white cf-button-black" @click="navigateToRouteSignup">회원가입</button>
                </form>
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
            userPw: '',
        }
    },
    components: {
    },
    methods: {
        navigateToRoutePw() {
            this.$router.push('/find/password');
        },
        navigateToRouteSignup() {
            this.$router.push('/signup');
        }
    }
}
</script>

<style>
.login-entire-div {
    width: 100%;
    max-width: 100%;
    height: 100%;
    background: rgb(250, 250, 250);
    padding: 5rem 0 6rem;
}

.login-panel {
    display: flex;
    max-width: 1020px;
    height: 550px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
}

.login-panel-left {
    padding: 3rem 2.5rem;
    background-color: rgb(222, 232, 255);
    background-image: url('../assets/banner2.png');
    background-position: left bottom;
    background-repeat: no-repeat;
    flex: 1 1 0%;
}

.panel-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(52, 60, 117);
    margin-bottom: 1.5rem;
}

.panel-info {
    font-size: 1.25rem;
    color: rgb(90, 97, 146);
}

.login-panel-form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    padding: 2.5rem 2.8rem;
    flex: 1 1 0%;
    background-color: white;
}

.contained-checkbox-divs {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
}

.contained-checkbox-divs::after {
    position: absolute;
    display: block;
    content: "";
    top: 4rem;
    left: 0px;
    right: 0px;
    width: 100%;
    border-bottom: 1px solid rgb(229, 229, 229);
}

#find-pw-btn {
    margin-top: 3.5rem;
}
</style>