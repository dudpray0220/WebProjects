<template>
    <main class="faq-main">
        <div class="faq-entire-div">
            <div class="faq-panel">
                <h2 class="faq-title">자주 묻는 질문</h2>
                <ul>
                    <li class="faq-li" v-for="(data, i) in faqData" :key="i">
                        <div class="faq-div">
                            <p>{{ data.q }}</p>
                            <input type="checkbox" class="faq-checkbox" @click="seeAnswer(data)">
                        </div>
                        <p class="faq-answser" v-if="data.toggle">{{ data.a }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
import data from '../assets/faqData'
export default {
    name: 'FaqView',
    data() {
        return {
            faqData: data
        }
    },
    methods: {
        seeAnswer(data) {
            data.toggle = !data.toggle;
        },
        removeAnswer(data) {
            data.toggle = !data.toggle;
        }
    }
}
</script>

<style>
.faq-entire-div {
    width: 100%;
    height: 100%;
    padding: 3.5rem 0;
    background: rgb(250, 250, 250);
}

.faq-panel {
    width: 100%;
    max-width: 1080px;
    height: auto;
    margin: 0 auto;
    padding: 0 1.25rem;
    background: inherit;
}

.faq-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 3rem;
}

.faq-li {
    margin-bottom: 1rem;
}

.faq-div {
    display: flex;
    padding: 0 1rem;
    background-color: white;
    justify-content: space-between;
    align-items: center;
}

.faq-answser {
    padding: 1.9em 1rem;
    /* border-bottom: 1px solid rgb(216, 215, 215); */
    margin-bottom: 1.5rem;
}

.faq-checkbox {
    position: relative;
    width: 50px;
    height: 50px;
    left: 19px;
    cursor: pointer;
    appearance: none;
}

.faq-checkbox::before {
    content: "∨";
    position: absolute;
    top: 20%;
    left: 36%;
    font-size: 1.2rem;
}

.faq-checkbox:checked {
    background-color: rgb(245, 124, 0);
    border-color: rgb(245, 124, 0);
    color: rgb(255, 255, 255);
}
</style>