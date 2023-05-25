<template>
    <main>
        <div class="entire-div">
            <div class="search-div">
                <form class="search-form">
                    <div class="form-group">
                        <div class="group-select-div">
                            <select class="form-control">
                                <option label="All groups" value="number:-1" selected>All groups</option>
                                <!-- 그룹 API로 가져와서 추가 -->
                                <option v-for="(group, index) in groupList" :key="index" :value="group.id">{{ group.name }}
                                </option>
                            </select>
                        </div>
                        <div class="config-select-div">
                            <select class="form-control">
                                <option label="All configurations" value="number:-1" selected>All configurations</option>
                                <!-- 구성 API로 가져와서 추가 -->
                                <option v-for="(config, index) in configList" :key="index" :value="config.id">{{ config.name
                                }}</option>
                            </select>
                        </div>
                        <div class="more-param-div">
                            <p>검색 파라미터 추가</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="name-search-div">
                            <input class="form-control" type="text" placeholder="찾고자 하는 장치 이름을 입력하세요">
                        </div>
                        <div class="form-btn-div">
                            <button-component :buttonText="'검색'"></button-component>
                            <button-component :buttonText="'장치 추가'"></button-component>
                        </div>
                    </div>
                </form>

                <div class="pagination-wrapper">
                </div>

                <table class="main-table">
                    <thead class="device-thead">
                        <tr>
                            <th>
                                <input type="checkbox">
                            </th>
                            <th>
                                <span>상태</span>
                            </th>
                            <th>
                                <span>날짜</span>
                            </th>
                            <th>
                                <span>장치번호</span>
                            </th>
                            <th>
                                <span>전화번호</span>
                            </th>
                            <th>
                                <span>권한상태</span>
                            </th>
                            <th>
                                <span>설치상태</span>
                            </th>
                            <th>
                                <span>파일상태</span>
                            </th>
                            <th>
                                <span>구성</span>
                            </th>
                            <th>
                                <span>설명</span>
                            </th>
                            <th>
                                <span>그룹</span>
                            </th>
                            <th>
                                <span>앱 런처 버전</span>
                            </th>
                            <th>
                                <span>배터리</span>
                            </th>
                            <th>
                                <span>MDM 모드</span>
                            </th>
                            <th>
                                <span>키오스크 모드</span>
                            </th>
                            <th>
                                <span>안드로이드 버전</span>
                            </th>
                            <th>
                                <span>등록 날짜</span>
                            </th>
                            <th>
                                <span>시리얼 번호</span>
                            </th>
                            <th>
                                <span>IP 주소</span>
                            </th>
                            <th>
                                <span>Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- API로 장치 데이터 불러와서 v-for로 반복 -->
                        <tr v-for="(device, index) in deviceList" :key="index">
                            <td>
                                <input type="checkbox">
                            </td>
                            <td>{{ device.statusCode }}</td>
                            <td>{{ device.lastUpdate }}</td>
                            <td>{{ device.info.deviceId }}</td>
                            <td>{{ device.serial }}</td>
                            <td>{{ device.info.model }}</td>
                            <!-- status 3개 수정할 것 -->
                            <td>{{ device.statusCode }}</td>
                            <td>{{ device.statusCode }}</td>
                            <td>{{ device.statusCode }}</td>

                            <td>{{ device.configurationId }}</td>
                            <td>{{ device.groups.name }}</td>
                            <td>{{ device.launcherVersion }}</td>
                            <td>{{ device.info.batteryLevel }}</td>
                            <td>{{ device.info.mdmMode }}</td>
                            <td>{{ device.info.kioskMode }}</td>
                            <td>{{ device.info.androidVersion }}</td>
                            <td>{{ device.enrollTime }}</td>
                            <td>{{ device.serial }}</td>
                            <td>{{ device.publicIp }}</td>
                            <td>
                                <!-- 수정 아이콘들 -->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<script>
import { searchGroupApi, searchConfigApi, searchDeviceApi } from '@/api/api';
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    name: 'DevicesView',
    data() {
        return {
            groupList: [],
            configList: [],
            deviceList: []
        }
    },
    components: {
        ButtonComponent,
    },
    async mounted() {
        try {
            const response = await searchGroupApi(this.$store.state.userToken);
            const configResponse = await searchConfigApi(this.$store.state.userToken);
            const deviceResponse = await searchDeviceApi(this.$store.state.userToken);

            if (response.data.status === "OK" && configResponse.data.status === "OK") {
                this.groupList = response.data.data;
                this.configList = configResponse.data.data;
                this.deviceList = deviceResponse.data.data.devices.items;

                console.log(response.data)
                console.log(configResponse.data)
                console.log(this.deviceList)
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style>
@import url('../css/commonStyle.css');

.entire-div {
    padding: 2rem 0px 0px 1rem;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
}

.group-select-div,
.config-select-div,
.more-param-div {
    flex: 3;
}

.name-search-div {
    flex: 2;
}

.group-select-div select,
.config-select-div select,
.name-search-div input {
    width: 100%;
    box-sizing: border-box;
}

.form-btn-div {
    flex: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-btn-div {
    padding-right: 2rem;
}

.device-thead {
    font-size: 0.8rem;
}
</style>