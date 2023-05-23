<template>
    <main>
        <div class="login-entire-div">
            <div class="login-panel-div">
                <div class="login-img-div">
                    <img src="" alt="Logo">
                    <span>MDM</span>
                </div>

                <div class="login-div">
                    <form @submit.prevent="">
                        <div class="input-div">
                            <label class="login-label" for="user-id">아이디</label>
                            <input v-model="userId" type="text" placeholder="아이디를 입력하세요" id="user-id" class="form-control">
                        </div>
                        <div class="input-div">
                            <label class="login-label" for="user-pwd">비밀번호</label>
                            <input v-model="userPwd" type="password" id="user-pwd" placeholder="비밀번호를 입력하세요"
                                class="form-control">
                        </div>
                        <div class="button-div">
                            <button-component :buttonText="'로그인'"></button-component>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    components: { ButtonComponent },
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
@import url('../css/commonStyle.css');

.login-entire-div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
}

.login-panel-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
}

.login-img-div {
    max-width: 30%;
    margin-bottom: 5rem;
    white-space: nowrap;
}

.login-img-div span {
    font-size: 30px;
    color: #4c788c;
}

.login-img-div img {
    max-width: 70%;
    margin-right: 1rem;
}

.login-div {
    background: #f6f8fc;
    padding: 3rem 3rem 1.5rem 3rem;
    border-radius: 10px;
    width: 100%;
    border: 1px solid #ccc;
    max-width: 100%;
}

.login-div form {
    width: 100%;
}

.login-label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
}


.input-div {
    margin-bottom: 1.5rem;
}

.input-div label {
    margin-bottom: 1rem;
}

.button-div {
    display: flex;
    justify-content: flex-end;
}
</style>