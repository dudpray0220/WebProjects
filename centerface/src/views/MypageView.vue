<template>
    <main class="mypage-main">
        <div class="mypage-entire-div">
            <div class="mypage-panel">
                <div class="mypage-title-div">
                    <h2 class="mypage-title">마이페이지</h2>
                    <p class="mypage-info">마이페이지에서는 연락처 등 수정이 가능합니다.</p>
                </div>
                <form action="" class="signup-forms mypage-forms">
                    <div class="panel-input-div">
                        <input class="panel-input" disabled type="text" name="" id="mypage-name" v-model="userName">
                        <label class="panel-input-label" for="mypage-name" :class="{ inputActive: userName }">성함</label>
                    </div>
                    <div class="panel-input-div">
                        <input class="panel-input" type="email" name="" id="mypage-email" v-model="userEmail">
                        <label class="panel-input-label" for="mypage-email" :class="{ inputActive: userEmail }">이메일 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div">
                        <input class="panel-input" type="password" name="" id="mypage-pw" v-model="userPw">
                        <label class="panel-input-label" for="mypage-pw" :class="{ inputActive: userPw }">비밀번호 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div">
                        <input class="panel-input" type="password" name="" id="mypage-new-pw" v-model="userNewPw">
                        <label class="panel-input-label" for="mypage-new-pw" :class="{ inputActive: userNewPw }">새
                            비밀번호</label>
                    </div>
                    <div class="panel-input-div">
                        <input class="panel-input" type="password" name="" id="mypage-new-pw-confirm"
                            v-model="userNewPwConfirm">
                        <label class="panel-input-label" for="mypage-new-pw-confirm"
                            :class="{ inputActive: userNewPwConfirm }">새
                            비밀번호
                            확인</label>
                    </div>
                    <button class="cf-button-orange cf-button-black">회원정보 수정</button>
                    <button class="cf-button-white cf-button-black">취소</button>
                    <router-link to="/mypage/leave" class="leave-centerface">회원 탈퇴 신청</router-link>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "MypageView",
    data() {
        return {
            userName: '배영현',
            userEmail: '',
            userPw: '',
            userNewPw: '',
            userNewPwConfirm: '',
        }
    }
}
</script>

<style>
@import url('../css/commonStyle.css');

.mypage-entire-div {
    background: rgb(250, 250, 250);
    width: 100%;
    height: 100%;
    padding: 1.5rem 0 2rem;
}

.mypage-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
}

.mypage-title-div {
    margin: 2rem 0 1.5rem;
}

.mypage-title-div h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;
}

.leave-centerface {
    color: rgb(121, 121, 121);
    text-align: right;
    font-size: 0.8rem;
    text-decoration: underline;
}

.mypage-forms>.panel-input-div {
    margin-bottom: 1.2rem;
}
</style>