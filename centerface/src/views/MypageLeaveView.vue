<template>
    <main>
        <div class="leave-panel-entire-div">
            <div class="leave-panel-div">
                <div class="leave-title-div">
                    <h2>회원 탈퇴 신청</h2>
                    <p>회원 탈퇴 전 반드시 유의사항을 확인하시길 바랍니다.</p>
                </div>
                <form action="" class="leave-form">
                    <div class="leave-notice-div">
                        <strong>회원 탈퇴 시 유의사항</strong>
                        <ul class="leave-notice-ul">
                            <li class="leave-notice-li">회원 탈퇴를 하시려면 사용 중이던 상품을 해지하셔야 합니다.<br>(회원정보 수정>해지)</li>
                            <li class="leave-notice-li">회원 탈퇴 시 입력하신 개인정보는 개인정보처리방침에 따라 폐기되며,<br>재가입 시에도 기존 정보는 복원되지 않습니다.
                            </li>
                            <li class="leave-notice-li">탈퇴 시 3개월간 재가입이 불가능합니다.</li>
                        </ul>
                    </div>
                    <div class="panel-input-div">
                        <input class="panel-input" type="text" disabled id="leave-name">
                        <label class="panel-input-label" for="leave-name">성함</label>
                    </div>
                    <div class="panel-input-div">
                        <input class="panel-input" type="text" id="leave-pw">
                        <label class="panel-input-label" for="leave-pw">비밀번호 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <button class="cf-button-orange cf-button-black">회원 탈퇴</button>
                    <button class="cf-button-white cf-button-black" @click="navigateToRoute">돌아가기</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "MypageLeaveView",
    methods: {
        navigateToRoute() {
            this.$router.push('/mypage/modify')
        }
    }
}
</script>

<style>
.leave-panel-entire-div {
    background: rgb(250, 250, 250);
    width: 100%;
    height: 100%;
    padding: 2.5rem 0;
}

.leave-panel-div {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.leave-title-div {
    text-align: center;
    margin: 1rem 0 2rem;
}

.leave-title-div h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.leave-form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
}

.leave-notice-div {
    background-color: rgb(255, 255, 255);
    padding: 0.9rem;
}

.leave-notice-div strong {
    display: block;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.7rem;
}

.leave-notice-ul {
    padding-left: 1rem;
}

.leave-notice-li {
    list-style: outside;
    line-height: 1.25rem;
    margin-bottom: 0.5rem;
}
</style>