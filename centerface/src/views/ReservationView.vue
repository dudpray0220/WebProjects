
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
                        <input class="panel-input" type="text" name="" id="reservation-name" v-model="roomName">
                        <label class="panel-input-label" for="reservation-name" :class="{ inputActive: roomName }">회의명
                            <span class="input-alert-label">(필수)</span></label>
                    </div>
                    <div class="panel-input-div">
                        <input class="panel-input" type="email" name="" id="reservation-description" v-model="roomContents">
                        <label class="panel-input-label" for="reservation-description"
                            :class="{ inputActive: roomContents }">설명을 입력하세요. <span
                                class="input-alert-label">(필수)</span></label>
                    </div>
                    <ul class="reservation-set-ul">
                        <li class="reservation-set-lis">
                            <p>시작 시간</p>
                            <input class="reservation-input" type="date" v-model="startDate">
                            <input class="reservation-input" type="time" v-model="startTime">
                        </li>
                        <li class="reservation-set-lis">
                            <p>종료 시간</p>
                            <input class="reservation-input" type="date" v-model="endDate">
                            <input class="reservation-input" type="time" v-model="endTime">
                        </li>
                    </ul>
                    <button type="button" class="detail-set-button" @click="toggleDetail">상세 설정</button>
                    <ul v-if="detailToggleValue" class="detail-set-ul">
                        <li class="detail-set-lis">
                            <p>입장 후 툴바 표시 시간 설정</p>
                            <select class="detail-set-item" name="toolbarInitialTimeOut"
                                v-model="roomOption.option.toolbarInitialTimeOut">
                                <option value="20000">20,000(ms)</option>
                                <option value="40000">40,000(ms)</option>
                            </select>
                        </li>
                        <li class="detail-set-lis">
                            <p>회의 중 툴바 표시 시간 설정</p>
                            <select class="detail-set-item" name="toolbarTimeout"
                                v-model="roomOption.option.toolbarTimeout">
                                <option value="4000">4,000(ms)</option>
                                <option value="2000">2,000(ms)</option>
                            </select>
                        </li>
                        <li class="detail-set-lis">
                            <p>회의 입장 인원 제한</p>
                            <input class="detail-set-item" type="number" name="limitParticipantCount"
                                v-model="roomOption.option.limitParticipantCount">
                        </li>
                    </ul>
                    <div v-if="detailToggleValue" class="toolbar-div">
                        <strong>툴바 UI <span>회의 시 툴바 버튼 표시를 설정</span></strong>
                        <ul class="toolbar-div-ul">
                            <li>
                                <p>카메라</p>
                                <input type="checkbox" :checked="roomOption.toolbar.includes('camera')"
                                    @change="toggleToolbarOption('camera')" name="camera">
                            </li>
                            <li>
                                <p>마이크</p>
                                <input type="checkbox" :checked="roomOption.toolbar.includes('microphone')"
                                    @change="toggleToolbarOption('microphone')" name="microphone">
                            </li>
                            <li>
                                <p>채팅</p>
                                <input type="checkbox" :checked="roomOption.toolbar.includes('chat')"
                                    @change="toggleToolbarOption('chat')" name="chat">
                            </li>
                            <li>
                                <p>화면공유</p>
                                <input type="checkbox" :checked="roomOption.toolbar.includes('desktop')"
                                    @change="toggleToolbarOption('desktop')" name="desktop">
                            </li>
                            <li>
                                <p>참가자</p>
                                <input type="checkbox" :checked="roomOption.toolbar.includes('participants-pane')"
                                    @change="toggleToolbarOption('participants-pane')" name="participants-pane">
                            </li>
                            <li>
                                <p>말하기 요청</p>
                                <input type="checkbox" :checked="roomOption.toolbar.includes('raisehand')"
                                    @change="toggleToolbarOption('raisehand')" name="raisehand">
                            </li>
                            <li>
                                <p>타일뷰</p>
                                <input type="checkbox" :checked="roomOption.toolbar.includes('tileview')"
                                    @change="toggleToolbarOption('tileview')" name="tileview">
                            </li>
                            <li>
                                <p>설정</p>
                                <input type="checkbox" :checked="roomOption.toolbar.includes('settings')"
                                    @change="toggleToolbarOption('settings')" name="settings">
                            </li>
                        </ul>
                    </div>
                    <button type="button" class="cf-button-orange reservation-button"
                        @click.prevent="createRoom">예약하기</button>
                    <button class="cf-button-white cf-button-black" @click="navigateToRouter">취소</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import { createRoomApi } from '../api/index'
export default {
    name: "ReservationView",
    data() {
        return {
            startDate: '',
            startTime: '',
            startDateTime: '',
            endDate: '',
            endTime: '',
            endDateTime: '',
            detailToggleValue: true,
            roomName: '',
            roomContents: '',
            roomOption: {
                option: {
                    toolbarInitialTimeOut: '20000',
                    toolbarTimeout: '4000',
                    toolbarAlwaysVisible: false,
                    toolbarautoHideWhileChatIsOpen: false,
                    disableModeratorIndicator: true,
                    startWithAudioMuted: true,
                    startWithVideoMuted: true,
                    limitParticipantCount: 20,
                    setTileView: true,
                    hideConferenceTimer: true
                },
                toolbar: ["camera", "microphone", "chat", "fullscreen", "desktop", "participants-pane", "raisehand", "tileview", "settings"]
            }
        }
    },
    // 기본값 오늘로 설정 (바뀔때는 v-model로 데이터에 저장)
    created() {
        // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오기
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const date = String(today.getDate()).padStart(2, '0'); // 한 자리수의 경우 앞에 0을 붙임
        this.startDate = `${year}-${month}-${date}`;
        this.endDate = `${year}-${month}-${date}`;

        // 현재 시간을 HH:MM 형식으로 가져오기
        const hours = String(today.getHours()).padStart(2, '0')
        const minutes = String(today.getMinutes()).padStart(2, '0')
        const seconds = String(today.getSeconds()).padStart(2, '0')
        this.startTime = `${hours}:${minutes}:${seconds}`;
        this.endTime = `${hours}:${minutes}:${seconds}`;
    },
    methods: {
        toggleDetail() {
            this.detailToggleValue = !this.detailToggleValue;
        },
        navigateToRouter() {
            this.$router.push('/main')
        },
        toggleToolbarOption(option) {
            let index = this.roomOption.toolbar.indexOf(option);
            if (index > -1) {
                // 있다면 삭제
                this.roomOption.toolbar.splice(index, 1);
            } else {
                this.roomOption.toolbar.push(option);
            }
        },
        async createRoom() {
            try {
                this.startDateTime = `${this.startDate} ${this.startTime}`
                this.endDateTime = `${this.endDate} ${this.endTime}`
                let roomOptionString = JSON.stringify(this.roomOption);

                let response = await createRoomApi(this.$store.state.userId, this.$store.state.userToken, this.startDateTime, this.endDateTime, this.roomName, roomOptionString, this.$store.state.roomPwd, this.roomContents);
                if (response.data.RETURN_ISSUCESS) {
                    alert('회의 예약 성공');
                    this.$router.push('list');
                } else {
                    alert('회의 예약 실패');
                }
            } catch (error) {
                console.log(error);
            }
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

/* =============== MEDIA QUERIES ======= */

@media screen and (max-width: 576px) {
    .reservation-title-div h2 {
        font-size: 1.7rem;
    }

    .reservation-title-div p {
        padding-bottom: 1rem;
        font-size: 0.8rem;
    }

    .detail-set-lis p {
        width: 50%;
        color: rgb(51, 51, 51);
        font-size: 0.8rem;
    }
}
</style>