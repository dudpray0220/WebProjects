<template>
    <div class="term-bg">
        <div class="term-panel">
            <h3>개인정보 수집 및 이용에 대한 동의</h3>
            <p class="term-contents">{{ termsOfInfo }}</p>
            <div class="term-button-div">
                <button class="cf-button-black cf-button-white" @click="$emit('closeInfoModal')">닫기</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AgreeInfo',
    data() {
        return {
            termsOfInfo: '',
        };
    },
    created() {
        axios
            .get('/TermsOfInfo.html')
            .then((response) => {
                this.termsOfInfo = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    props: {
    }
};
</script>

<style></style>
