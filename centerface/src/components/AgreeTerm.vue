<template>
    <div class="term-bg">
        <div class="term-panel">
            <h3>이용약관 동의</h3>
            <p class="term-contents">{{ termsOfUse }}</p>
            <div class="term-button-div">
                <button class="cf-button-black cf-button-white">닫기</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AgreeTerm',
    data() {
        return {
            termsOfUse: '',
        };
    },
    created() {
        axios
            .get('/TermsOfUse.html')
            .then((response) => {
                this.termsOfUse = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<style>
.term-bg {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    /* z-index: 999; */
}

.term-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 1rem;
    padding: 2rem 1.75rem;
    width: 50%;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
}

.term-panel h3 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 1rem;
}

.term-contents {
    padding: 1rem;
    height: 550px;
    background-color: rgb(248, 249, 251);
    overflow: scroll;
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    white-space: pre-wrap;
}

.term-button-div {
    display: flex;
    width: 100%;
}

.term-button-div button {
    width: 100%;
}
</style>
