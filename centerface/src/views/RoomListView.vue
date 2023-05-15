<template>
    <main class="list-main">
        <div class="list-entire-div">
            <div class="list-panel-div">
                <div class="list-panel-title-div">
                    <h2>회의 목록</h2>
                </div>
                <div class="list-panel-button-div">
                    <button class="list-panel-button" :class="{ active: topButtonValue }" @click="topButton1Toggle">내가 만든
                        방</button>
                    <button class=" list-panel-button" :class="{ active: !topButtonValue }" @click="topButton2Toggle">초대 받은
                        방</button>
                </div>
                <table class="list-panel-table">
                    <colgroup>
                        <col style="width: 5%">
                        <col style="width: 17%">
                        <col style="width: 35%">
                        <col style="width: 35%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th class="list-panel-th">번호</th>
                            <th class="list-panel-th">회의명</th>
                            <th class="list-panel-th">일시</th>
                            <!-- 버튼을 넣기 위한 빈칸 -->
                            <th class="list-panel-th"></th>
                        </tr>
                    </thead>
                    <tbody v-if="topButtonValue" class="list-panel-tbody">
                        <tr v-for="(     room, index     ) in      roomList     " :key="index">
                            <td class="list-panel-td">{{ room.index }}</td>
                            <td class="list-panel-td">{{ room.title }}</td>
                            <td class="list-panel-td">{{ room.date }}</td>
                            <td class="list-panel-td">
                                <div class="room-control-button-div">
                                    <button class="room-control-button">시작</button>
                                    <button class="room-control-button" @click="toggleInvite">초대</button>
                                    <button class="room-control-button" @click="editRoom">편집</button>
                                    <button class="room-control-button">삭제</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="!topButtonValue" class="list-panel-tbody">
                        <tr v-for="(     room, index     ) in      inviteRoomList     " :key="index">
                            <td class="list-panel-td">{{ room.index }}</td>
                            <td class="list-panel-td">{{ room.title }}</td>
                            <td class="list-panel-td">{{ room.date }}</td>
                            <td class="list-panel-td">
                                <div class="room-control-button-div">
                                    <button class="room-control-button">참여하기</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button class="new-room-button" @click="navigateToRoute">새 회의</button>
                <div class="invite-bg" v-if="inviteToggleValue">
                    <form class="invite-panel">
                        <h2>회의 초대</h2>
                        <div class="panel-input-div invite-panel-div">
                            <input class="panel-input" type="text" id="invite-user" v-model="inviteUserName">
                            <label class="panel-input-label" for="invite-user" :class="{ inputActive: inviteUserName }">초대할
                                아이디 <span class="input-alert-label">(필수)</span></label>
                        </div>
                        <div class="invite-button-div">
                            <button class="cf-button-orange">초대</button>
                            <button class="cf-button-white cf-button-black" type="button" @click="toggleInvite">취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import RoomList from '../assets/dummyData'
import InviteRoomList from '../assets/dummyInviteData'
export default {
    name: 'RoomListView',
    data() {
        return {
            roomList: RoomList,
            inviteRoomList: InviteRoomList,
            topButtonValue: true,
            inviteUserName: '',
            inviteToggleValue: false,
        }
    },
    methods: {
        topButton1Toggle() {
            if (!this.topButtonValue) {
                this.topButtonValue = !this.topButtonValue;
            }
        },
        topButton2Toggle() {
            if (this.topButtonValue) {
                this.topButtonValue = !this.topButtonValue;
            }
        },
        navigateToRoute() {
            this.$router.push('/reservation');
        },
        editRoom() {
            alert('아직 준비중인 기능입니다');
        },
        toggleInvite() {
            this.inviteToggleValue = !this.inviteToggleValue
            this.inviteUserName = '';
        }

    },
    computed: {
    },
}
</script>

<style>
@import url('../css/commonStyle.css');

.list-entire-div {
    width: 100%;
    height: 100%;
    padding: 3.5rem 0;
    background: rgb(250, 250, 250);
}

.list-panel-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1080px;
}

.list-panel-title-div {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;
}

.list-panel-button-div {
    display: flex;
    width: 25%;
}

.list-panel-button {
    width: 100%;
    border: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 0.4rem;
    font-size: 0.75rem;
    cursor: pointer;
}

.active {
    background-color: rgb(245, 124, 0);
    color: rgb(255, 255, 255);
}

.list-panel-table {
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    border-top: 2px solid rgb(51, 51, 51);
    background-color: rgb(255, 255, 255);
}

.list-panel-table thead {
    background-color: rgb(224, 224, 224);
}

.list-panel-th {
    padding: 1rem 0.5rem;
}

.list-panel-tbody tr {
    border-bottom: 1px solid rgb(224, 224, 224);
}

.list-panel-td {
    padding: 1.3rem 0.5rem;
}

.room-control-button-div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

.room-control-button {
    padding: 6px 22px;
    border: 1px solid rgb(217, 217, 217);
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    color: rgb(51, 51, 51);
    font-size: 0.8rem;
    transition: background-color 0.3s, color 0.3s;
}

.room-control-button:hover {
    background-color: rgb(245, 124, 0);
    color: rgb(255, 255, 255);
    cursor: pointer;
}

.new-room-button {
    display: block;
    width: 110px;
    border-radius: 4px;
    background-color: rgb(229, 229, 229);
    margin: 1rem 0 1rem auto;
    padding: 0.5rem 1.5rem;
    border: none;
    transition: background-color 0.3s, color 0.3s;
}

.new-room-button:hover {
    background-color: rgb(245, 124, 0);
    color: rgb(255, 255, 255);
    cursor: pointer;
}

.invite-bg {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.invite-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    row-gap: 1rem;
    border-radius: 12px;
    background-color: white;
    padding: 1.5rem 2rem;
}

.invite-panel h2 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.invite-panel-div {
    width: 100%;
}

.invite-button-div {
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
    width: 100%;
}

.invite-button-div button {
    flex: 1;
    padding: 0.7rem;
}
</style>