<template>
    <main class="find-main">
        <div class="find-entire-div">
            <div class="find-panel">
                <div class="find-panel-title-div">
                    <h2>비밀번호 찾기</h2>
                    <p class="find-panel-normal-p">비밀번호 재설정을 위해 가입시 등록한 이메일 주소를 입력해 주세요.</p>
                    <p class="find-panel-576-p">비밀번호 재설정을 위해 가입시 등록한<br /> 이메일 주소를 입력해 주세요.</p>
                </div>
                <form class="find-form" action="">
                    <div class="panel-input-div find-email-div">
                        <input class="panel-input" type="email" id="find-email">
                        <label class="panel-input-label" for="find-email">이메일</label>
                    </div>
                    <button class="cf-button-orange send-email-button">이메일 발송</button>
                    <button class="cf-button-white cf-button-black" type="button" @click="navigateToRoute">회원가입</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'FindPasswordView',
    methods: {
        navigateToRoute() {
            this.$router.push('/signup')
        }
    }
}
</script>

<style>
.find-entire-div {
    width: 100%;
    height: 100%;
    padding: 1.5rem 0 2rem;
    background: rgb(250, 250, 250);
}

.find-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem 0;
}

.find-panel-title-div {
    text-align: center;
    margin-bottom: 2rem;
}

.find-panel-title-div h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.find-form {
    display: flex;
    flex-direction: column;
    width: 75%;
}

.find-email-div {
    margin-bottom: 2.5rem;
}

.send-email-button {
    margin-bottom: 1rem;
}

.find-panel-576-p {
    display: none;
}

/* =============== MEDIA QUERIES ======= */

@media screen and (max-width: 576px) {
    .find-panel {
        width: 100%;
        max-width: 80%;
        margin: 0 auto;
        padding: 1rem 0;
    }

    .find-panel-title-div h2 {
        font-size: 1.7rem;
        margin-bottom: 1.5rem;
    }

    .find-panel-576-p {
        display: block;
        font-size: 0.9rem;
    }

    .find-panel-normal-p {
        display: none;
    }
}
</style>