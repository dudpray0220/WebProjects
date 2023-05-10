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
                        <input class="panel-input" type="text" id="user-id">
                        <label class="panel-input-label" for="user-id">아이디</label>
                    </div>
                    <div class="panel-input-div">
                        <input class="panel-input" type="password" id="user-pw">
                        <label class="panel-input-label" for="user-pw">비밀번호</label>
                    </div>
                    <button class="cf-button-orange">로그인</button>
                    <div class="contained-checkbox-divs">
                        <div class="checkbox-div">
                            <label for="remember-id">아이디 저장</label>
                            <input class="panel-checkbox" type="checkbox" name="" id="remember-id">
                        </div>
                        <div class="checkbox-div">
                            <label for="remember-pw">비밀번호 저장</label>
                            <input class="panel-checkbox" type="checkbox" name="" id="remember-pw">
                        </div>
                    </div>
                    <hr>
                    <button class="cf-button-white login-panel-btn">비밀번호 찾기</button>
                    <button class="cf-button-white login-panel-btn">회원가입</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'LoginView',
    components: {
    }
}
</script>

<style>
@import url('../css/commonStyle.css');

/* .login-main {
    flex: 1 1 0%;
} */

.login-entire-div {
    width: 100%;
    max-width: 100%;
    height: 100%;
    background: rgb(250, 250, 250);
    padding: 5rem 0;
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

.panel-input-div {
    position: relative;
}

.login-panel-btn {
    color: black;
    box-shadow: none;
    border: 1px solid rgb(229, 229, 229);
    padding: 1rem 1.7rem;
    font-size: 1rem;
}

.contained-checkbox-divs {
    display: flex;
    justify-content: center;
    align-items: center;
}

.checkbox-div {
    display: flex;
    align-items: center;
    margin: 0 1.5rem;
    column-gap: 0.5rem;
}

.panel-checkbox {
    /* position: relative; */
    width: 24px;
    height: 24px;
    border: 1px solid rgb(229, 229, 229);
    cursor: pointer;
}

.checkbox-div label {
    font-size: 0.9rem;
    color: rgb(167, 164, 164);
    ;
}

.contained-checkbox-divs+hr {
    width: 100%;
}
</style>