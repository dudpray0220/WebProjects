<template>
    <main>
        <div class="settings-entire-div">
            <div class="settings-title-div">
                <h2>
                    장치 탭에서 보여지는 열 설정
                </h2>
            </div>
            <div class="table-setting-panel-div">
                <form class="table-setting-form">
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="user-role">유저 역할</lable>
                        <div class="select-container">
                            <select id="user-role" class="form-control">
                                <option value="number:2" selected="selected">Admin</option>
                                <option value="number:3">User</option>
                                <option value="number:100">Observer</option>
                            </select>
                        </div>
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="status">상태</lable>
                        <input type="checkbox" id="status">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="last-online-date">마지막 온라인 날짜</lable>
                        <input type="checkbox" id="last-online-date">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="device-number">장치번호</lable>
                        <input type="checkbox" id="device-number">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="imei">모바일기기 식별코드</lable>
                        <input type="checkbox" id="imei">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="phone-model">휴대폰 모델</lable>
                        <input type="checkbox" id="phone-model">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="permission-status">권한상태</lable>
                        <input type="checkbox" id="permission-status">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="install-status">설치상태</lable>
                        <input type="checkbox" id="install-status">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="file-status">파일상태</lable>
                        <input type="checkbox" id="file-status">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="configuration">구성</lable>
                        <input type="checkbox" id="configuration">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="description">설명</lable>
                        <input type="checkbox" id="description">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="group">그룹</lable>
                        <input type="checkbox" id="group">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="launcher-version">앱 런처 버전</lable>
                        <input type="checkbox" id="launcher-version">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="battery-level">배터리</lable>
                        <input type="checkbox" id="battery-level">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="mdm-mode">MDM 모드</lable>
                        <input type="checkbox" id="mdm-mode">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="kiosk-mode">키오스크 모드</lable>
                        <input type="checkbox" id="kiosk-mode">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="android-version">안드로이드 버전</lable>
                        <input type="checkbox" id="android-version">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="enrollment-date">등록날짜</lable>
                        <input type="checkbox" id="enrollment-date">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="serial-number">시리얼 번호</lable>
                        <input type="checkbox" id="serial-number">
                    </div>
                    <div class="table-set-input-div">
                        <lable class="table-set-label" for="IP address">IP 주소</lable>
                        <input type="checkbox" id="IP address">
                    </div>
                    <div class="table-set-input-div table-set-save-div">
                        <button-component :buttonText="'저장'"></button-component>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    name: 'DeviceTableSettingView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.table-setting-panel-div {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.table-set-input-div {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.table-set-input-div.table-set-save-div {
    justify-content: center;
}

.table-set-input-div>input {
    width: 30px;
    height: 30px;
    margin-left: 1rem;
}

.table-set-label {
    font-size: 1rem;
    font-weight: 600;
    margin-right: 6rem;
    width: 150px;
    text-align: right;
}

.table-setting-form {
    width: 70%;
}
</style>
