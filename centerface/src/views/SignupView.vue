<template>
    <main>
        <div>
            <div class="signup-panel">
                <div>
                    <h2>CenterFace 회원가입</h2>
                    <p>쉽고 간편한 회원가입으로 CenterFace를 사용하실 수 있습니다.</p>
                </div>
                <form action="" class="signup-forms">
                    <div>
                        <input type="text" name="" id="signup-name">
                        <label for="signup-name">성함</label>
                    </div>
                    <div>
                        <input type="text" name="" id="signup-id">
                        <label for="signup-id">아이디</label>
                    </div>
                    <div>
                        <input type="text" name="" id="signup-email">
                        <label for="signup-email">이메일</label>
                    </div>
                    <div>
                        <input type="text" name="" id="signup-pw">
                        <label for="signup-pw">비밀번호</label>
                    </div>
                    <div>
                        <input type="text" name="" id="signup-confirm-pw">
                        <label for="signup-confirm-pw">비밀번호 확인</label>
                    </div>
                    <div>
                        <input type="text" name="" id="signup-coupon">
                        <label for="signup-coupon">인증 번호</label>
                    </div>
                    <button class="cf-button-orange">가입하기</button>
                    <button class="cf-button-white">취소</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'SignupView'
}
</script>

<style>
@import url('../css/commonStyle.css');
</style>