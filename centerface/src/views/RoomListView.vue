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
                                    <button class="room-control-button">초대</button>
                                    <button class="room-control-button">편집</button>
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
</style>