
<template>
    <main class="reservation-main">
        <div class="reservation-entire-panel">
            <div class="reservation-panel">
                <div class="reservation-title-div">
                    <h2>회의 예약</h2>
                    <p>회의를 시작하시려면 회의 예약을 통하여 진행이 가능합니다.</p>
                </div>
                <form action="" class="reservation-form">
                    <div class="panel-input-div">
                        <input class="panel-input" type="text" name="" id="reservation-name">
                        <label class="panel-input-label" for="reservation-name">회의명 <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div">
                        <input class="panel-input" type="email" name="" id="reservation-description">
                        <label class="panel-input-label" for="reservation-description">설명을 입력하세요. <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <ul class="reservation-set-ul">
                        <li class="reservation-set-lis">
                            <p>시작 시간</p>
                            <input class="reservation-input" type="date" v-model="currentDate">
                            <input class="reservation-input" type="time" v-model="currentTime">
                        </li>
                        <li class="reservation-set-lis">
                            <p>종료 시간</p>
                            <input class="reservation-input" type="date" v-model="currentDate">
                            <input class="reservation-input" type="time" v-model="currentTime">
                        </li>
                    </ul>
                    <button type="button" class="detail-set-button" @click="toggleDetail">상세 설정</button>
                    <ul v-if="detailToggleValue" class="detail-set-ul">
                        <li class="detail-set-lis">
                            <p>입장 후 툴바 표시 시간 설정</p>
                            <select class="detail-set-item" name="" id="">
                                <option value="20000">20,000(ms)</option>
                                <option value="40000">40,000(ms)</option>
                            </select>
                        </li>
                        <li class="detail-set-lis">
                            <p>회의 중 툴바 표시 시간 설정</p>
                            <select class="detail-set-item" name="" id="">
                                <option value="4000">4,000(ms)</option>
                                <option value="2000">2,000(ms)</option>
                            </select>
                        </li>
                        <li class="detail-set-lis">
                            <p>회의 입장 인원 제한</p>
                            <input class="detail-set-item" type="number" value="20">
                        </li>
                    </ul>
                    <div v-if="detailToggleValue" class="toolbar-div">
                        <strong>툴바 UI <span>회의 시 툴바 버튼 표시를 설정</span></strong>
                        <ul class="toolbar-div-ul">
                            <li>
                                <p>카메라</p>
                                <input type="checkbox" checked name="" id="">
                            </li>
                            <li>
                                <p>마이크</p>
                                <input type="checkbox" checked name="" id="">
                            </li>
                            <li>
                                <p>채팅</p>
                                <input type="checkbox" checked name="" id="">
                            </li>
                            <li>
                                <p>화면공유</p>
                                <input type="checkbox" checked name="" id="">
                            </li>
                            <li>
                                <p>참가자</p>
                                <input type="checkbox" checked name="" id="">
                            </li>
                            <li>
                                <p>말하기 요청</p>
                                <input type="checkbox" checked name="" id="">
                            </li>
                            <li>
                                <p>타일뷰</p>
                                <input type="checkbox" checked name="" id="">
                            </li>
                            <li>
                                <p>설정</p>
                                <input type="checkbox" checked name="" id="">
                            </li>
                        </ul>
                    </div>
                    <button class="cf-button-orange reservation-button">예약하기</button>
                    <button class="cf-button-white cf-button-black">취소</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "ReservationView",
    data() {
        return {
            currentDate: '',
            currentTime: '',
            detailToggleValue: true,
        }
    },
    created() {
        // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오기
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const date = String(today.getDate()).padStart(2, '0'); // 한 자리수의 경우 앞에 0을 붙임
        this.currentDate = `${year}-${month}-${date}`;

        // 현재 시간을 HH:MM 형식으로 가져오기
        const hours = String(today.getHours()).padStart(2, '0')
        const minutes = String(today.getMinutes()).padStart(2, '0')
        this.currentTime = `${hours}:${minutes}`;
    },
    methods: {
        toggleDetail() {
            this.detailToggleValue = !this.detailToggleValue;
        }
    }
}
</script>

<style>
@import url('../css/commonStyle.css');

.reservation-entire-panel {
    width: 100%;
    height: 100%;
    background: rgb(250, 250, 250);
    padding: 1.5rem 0 2rem;
}

.reservation-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
}

.reservation-title-div {
    margin: 2rem 0 1.5rem;
    text-align: center;
}

.reservation-title-div h2 {
    font-size: 2rem;
    padding-bottom: 1rem;
}

.reservation-title-div p {
    font-size: 1rem;
}

.reservation-form {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 1rem 0 2rem;
}

.reservation-form .panel-input-div {
    margin-bottom: 1.3rem;
}

.reservation-set-ul {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}

.reservation-set-lis {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
}

.reservation-set-lis p {
    font-size: 0.9rem;
    width: 35%;
}

.reservation-input {
    width: 100%;
    border: 1px solid rgb(229, 229, 229);
    border-radius: 4px;
    padding: 0.7rem;
    color: rgb(121, 121, 121);
    cursor: pointer;
}

.detail-set-button {
    border: none;
    background-color: inherit;
    font-size: 1rem;
    margin: 1rem 0;
}

.detail-set-button:hover {
    color: rgb(235, 95, 7);
    cursor: pointer;
}

.detail-set-ul {
    display: flex;
    flex-direction: column;
}

.detail-set-lis {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 0.5rem;
    margin-bottom: 1rem;
}

.detail-set-lis p {
    width: 35%;
    color: rgb(51, 51, 51);
    font-size: 0.9rem;
}

.detail-set-item {
    width: 100%;
    border: 1px solid rgb(229, 229, 229);
    border-radius: 4px;
    padding: 0.625rem;
    font-size: 0.875rem;
    color: rgb(121, 121, 121);
    cursor: pointer;
    flex: 1 1 0%;
}

.toolbar-div {
    margin: 1rem 0;
}

.toolbar-div strong {
    display: block;
    font-weight: 500;
    margin-bottom: 1.25rem;
}

.toolbar-div strong span {
    font-weight: 400;
    font-size: 0.75rem;
    color: rgb(121, 121, 121);
}

.toolbar-div-ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    color: rgb(51, 51, 51);
    font-size: 0.9rem;
    text-align: center;
}

.toolbar-div-ul li p {
    margin-bottom: 1rem;
}

.reservation-button {
    margin: 1rem 0;
}
</style>