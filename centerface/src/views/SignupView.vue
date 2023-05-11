<template>
    <main class="signup-main">
        <div class="signup-entire-div">
            <div class="signup-panel">
                <div class="signup-title-div">
                    <h2 class="signup-title">CenterFace 회원가입</h2>
                    <p class="signup-info">쉽고 간편한 회원가입으로 CenterFace를 사용하실 수 있습니다.</p>
                </div>
                <form action="" class="signup-forms">
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="text" name="" id="signup-name">
                        <label class="panel-input-label" for="signup-name">성함 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="text" name="" id="signup-id">
                        <label class="panel-input-label" for="signup-id">아이디 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="text" name="" id="signup-email">
                        <label class="panel-input-label" for="signup-email">이메일 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="text" name="" id="signup-pw">
                        <label class="panel-input-label" for="signup-pw">비밀번호 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="text" name="" id="signup-confirm-pw">
                        <label class="panel-input-label" for="signup-confirm-pw">비밀번호 확인 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="text" name="" id="signup-coupon">
                        <label class="panel-input-label" for="signup-coupon">인증 번호 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <button class="cf-button-orange cf-button-black">가입하기</button>
                    <button class="cf-button-white cf-button-black">취소</button>
                    <div class="signup-checkbox-wrapper">
                        <div class="signup-checkbox-div">
                            <input class="panel-checkbox" type="checkbox" name="" id="agree-term">
                            <label class="signup-lable" for="agree-term">이용약관 동의</label>
                        </div>
                        <button class="see-info-button">내용 보기</button>
                    </div>

                    <div class="signup-checkbox-wrapper">
                        <div class="signup-checkbox-div">
                            <input class="panel-checkbox" type="checkbox" name="" id="agree-info">
                            <label class="signup-lable" for="agree-info">개인정보 수집 및 이용에 대한 동의</label>
                        </div>
                        <button class="see-info-button">내용 보기</button>
                    </div>


                    <div class="signup-checkbox-wrapper">
                        <div class="signup-checkbox-div">
                            <input class="panel-checkbox" type="checkbox" name="" id="agree-email">
                            <label class="signup-lable" for="agree-email">사용자 설문 조사 메일 수신 동의</label>
                        </div>
                    </div>
                </form>

                <!-- 약관 내용 보기 -->
                <agree-term></agree-term>
            </div>
        </div>
    </main>
</template>

<script>
import AgreeTerm from '../components/AgreeTerm.vue'
export default {
    name: 'SignupView',
    components: {
        AgreeTerm: AgreeTerm
    }
}
</script>

<style>
@import url('../css/commonStyle.css');

.signup-entire-div {
    width: 100%;
    height: 100%;
    padding: 1.5rem 0 2rem;
    background: rgb(250, 250, 250);
}

.signup-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    height: auto;
    margin: 0 auto;
}

.signup-title-div {
    padding: 2rem;
    text-align: center;
}

.signup-title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
}


.signup-forms {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    padding: 1rem 0 2.8rem;
    width: 70%;
}

.signup-forms .signup-input-div {
    padding-bottom: 1.5rem;
}

.signup-forms button {
    margin-bottom: 1rem;
}

.signup-checkbox-wrapper {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 1rem;
}

.signup-checkbox-div {
    display: flex;
    align-items: center;
}

.signup-checkbox-div .signup-lable {
    margin-left: 0.3rem;
    font-size: 0.8rem;
    color: black;
}

.signup-checkbox-wrapper .see-info-button {
    margin: 0;
    border: none;
    background-color: inherit;
    text-decoration: underline;
    font-size: 0.8rem;
    color: rgb(51, 51, 51);
}

.signup-checkbox-wrapper .see-info-button:hover {
    cursor: pointer;
}
</style>