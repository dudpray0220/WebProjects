
<template>
    <main>
        <div>
            <div class="reservation-panel">
                <div class="reservation-title-div">
                    <h2>회의 예약</h2>
                    <p>회의를 시작하시려면 회의 예약을 통하여 진행이 가능합니다.</p>
                </div>
                <form action="reservation-form">
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
                    <ul>
                        <li>
                            <p>시작 시간</p>
                            <input type="date" name="" id="">
                            <input type="time" name="" id="">
                        </li>
                        <li>
                            <p>종료 시간</p>
                            <input type="date" name="" id="">
                            <input type="time" name="" id="">
                        </li>
                    </ul>
                    <button>상세 설정</button>
                    <ul>
                        <li>
                            <p>입장 후 툴바 표시 시간 설정</p>
                            <select name="" id=""></select>
                        </li>
                        <li>
                            <p>회의 중 툴바 표시 시간 설정</p>
                            <select name="" id=""></select>
                        </li>
                        <li>
                            <p>회의 입장 인원 제한</p>
                            <input type="number" name="" id="">
                        </li>
                    </ul>
                    <div>
                        <strong>툴바 UI <span>회의 시 툴바 버튼 표시를 설정</span></strong>
                        <ul>
                            <li>
                                <p>카메라</p>
                                <input type="checkbox" name="" id="">
                            </li>
                            <li>
                                <p>마이크</p>
                                <input type="checkbox" name="" id="">
                            </li>
                            <li>
                                <p>채팅</p>
                                <input type="checkbox" name="" id="">
                            </li>
                            <li>
                                <p>화면공유</p>
                                <input type="checkbox" name="" id="">
                            </li>
                            <li>
                                <p>참가자</p>
                                <input type="checkbox" name="" id="">
                            </li>
                            <li>
                                <p>말하기 요청</p>
                                <input type="checkbox" name="" id="">
                            </li>
                            <li>
                                <p>타일뷰</p>
                                <input type="checkbox" name="" id="">
                            </li>
                            <li>
                                <p>설정</p>
                                <input type="checkbox" name="" id="">
                            </li>
                        </ul>
                    </div>
                    <button class="cf-button-orange">예약하기</button>
                    <button class="cf-button-white cf-button-black">취소</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "ReservationView"
}
</script>

<style>
@import url('../css/commonStyle.css');
</style>