<template>
    <main>
        <div class="success-entire-div">
            <div class="success-panel-div">
                <div class="success-title-div">
                    <h2>CenterFace 가입이 완료되었습니다.</h2>
                    <p>로그인 후, CenterFace을 시작하세요.</p>
                </div>
                <div class="success-img-div">
                    <img src="../assets/banner3.png" alt="signsuSuccessImg">
                </div>
                <button type="button" class="cf-button-orange" @click="navigateToRoute">로그인</button>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'SignupSuccessView',
    methods: {
        navigateToRoute() {
            this.$router.push('/login');
        }
    }
}
</script>

<style>
.success-entire-div {
    width: 100%;
    max-width: 100%;
    height: 100%;
    padding: 3.5rem 0;
    background: rgb(250, 250, 250);
}

.success-panel-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 2rem;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background-color: inherit;
}

.success-title-div {
    width: 100%;
    max-width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
}

.success-title-div h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.7rem;
}

.success-img-div {
    max-width: 500px;
    margin-bottom: 1rem;
}

.success-img-div img {
    width: 100%;
    display: block;
}

.success-panel-div button {
    width: 50%;
}
</style>