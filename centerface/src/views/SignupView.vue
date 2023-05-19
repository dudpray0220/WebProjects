<template>
    <main class="signup-main">
        <div class="signup-entire-div">
            <div class="signup-panel">
                <div class="signup-title-div">
                    <h2 class="signup-title">CenterFace 회원가입</h2>
                    <p class="signup-info">쉽고 간편한 회원가입으로 CenterFace를 사용하실 수 있습니다.</p>
                    <p class="signup-info-576">쉽고 간편한 회원가입으로<br /> CenterFace를 사용하실 수 있습니다.</p>
                </div>
                <form action="" class="signup-forms">
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="text" name="" id="signup-name" v-model="userName">
                        <label class="panel-input-label" for="signup-name" :class="{ inputActive: userName }">성함 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="text" name="" id="signup-id" v-model="userId">
                        <label class="panel-input-label" for="signup-id" :class="{ inputActive: userId }">아이디 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="text" name="" id="signup-email" v-model="userEmail">
                        <label class="panel-input-label" for="signup-email" :class="{ inputActive: userEmail }">이메일 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="password" name="" id="signup-pw" v-model="userPw">
                        <label class="panel-input-label" for="signup-pw" :class="{ inputActive: userPw }">비밀번호 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="password" name="" id="signup-confirm-pw" v-model="userPwConfirm">
                        <label class="panel-input-label" for="signup-confirm-pw"
                            :class="{ inputActive: userPwConfirm }">비밀번호 확인
                            <span class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div signup-input-div">
                        <input class="panel-input" type="text" name="" id="signup-coupon" v-model="userCoupon">
                        <label class="panel-input-label" for="signup-coupon" :class="{ inputActive: userCoupon }">인증 번호
                            <span class="input-alert-label">(필수)</span></label>
                    </div>
                    <button class="cf-button-orange cf-button-black" type="button" @click.prevent="signupUser">가입하기</button>
                    <button class="cf-button-white cf-button-black" @click="navigateToRoute">취소</button>
                    <div class="signup-checkbox-wrapper">
                        <div class="signup-checkbox-div">
                            <input class="panel-checkbox" type="checkbox" id="agree-term" v-model="agreeTermChecked">
                            <label class="signup-lable" for="agree-term">이용약관 동의</label>
                        </div>
                        <button type="button" class="see-info-button" @click="seeAgreeTerm">내용 보기</button>
                    </div>

                    <div class="signup-checkbox-wrapper">
                        <div class="signup-checkbox-div">
                            <input class="panel-checkbox" type="checkbox" id="agree-info" v-model="agreeInfoChecked">
                            <label class="signup-lable" for="agree-info">개인정보 수집 및 이용에 대한 동의</label>
                        </div>
                        <button type="button" class="see-info-button" @click="seeAgreeInfo">내용 보기</button>
                    </div>


                    <div class="signup-checkbox-wrapper">
                        <div class="signup-checkbox-div">
                            <input class="panel-checkbox" type="checkbox" id="agree-email">
                            <label class="signup-lable" for="agree-email">사용자 설문 조사 메일 수신 동의</label>
                        </div>
                    </div>
                </form>

                <!-- 약관 내용 보기 -->
                <agree-term v-if="agreeTermToggle" @closeModal="closeAgreeTerm"></agree-term>
                <agree-info v-if="agreeInfoToggle" @closeInfoModal="closeAgreeInfo"></agree-info>
            </div>
        </div>
    </main>
</template>

<script>
import { signupUserApi } from '../api/index'
import AgreeTerm from '../components/AgreeTerm.vue'
import AgreeInfo from '../components/AgreeInfo.vue'
export default {
    name: 'SignupView',
    components: {
        AgreeTerm: AgreeTerm,
        AgreeInfo
    },
    data() {
        return {
            userName: '',
            userId: '',
            userEmail: '',
            userPw: '',
            userPwConfirm: '',
            userCoupon: '',

            agreeTermChecked: false,
            agreeInfoChecked: false,

            agreeTermToggle: false,
            agreeInfoToggle: false,
        }
    },
    methods: {
        seeAgreeTerm() {
            this.agreeTermToggle = true;
            console.log(this.agreeTermToggle);
        },
        closeAgreeTerm() {
            this.agreeTermToggle = false;
            console.log(this.agreeTermToggle);
        },
        seeAgreeInfo() {
            this.agreeInfoToggle = true;
            console.log(this.agreeInfoToggle);
        },
        closeAgreeInfo() {
            this.agreeInfoToggle = false;
            console.log(this.agreeInfoToggle);
        },
        navigateToRoute() {
            this.$router.push('/login')
        },
        async signupUser() {
            try {
                if (this.confirmPw) {
                    if (!this.agreeTermChecked || !this.agreeInfoChecked) {
                        alert('이용약관 및 개인정보 수집에 동의해주세요.');
                    } else {
                        let response = await signupUserApi(this.userCoupon, this.userEmail, this.userId, this.userName, this.userPw)
                        if (response.data.RETURN_ISSUCESS) {
                            alert('Centerface의 회원이 되신 것을 환영합니다!');
                            this.$router.push('/signup/success')
                        } else {
                            alert('회원 가입 거절. 안녕히 가세요.');
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {
        confirmPw() {
            return this.userPw === this.userPwConfirm
        }
    },
    watch: {
        confirmPw(newValue) {
            console.log(`newValue: ${newValue}`);
        }
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

.signup-forms>.signup-input-div {
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

.signup-info-576 {
    display: none;
}

/* =============== MEDIA QUERIES ======= */

@media screen and (max-width: 576px) {
    .signup-panel {
        max-width: 100%;
    }

    .signup-forms {
        width: 80%;
    }

    .signup-title {
        font-size: 1.7rem;
        margin-bottom: 1.5rem;
    }

    .signup-info {
        display: none;
    }

    .signup-info-576 {
        display: block;
        font-size: 0.9rem;
    }

    .signup-checkbox-div .signup-lable {
        font-size: 0.7rem;
    }
}
</style>